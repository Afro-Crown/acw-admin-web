"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/molecules/Footer/footer";
import Header from "@/components/molecules/Header/header";
import Link from "next/link";

const sections = [
  { id: "section1", title: "1. Definições" },
  { id: "section2", title: "2. Registro e Conta do Usuário" },
  { id: "section3", title: "3. Coleta e Uso de Dados" },
  { id: "section4", title: "4. Consentimento do Usuário" },
  { id: "section5", title: "5. Segurança dos Dados" },
  { id: "section6", title: "6. Direitos dos Usuários" },
  { id: "section7", title: "7. Uso Aceitável e Restrições" },
  { id: "section8", title: "8. Alterações dos Termos" },
  { id: "section9", title: "9. Resolução de Disputas e Jurisdição" },
  { id: "section10", title: "10. Contato" },
];

export default function TermsOfUse() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.7 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section.id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div>
      <Header></Header>
      <main className="flex w-full h-full justify-center gap-24 p-28">
        <div className="flex flex-col w-[35rem] gap-4">
          <section id="section1" className="flex flex-col justify-center gap-10">
            <h1 className="font-semibold text-2xl">TERMOS DE USO E POLÍTICA DE PRIVACIDADE DA
              PLATAFORMA AFRO CROWN </h1>
            <p>
              <span className="font-semibold">Última Atualização:</span> 11 de fevereiro de 2025<br></br><br></br>
              Bem-vindo ao Afro Crown! Ao utilizar nosso aplicativo, você concorda integralmente
              com os termos e condições estabelecidos neste documento. Recomendamos que leia
              atentamente para compreender nossos procedimentos e políticas.
            </p>
          </section>
          <section id="section2">
            <h2 className="font-semibold text-xl">1. Definições </h2>
            <ul className="list-disc pl-10">
              <li><span className="font-semibold">Afro Crown:</span> Plataforma digital para agendamento de serviços de beleza
                especializados, conectando clientes a salões cadastrados. </li>
              <li><span className="font-semibold">Usuário:</span> Pessoa física ou jurídica que utiliza a plataforma, seja como cliente ou
                salão de beleza. </li>
              <li><span className="font-semibold">Dados Pessoais:</span> Informações relacionadas a uma pessoa física identificada ou
                identificável. </li>
            </ul>
          </section>
          <section id="section3" className="flex flex-col gap-2">
            <h2 className="font-semibold text-xl">2. Registro e Conta do Usuário </h2>
            <p>
              2.1 O uso da plataforma requer cadastro com criação de conta. Apenas pessoas físicas ou
              jurídicas com capacidade legal podem criar uma conta.<br></br><br></br>
              2.2 O registro exige fornecimento de nome completo, e-mail válido e senha. O usuário
              deve garantir que as informações estejam atualizadas e acessíveis.<br></br><br></br>
              2.3 O Afro Crown pode excluir contas inativas ou que contenham informações incorretas,
              impossibilitando a verificação.<br></br><br></br>
              2.4 O usuário é responsável por garantir a segurança de sua conta e por qualquer ação
              realizada com suas credenciais.
            </p>
          </section>
          <section id="section4" className="flex flex-col gap-2">
            <h2 className="font-semibold text-xl">3. Coleta e Uso de Dados </h2>
            <p className="font-semibold">3.1 Dados Coletados: </p>
            <ul className="list-disc pl-10">
              <li><span className="font-semibold">Para salões:</span> Nome do salão, nome do proprietário, e-mail, fotos dos serviços,
                endereço, telefone, CNPJ, senha.</li>
              <li><span className="font-semibold">Para clientes:</span> Nome, e-mail, senha, foto do perfil, localização (com
                consentimento).</li>
            </ul>
            <p className="font-semibold">3.2 Finalidade: </p>
            <ul className="list-disc pl-10">
              <li>Agendamento e gestão de serviços.</li>
              <li>Personalização do perfil.</li>
              <li>Melhoria da experiência do usuário.</li>
              <li>Segurança e prevenção de fraudes.</li>
            </ul>
            <p className="font-semibold">3.3 Compartilhamento de Dados: </p>
            <ul className="list-disc pl-10">
              <li>Os dados dos clientes são compartilhados apenas com salões cadastrados.</li>
              <li>Os dados dos salões são compartilhados com clientes para facilitação da busca e
                agendamento.</li>
            </ul>
          </section>
          <section id="section5" className="flex flex-col gap-2">
            <h2 className="font-semibold text-xl">4. Consentimento do Usuário </h2>
            <p>
              4.1 O consentimento é solicitado durante o cadastro.<br></br><br></br>
              4.2 O usuário pode revogar o consentimento a qualquer momento, podendo resultar na
              limitação de funcionalidades do aplicativo.
            </p>
          </section>
          <section id="section6" className="flex flex-col gap-2">
            <h2 className="font-semibold text-xl">5. Segurança dos Dados </h2>
            <p>
              5.1 Aplicamos criptografia AES para proteção dos dados armazenados e transmitidos.<br></br><br></br>
              5.2 Realizamos auditorias e testes de segurança periódicos.<br></br><br></br>
              5.3 As credenciais e informações são armazenadas com protocolos avançados de
              segurança.
            </p>
          </section>
          <section id="section7" className="flex flex-col gap-2">
            <h2 className="font-semibold text-xl">6. Direitos dos Usuários </h2>
            <p>Os usuários têm os seguintes direitos:</p>
            <ul className="list-disc pl-10">
              <li><span className="font-semibold">Acesso:</span> Solicitar informações sobre seus dados pessoais processados.</li>
              <li><span className="font-semibold">Retificação:</span> Corrigir ou atualizar informações incorretas.</li>
              <li><span className="font-semibold">Exclusão:</span> Solicitar a remoção de seus dados, salvo obrigações legais.</li>
              <li><span className="font-semibold">Portabilidade:</span> Requerer transferência de seus dados para outro serviço.</li>
            </ul>
          </section>
          <section id="section8" className="flex flex-col gap-2">
            <h2 className="font-semibold text-xl">7. Uso Aceitável e Restrições </h2>
            <p>7.1 O usuário não pode:</p>
            <ul className="list-disc pl-10">
              <li>Utilizar a plataforma para fins ilegais.</li>
              <li>Publicar conteúdo ofensivo, difamatório, racista ou pornográfico.</li>
              <li>Compartilhar credenciais de acesso.</li>
            </ul>
            <p>7.2 A Afro Crown se reserva o direito de suspender ou encerrar contas que violem estas
              diretrizes.</p>
          </section>
          <section id="section9">
            <h2 className="font-semibold text-xl">8. Alterações dos Termos </h2>
            <p>8.1 A Afro Crown pode modificar estes termos conforme necessidade. As alterações serão
              comunicadas aos usuários por e-mail e na própria plataforma.</p>
          </section>
          <section id="section10">
            <h2 className="font-semibold text-xl">9. Resolução de Disputas e Jurisdição </h2>
            <p>
              9.1 Todas as relações jurídicas entre usuários e Afro Crown serão regidas pela legislação
              brasileira.<br></br><br></br>
              9.2 O foro competente para resolver disputas será o da sede da Afro Crown, em Campinas
              SP.<br></br><br></br>
              9.3 Antes de recorrer ao Judiciário, as partes devem buscar resolução através de mediação
              extrajudicial. Caso não haja acordo, as partes poderão recorrer à arbitragem ou à Justiça.<br></br><br></br>
              9.4 Se alguma disposição destes Termos for considerada inválida, as demais
              permanecerão em vigor.
            </p>
          </section>
          <section id="section11">
            <h2 className="font-semibold text-xl">10. Contato </h2>
            <p>Para dúvidas ou solicitações referentes a este documento, entre em contato pelo e-mail: <Link className="text-blue-700  underline" href="mailto:suporte@afrocrown.com.br">suporte@afrocrown.com.br</Link>.</p>
          </section>
        </div>
        <nav className="flex flex-col w-[25rem] h-[35rem] gap-3 sticky top-24">
          <p className="font-light">Navegue pelo índice:</p>
          <div className="flex flex-col gap-3 w-full h-full p-8 bg-[#FFF5EA]">
            <h2 className="flex justify-center text-2xl m-3">Índice</h2>
            <p className="font-medium text-xl">Termos gerais</p>
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className={activeSection === section.id ? "underline" : ""}
              >
                {section.title}
              </a>
            ))}
          </div>
        </nav>
      </main>
      <Footer></Footer>
    </div>
  );
}