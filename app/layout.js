export const metadata = {
  title:
    "Instituto Kamilah Franco | Desenvolvimento Emocional Feminino",

  description:
    "O Instituto Kamilah Franco é um espaço de acolhimento, fortalecimento emocional e transformação feminina. Processos terapêuticos estratégicos para mulheres que desejam romper padrões de autossabotagem e desenvolver clareza, posicionamento e segurança emocional.",

  keywords: [
    "terapia feminina",
    "desenvolvimento emocional",
    "autossabotagem feminina",
    "fortalecimento emocional",
    "instituto terapêutico",
    "clareza emocional",
    "terapia online",
    "desenvolvimento pessoal feminino",
    "Kamilah Franco",
  ],

  authors: [{ name: "Instituto Kamilah Franco" }],

  creator: "Instituto Kamilah Franco",

  openGraph: {
    title:
      "Instituto Kamilah Franco | Desenvolvimento Emocional Feminino",

    description:
      "Acolhimento emocional, fortalecimento interno e transformação feminina.",

    url: "https://institutokamilahfranco.com.br",

    siteName: "Instituto Kamilah Franco",

    images: [
      {
        url: "/logo.jpeg",
        width: 1200,
        height: 630,
        alt: "Instituto Kamilah Franco",
      },
    ],

    locale: "pt_BR",
    type: "website",
  },

  icons: {
    icon: "/favicon.ico",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
