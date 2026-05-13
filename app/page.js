const inputStyle = {
  padding: "18px",
  borderRadius: "14px",
  border: "1px solid #DDD",
  fontSize: "16px",
  outline: "none",
}

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
          padding: "50px 20px",
          background:
            "linear-gradient(to bottom, #FCFAF7, #F6F1EC)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(320px, 1fr))",
            gap: "40px",
            alignItems: "center",
          }}
        >
          <div>
            <img
              src="/logo.jpeg"
              alt="INSTITUTO Kamilah Franco"
              style={{
                width: "800px",
                marginBottom: "40px",
              }}
            />

            <h1
              style={{
                fontSize: "clamp(2.2rem, 7vw, 3.5rem)",
                lineHeight: "1.1",
                color: "#4B3B36",
                marginBottom: "25px",
              }}
            >
              Instituto <br />
              Kamilah Franco
            </h1>

            <p
              style={{
                fontSize: "1.05rem",
                lineHeight: "1.9rem",
                color: "#4B3B36",
                marginBottom: "35px",
              }}
            >
            O Instituto Kamilah Franco nasceu com o propósito de acolher mulheres em seus processos de fortalecimento emocional, reconstrução interna e transformação pessoal.

Mais do que um espaço terapêutico, o instituto foi criado para auxiliar mulheres que se sentem emocionalmente sobrecarregadas, desconectadas de si mesmas ou presas em padrões de autossabotagem que impedem crescimento, clareza e posicionamento.

Através de um acompanhamento estratégico e humanizado, trabalhamos o desenvolvimento emocional feminino de forma profunda, promovendo consciência, sustentação interna, segurança emocional e fortalecimento para decisões, relações e construção de uma vida com mais propósito.
            </p>

            <a
              href="https://wa.me/5546988042216"
              target="_blank"
              style={{
                display: "inline-block",
                backgroundColor: "#C8A46A",
                color: "#fff",
                padding: "14px 30px",
                borderRadius: "40px",
                textDecoration: "none",
                fontWeight: "bold",
                fontSize: "0.95rem",
              }}
            >
              Agendar Atendimento
            </a>
          </div>

          <div style={{ textAlign: "center" }}>
            <img
              src="/kamilah.png"
              alt="Kamilah Franco"
              style={{
                width: "100%",
                maxWidth: "220px",
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
          padding: "70px 20px",
          backgroundColor: "#FCFAF7",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.3rem",
            marginBottom: "25px",
          }}
        >
          Sobre o Instituto
        </h2>

        <p
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            lineHeight: "1.9rem",
            fontSize: "1rem",
          }}
        >
          O Instituto Kamilah Franco é um espaço dedicado ao desenvolvimento emocional feminino, criado para acolher mulheres que desejam compreender seus padrões internos, fortalecer sua estrutura emocional e construir uma vida mais alinhada com sua essência, propósito e verdade.

Muitas mulheres sabem o que precisam fazer, mas emocionalmente não conseguem sustentar decisões, posicionamentos, limites, crescimento ou relações saudáveis. O instituto nasce justamente para trabalhar essa base emocional que frequentemente permanece invisível, mas impacta diretamente todas as áreas da vida.

