export default function Home() {
  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#F6F1EC",
        color: "#4B3B36",
        margin: 0,
        padding: 0,
      }}
    >
      {/* HERO */}
      <section
        style={{
          padding: "80px 20px",
          background:
            "linear-gradient(to bottom, #FCFAF7, #F6F1EC)",
        }}
      >
        <div
          style={{
            maxWidth: "1300px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "50px",
            alignItems: "center",
          }}
        >
          {/* TEXTO */}
          <div>
            <img
              src="/logo.jpeg"
              alt="Instituto Kamilah Franco"
              style={{
                width: "320px",
                marginBottom: "30px",
              }}
            />

            <h1
              style={{
                fontSize: "4rem",
                lineHeight: "4.5rem",
                color: "#4B3B36",
                marginBottom: "30px",
              }}
            >
              Instituto <br />
              Kamilah Franco
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: "2rem",
                color: "#4B3B36",
                marginBottom: "40px",
              }}
            >
              O Instituto Kamilah Franco é um espaço de
              acolhimento, desenvolvimento emocional e
              transformação feminina.

              <br />
              <br />

              Criado para mulheres que desejam romper
              padrões de autossabotagem, fortalecer sua
              estrutura emocional e construir uma vida com
              mais clareza, posicionamento, segurança e
              propósito.

              <br />
              <br />

              Através de processos terapêuticos
              estratégicos, cada atendimento é conduzido
              de forma individual, respeitando a história,
              o momento e as necessidades emocionais de
              cada mulher.
            </p>

            <a
              href="https://wa.me/5546988042216"
              target="_blank"
              style={{
                display: "inline-block",
                backgroundColor: "#C8A46A",
                color: "#fff",
                padding: "16px 35px",
                borderRadius: "40px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "1rem",
              }}
            >
              Agendar Atendimento
            </a>
          </div>

          {/* FOTO */}
          <div style={{ textAlign: "center" }}>
            <img
              src="/kamilah.png"
              alt="Kamilah Franco"
              style={{
                width: "100%",
                maxWidth: "500px",
                borderRadius: "24px",
                boxShadow:
                  "0 15px 40px rgba(0,0,0,0.10)",
              }}
            />
          </div>
        </div>
      </section>

      {/* SOBRE */}
      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "#FCFAF7",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "30px",
            color: "#4B3B36",
          }}
        >
          Sobre o Instituto
        </h2>

        <p
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            lineHeight: "2rem",
            fontSize: "1.1rem",
          }}
        >
          O Instituto Kamilah Franco nasceu com o
          propósito de acolher mulheres em seus processos
          de reconstrução emocional, fortalecimento
          interno e expansão pessoal.

          <br />
          <br />

          Um espaço seguro para mulheres que desejam
          desenvolver clareza emocional, fortalecer sua
          base interna e criar uma vida mais alinhada com
          sua verdade, identidade e propósito.
        </p>
      </section>

      {/* PROCESSOS */}
      <section
        style={{
          padding: "80px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.5rem",
            marginBottom: "60px",
          }}
        >
          Processos Terapêuticos
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "30px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {[
            {
              imagem: "/produto1.png",
              titulo:
                "Estrutura Emocional para Romper a Autossabotagem",
              texto:
                "Processo terapêutico estratégico para mulheres que desejam fortalecer sua base emocional, romper padrões limitantes e sustentar crescimento e posicionamento.",
            },
            {
              imagem: "/produto2.png",
              titulo:
                "Acompanhamento Terapêutico Estratégico",
              texto:
                "Atendimento terapêutico individual focado em desenvolvimento emocional, reconstrução interna e clareza para decisões e direcionamento pessoal.",
            },
            {
              imagem: "/produto3.png",
              titulo:
                "Sustentação Emocional e Posicionamento",
              texto:
                "Processo terapêutico voltado para mulheres que desejam desenvolver segurança emocional, clareza interna e fortalecimento pessoal.",
            },
            {
              imagem: "/produto4.png",
              titulo:
                "Sessão Diagnóstica Terapêutica",
              texto:
                "Primeiro encontro para identificar padrões emocionais, autossabotagem e direcionar o processo terapêutico de forma estratégica.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#FCFAF7",
                padding: "25px",
                borderRadius: "20px",
                boxShadow:
                  "0 5px 20px rgba(0,0,0,0.05)",
              }}
            >
              <img
                src={item.imagem}
                alt={item.titulo}
                style={{
                  width: "100%",
                  borderRadius: "16px",
                  marginBottom: "20px",
                }}
              />

              <h3
                style={{
                  marginBottom: "20px",
                  color: "#C8A46A",
                  lineHeight: "2rem",
                  fontSize: "1.4rem",
                }}
              >
                {item.titulo}
              </h3>

              <p
                style={{
                  lineHeight: "1.8rem",
                }}
              >
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSÃO */}
      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "#FCFAF7",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          <div>
            <h3 style={{ color: "#C8A46A" }}>
              Missão
            </h3>

            <p style={{ lineHeight: "1.8rem" }}>
              Acolher e direcionar mulheres em seus
              processos emocionais, promovendo
              fortalecimento interno, clareza emocional e
              transformação pessoal.
            </p>
          </div>

          <div>
            <h3 style={{ color: "#C8A46A" }}>
              Visão
            </h3>

            <p style={{ lineHeight: "1.8rem" }}>
              Ser referência em desenvolvimento emocional
              feminino, ajudando mulheres a construírem
              vidas mais conscientes, seguras e alinhadas
              com sua essência.
            </p>
          </div>

          <div>
            <h3 style={{ color: "#C8A46A" }}>
              Valores
            </h3>

            <p style={{ lineHeight: "1.8rem" }}>
              Acolhimento, ética, escuta, respeito à
              individualidade, transformação emocional,
              verdade, clareza e expansão feminina.
            </p>
          </div>
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
            fontSize: "2.5rem",
            marginBottom: "30px",
          }}
        >
          Contato
        </h2>

        <p style={{ marginBottom: "10px" }}>
          WhatsApp: (46) 98804-2216
        </p>

        <p style={{ marginBottom: "40px" }}>
          Instagram: @instituto.kamilah.franco
        </p>

        <a
          href="https://wa.me/5546988042216"
          target="_blank"
          style={{
            display: "inline-block",
            backgroundColor: "#4B3B36",
            color: "#fff",
            padding: "15px 35px",
            borderRadius: "40px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Entrar em contato
        </a>
      </section>
    </main>
  );
}
