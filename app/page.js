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
              fortalecer a autoestima e viver com mais leveza.
            </p>

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
                display: "inline-block",
              }}
            >
              Agendar Sessão
            </a>
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
              }}
            />
          </motion.div>
        </div>
      </section>

      <section
        style={{
          padding: "100px 20px",
          backgroundColor: "white",
        }}
      >
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
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
            }}
          >
            O Instituto Kamilah Franco nasceu com o propósito de
            auxiliar mulheres a compreenderem suas dores emocionais,
            romperem ciclos repetitivos e reconstruírem sua relação
            consigo mesmas.
          </p>
        </div>
      </section>

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
            Áreas trabalhadas
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
              gap: "25px",
            }}
          >
            {[
              "Autosabotagem Feminina",
              "Autoestima",
              "Relacionamentos",
              "Emocional Feminino",
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "white",
                  padding: "35px",
                  borderRadius: "24px",
                }}
              >
                <h3
                  style={{
                    fontSize: "28px",
                    color: "#8c5e58",
                  }}
                >
                  {item}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

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
            “Você não precisa continuar carregando dores e padrões
            que já não pertencem à mulher que está se tornando.”
          </h2>
        </div>
      </section>

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

        <p style={{ fontSize: "18px" }}>
          Atendimento on-line para todo o Brasil
        </p>
      </footer>
    </main>
  )
}
