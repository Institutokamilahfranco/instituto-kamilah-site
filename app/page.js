import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#F5F1EC",
        color: "#4B3A36",
        fontFamily: "Arial, sans-serif",
        overflowX: "hidden",
      }}
    >
{/* HERO */}
<section
  style={{
    minHeight: "85vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "80px 8%",
    gap: "50px",
    flexWrap: "wrap",
    background:
      "linear-gradient(to bottom, #FCFAF7 0%, #F5F1EC 100%)",
    maxWidth: "1400px",
    margin: "0 auto",
  }}
>
  {/* TEXTO */}
  <div
    style={{
      flex: 1,
      minWidth: "320px",
      maxWidth: "760px",
    }}
  >
    <h1
      style={{
        fontSize: "clamp(2rem, 4vw, 3rem)",
        lineHeight: "1.15",
        marginBottom: "30px",
        color: "#4A3732",
      }}
    >
      Fortalecimento emocional para mulheres que desejam viver com mais leveza,
      clareza, segurança e propósito, deixando para trás a procrastinação e a
      autossabotagem.
    </h1>

    <p
      style={{
        fontSize: "1.25rem",
        lineHeight: "2.3rem",
        marginBottom: "25px",
      }}
    >
      O Instituto Kamilah Franco nasceu para acolher mulheres que desejam
      compreender sua história, fortalecer sua estrutura emocional e construir
      uma vida mais alinhada à sua essência.
    </p>

    <p
      style={{
        fontSize: "1.15rem",
        lineHeight: "2rem",
        marginBottom: "35px",
      }}
    >
      Através de um acompanhamento integrativo que considera o ser humano como
      um todo — corpo, mente e espírito — cada processo é conduzido de forma
      individualizada, integrando desenvolvimento emocional e alinhamento
      energético para promover transformações profundas e sustentáveis.
    </p>

    <div
      style={{
        display: "flex",
        gap: "15px",
        flexWrap: "wrap",
      }}
    >
      <a
        href="https://wa.me/5546988042216?text=Olá%20Kamilah,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          backgroundColor: "#B08B57",
          color: "#fff",
          padding: "16px 30px",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Agendar Atendimento
      </a>

      <a
        href="#instituto"
        style={{
          border: "1px solid #B08B57",
          color: "#B08B57",
          padding: "16px 30px",
          borderRadius: "50px",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Conheça o Instituto
      </a>
    </div>
  </div>

  {/* LOGO */}
  <div
    style={{
      flex: "0 0 320px",
      display: "flex",
      justifyContent: "center",
         alignItems: "center", 
    }}
  >
    <Image
      src="/logo.jpeg"
      alt="Instituto Kamilah Franco"
      width={300}
      height={300}
      style={{
        width: "100%",
        maxWidth: "300px",
        height: "auto",
      }}
    />
  </div>
</section>

{/* DORES DA CLIENTE */}
<section
  style={{
    padding: "100px 8%",
    backgroundColor: "#EFE7DF",
  }}
>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              fontSize: "2.8rem",
              marginBottom: "35px",
              color: "#4A3732",
            }}
          >
            Você se identifica com alguma destas experiências?
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "25px",
              marginTop: "50px",
            }}
          >
            {[
              "Sente que repete padrões mesmo desejando mudar.",
              "Tem dificuldade em se posicionar e estabelecer limites.",
              "Vive priorizando os outros e se deixando para depois.",
              "Carrega ansiedade, culpa ou sobrecarga emocional.",
              "Percebe ciclos de autossabotagem em sua vida.",
              "Deseja se reconectar com sua essência e propósito.",
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  backgroundColor: "#fff",
                  padding: "30px",
                  borderRadius: "25px",
                  boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
                }}
              >
                <p
                  style={{
                    lineHeight: "1.8rem",
                    fontSize: "1rem",
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* INSTITUTO */}
      <section
        id="instituto"
        style={{
          padding: "100px 8%",
          backgroundColor: "#FCFAF7",
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
              fontSize: "3rem",
              marginBottom: "30px",
              color: "#4A3732",
            }}
          >
            Instituto Kamilah Franco
          </h2>

          <p
            style={{
              fontSize: "1.15rem",
              lineHeight: "2.2rem",
              marginBottom: "25px",
            }}
          >
            O Instituto Kamilah Franco nasceu com o propósito de acolher mulheres em seus processos de fortalecimento emocional, reconstrução interna e transformação pessoal.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "2rem",
              marginBottom: "25px",
            }}
          >
            Acreditamos que o desenvolvimento humano acontece quando corpo, mente e espírito são considerados de forma integrada, respeitando a singularidade e o momento de cada pessoa.
          </p>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "2rem",
            }}
          >
            Cada processo é conduzido com profundidade, acolhimento e sensibilidade, integrando recursos terapêuticos e alinhamento energético para promover transformações sustentáveis e alinhadas à essência de cada mulher.
          </p>
        </div>
      </section>

      {/* SOBRE KAMILAH */}
      <section
        style={{
          padding: "100px 8%",
          backgroundColor: "#F5F1EC",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            gap: "60px",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              flex: 1,
              minWidth: "300px",
              textAlign: "center",
            }}
          >
            <Image
              src="/kamilah.png"
              alt="Kamilah Franco"
              width={450}
              height={600}
              style={{
                width: "100%",
                maxWidth: "420px",
                height: "auto",
                borderRadius: "30px",
                boxShadow: "0 20px 45px rgba(0,0,0,0.12)",
              }}
            />
          </div>

          <div
            style={{
              flex: 1,
              minWidth: "320px",
            }}
          >
            <h2
              style={{
                fontSize: "2.8rem",
                marginBottom: "30px",
                color: "#4A3732",
              }}
            >
              Sobre Kamilah Franco
            </h2>

            <p
              style={{
                lineHeight: "2rem",
                fontSize: "1.08rem",
                marginBottom: "20px",
              }}
            >
              Kamilah Franco atua no desenvolvimento emocional e no acompanhamento terapêutico integrativo, oferecendo um espaço seguro e acolhedor para mulheres que desejam compreender sua história e construir mudanças consistentes em suas vidas.
            </p>

            <p
              style={{
                lineHeight: "2rem",
                fontSize: "1.08rem",
                marginBottom: "20px",
              }}
            >
              Seu trabalho parte da compreensão de que o ser humano é um todo integrado — corpo, mente e espírito — e que o equilíbrio dessas dimensões influencia diretamente a forma como vivemos nossas relações, tomamos decisões e nos posicionamos diante da vida.
            </p>

            <p
              style={{
                lineHeight: "2rem",
                fontSize: "1.08rem",
              }}
            >
              Cada atendimento é conduzido de forma individualizada, integrando recursos cuidadosamente selecionados para favorecer o desenvolvimento emocional, o fortalecimento interno e o alinhamento energético, promovendo transformações profundas e sustentáveis.
            </p>
          </div>
        </div>
      </section>

      {/* PROCESSOS TERAPÊUTICOS */}
      <section
        style={{
          padding: "100px 8%",
          backgroundColor: "#FCFAF7",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "3rem",
            marginBottom: "60px",
            color: "#4A3732",
          }}
        >
          Processos Terapêuticos
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "35px",
            maxWidth: "1300px",
            margin: "0 auto",
          }}
        >
          {[
            {
              imagem: "/produto1.png",
              titulo: "Estrutura Emocional para romper a autossabotagem",
              texto:
                "Um acompanhamento para mulheres que desejam fortalecer sua estrutura interna e romper padrões que limitam seu crescimento.",
            },
            {
              imagem: "/produto2.png",
              titulo: "Acompanhamento Terapêutico Estratégico",
              texto:
                "Processos individualizados para promover consciência, equilíbrio e desenvolvimento emocional.",
            },
            {
              imagem: "/produto3.png",
              titulo: "Sustentação Emocional e Posicionamento",
              texto:
                "Desenvolvimento de recursos emocionais para viver com mais clareza, autonomia e segurança.",
            },
            {
              imagem: "/produto4.png",
              titulo: "Sessão Diagnóstico Terapêutico",
              texto:
                "Um primeiro encontro para compreender padrões, necessidades e possibilidades de transformação.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                borderRadius: "25px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={item.imagem}
                alt={item.titulo}
                style={{
                  width: "100%",
                  height: "240px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "30px" }}>
                <h3
                  style={{
                    fontSize: "1.5rem",
                    marginBottom: "15px",
                    color: "#B08B57",
                  }}
                >
                  {item.titulo}
                </h3>

                <p
                  style={{
                    lineHeight: "1.9rem",
                  }}
                >
                  {item.texto}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* MISSÃO, VISÃO E VALORES */}
      <section
        style={{
          padding: "100px 8%",
          backgroundColor: "#EFE7DF",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "3rem",
            marginBottom: "60px",
            color: "#4A3732",
          }}
        >
          Missão, Visão e Valores
        </h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "35px",
            maxWidth: "1300px",
            margin: "0 auto",
          }}
        >
          {[
            {
              imagem: "/missao.png",
              titulo: "Missão",
              texto:
                "Promover desenvolvimento emocional e fortalecimento interno, acolhendo mulheres em seus processos de transformação e construção de uma vida mais consciente e alinhada à sua essência.",
            },
            {
              imagem: "/visao.png",
              titulo: "Visão",
              texto:
                "Ser referência em desenvolvimento emocional feminino, oferecendo processos integrativos e humanizados que respeitam a singularidade de cada mulher.",
            },
            {
              imagem: "/valores.png",
              titulo: "Valores",
              texto:
                "Acolhimento, ética, autenticidade, respeito à singularidade, desenvolvimento humano e compromisso com transformações sustentáveis.",
            },
          ].map((item, index) => (
            <div
              key={index}
              style={{
                backgroundColor: "#fff",
                borderRadius: "25px",
                overflow: "hidden",
                boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
              }}
            >
              <img
                src={item.imagem}
                alt={item.titulo}
                style={{
                  width: "100%",
                  height: "240px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "30px" }}>
                <h3
                  style={{
                    fontSize: "1.8rem",
                    marginBottom: "20px",
                    color: "#4A3732",
                  }}
                >
                  {item.titulo}
                </h3>

                <p
                  style={{
                    lineHeight: "1.9rem",
                  }}
                >
                  {item.texto}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA FINAL */}
      <section
        style={{
          padding: "100px 8%",
          backgroundColor: "#FCFAF7",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              fontSize: "3rem",
              marginBottom: "30px",
              color: "#4A3732",
            }}
          >
            Dê o primeiro passo em direção à sua transformação emocional
          </h2>

          <p
            style={{
              fontSize: "1.1rem",
              lineHeight: "2rem",
              marginBottom: "40px",
            }}
          >
            Se você sente que é hora de olhar para si mesma com mais cuidado,
            acolhimento e profundidade, será um privilégio caminhar ao seu lado
            nesse processo de fortalecimento emocional, consciência e reconexão
            com sua essência.
          </p>

          <a
            href="https://wa.me/5546988042216?text=Olá%20Kamilah,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações."
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: "#B08B57",
              color: "#fff",
              padding: "18px 40px",
              borderRadius: "50px",
              textDecoration: "none",
              fontWeight: "bold",
              display: "inline-block",
              fontSize: "1rem",
            }}
          >
            Agendar Atendimento
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: "35px",
          textAlign: "center",
          backgroundColor: "#4A3732",
          color: "#fff",
        }}
      >
        <p>
          Instituto Kamilah Franco — Desenvolvimento emocional feminino,
          fortalecimento interno e transformação pessoal.
        </p>
      </footer>

      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a
        href="https://wa.me/5546988042216?text=Olá%20Kamilah,%20vim%20pelo%20site%20e%20gostaria%20de%20mais%20informações."
        target="_blank"
        rel="noopener noreferrer"
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          backgroundColor: "#25D366",
          width: "65px",
          height: "65px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "2rem",
          color: "#fff",
          textDecoration: "none",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          zIndex: 999,
        }}
      >
        ✆
      </a>
    </main>
  );
}
