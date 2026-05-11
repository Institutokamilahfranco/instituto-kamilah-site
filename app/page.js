export default function Home() {
  const services = [
    {
      title: "Estrutura Emocional para Romper a Autossabotagem",
      description:
        "Processo terapêutico estratégico para mulheres que desejam fortalecer sua estrutura emocional, romper padrões limitantes e desenvolver sustentação interna para crescimento e posicionamento pessoal.",
      image:
        "https://i.imgur.com/qM0Q9xD.png",
    },
    {
      title: "Acompanhamento Terapêutico Estratégico",
      description:
        "Atendimento individual focado em desenvolvimento emocional, clareza interna, fortalecimento da autoestima e reconstrução de padrões emocionais que impactam decisões e relações.",
      image:
        "https://i.imgur.com/f9z0m2P.png",
    },
    {
      title: "Sustentação Emocional e Posicionamento",
      description:
        "Processo voltado para mulheres que desejam desenvolver mais segurança emocional, firmeza nas decisões, constância e fortalecimento interno para sustentar seu crescimento pessoal.",
      image:
        "https://i.imgur.com/BsM0K7V.png",
    },
    {
      title: "Sessão Diagnóstica Terapêutica",
      description:
        "Primeiro encontro estratégico para compreender padrões emocionais, desafios internos e definir direcionamentos para o processo terapêutico de forma personalizada.",
      image:
        "https://i.imgur.com/7p4T8mR.png",
    },
  ];

  return (
    <main
      style={{
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f7f2ee",
        color: "#3d312c",
        margin: 0,
        padding: 0,
      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: "100vh",
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 30px",
          background:
            "linear-gradient(to bottom, #f5ebe5, #f7f2ee)",
        }}
      >
        <div
          style={{
            flex: "1",
            minWidth: "320px",
            maxWidth: "600px",
            padding: "20px",
          }}
        >
          <img
            src="https://i.imgur.com/lA6kVxF.jpeg"
            alt="Logo Instituto Kamilah Franco"
            style={{
              width: "130px",
              marginBottom: "30px",
            }}
          />

          <h1
            style={{
              fontSize: "56px",
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
              fontSize: "20px",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}
          >
            Idealizadora do Instituto Kamilah Franco, um espaço
            criado para acolher mulheres em seus processos de
            transformação emocional, autoconhecimento e
            desenvolvimento pessoal.
          </p>

          <a
            href="https://wa.me/5546988042216"
            target="_blank"
            style={{
              backgroundColor: "#a67c62",
              color: "white",
              padding: "16px 34px",
              borderRadius: "40px",
              textDecoration: "none",
              fontSize: "18px",
              fontWeight: "bold",
              display: "inline-block",
            }}
          >
            Agendar Atendimento
          </a>
        </div>

        <div
          style={{
            flex: "1",
            minWidth: "320px",
            textAlign: "center",
            padding: "20px",
          }}
        >
          <img
            src="https://i.imgur.com/V7kT4sM.png"
            alt="Kamilah Franco"
            style={{
              width: "100%",
              maxWidth: "480px",
              borderRadius: "30px",
              boxShadow: "0 10px 40px rgba(0,0,0,0.15)",
            }}
          />
        </div>
      </section>

      {/* SOBRE */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "100px 25px",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          Sobre o Instituto
        </h2>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "2",
            textAlign: "center",
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          O Instituto Kamilah Franco nasceu com o propósito de
          acolher mulheres em seus processos emocionais,
          auxiliando cada uma em sua jornada de fortalecimento
          interno, desenvolvimento emocional e expansão pessoal.
          Através de um olhar sensível, humanizado e estratégico,
          o Instituto oferece um espaço seguro para mulheres que
          desejam compreender seus processos, fortalecer sua
          autoestima, ressignificar padrões emocionais e construir
          uma vida com mais autenticidade, leveza e consciência.
        </p>
      </section>

      {/* PROCESSOS */}
      <section
        style={{
          backgroundColor: "#efe4de",
          padding: "100px 25px",
        }}
      >
        <h2
          style={{
            fontSize: "42px",
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          Processos Terapêuticos
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {services.map((service, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                borderRadius: "30px",
                overflow: "hidden",
                boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={service.image}
                alt={service.title}
                style={{
                  width: "100%",
                  height: "320px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "30px" }}>
                <h3
                  style={{
                    fontSize: "28px",
                    marginBottom: "20px",
                  }}
                >
                  {service.title}
                </h3>

                <p
                  style={{
                    fontSize: "18px",
                    lineHeight: "1.8",
                  }}
                >
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* MISSÃO */}
      <section
        style={{
          padding: "100px 25px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "42px",
            marginBottom: "70px",
          }}
        >
          Missão, Visão e Valores
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              title: "Missão",
              text:
                "Acolher mulheres em seus processos de transformação emocional, oferecendo um espaço seguro, humanizado e estratégico para desenvolvimento pessoal e fortalecimento interno.",
            },
            {
              title: "Visão",
              text:
                "Ser referência em desenvolvimento emocional feminino, auxiliando mulheres a viverem com mais consciência, autoestima, autenticidade e equilíbrio emocional.",
            },
            {
              title: "Valores",
              text:
                "Acolhimento, humanização, ética, escuta sensível, autenticidade, desenvolvimento feminino e respeito aos processos individuais.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "white",
                padding: "40px",
                borderRadius: "25px",
                boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
              }}
            >
              <h3
                style={{
                  fontSize: "30px",
                  marginBottom: "20px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  fontSize: "18px",
                  lineHeight: "1.8",
                }}
              >
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CONTATO */}
      <section
        style={{
          backgroundColor: "#3d312c",
          color: "white",
          textAlign: "center",
          padding: "100px 25px",
        }}
      >
        <h2
          style={{
            fontSize: "44px",
            marginBottom: "20px",
          }}
        >
          Entre em Contato
        </h2>

        <p
          style={{
            fontSize: "20px",
            marginBottom: "40px",
            lineHeight: "1.8",
          }}
        >
          Será um prazer acolher você em sua jornada de
          desenvolvimento emocional e transformação pessoal.
        </p>

        <a
          href="https://wa.me/5546988042216"
          target="_blank"
          style={{
            backgroundColor: "#c49b7d",
            color: "white",
            padding: "18px 40px",
            borderRadius: "40px",
            textDecoration: "none",
            fontSize: "20px",
            fontWeight: "bold",
            display: "inline-block",
          }}
        >
          Falar no WhatsApp
        </a>

        <p
          style={{
            marginTop: "40px",
            fontSize: "18px",
          }}
        >
          Instagram: @instituto.kamilah.franco
        </p>
      </section>
    </main>
  );
}
