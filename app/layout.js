import Script from "next/script";

export const metadata = {
  title:
    "Instituto Kamilah Franco | Desenvolvimento emocional e autoestima feminina",

  description:
    "Atendimento terapêutico online para mulheres que desejam fortalecer a autoestima, superar a autossabotagem, desenvolver confiança e construir uma vida emocional mais equilibrada.",

  keywords: [
    "autoestima feminina",
    "autossabotagem",
    "dependência emocional",
    "ansiedade",
    "terapia online",
    "desenvolvimento emocional",
    "autoconhecimento",
    "confiança feminina",
    "terapeuta integrativa",
    "fortalecimento emocional",
  ],

  openGraph: {
    title:
      "Instituto Kamilah Franco | Desenvolvimento emocional feminino",

    description:
      "Atendimento terapêutico online para mulheres que desejam fortalecer a autoestima e transformar padrões emocionais.",

    url: "https://www.institutokamilahfranco.com.br",

    siteName: "Instituto Kamilah Franco",

    locale: "pt_BR",

    type: "website",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>
        {children}

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-63Z21L7XGT"
          strategy="afterInteractive"
        />

        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-63Z21L7XGT');
          `}
        </Script>
      </body>
    </html>
  );
}
