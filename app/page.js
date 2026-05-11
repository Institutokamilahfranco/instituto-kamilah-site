"use client"

import { motion } from "framer-motion"

export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial",
        backgroundColor: "#fdf8f6",
        color: "#3b2f2f",
        minHeight: "100vh",
      }}
    >
      {/* HERO */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
          background:
            "linear-gradient(180deg, #fdf8f6 0%, #f6ebe7 100%)",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          style={{
            fontSize: "52px",
            marginBottom: "20px",
            fontWeight: "bold",
          }}
        >
          Instituto Kamilah Franco
        </motion.h1>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            fontSize: "22px",
            lineHeight: "1.7",
          }}
        >
          Estrutura emocional feminina, cura da autosabotagem e
          transformação emocional profunda.
        </p>

        <a
          href="https://wa.me/5546988042216"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "35px",
            backgroundColor: "#8c5e58",
            color: "white",
            padding: "16px 32px",
            borderRadius: "12px",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Agendar Atendimento
        </a>
      </section>

      {/* SOBRE */}
      <section
        style={{
          padding: "80px 20px",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            marginBottom: "30px",
            textAlign: "center",
          }}
        >
          Sobre o Instituto
        </h2>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.9",
            textAlign: "center",
          }}
        >
          Um espaço criado para mulheres que desejam romper padrões
          emocionais, fortalecer sua autoestima e se reconectar com sua
          verdadeira essência.
        </p>
      </section>

      {/* SERVIÇOS */}
      <section
        style={{
          backgroundColor: "#fff",
          padding: "80px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "40px",
            marginBottom: "50px",
          }}
        >
          Atendimentos
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "25px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {[
            "Sessão Diagnóstico",
            "Barras de Access",
            "Terapia Emocional Feminina",
            "Liberação de Autosabotagem",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#f6ebe7",
                padding: "30px",
                borderRadius: "18px",
              }}
            >
              <h3 style={{ fontSize: "24px" }}>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* FRASE */}
      <section
        style={{
          padding: "100px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "36px",
            maxWidth: "900px",
            margin: "0 auto",
            lineHeight: "1.6",
            fontWeight: "normal",
          }}
        >
          “Você não precisa continuar carregando padrões que já não
          pertencem à mulher que está se tornando.”
        </h2>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          backgroundColor: "#8c5e58",
          color: "white",
          padding: "40px 20px",
          textAlign: "center",
        }}
      >
        <p>Instituto Kamilah Franco</p>
        <p style={{ marginTop: "10px" }}>
          Atendimento on-line para todo o Brasil
        </p>
      </footer>
    </main>
  )
}
