export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f8f3f1",
        color: "#4b3b36",
        margin: 0,
        padding: 0,
      }}
    >
      {/* HERO */}
      <section
        style={{
          textAlign: "center",
          padding: "80px 20px",
          background:
            "linear-gradient(to bottom, #f5e6e0, #f8f3f1)",
        }}
      >
        <img
          src="https://i.imgur.com/8Km9tLL.png"
          alt="Instituto Kamilah Franco"
          style={{
            width: "140px",
            marginBottom: "20px",
            borderRadius: "100%",
          }}
        />

        <h1
          style={{
            fontSize: "48px",
            marginBottom: "10px",
          }}
        >
          Instituto Kamilah Franco
        </h1>

        <p
          style={{
            fontSize: "20px",
            maxWidth: "700px",
            margin: "0 auto",
            lineHeight: "1.6",
          }}
        >
          Desenvolvimento emocional feminino, expansão pessoal e
          acolhimento terapêutico para mulheres que desejam viver
          com mais leveza, autoestima e equilíbrio emocional.
        </p>

        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          style={{
            display: "inline-block",
            marginTop: "30px",
            backgroundColor: "#b07d62",
            color: "white",
            padding: "15px 35px",
            borderRadius: "40px",
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
          maxWidth: "1100px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "38px",
            marginBottom: "30px",
          }}
        >
          Sobre o Instituto
        </h2>

        <p
          style={{
            fontSize: "19px",
            lineHeight: "1.9",
            textAlign: "center",
          }}
        >
          O Instituto Kamilah Franco nasceu com o propósito de
          acolher mulheres em seus processos emocionais,
          ajudando cada uma a desenvolver autoconhecimento,
          fortalecimento emocional e expansão pessoal através
          de atendimentos terapêuticos humanizados.
        </p>
      </section>

      {/* ÁREAS */}
      <section
        style={{
          backgroundColor: "#efe4df",
          padding: "80px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "38px",
            marginBottom: "50px",
          }}
        >
          Áreas de Desenvolvimento
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
            "Autoestima Feminina",
            "Desenvolvimento Emocional",
            "Expansão Pessoal",
            "Relacionamentos",
            "Autoconhecimento",
            "Equilíbrio Emocional",
          ].map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                padding: "30px",
                borderRadius: "20px",
                textAlign: "center",
                boxShadow: "0 4px 15px rgba(0,0,0,0.08)",
              }}
            >
              <h3>{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section
        style={{
          padding: "80px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "38px",
            marginBottom: "20px",
          }}
        >
          Entre em Contato
        </h2>

        <p
          style={{
            fontSize: "20px",
            marginBottom: "30px",
          }}
        >
          Será um prazer acolher você.
        </p>

        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          style={{
            display: "inline-block",
            backgroundColor: "#4b3b36",
            color: "white",
            padding: "16px 35px",
            borderRadius: "40px",
            textDecoration: "none",
            fontSize: "18px",
            fontWeight: "bold",
          }}
        >
          Falar no WhatsApp
        </a>
      </section>
    </main>
  );
}
