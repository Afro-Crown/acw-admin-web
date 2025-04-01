import * as React from "react";

import {
  Body,
  Container,
  Column,
  Head,
  Html,
  Preview,
  Row,
  Section,
  Text,
  Img,
  Button
} from "@react-email/components";

interface Temp {
  width?: number;
  preview: string;
  paragraphs: React.ReactNode[];
  hasNotificationExplanation?: boolean;
  redirectButtonData?: {
    label: string;
    href: string;
  };
}

function calculateHeight(width: number) {
  const aspectRatio = 264 / 1280;
  const height = width * aspectRatio;
  return height;
}

export const TemplateEmail = ({
  preview,
  paragraphs,
  hasNotificationExplanation = true,
  redirectButtonData = {
    label: "Ir pra login ",
    href: process.env.NEXT_PUBLIC_GLOBAL_URL + "/login"
  },
  width = 800
}: Temp) => {
  const height = calculateHeight(width);
  return (
    <Html>
      <Head />
      <Preview>{preview} </Preview>
      <Body style={{ ...main, width }}>
        <Container>
          <Img
            width={width}
            height={height}
            style={{
              objectFit: "cover",
              backgroundPosition: "right",
              borderRadius: "10px 10px 0px 0px ",
              overflow: "hidden"
            }}
            src={`https://firebasestorage.googleapis.com/v0/b/linkeme-9d029.appspot.com/o/banner-picture.png?alt=media&token=56f76499-3e7e-4a8a-bab9-137fd69aa3e3`}
            alt="Banner da Imagem"
          />

          <Section style={content}>
            <Row style={{ border: 0 }}>
              <Column>
                {paragraphs.map((item, index) => (
                  <Text key={index} style={paragraph}>
                    {item}
                  </Text>
                ))}
              </Column>
            </Row>

            {redirectButtonData && (
              <Row
                style={{
                  width: "100%",
                  marginInline: "auto",
                  marginTop: "10px"
                }}
              >
                <Button
                  href={redirectButtonData.href}
                  target="_blank"
                  style={{
                    color: "white",
                    display: "block",
                    maxWidth: "140px",
                    textAlign: "center",
                    margin: "auto",
                    backgroundColor: "#226D6A",
                    padding: "10px 15px",
                    marginBottom: "10px",
                    borderRadius: "10px",
                    fontWeight: "semibold",
                    fontStyle: "underline",
                    cursor: "pointer"
                  }}
                >
                  {redirectButtonData.label}
                </Button>
              </Row>
            )}

            {hasNotificationExplanation && (
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  maxWidth: "600px",
                  display: "block",
                  margin: "auto",
                  marginBlock: "30px",
                  paddingBottom: "16px",
                  color: "rgb(0,0,0, 0.9)"
                }}
              >
                Se você não deseja receber mais os e-mails de alerta da
                plataforma,
                <Button
                  href={process.env.NEXT_PUBLIC_GLOBAL_URL + "/configuracoes"}
                  target="_blank"
                  style={{
                    color: "#0000EE",
                    fontStyle: "underline",
                    cursor: "pointer",
                    paddingInline: "2px"
                  }}
                >
                  {" "}
                  clique aqui{"  "}
                </Button>
                e ajuste suas preferências de notificação nas configurações da
                sua conta.
              </Text>
            )}
          </Section>
        </Container>
      </Body>
    </Html>
  );
};

export default TemplateEmail;

const main = {
  backgroundColor: "#fff",
  margin: "auto",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif'
};

const paragraph = {
  fontSize: 16
};

const content = {
  border: "1px solid",
  borderTop: 0,
  borderColor: "#D3D3D3",
  borderRadius: "0px 0px 10px 10px",
  padding: "20px",
  overflow: "hidden",
  backgroundColor: "#fff"
};