Aqui, cada processo é conduzido de forma estratégica, individualizada e humanizada, respeitando a história, os limites e o momento emocional de cada mulher. O objetivo não é apenas promover entendimento emocional, mas desenvolver sustentação interna, clareza, segurança e fortalecimento para mudanças reais e consistentes..
        </p>
      </section>

      {/* PROCESSOS */}
      <section
        style={{
          padding: "70px 20px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            fontSize: "2.3rem",
            marginBottom: "50px",
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
                "Estrutura Emocional Para romper a autossabotagem",
              texto:
                "Acompanhamento terapêutico estratégico para mulheres que sabem o que precisam fazer, mas não conseguem sustentar decisões, posicionamento e crescimento.",
            },
            {
              imagem: "/produto2.png",
              titulo:
                "Acompanhamento Terapêutico Estratégico",
              texto:
                "Atendimento terapêutico individual focado em desenvolvimento emocional, sustentação interna e reconstrução de padrões emocionais que impedem avanço e consistência.",
            },
            {
              imagem: "/produto3.png",
              titulo:
                "Sustentação Emocional e Posicionamento",
              texto:
                "Processo terapêutico para mulheres que desejam desenvolver mais clareza, segurança emocional e sustentação para decisões, crescimento e posicionamento pessoal.",
            },
            {
              imagem: "/produto4.png",
              titulo:
                "Sessão Diagnóstico Terapêutico",
              texto:
                "Primeiro encontro para identificar padrões emocionais, autossabotagem e definir direcionamento estratégico para o acompanhamento terapêutico.",
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
                transition: "all 0.4s ease",
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
                  marginBottom: "15px",
                  color: "#C8A46A",
                  lineHeight: "1.7rem",
                  fontSize: "1.2rem",
                }}
              >
                {item.titulo}
              </h3>

              <p
                style={{
                  lineHeight: "1.7rem",
                }}
              >
                {item.texto}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* MISSÃO VISÃO E VALORES */}
      <section
        style={{
          padding: "70px 20px",
          backgroundColor: "#f8f3ef",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "38px",
              color: "#4b3b36",
              marginBottom: "50px",
              fontWeight: "600",
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
            {/* MISSÃO */}
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              <img
                src="/missao.png"
                alt="Missão"
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "25px" }}>
                <h3
                  style={{
                    color: "#b38b59",
                    fontSize: "28px",
                    marginBottom: "12px",
                  }}
                >
                  Missão
                </h3>

                <p
                  style={{
                    lineHeight: "1.7",
                    color: "#5b4b45",
                  }}
                >
                  Promover fortalecimento emocional e desenvolvimento interno para mulheres que desejam romper padrões de autossabotagem, construir segurança emocional e viver com mais clareza, posicionamento, autenticidade e propósito..
                </p>
              </div>
            </div>

            {/* VISÃO */}
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              <img
                src="/visao.png"
                alt="Visão"
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "25px" }}>
                <h3
                  style={{
                    color: "#b38b59",
                    fontSize: "28px",
                    marginBottom: "12px",
                  }}
                >
                  Visão
                </h3>

                <p
                  style={{
                    lineHeight: "1.7",
                    color: "#5b4b45",
                  }}
                >
                 Ser referência no desenvolvimento emocional feminino, oferecendo processos terapêuticos humanizados, estratégicos e transformadores que auxiliem mulheres a reconstruírem sua base emocional e fortalecerem sua relação consigo mesmas.
                </p>
              </div>
            </div>

            {/* VALORES */}
            <div
              style={{
                backgroundColor: "#fff",
                borderRadius: "24px",
                overflow: "hidden",
                boxShadow:
                  "0 10px 30px rgba(0,0,0,0.05)",
              }}
            >
              <img
                src="/valores.png"
                alt="Valores"
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "25px" }}>
                <h3
                  style={{
                    color: "#b38b59",
                    fontSize: "28px",
                    marginBottom: "12px",
                  }}
                >
                  Valores
                </h3>

                <p
                  style={{
                    lineHeight: "1.7",
                    color: "#5b4b45",
                  }}
                >
                 Acolhimento, escuta, ética, profundidade, autenticidade, respeito aos processos individuais, desenvolvimento consciente, fortalecimento emocional e compromisso com transformações reais e sustentáveis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FORMULÁRIO */}
      <section
        style={{
          padding: "80px 20px",
          backgroundColor: "#FCFAF7",
        }}
      >
        <div
          style={{
            maxWidth: "800px",
            margin: "0 auto",
            backgroundColor: "#fff",
            padding: "40px",
            borderRadius: "30px",
            boxShadow:
              "0 10px 30px rgba(0,0,0,0.05)",
          }}
        >
          <h2
            style={{
              textAlign: "center",
              fontSize: "36px",
              marginBottom: "20px",
            }}
          >
            Se você sente que está vivendo ciclos repetitivos, dificuldades emocionais, insegurança, autossabotagem ou deseja fortalecer sua estrutura emocional para viver com mais clareza e sustentação interna, entre em contato e agende seu atendimento.
          </h2>

          <form
            action="https://formsubmit.co/kamilahfranco.comunicacao@gmail.com"
            method="POST"
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <input
              type="text"
              name="nome"
              placeholder="Seu nome"
              required
              style={inputStyle}
            />

            <input
              type="email"
              name="email"
              placeholder="Seu e-mail"
              required
              style={inputStyle}
            />

            <input
              type="tel"
              name="telefone"
              placeholder="Seu WhatsApp"
              required
              style={inputStyle}
            />

            <textarea
              name="mensagem"
              placeholder="Como podemos te ajudar?"
              rows="5"
              style={inputStyle}
            />

            <button
              type="submit"
              style={{
                backgroundColor: "#C8A46A",
                color: "#fff",
                padding: "18px",
                border: "none",
                borderRadius: "40px",
                fontSize: "18px",
                cursor: "pointer",
                fontWeight: "bold",
              }}
            >
              Enviar solicitação
            </button>
          </form>
        </div>
      </section>

      {/* CONTATO */}
      <section
        style={{
          padding: "70px 20px",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "2.3rem",
            marginBottom: "25px",
          }}
        >
          Contato
        </h2>

        <p style={{ marginBottom: "10px" }}>
          WhatsApp: (46) 98804-2216
        </p>

        <p style={{ marginBottom: "35px" }}>
          Instagram: @instituto.kamilah.franco
        </p>

        <a
          href="https://wa.me/5546988042216"
          target="_blank"
          style={{
            display: "inline-block",
            backgroundColor: "#4B3B36",
            color: "#fff",
            padding: "14px 30px",
            borderRadius: "40px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          Entrar em contato
        </a>
      </section>

      {/* BOTÃO FIXO */}
      <a
        href="https://wa.me/5546988042216"
        target="_blank"
        style={{
          position: "fixed",
          bottom: "25px",
          right: "25px",
          backgroundColor: "#25D366",
          color: "#fff",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "28px",
          textDecoration: "none",
          boxShadow:
            "0 8px 25px rgba(0,0,0,0.20)",
          zIndex: "999",
        }}
      >
        💬
      </a>
    </main>
  )
}
