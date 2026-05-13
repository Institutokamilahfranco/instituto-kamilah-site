import Script from "next/script"

export const metadata = {
  title:
    "Instituto Kamilah Franco | Desenvolvimento Emocional Feminino",

  description:
    "Instituto especializado em fortalecimento emocional feminino, transformação pessoal e desenvolvimento emocional estratégico.",

  icons: {
    icon: "/favicon.ico",
  },
}

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
  )
}
