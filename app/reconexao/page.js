"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ReconexaoPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const width = Math.min(
        window.innerWidth,
        document.documentElement.clientWidth
      );
      setIsMobile(width <= 1024);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    document.title =
      "Terapia de Casal | RECONEXÃO — UM NOVO NÓS | Instituto Kamilah Franco";

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    const description =
      "Terapia de casal com processo estruturado em 8 encontros. RECONEXÃO — UM NOVO NÓS, do Instituto Kamilah Franco.";

    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content = description;
      document.head.appendChild(meta);
    }

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const whatsappMessage =
    "Olá, Kamilah! Conheci o processo RECONEXÃO — UM NOVO NÓS no site e tenho interesse em iniciar o processo de terapia de casal. Gostaria de entender como funciona e saber os próximos passos.";

  const whatsappUrl = `https://wa.me/5546988042216?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const openWhatsApp = () => {
    window.gtag?.("event", "whatsapp_click", {
      button_location: "reconexao_landing",
    });
  };

const sectionStyle = (background, desktop = "120px 8%") => ({
  background,
  padding: isMobile ? "85px 8%" : desktop,
});
  const eyebrowStyle = {
    color: "#B08B57",
    fontWeight: "700",
    letterSpacing: "2px",
    textTransform: "uppercase" as const,
    fontSize: ".85rem",
  };

  const headingStyle = {
    color: "#4A3732",
    fontSize: isMobile ? "2rem" : "3.1rem",
    lineHeight: "1.2",
  };

  return (
    <>
      {/* =========================================================
          HERO — SEM CTA
      ========================================================= */}
      <section
        id="inicio"
        style={{
          background:
            "linear-gradient(180deg,#FCFAF7 0%, #F5F1EC 100%)",
          padding: isMobile ? "65px 8% 80px" : "95px 8% 110px",
        }}
      >
        <div
          style={{
            maxWidth: "1250px",
            margin: "0 auto",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            justifyContent: "space-between",
            gap: isMobile ? "45px" : "70px",
          }}
        >
          <div style={{ flex: 1, maxWidth: "650px", width: "100%" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#EFE7DF",
                color: "#8C6A45",
                padding: "10px 18px",
                borderRadius: "30px",
                fontWeight: "700",
                fontSize: ".9rem",
                marginBottom: "25px",
              }}
            >
              Terapia de Casal • Atendimento Particular
            </div>

            <h1
              style={{
                fontSize: isMobile ? "2.35rem" : "3.9rem",
                lineHeight: "1.12",
                color: "#4A3732",
                marginBottom: "28px",
                fontWeight: "700",
              }}
            >
              Vocês ainda se amam,
              <br />
              mas parece que não
              <span style={{ color: "#B08B57" }}>
                {" "}
                conseguem mais se encontrar?
              </span>
            </h1>

            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: "2rem",
                color: "#6B5B56",
                marginBottom: "22px",
              }}
            >
              As mesmas discussões se repetem. Pequenas situações se
              transformam em grandes conflitos. Um tenta conversar, o outro
              se fecha. Um cobra, o outro se distancia.
            </p>

            <p
              style={{
                fontSize: "1.15rem",
                lineHeight: "2rem",
                color: "#6B5B56",
                marginBottom: "35px",
              }}
            >
              Talvez o problema não seja a falta de amor.{" "}
              <strong style={{ color: "#4A3732" }}>
                Talvez seja a forma como vocês aprenderam a se relacionar.
              </strong>
            </p>

            <p
              style={{
                marginTop: "14px",
                color: "#7A6A64",
                fontSize: "1rem",
                lineHeight: "1.6",
                fontWeight: "600",
              }}
            >
              Entenda como o Reconexão pode ajudar vocês a construir uma nova
              dinâmica. ↓
            </p>

            <p
              style={{
                marginTop: "16px",
                color: "#7A6A64",
                fontSize: ".9rem",
              }}
            >
              8 encontros • Atendimento particular • Online
            </p>
          </div>

          <div
            style={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              width: "100%",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: "520px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: isMobile ? "300px" : "430px",
                  height: isMobile ? "300px" : "430px",
                  background: "#EADFCC",
                  borderRadius: "50%",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%,-50%)",
                }}
              />

              <Image
                src="/kamilah.png"
                alt="Kamilah Franco"
                width={500}
                height={700}
                priority
                style={{
                  position: "relative",
                  width: "100%",
                  maxWidth: isMobile ? "320px" : "450px",
                  height: "auto",
                  display: "block",
                  zIndex: 2,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          IDENTIFICAÇÃO
      ========================================================= */}
      <section id="identificacao" style={sectionStyle("#FFFFFF")}>
        <div
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span style={eyebrowStyle}>TALVEZ VOCÊS ESTEJAM VIVENDO ISSO</span>

          <h2
            style={{
              ...headingStyle,
              marginTop: "20px",
              marginBottom: "28px",
            }}
          >
            Quando a relação começa a pesar mais do que acolher.
          </h2>

          <p
            style={{
              maxWidth: "800px",
              margin: "0 auto",
              color: "#6B5B56",
              fontSize: "1.12rem",
              lineHeight: "2rem",
            }}
          >
            Talvez vocês ainda tenham carinho um pelo outro, mas já não sabem
            mais como conversar sem entrar em conflito. Talvez existam mágoas
            que nunca foram realmente elaboradas, assuntos que sempre terminam
            em discussão ou um distanciamento que foi crescendo aos poucos.
          </p>

          <div
            style={{
              marginTop: "55px",
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: "25px",
            }}
          >
            {[
              [
                "Os mesmos conflitos",
                "Vocês conversam sobre as mesmas coisas, prometem mudar e acabam novamente no mesmo lugar.",
              ],
              [
                "Distância emocional",
                "Existe convivência, mas falta conexão, escuta, intimidade ou a sensação de realmente serem uma equipe.",
              ],
              [
                "Mágoas acumuladas",
                "Experiências passadas continuam influenciando a forma como vocês reagem um ao outro hoje.",
              ],
            ].map(([titulo, texto]) => (
              <div
                key={titulo}
                style={{
                  background: "#F8F5F2",
                  borderRadius: "28px",
                  padding: "32px",
                  textAlign: "left",
                }}
              >
                <h3
                  style={{
                    color: "#4A3732",
                    fontSize: "1.3rem",
                    marginBottom: "15px",
                  }}
                >
                  {titulo}
                </h3>
                <p
                  style={{
                    color: "#6B5B56",
                    lineHeight: "1.85rem",
                    margin: 0,
                  }}
                >
                  {texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          OBJEÇÃO — JÁ TENTARAM RESOLVER
      ========================================================= */}
      <section style={sectionStyle("#FCFAF7", "90px 8%")}>
        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span style={eyebrowStyle}>TALVEZ VOCÊS JÁ TENHAM TENTADO</span>

          <h2
            style={{
              color: "#4A3732",
              fontSize: isMobile ? "1.9rem" : "2.8rem",
              lineHeight: "1.25",
              marginTop: "20px",
              marginBottom: "25px",
            }}
          >
            E talvez vocês já tenham tentado resolver isso.
          </h2>

          <p
            style={{
              color: "#6B5B56",
              fontSize: "1.08rem",
              lineHeight: "2rem",
              margin: 0,
            }}
          >
            Vocês já conversaram. Já prometeram que seria diferente. Já
            tentaram deixar algumas coisas para trás. Mas, mesmo quando existe
            vontade de fazer dar certo, os mesmos padrões podem voltar a
            aparecer.
          </p>

          <p
            style={{
              color: "#4A3732",
              fontSize: "1.08rem",
              lineHeight: "2rem",
              margin: "22px 0 0",
              fontWeight: "600",
            }}
          >
            Porque às vezes o problema não está apenas no que vocês discutem,
            mas na forma como vocês entram nesses ciclos.
          </p>
        </div>
      </section>

      {/* =========================================================
          VIRADA DE CONSCIÊNCIA
      ========================================================= */}
      <section
        style={{
          background:
            "linear-gradient(180deg,#EFE7DF 0%, #FCFAF7 100%)",
          padding: isMobile ? "80px 8%" : "110px 8%",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              color: "#B08B57",
              fontSize: "3rem",
              lineHeight: 1,
              marginBottom: "20px",
            }}
          >
            “
          </div>

          <h2
            style={{
              color: "#4A3732",
              fontSize: isMobile ? "2rem" : "3.2rem",
              lineHeight: "1.25",
              marginBottom: "25px",
            }}
          >
            Talvez o problema não seja a falta de amor.
          </h2>

          <p
            style={{
              color: "#B08B57",
              fontSize: isMobile ? "1.3rem" : "1.7rem",
              lineHeight: "1.6",
              fontWeight: "600",
              margin: 0,
            }}
          >
            Talvez seja a forma como vocês aprenderam a se relacionar.
          </p>
        </div>
      </section>

      {/* =========================================================
          PROCESSO
      ========================================================= */}
      <section id="processo" style={sectionStyle("#FFFFFF")}>
        <div
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span style={eyebrowStyle}>RECONEXÃO — UM NOVO NÓS</span>

          <h2
            style={{
              ...headingStyle,
              marginTop: "20px",
              marginBottom: "25px",
            }}
          >
            Um processo terapêutico estruturado para casais.
          </h2>

          <p
            style={{
              maxWidth: "820px",
              margin: "0 auto",
              color: "#6B5B56",
              fontSize: "1.1rem",
              lineHeight: "2rem",
            }}
          >
            O RECONEXÃO foi desenvolvido para casais que desejam compreender
            sua dinâmica, reconhecer padrões que se repetem e transformar a
            forma como estão se relacionando.
          </p>

          <p
            style={{
              maxWidth: "800px",
              margin: "22px auto 0",
              color: "#6B5B56",
              fontSize: "1.08rem",
              lineHeight: "2rem",
            }}
          >
            São 8 encontros organizados dentro de um processo com direção e
            profundidade, respeitando a história, o momento e as necessidades
            de cada casal.
          </p>
        </div>
      </section>

      {/* =========================================================
          COMO FUNCIONA
      ========================================================= */}
      <section id="como-funciona" style={sectionStyle("#F8F5F2")}>
        <div
          style={{
            maxWidth: "1150px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span style={eyebrowStyle}>COMO FUNCIONA</span>

          <h2
            style={{
              ...headingStyle,
              marginTop: "20px",
              marginBottom: "25px",
            }}
          >
            Um processo com começo, desenvolvimento e continuidade.
          </h2>

          <p
            style={{
              maxWidth: "790px",
              margin: "0 auto 60px",
              color: "#6B5B56",
              lineHeight: "2rem",
              fontSize: "1.08rem",
            }}
          >
            Cada encontro possui uma função dentro do processo. A estrutura
            oferece direção ao casal, enquanto a condução respeita aquilo que
            emerge ao longo do acompanhamento.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
              gap: "22px",
            }}
          >
            {[
              [
                "01",
                "Compreender",
                "Identificar a dinâmica do casal e os padrões que sustentam os conflitos.",
              ],
              [
                "02",
                "Desconstruir",
                "Olhar para emoções, feridas, ressentimentos e formas de comunicação que mantêm os mesmos ciclos.",
              ],
              [
                "03",
                "Reconstruir",
                "Desenvolver novas formas de diálogo, responsabilidade, confiança e acordos.",
              ],
              [
                "04",
                "Sustentar",
                "Fortalecer as mudanças construídas para que uma nova forma de se relacionar possa continuar.",
              ],
            ].map(([numero, titulo, texto]) => (
              <div
                key={numero}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "28px",
                  padding: "32px 25px",
                  textAlign: "left",
                  boxShadow: "0 12px 30px rgba(0,0,0,.05)",
                }}
              >
                <div
                  style={{
                    width: "55px",
                    height: "55px",
                    borderRadius: "50%",
                    background: "#EFE7DF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#B08B57",
                    fontWeight: "700",
                    marginBottom: "22px",
                  }}
                >
                  {numero}
                </div>

                <h3
                  style={{
                    color: "#4A3732",
                    fontSize: "1.25rem",
                    marginBottom: "15px",
                  }}
                >
                  {titulo}
                </h3>

                <p
                  style={{
                    color: "#6B5B56",
                    lineHeight: "1.8rem",
                    margin: 0,
                    fontSize: ".97rem",
                  }}
                >
                  {texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          O QUE PODEM CONSTRUIR
      ========================================================= */}
      <section style={sectionStyle("#FCFAF7", "100px 8%")}>
        <div
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span style={eyebrowStyle}>AO LONGO DO PROCESSO</span>

          <h2
            style={{
              ...headingStyle,
              marginTop: "20px",
              marginBottom: "25px",
            }}
          >
            O que vocês podem construir ao longo desse processo.
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto 45px",
              color: "#6B5B56",
              fontSize: "1.08rem",
              lineHeight: "2rem",
            }}
          >
            O objetivo não é prometer uma relação sem conflitos. É ajudar
            vocês a construir uma relação em que os conflitos não precisem
            continuar acontecendo da mesma maneira.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
              gap: "20px",
              textAlign: "left",
            }}
          >
            {[
              "Mais clareza sobre a dinâmica de vocês",
              "Uma comunicação mais consciente",
              "Mais responsabilidade compartilhada",
              "Novas formas de estar juntos",
            ].map((item) => (
              <div
                key={item}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "22px",
                  padding: "25px",
                  display: "flex",
                  gap: "14px",
                  alignItems: "center",
                  boxShadow: "0 8px 25px rgba(0,0,0,.04)",
                }}
              >
                <span
                  style={{
                    width: "30px",
                    height: "30px",
                    minWidth: "30px",
                    borderRadius: "50%",
                    background: "#EFE7DF",
                    color: "#B08B57",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontWeight: "700",
                  }}
                >
                  ✓
                </span>
                <span
                  style={{
                    color: "#4A3732",
                    lineHeight: "1.6rem",
                    fontWeight: "600",
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          RESPONSABILIDADE
      ========================================================= */}
      <section style={sectionStyle("#FFFFFF", "100px 8%")}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              color: "#4A3732",
              fontSize: isMobile ? "1.9rem" : "2.7rem",
              lineHeight: "1.3",
              marginBottom: "25px",
            }}
          >
            Não é sobre encontrar culpados.
            <br />
            É sobre compreender a dinâmica que vocês construíram.
          </h2>

          <p
            style={{
              color: "#6B5B56",
              fontSize: "1.08rem",
              lineHeight: "2rem",
              margin: 0,
            }}
          >
            O RECONEXÃO não promete salvar uma relação a qualquer custo. É um
            processo estruturado para que os dois possam olhar para a relação
            com mais consciência, responsabilidade e disposição para transformar
            aquilo que precisa ser transformado.
          </p>
        </div>
      </section>

      {/* =========================================================
          PARA QUEM É
      ========================================================= */}
      <section id="para-quem-e" style={sectionStyle("#F8F5F2")}>
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span style={eyebrowStyle}>TALVEZ O RECONEXÃO SEJA PARA VOCÊS SE...</span>

          <h2
            style={{
              ...headingStyle,
              marginTop: "20px",
              marginBottom: "28px",
            }}
          >
            Vocês não precisam estar à beira da separação para buscar ajuda.
          </h2>

          <p
            style={{
              maxWidth: "780px",
              margin: "0 auto 50px",
              color: "#6B5B56",
              fontSize: "1.08rem",
              lineHeight: "2rem",
            }}
          >
            O processo pode começar quando vocês percebem que não querem
            continuar vivendo a relação da mesma maneira.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
              gap: "22px",
              textAlign: "left",
            }}
          >
            {[
              "Casais presos nos mesmos conflitos e discussões recorrentes.",
              "Casais que percebem uma distância emocional crescendo entre os dois.",
              "Casais que carregam mágoas ou ressentimentos que ainda interferem na relação.",
              "Casais que desejam reconstruir comunicação, confiança e parceria.",
              "Casais que não querem continuar repetindo os mesmos padrões.",
              "Casais dispostos a participar do processo e assumir responsabilidade pela transformação da relação.",
            ].map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  gap: "14px",
                  alignItems: "flex-start",
                  background: "#FFFFFF",
                  borderRadius: "22px",
                  padding: "25px",
                }}
              >
                <div
                  style={{
                    width: "28px",
                    height: "28px",
                    minWidth: "28px",
                    borderRadius: "50%",
                    background: "#EFE7DF",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#B08B57",
                    fontWeight: "700",
                  }}
                >
                  ✓
                </div>

                <p
                  style={{
                    margin: 0,
                    color: "#4A3732",
                    lineHeight: "1.7rem",
                  }}
                >
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          OBJEÇÕES ANTES DO INVESTIMENTO
      ========================================================= */}
      <section style={sectionStyle("#FFFFFF", "100px 8%")}>
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span style={eyebrowStyle}>ANTES DE DECIDIR</span>

          <h2
            style={{
              ...headingStyle,
              marginTop: "20px",
              marginBottom: "40px",
            }}
          >
            Talvez vocês estejam se perguntando...
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
              gap: "20px",
              textAlign: "left",
            }}
          >
            {[
              [
                "Será que isso é realmente para nós?",
                "O RECONEXÃO foi pensado para casais que desejam compreender a própria dinâmica e estão dispostos a participar desse processo.",
              ],
              [
                "Mas nós já conversamos tantas vezes...",
                "Conversar é importante. Mas quando o mesmo ciclo se repete, pode ser necessário olhar também para a dinâmica que existe por trás dessas conversas.",
              ],
              [
                "E se for difícil falar sobre algumas coisas?",
                "Vocês não precisam chegar ao processo sabendo exatamente o que dizer. A condução ajuda a organizar essas conversas com segurança, respeito e direção.",
              ],
              [
                "E se meu parceiro não estiver tão aberto quanto eu?",
                "O RECONEXÃO é um processo para o casal e pressupõe a disposição dos dois em participar e olhar para a relação.",
              ],
            ].map(([pergunta, resposta]) => (
              <div
                key={pergunta}
                style={{
                  background: "#F8F5F2",
                  borderRadius: "25px",
                  padding: "30px",
                }}
              >
                <h3
                  style={{
                    color: "#4A3732",
                    fontSize: "1.15rem",
                    lineHeight: "1.5",
                    margin: "0 0 14px",
                  }}
                >
                  {pergunta}
                </h3>
                <p
                  style={{
                    color: "#6B5B56",
                    lineHeight: "1.8rem",
                    margin: 0,
                    fontSize: ".97rem",
                  }}
                >
                  {resposta}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          INVESTIMENTO — ÂNCORA + VALOR REAL
      ========================================================= */}
      <section
        id="investimento"
        style={{
          background: "#F8F5F2",
          padding: isMobile ? "85px 8%" : "120px 8%",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span style={eyebrowStyle}>ATENDIMENTO PARTICULAR PARA CASAIS</span>

          <h2
            style={{
              color: "#4A3732",
              fontSize: isMobile ? "2rem" : "3rem",
              lineHeight: "1.2",
              marginTop: "20px",
              marginBottom: "20px",
            }}
          >
            RECONEXÃO — UM NOVO NÓS
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto 42px",
              color: "#6B5B56",
              fontSize: "1.08rem",
              lineHeight: "2rem",
            }}
          >
            Um acompanhamento terapêutico particular, estruturado em 8
            encontros e desenvolvido especificamente para a relação.
          </p>

          {/* VALOR DE REFERÊNCIA */}
          <div
            style={{
              maxWidth: "700px",
              margin: "0 auto 22px",
              background: "#FFFFFF",
              borderRadius: "28px",
              padding: isMobile ? "28px 22px" : "34px 40px",
              border: "1px solid rgba(176,139,87,.12)",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#7A6A64",
                fontSize: ".95rem",
              }}
            >
              Se cada um fizesse um acompanhamento individual
            </p>

            <div
              style={{
                marginTop: "10px",
                color: "#4A3732",
                fontWeight: "700",
                fontSize: isMobile ? "2.15rem" : "2.8rem",
                textDecoration: "line-through",
                textDecorationColor: "#B08B57",
                textDecorationThickness: "2px",
              }}
            >
              R$ 4.000,00
            </div>

            <p
              style={{
                margin: "12px 0 0",
                color: "#7A6A64",
                fontSize: ".92rem",
                lineHeight: "1.6",
              }}
            >
              Dois acompanhamentos individuais somariam R$ 4.000,00.
            </p>
          </div>

          {/* VIRADA */}
          <div
            style={{
              maxWidth: "700px",
              margin: "0 auto 25px",
              padding: isMobile ? "10px 10px" : "12px 20px",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#4A3732",
                fontSize: isMobile ? "1.15rem" : "1.35rem",
                lineHeight: "1.6",
                fontWeight: "700",
              }}
            >
              Mas não é isso que vocês irão pagar no{" "}
              <span style={{ color: "#B08B57" }}>RECONEXÃO.</span>
            </p>
          </div>

          {/* VALOR REAL */}
          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "35px",
              padding: isMobile ? "38px 22px" : "58px",
              boxShadow: "0 15px 40px rgba(0,0,0,.06)",
              border: "1px solid rgba(176,139,87,.16)",
            }}
          >
            <p
              style={{
                margin: 0,
                color: "#7A6A64",
                fontSize: ".95rem",
                letterSpacing: ".5px",
              }}
            >
              NO CARTÃO
            </p>

            <div
              style={{
                marginTop: "8px",
                color: "#B08B57",
                fontWeight: "800",
                fontSize: isMobile ? "3rem" : "4.2rem",
                lineHeight: "1.1",
              }}
            >
              12x de R$ 299,68
            </div>

            <p
              style={{
                margin: "13px 0 0",
                color: "#6B5B56",
                fontSize: ".92rem",
              }}
            >
              para realizar o processo completo
            </p>

            <div
              style={{
                width: "100%",
                height: "1px",
                background: "rgba(176,139,87,.18)",
                margin: "34px 0",
              }}
            />

            <p
              style={{
                margin: 0,
                color: "#7A6A64",
                fontSize: ".9rem",
              }}
            >
              OU À VISTA
            </p>

            <div
              style={{
                marginTop: "7px",
                color: "#4A3732",
                fontWeight: "700",
                fontSize: isMobile ? "1.85rem" : "2.4rem",
              }}
            >
              R$ 2.997,00
            </div>

            <div
              style={{
                display: "inline-block",
                marginTop: "14px",
                background: "#EFE7DF",
                color: "#8C6A45",
                padding: "8px 16px",
                borderRadius: "30px",
                fontWeight: "700",
                fontSize: ".88rem",
              }}
            >
              Economia de R$ 599,16 no pagamento à vista
            </div>

            <p
              style={{
                maxWidth: "650px",
                margin: "30px auto 0",
                color: "#6B5B56",
                fontSize: ".97rem",
                lineHeight: "1.8rem",
              }}
            >
              O RECONEXÃO não é a soma de dois processos individuais. Aqui, o
              trabalho é direcionado especificamente para a relação de vocês.
            </p>
          </div>

          <p
            style={{
              color: "#7A6A64",
              fontSize: ".9rem",
              lineHeight: "1.6",
              marginTop: "22px",
            }}
          >
            Atendimento particular • 8 encontros • Online
          </p>
        </div>
      </section>

      {/* =========================================================
          VALOR — O INVESTIMENTO É PELO PROCESSO
      ========================================================= */}
      <section style={sectionStyle("#FFFFFF", "105px 8%")}>
        <div
          style={{
            maxWidth: "1000px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span style={eyebrowStyle}>O QUE ESTÁ POR TRÁS DO INVESTIMENTO</span>

          <h2
            style={{
              color: "#4A3732",
              fontSize: isMobile ? "2rem" : "3rem",
              lineHeight: "1.2",
              marginTop: "20px",
              marginBottom: "22px",
            }}
          >
            O investimento não é apenas pelos encontros.
            <br />
            <span style={{ color: "#B08B57" }}>É pelo processo.</span>
          </h2>

          <p
            style={{
              maxWidth: "780px",
              margin: "0 auto 50px",
              color: "#6B5B56",
              fontSize: "1.08rem",
              lineHeight: "2rem",
            }}
          >
            Vocês estão investindo em um espaço para compreender o que está
            acontecendo entre vocês, interromper padrões que se repetem e
            construir novas possibilidades para a relação.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
              gap: "22px",
              textAlign: "left",
            }}
          >
            {[
              [
                "8 encontros estruturados para o casal",
                "Um processo com começo, desenvolvimento e continuidade — e não encontros isolados.",
              ],
              [
                "Um olhar para a dinâmica de vocês",
                "O foco não é apenas descobrir quem está errado, mas compreender os padrões que se repetem entre vocês.",
              ],
              [
                "Espaço para conversas difíceis",
                "Um ambiente estruturado para assuntos que talvez vocês não consigam conversar sozinhos.",
              ],
              [
                "Acompanhamento ao longo da transformação",
                "O processo não termina na compreensão. Ele inclui reconstrução e sustentação das mudanças.",
              ],
              [
                "Um processo pensado para a realidade de vocês",
                "Cada casal tem uma história, uma dinâmica e necessidades próprias.",
              ],
            ].map(([titulo, texto]) => (
              <div
                key={titulo}
                style={{
                  background: "#F8F5F2",
                  borderRadius: "25px",
                  padding: "28px",
                }}
              >
                <h3
                  style={{
                    color: "#4A3732",
                    fontSize: "1.15rem",
                    margin: "0 0 12px",
                  }}
                >
                  {titulo}
                </h3>
                <p
                  style={{
                    color: "#6B5B56",
                    lineHeight: "1.8rem",
                    margin: 0,
                    fontSize: ".97rem",
                  }}
                >
                  {texto}
                </p>
              </div>
            ))}
          </div>

          <p
            style={{
              maxWidth: "760px",
              margin: "45px auto 0",
              color: "#4A3732",
              fontSize: isMobile ? "1.05rem" : "1.2rem",
              lineHeight: "1.8rem",
              fontWeight: "600",
            }}
          >
            Porque o objetivo não é apenas conversar sobre a relação.
            <br />
            É criar condições para que vocês possam se relacionar de uma forma
            diferente.
          </p>
        </div>
      </section>

      {/* =========================================================
          SEGURANÇA ANTES DO CTA
      ========================================================= */}
      <section
        style={{
          background:
            "linear-gradient(180deg,#EFE7DF 0%, #FCFAF7 100%)",
          padding: isMobile ? "85px 8%" : "110px 8%",
        }}
      >
        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span style={eyebrowStyle}>E SE VOCÊS AINDA NÃO TIVEREM CERTEZA?</span>

          <h2
            style={{
              color: "#4A3732",
              fontSize: isMobile ? "2rem" : "2.8rem",
              lineHeight: "1.25",
              marginTop: "20px",
              marginBottom: "25px",
            }}
          >
            Vocês não precisam decidir tudo agora.
          </h2>

          <p
            style={{
              maxWidth: "750px",
              margin: "0 auto",
              color: "#6B5B56",
              fontSize: "1.08rem",
              lineHeight: "2rem",
            }}
          >
            Depois de conhecer o processo, vocês podem entrar em contato e
            contar brevemente o que estão vivendo. A partir disso, podemos
            entender se o RECONEXÃO é realmente adequado para o que estão
            buscando.
          </p>
        </div>
      </section>

      {/* =========================================================
          CTA FINAL — ÚNICO CTA DA PÁGINA
      ========================================================= */}
      <section
        style={{
          background: "#FCFAF7",
          padding: isMobile ? "85px 8%" : "110px 8%",
        }}
      >
        <div
          style={{
            maxWidth: "900px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span style={eyebrowStyle}>
            UM NOVO NÓS PODE COMEÇAR COM UMA DECISÃO
          </span>

          <h2
            style={{
              color: "#4A3732",
              fontSize: isMobile ? "2rem" : "3.1rem",
              lineHeight: "1.2",
              marginTop: "20px",
              marginBottom: "25px",
            }}
          >
            Vocês não precisam voltar a ser como antes.
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto",
              color: "#6B5B56",
              fontSize: "1.1rem",
              lineHeight: "2rem",
            }}
          >
            Talvez o que a relação de vocês precise não seja voltar ao passado,
            mas construir uma nova maneira de estar juntos.
          </p>

          <p
            style={{
              marginTop: "25px",
              color: "#4A3732",
              fontSize: isMobile ? "1.3rem" : "1.6rem",
              fontWeight: "600",
              lineHeight: "1.6",
            }}
          >
            Não é sobre voltar a ser como antes.
            <br />
            <span style={{ color: "#B08B57" }}>
              É sobre construir um novo nós.
            </span>
          </p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={openWhatsApp}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: "35px",
              background: "#25D366",
              color: "#FFF",
              padding: isMobile ? "17px 25px" : "18px 38px",
              borderRadius: "60px",
              textDecoration: "none",
              fontWeight: "700",
              fontSize: "1rem",
              boxShadow: "0 12px 30px rgba(37,211,102,.25)",
              textAlign: "center",
            }}
          >
            💬 Quero conversar sobre o processo RECONEXÃO
          </a>

          <p
            style={{
              marginTop: "16px",
              color: "#7A6A64",
              fontSize: ".9rem",
            }}
          >
            Conte brevemente o que vocês estão vivendo. A partir disso,
            podemos entender se o processo faz sentido para vocês.
          </p>

          <p
            style={{
              marginTop: "18px",
              color: "#7A6A64",
              fontSize: ".85rem",
            }}
          >
            Atendimento particular para casais
          </p>
        </div>
      </section>
    </>
  );
}
