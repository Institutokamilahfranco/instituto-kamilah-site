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
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;
            n.push=n;
            n.loaded=!0;
            n.version='2.0';
            n.queue=[];
            t=b.createElement(e);
            t.async=!0;
            t.src=v;
            s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)
            }(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');

            fbq('init', '1426196192371792');
            fbq('track', 'PageView');
          `}
        </Script>
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
