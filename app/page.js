# Novo conteúdo para `app/page.js`

Copie TODO este código e substitua o conteúdo atual do arquivo `app/page.js`.

```javascript
"use client"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#fdf8f6",
        color: "#4b3a37",
        overflowX: "hidden",
      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 20px",
          background:
            "linear-gradient(180deg, #fdf8f6 0%, #f5ebe7 100%)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "50px",
            alignItems: "center",
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <p
              style={{
                color: "#8c5e58",
                fontWeight: "bold",
                letterSpacing: "2px",
                marginBottom: "20px",
              }}
            >
              TERAPIA • CURA EMOCIONAL • TRANSFORMAÇÃO FEMININA
            </p>

            <h1
              style={{
                fontSize: "60px",
                lineHeight: "1.1",
                marginBottom: "25px",
              }}
            >
              Instituto
              <br />
              Kamilah Franco
            </h1>

            <p
              style={{
                fontSize: "22px",
                lineHeight: "1.8",
                marginBottom: "35px",
              }}
            >
              Um espaço terapêutico criado para mulheres que desejam
              romper padrões emocionais, superar a autosabotagem,
              fortalecer a autoestima e viver com mais leveza,
              merecimento e conexão consigo mesmas.
            </p>

            <div
              style={{
                display: "flex",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >
              <a
                href="https://wa.me/5546988042216"
                target="_blank"
                style={{
                  backgroundColor: "#8c5e58",
                  color: "white",
                  padding: "16px 32px",
                  borderRadius: "14px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                Agendar Sessão
              </a>

              <a
                href="#sobre"
                style={{
                  border: "2px solid #8c5e58",
                  color: "#8c5e58",
                  padding: "16px 32px",
                  borderRadius: "14px",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                Conhecer o Instituto
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            style={{ textAlign: "center" }}
          >
            <img
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop"
              alt="Terapia feminina"
              style={{
                width: "100%",
                maxWidth: "500px",
                borderRadius: "30px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.15)",
                objectFit: "cover",
              }}
            />
          </motion.div>
        </div>
      </section>

      {/* SOBRE */}
      <section
        id="sobre"
        style={{
          padding: "100px 20px",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "50px",
            alignItems: "center",
          }}
        >
          <div>
            <img
              src="https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop"
              alt="Mulher em transformação"
              style={{
                width: "100%",
                borderRadius: "25px",
                objectFit: "cover",
              }}
            />
          </div>

          <div>
            <h2
              style={{
                fontSize: "46px",
                marginBottom: "30px",
              }}
            >
              Um acolhimento profundo para mulheres
            </h2>

            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.9",
                marginBottom: "20px",
              }}
            >
              O Instituto Kamilah Franco nasceu com o propósito de
              auxiliar mulheres a compreenderem suas dores emocionais,
              romperem ciclos repetitivos e reconstruírem sua relação
              consigo mesmas.
            </p>

            <p
              style={{
                fontSize: "20px",
                lineHeight: "1.9",
              }}
            >
              Aqui você encontra um atendimento humanizado,
              acolhedor e profundo, voltado para autoestima,
              autosabotagem, emocional feminino, merecimento,
              relacionamentos e expansão pessoal.
            </p>
          </div>
        </div>
      </section>

      {/* ÁREAS */}
      <section
        style={{
          padding: "100px 20px",
          backgroundColor: "#f6ebe7",
        }}
      >
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "46px",
              marginBottom: "70px",
            }}
          >
            Áreas trabalhadas no processo terapêutico
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "25px",
            }}
          >
            {[
              {
                titulo: "Autosabotagem Feminina",
                texto:
                  "Identificação e liberação de padrões emocionais que impedem o crescimento pessoal.",
              },
              {
                titulo: "Autoestima e Merecimento",
                texto:
                  "Fortalecimento emocional e reconstrução da relação consigo mesma.",
              },
              {
                titulo: "Relacionamentos",
                texto:
                  "Compreensão de padrões afetivos, dependência emocional e bloqueios emocionais.",
              },
              {
                titulo: "Emocional Feminino",
                texto:
                  "Reconexão com sua essência, sensibilidade e força interior.",
              },
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "white",
                  padding: "35px",
                  borderRadius: "24px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.05)",
                }}
              >
                <h3
                  style={{
                    fontSize: "28px",
                    marginBottom: "18px",
                    color: "#8c5e58",
                  }}
                >
                  {item.titulo}
                </h3>

                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                  }}
                >
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FRASE */}
      <section
        style={{
          padding: "120px 20px",
          textAlign: "center",
          backgroundColor: "white",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "42px",
              lineHeight: "1.7",
              fontWeight: "normal",
            }}
          >
            “Você não precisa continuar carregando dores,
            padrões e histórias que já não pertencem à mulher
            que está se tornando.”
          </h2>
        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          padding: "100px 20px",
          background:
            "linear-gradient(180deg, #8c5e58 0%, #6f4944 100%)",
          color: "white",
          textAlign: "center",
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <h2
            style={{
              fontSize: "50px",
              marginBottom: "25px",
            }}
          >
            Seu processo de transformação pode começar agora
          </h2>

          <p
            style={{
              fontSize: "22px",
              lineHeight: "1.8",
              marginBottom: "40px",
            }}
          >
            Atendimento terapêutico on-line para mulheres de todo o Brasil.
          </p>

          <a
            href="https://wa.me/5546988042216"
            target="_blank"
            style={{
              backgroundColor: "white",
              color: "#8c5e58",
              padding: "18px 36px",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: "bold",
              fontSize: "20px",
            }}
          >
            Falar no WhatsApp
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#4b3a37",
          color: "white",
          padding: "50px 20px",
          textAlign: "center",
        }}
      >
        <h3 style={{ fontSize: "28px", marginBottom: "15px" }}>
          Instituto Kamilah Franco
        </h3>

        <p style={{ fontSize: "18px", lineHeight: "1.8" }}>
          Estrutura emocional feminina e transformação emocional.
        </p>

        <p style={{ marginTop: "20px", opacity: 0.8 }}>
          © 2026 Instituto Kamilah Franco
        </p>
      </footer>
    </main>
  )
}
```

Depois de colar:

1. Clique em `Commit changes`
2. Confirme novamente
3. Aguarde o Vercel publicar
4. Atualize o site

O visual ficará muito mais profissional, acolhedor e feminino.
