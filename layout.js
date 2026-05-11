export const metadata = {
  title: "Instituto Kamilah Franco",
  description: "Estrutura emocional feminina e transformação emocional.",
};

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}