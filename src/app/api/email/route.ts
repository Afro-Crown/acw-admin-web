import { render } from "@react-email/components";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import SMTPTransport from "nodemailer/lib/smtp-transport";

import TemplateEmail from "../templates/email";

export async function POST(request: Request) {
  const data = await request.json();

  const transporter = nodemailer.createTransport({
    host: "smtpout.secureserver.net",
    secure: true,
    secureConnection: false, // TLS requires secureConnection to be false
    tls: {
      ciphers: "SSLv3"
    },
    requireTLS: true,
    port: 465,
    debug: true,
    auth: {
      user: "preencha aqui",
      pass: "preencha aqui"
    }
  } as SMTPTransport.Options);

  const paragraphs = [
    `Olá ${data.name},`,
    `Você foi convidado para se juntar à conta da ${data.company} na plataforma.`,
    "A plataforma é uma plataforma inovadora que facilita a colaboração no varejo de bens de consumo, conectando marcas, varejistas e representantes comerciais em um ecossistema unificado. Nossa missão é impulsionar a inovação e o crescimento de todos os envolvidos.",
    "Ao ingressar na conta do seu varejo, você poderá descobrir novas marcas, comparar produtos e negociar diretamente com fornecedores. Clique no botão abaixo para ir pra tela de login e começar. Suas credenciais são:",
    `Email: ${data.email}`,
    `Senha: ${data.password}`,
    "Equipe Plataforma"
  ];

  const html = render(
    TemplateEmail({
      paragraphs,
      preview: "Convite",
      hasNotificationExplanation: false
    })
  );

  try {
    await transporter.sendMail({
      from: `plataforma`,
      to: data.email,
      replyTo: "preencha aqui",
      subject: `Sua conta para acessar a plataforma como colaborador`,
      html
    });
    return NextResponse.json({ error: null });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Não foi possível enviar o email" });
  }
}
