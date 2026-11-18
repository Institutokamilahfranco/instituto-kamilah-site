import "./globals.css";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.institutokamilahfranco.com.br"),

  title:
    "Instituto Kamilah Franco | Constelação Familiar Sistêmica",

  description:
    "Constelação Familiar Sistêmica individual, 100% online. Um espaço para olhar padrões familiares e relacionais, reconhecer dinâmicas sistêmicas e ampliar possibilidades de solução.",

  keywords: [
    "constelação familiar",
    "constelação familiar sistêmica",
    "constelação familiar online",
    "consteladora familiar",
    "ordens do amor",
    "padrões familiares",
    "emaranhamentos sistêmicos",
    "relacionamentos familiares",
    "autoconhecimento",
    "Instituto Kamilah Franco",
  ],

  openGraph: {
    title:
      "Instituto Kamilah Franco | Constelação Familiar Sistêmica",

    description:
      "Constelação Familiar Sistêmica individual, 100% online. Compreenda padrões familiares e relacionais e amplie suas possibilidades de solução.",

    url: "https://www.institutokamilahfranco.com.br/constelacao-familiar",

    siteName: "Instituto Kamilah Franco",

    locale: "pt_BR",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title:
      "Instituto Kamilah Franco | Constelação Familiar Sistêmica",
    description:
      "Constelação Familiar Sistêmica individual, 100% online. Um olhar para os padrões familiares e relacionais.",
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
