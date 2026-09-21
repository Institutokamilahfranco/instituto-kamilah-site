"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ReconexaoPage() {
  const [isMobile, setIsMobile] = useState(false);

  const responsiveStyles = `
    @media (max-width: 1024px) {
      .reconexao-stack-mobile {
        flex-direction: column !important;
        width: 100% !important;
      }

      .reconexao-stack-mobile-reverse {
        flex-direction: column-reverse !important;
        width: 100% !important;
      }

      .reconexao-stack-mobile > .reconexao-stack-child,
      .reconexao-stack-mobile-reverse > .reconexao-stack-child {
        width: 100% !important;
        max-width: none !important;
        min-width: 0 !important;
        flex: none !important;
      }
    }
  `;

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 1024);

    checkMobile();
    window.addEventListener("resize", checkMobile);

    let viewport = document.querySelector('meta[name="viewport"]');

    if (!viewport) {
      viewport = document.createElement("meta");
      viewport.name = "viewport";
      document.head.appendChild(viewport);
    }

    viewport.setAttribute(
      "content",
      "width=device-width, initial-scale=1"
    );

    document.title =
      "Terapia de Casal | RECONEXÃO — UM NOVO NÓS | Instituto Kamilah Franco";

    const description =
      "Terapia de casal online com processo estruturado em 8 encontros. RECONEXÃO — UM NOVO NÓS, do Instituto Kamilah Franco.";

    let meta = document.querySelector('meta[name="description"]');

    if (!meta) {
      meta = document.createElement("meta");
      meta.name = "description";
      document.head.appendChild(meta);
    }

    meta.setAttribute("content", description);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const whatsappMessage =
    "Olá, Kamilah! Conheci o processo RECONEXÃO — UM NOVO NÓS no site. Quero entender se esse processo faz sentido para nós e saber os próximos passos.";

  const whatsappUrl = `https://wa.me/5546988042216?text=${encodeURIComponent(
    whatsappMessage
  )}`;

  const trackWhatsApp = () => {
    window.gtag?.("event", "whatsapp_click", {
      button_location: "reconexao_landing",
    });
  };

  const section = (background, desktop = "110px 8%") => ({
    background,
    padding: isMobile ? "72px 7%" : desktop,
  });

  const eyebrow = {
    color: "#B08B57",
    fontWeight: 700,
    letterSpacing: "2px",
    textTransform: "uppercase",
    fontSize: ".82rem",
  };

  const title = {
    color: "#4A3732",
    fontSize: isMobile ? "2rem" : "3rem",
    lineHeight: 1.2,
  };

  const body = {
    color: "#6B5B56",
    fontSize: "1.08rem",
    lineHeight: 1.9,
  };

  const cards = [
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
  ];

  const process = [
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
  ];

  const different = [
    [
      "Quando uma conversa difícil começar...",
      "Em vez de vocês entrarem automaticamente no mesmo ciclo, poderão começar a reconhecer o que está acontecendo entre vocês.",
    ],
    [
      "Quando surgir uma mágoa...",
      "Em vez de ela aparecer novamente em todas as discussões, vocês terão espaço para compreender o que existe por trás dela.",
    ],
    [
      "Quando um dos dois se fechar...",
      "Em vez de interpretar imediatamente como rejeição ou desinteresse, vocês poderão perceber o padrão que está acontecendo.",
    ],
    [
      "E quando vocês discordarem...",
      "O objetivo não será nunca mais discordar. Será não precisar se perder um do outro toda vez que discordarem.",
    ],
  ];

  const faq = [
    [
      "Precisamos estar quase nos separando para começar?",
      "Não. O processo também pode ser buscado quando vocês percebem que não querem continuar vivendo a relação da mesma maneira.",
    ],
    [
      "Mas nós já conversamos tantas vezes...",
      "Conversar é importante. Mas quando o mesmo ciclo se repete, pode ser necessário olhar também para a dinâmica que existe por trás dessas conversas.",
    ],
    [
      "E se for difícil falar sobre algumas coisas?",
      "Vocês não precisam chegar sabendo exatamente o que dizer. A condução ajuda a organizar essas conversas com segurança, respeito e direção.",
    ],
    [
      "E se um de nós estiver mais aberto que o outro?",
      "O RECONEXÃO é um processo para o casal e pressupõe a disposição dos dois em participar e olhar para a relação.",
    ],
    [
      "O processo é online?",
      "Sim. Os encontros são realizados online, em formato de atendimento particular para o casal.",
    ],
    [
      "São sessões avulsas?",
      "Não. O RECONEXÃO é estruturado como um processo completo de 8 encontros.",
    ],
  ];

  return (
    <main
      style={{
        fontFamily: "inherit",
        color: "#4A3732",
        overflow: "hidden",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: responsiveStyles }} />

      {/* HERO */}
      <section
        style={section(
          "linear-gradient(180deg,#FCFAF7 0%,#F5F1EC 100%)",
          "75px 7% 95px"
        )}
      >
        <div
          className="reconexao-stack-mobile"
          style={{
            maxWidth: 1240,
            margin: "0 auto",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            gap: isMobile ? 42 : 70,
          }}
        >
          <div
            className="reconexao-stack-child"
            style={{
              flex: 1,
              maxWidth: 650,
            }}
          >
            <span
              style={{
                ...eyebrow,
                display: "inline-block",
                background: "#EFE7DF",
                padding: "10px 17px",
                borderRadius: 30,
                letterSpacing: ".5px",
                marginBottom: 24,
              }}
            >
              Terapia de Casal • Atendimento Particular
            </span>

            <h1
              style={{
                color: "#4A3732",
                fontSize: isMobile ? "2.35rem" : "3.8rem",
                lineHeight: 1.12,
                margin: "0 0 26px",
                fontWeight: 700,
              }}
            >
              Vocês ainda se amam, mas parece que não conseguem mais se{" "}
              <span style={{ color: "#B08B57" }}>encontrar?</span>
            </h1>

            <p style={{ ...body, margin: "0 0 20px" }}>
              As mesmas discussões se repetem. Pequenas situações se
              transformam em grandes conflitos. Um tenta conversar, o outro
              se fecha. Um cobra, o outro se distancia.
            </p>

            <p style={{ ...body, margin: "0 0 22px" }}>
              Talvez o problema não seja a falta de amor.{" "}
              <strong style={{ color: "#4A3732" }}>
                Talvez seja a forma como vocês aprenderam a se relacionar.
              </strong>
            </p>

            <p
              style={{
                color: "#7A6A64",
                fontSize: "1rem",
                lineHeight: 1.6,
                fontWeight: 600,
                margin: "0 0 14px",
              }}
            >
              Entenda como o RECONEXÃO pode ajudar vocês a construir uma nova
              dinâmica. ↓
            </p>

            <p
              style={{
                color: "#7A6A64",
                fontSize: ".9rem",
                margin: 0,
              }}
            >
              8 encontros • Atendimento particular • Online
            </p>
          </div>

          <div
            className="reconexao-stack-child"
            style={{
              flex: 1,
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "relative",
                width: "100%",
                maxWidth: 510,
                textAlign: "center",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: isMobile ? 285 : 430,
                  height: isMobile ? 285 : 430,
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
                  maxWidth: isMobile ? 330 : 450,
                  height: "auto",
                  zIndex: 2,
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* IDENTIFICAÇÃO */}
      <section style={section("#FFFFFF")}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              maxWidth: 850,
              margin: "0 auto",
            }}
          >
            <span style={eyebrow}>
              TALVEZ VOCÊS ESTEJAM VIVENDO ISSO
            </span>

            <h2 style={{ ...title, margin: "18px 0 24px" }}>
              Quando a relação começa a pesar mais do que acolher.
            </h2>

            <p style={{ ...body, margin: 0 }}>
              Talvez vocês ainda tenham carinho um pelo outro, mas já não
              sabem mais como conversar sem entrar em conflito. Talvez existam
              mágoas que nunca foram realmente elaboradas, assuntos que sempre
              terminam em discussão ou um distanciamento que foi crescendo aos
              poucos.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)",
              gap: 22,
              marginTop: 48,
            }}
          >
            {cards.map(([h, p]) => (
              <div
                key={h}
                style={{
                  background: "#F8F5F2",
                  borderRadius: 26,
                  padding: 30,
                }}
              >
                <h3
                  style={{
                    margin: "0 0 13px",
                    color: "#4A3732",
                    fontSize: "1.25rem",
                  }}
                >
                  {h}
                </h3>

                <p
                  style={{
                    ...body,
                    fontSize: ".98rem",
                    margin: 0,
                  }}
                >
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGEM 1 + DOR */}
      <section style={section("#F5F1EC", "85px 7%")}>
        <div
          className="reconexao-stack-mobile"
          style={{
            maxWidth: 1150,
            margin: "0 auto",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            gap: isMobile ? 35 : 65,
          }}
        >
          <div
            className="reconexao-stack-child"
            style={{
              flex: 1,
              overflow: "hidden",
              borderRadius: 30,
            }}
          >
            <Image
              src="/reconexao/01-casal-distancia.webp.png"
              alt="Casal vivendo um momento de distância emocional"
              width={1024}
              height={683}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "18px",
              }}
            />
          </div>

          <div
            className="reconexao-stack-child"
            style={{
              flex: 1,
            }}
          >
            <span style={eyebrow}>
              TALVEZ VOCÊS JÁ TENHAM TENTADO
            </span>

            <h2 style={{ ...title, margin: "18px 0 22px" }}>
              E talvez vocês já tenham tentado resolver isso.
            </h2>

            <p style={{ ...body, margin: 0 }}>
              Vocês já conversaram. Já prometeram que seria diferente. Já
              tentaram deixar algumas coisas para trás. Mas, mesmo quando
              existe vontade de fazer dar certo, os mesmos padrões podem voltar
              a aparecer.
            </p>

            <p style={{ ...body, margin: "18px 0 0" }}>
              <strong style={{ color: "#4A3732" }}>
                Porque às vezes o problema não está apenas no que vocês
                discutem, mas na forma como vocês entram nesses ciclos.
              </strong>
            </p>
          </div>
        </div>
      </section>

      {/* POR QUE CONVERSAR NEM SEMPRE RESOLVE */}
      <section style={section("#FCFAF7")}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span style={eyebrow}>
            POR QUE APENAS CONVERSAR NEM SEMPRE RESOLVE?
          </span>

          <h2 style={{ ...title, margin: "18px 0 24px" }}>
            Porque o problema pode estar no ciclo — e não apenas no assunto.
          </h2>

          <p style={{ ...body, margin: 0 }}>
            Um cobra. O outro se fecha. Um insiste. O outro se distancia. A
            conversa termina, mas o problema permanece. Até que alguma
            situação parecida aconteça novamente — e o ciclo recomeça.
          </p>

          <p style={{ ...body, margin: "22px 0 0" }}>
            O RECONEXÃO trabalha justamente sobre essa dinâmica:{" "}
            <strong style={{ color: "#4A3732" }}>
              compreender o ciclo, identificar o que o mantém e construir novas
              possibilidades para a relação.
            </strong>
          </p>
        </div>
      </section>

      {/* VIRADA */}
      <section
        style={section(
          "linear-gradient(180deg,#EFE7DF 0%,#FCFAF7 100%)",
          "90px 7%"
        )}
      >
        <div
          style={{
            maxWidth: 920,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <div
            style={{
              color: "#B08B57",
              fontSize: "3rem",
              lineHeight: 1,
            }}
          >
            “
          </div>

          <h2
            style={{
              ...title,
              margin: "15px 0 20px",
              fontSize: isMobile ? "2rem" : "3.15rem",
            }}
          >
            Talvez o problema não seja a falta de amor.
          </h2>

          <p
            style={{
              color: "#B08B57",
              fontSize: isMobile ? "1.25rem" : "1.65rem",
              lineHeight: 1.55,
              fontWeight: 600,
              margin: 0,
            }}
          >
            Talvez seja a forma como vocês aprenderam a se relacionar.
          </p>
        </div>
      </section>

      {/* PROCESSO */}
      <section id="processo" style={section("#FFFFFF")}>
        <div
          style={{
            maxWidth: 1150,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              maxWidth: 850,
              margin: "0 auto",
              textAlign: "center",
            }}
          >
            <span style={eyebrow}>RECONEXÃO — UM NOVO NÓS</span>

            <h2 style={{ ...title, margin: "18px 0 22px" }}>
              Um processo terapêutico estruturado para casais.
            </h2>

            <p style={{ ...body, margin: 0 }}>
              O RECONEXÃO foi desenvolvido para casais que desejam compreender
              sua dinâmica, reconhecer padrões que se repetem e transformar a
              forma como estão se relacionando.
            </p>

            <p style={{ ...body, margin: "18px 0 0" }}>
              São 8 encontros organizados dentro de um processo com direção e
              profundidade, respeitando a história, o momento e as necessidades
              de cada casal.
            </p>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section id="como-funciona" style={section("#F8F5F2")}>
        <div
          style={{
            maxWidth: 1180,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              maxWidth: 850,
              margin: "0 auto",
            }}
          >
            <span style={eyebrow}>COMO FUNCIONA</span>

            <h2 style={{ ...title, margin: "18px 0 20px" }}>
              Um processo com começo, desenvolvimento e continuidade.
            </h2>

            <p style={{ ...body, margin: 0 }}>
              Cada encontro possui uma função dentro do processo. A estrutura
              oferece direção ao casal, enquanto a condução respeita aquilo que
              emerge ao longo do acompanhamento.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(4,1fr)",
              gap: 20,
              marginTop: 48,
            }}
          >
            {process.map(([n, h, p]) => (
              <div
                key={n}
                style={{
                  background: "#FFF",
                  borderRadius: 26,
                  padding: 28,
                  boxShadow: "0 10px 28px rgba(0,0,0,.05)",
                }}
              >
                <div
                  style={{
                    width: 52,
                    height: 52,
                    borderRadius: "50%",
                    background: "#EFE7DF",
                    display: "grid",
                    placeItems: "center",
                    color: "#B08B57",
                    fontWeight: 700,
                    marginBottom: 20,
                  }}
                >
                  {n}
                </div>

                <h3
                  style={{
                    color: "#4A3732",
                    fontSize: "1.2rem",
                    margin: "0 0 12px",
                  }}
                >
                  {h}
                </h3>

                <p
                  style={{
                    ...body,
                    fontSize: ".96rem",
                    margin: 0,
                  }}
                >
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RESPONSABILIDADE */}
      <section style={section("#FCFAF7", "85px 7%")}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <h2
            style={{
              ...title,
              fontSize: isMobile ? "1.9rem" : "2.65rem",
              margin: "0 0 22px",
            }}
          >
            Não é sobre encontrar culpados. É sobre compreender a dinâmica que
            vocês construíram.
          </h2>

          <p style={{ ...body, margin: 0 }}>
            O RECONEXÃO não promete salvar uma relação a qualquer custo. É um
            processo estruturado para que os dois possam olhar para a relação
            com mais consciência, responsabilidade e disposição para transformar
            aquilo que precisa ser transformado.
          </p>
        </div>
      </section>

      {/* PARA QUEM */}
      <section id="para-quem-e" style={section("#FFFFFF")}>
        <div
          style={{
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              maxWidth: 850,
              margin: "0 auto",
            }}
          >
            <span style={eyebrow}>
              TALVEZ O RECONEXÃO SEJA PARA VOCÊS SE...
            </span>

            <h2 style={{ ...title, margin: "18px 0 22px" }}>
              Vocês não precisam estar à beira da separação para buscar ajuda.
            </h2>

            <p style={{ ...body, margin: 0 }}>
              O processo pode começar quando vocês percebem que não querem
              continuar vivendo a relação da mesma maneira.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2,1fr)",
              gap: 18,
              marginTop: 45,
            }}
          >
            {[
              "Casais presos nos mesmos conflitos e discussões recorrentes.",
              "Casais que percebem uma distância emocional crescendo entre os dois.",
              "Casais que carregam mágoas ou ressentimentos que ainda interferem na relação.",
              "Casais que desejam reconstruir comunicação, confiança e parceria.",
              "Casais que não querem continuar repetindo os mesmos padrões.",
              "Casais dispostos a participar do processo e assumir responsabilidade pela transformação da relação.",
            ].map((x) => (
              <div
                key={x}
                style={{
                  display: "flex",
                  gap: 13,
                  alignItems: "flex-start",
                  background: "#F8F5F2",
                  borderRadius: 21,
                  padding: 24,
                }}
              >
                <span
                  style={{
                    width: 27,
                    height: 27,
                    minWidth: 27,
                    borderRadius: "50%",
                    background: "#EFE7DF",
                    color: "#B08B57",
                    display: "grid",
                    placeItems: "center",
                    fontWeight: 700,
                  }}
                >
                  ✓
                </span>

                <p
                  style={{
                    ...body,
                    color: "#4A3732",
                    fontSize: ".98rem",
                    margin: 0,
                  }}
                >
                  {x}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* QUEM CONDUZ */}
      <section style={section("#F5F1EC", "90px 7%")}>
        <div
          className="reconexao-stack-mobile"
          style={{
            maxWidth: 1050,
            margin: "0 auto",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            alignItems: "center",
            gap: isMobile ? 35 : 65,
          }}
        >
          <div
            className="reconexao-stack-child"
            style={{
              flex: 1,
              overflow: "hidden",
              borderRadius: 30,
            }}
          >
            <Image
              src="/reconexao/04-kamilah-reconexao.webp.png"
              alt="Kamilah Franco"
              width={1024}
              height={1536}
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: "18px",
              }}
            />
          </div>

          <div
            className="reconexao-stack-child"
            style={{
              flex: 1,
            }}
          >
            <span style={eyebrow}>
              QUEM CONDUZ O RECONEXÃO
            </span>

            <h2 style={{ ...title, margin: "18px 0 20px" }}>
              Kamilah Franco
            </h2>

            <p style={{ ...body, margin: 0 }}>
              O RECONEXÃO é conduzido por Kamilah Franco a partir de um olhar
              voltado para a dinâmica da relação, para os padrões que se
              repetem e para a construção de novas possibilidades de diálogo e
              convivência.
            </p>

            <p style={{ ...body, margin: "18px 0 0" }}>
              A proposta é oferecer ao casal um espaço de escuta e reflexão,
              com direção e respeito à história e ao momento de cada relação.
            </p>
          </div>
        </div>
      </section>

      {/* OBJEÇÕES */}
      <section style={section("#FFFFFF")}>
        <div
          style={{
            maxWidth: 1000,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              maxWidth: 800,
              margin: "0 auto",
            }}
          >
            <span style={eyebrow}>ANTES DE DECIDIR</span>

            <h2 style={{ ...title, margin: "18px 0 35px" }}>
              Talvez vocês estejam se perguntando...
            </h2>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2,1fr)",
              gap: 18,
            }}
          >
            {faq.map(([q, a]) => (
              <div
                key={q}
                style={{
                  background: "#F8F5F2",
                  borderRadius: 23,
                  padding: 26,
                }}
              >
                <h3
                  style={{
                    color: "#4A3732",
                    fontSize: "1.08rem",
                    margin: "0 0 11px",
                  }}
                >
                  {q}
                </h3>

                <p
                  style={{
                    ...body,
                    fontSize: ".95rem",
                    margin: 0,
                  }}
                >
                  {a}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* POR QUE 8 ENCONTROS */}
      <section style={section("#FCFAF7", "90px 7%")}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span style={eyebrow}>
            POR QUE UM PROCESSO E NÃO APENAS UMA SESSÃO?
          </span>

          <h2 style={{ ...title, margin: "18px 0 22px" }}>
            Porque mudanças na relação precisam de espaço para acontecer.
          </h2>

          <p style={{ ...body, margin: 0 }}>
            Uma sessão pode abrir uma conversa. Um processo permite compreender
            o que está acontecendo, trabalhar os padrões que se repetem,
            experimentar novas formas de se relacionar e acompanhar a
            construção dessas mudanças ao longo do tempo.
          </p>
        </div>
      </section>

     {/* INVESTIMENTO */}
<section
  id="investimento"
  style={section("#F8F5F2", "105px 7%")}
>
  <div
    style={{
      maxWidth: 900,
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <span style={eyebrow}>
      ATENDIMENTO PARTICULAR PARA CASAIS
    </span>

    <h2 style={{ ...title, margin: "18px 0 20px" }}>
      O investimento para o processo completo.
    </h2>

    <p
      style={{
        ...body,
        maxWidth: 760,
        margin: "0 auto 38px",
      }}
    >
      São 8 encontros estruturados para trabalhar a dinâmica da relação
      com começo, desenvolvimento e continuidade.
    </p>

    {/* VALOR DE REFERÊNCIA */}
    <div
      style={{
        maxWidth: 700,
        margin: "0 auto 24px",
        background: "#FFFFFF",
        borderRadius: 28,
        padding: isMobile ? "28px 22px" : "34px 40px",
        border: "1px solid rgba(176,139,87,.12)",
      }}
    >
      <p
        style={{
          margin: 0,
          color: "#7A6A64",
          fontSize: ".95rem",
          lineHeight: 1.6,
        }}
      >
        Dois acompanhamentos individuais representariam
      </p>

   <div
  style={{
    marginTop: 10,
    color: "#4A3732",
    fontWeight: 700,
    fontSize: isMobile ? "2.35rem" : "3rem",
    lineHeight: 1.1,
    textDecorationLine: "line-through",
    textDecorationColor: "#C94A4A",
    textDecorationThickness: "3px",
    textDecorationStyle: "solid",
  }}
>
  R$ 4.000,00
</div>

      <p
        style={{
          margin: "12px 0 0",
          color: "#7A6A64",
          fontSize: ".92rem",
          lineHeight: 1.6,
        }}
      >
        O RECONEXÃO não é a soma de dois processos individuais.
        O trabalho é direcionado especificamente para a relação.
      </p>
    </div>
<p
  style={{
    margin: "28px auto 0",
    color: "#4A3732",
    fontSize: isMobile ? "1.05rem" : "1.2rem",
    lineHeight: 1.7,
    fontWeight: 600,
    maxWidth: 620,
  }}
>
  <strong>
    Mas o que vocês estão buscando não é simplesmente somar dois acompanhamentos.
    <br />
    É olhar para a relação de vocês de uma forma diferente.
  </strong>
  <br />
  <span style={{ display: "inline-block", marginTop: 12 }}>
    Então, qual é o investimento para fazer esse processo juntos?
  </span>
</p>

    {/* INVESTIMENTO NO CARTÃO */}
    <div
      style={{
        maxWidth: 720,
        margin: "0 auto",
        background: "#FFFFFF",
        borderRadius: 32,
        padding: isMobile ? "34px 22px" : "50px",
        border: "1px solid rgba(176,139,87,.18)",
        boxShadow: "0 14px 38px rgba(0,0,0,.06)",
      }}
    >
      <p
        style={{
          color: "#7A6A64",
          margin: 0,
          fontSize: ".95rem",
          letterSpacing: ".5px",
          textTransform: "uppercase",
        }}
      >
        No cartão
      </p>

      <div
        style={{
          color: "#B08B57",
          fontSize: isMobile ? "2.7rem" : "3.5rem",
          fontWeight: 800,
          lineHeight: 1.1,
          marginTop: 10,
        }}
      >
        12x de R$ 299,68
      </div>

      <p
        style={{
          color: "#7A6A64",
          fontSize: ".88rem",
          margin: "10px 0 0",
        }}
      >
       
      </p>

      <div
        style={{
          height: 1,
          background: "rgba(176,139,87,.18)",
          margin: "30px 0",
        }}
      />

      {/* À VISTA */}
      <p
        style={{
          color: "#7A6A64",
          margin: 0,
          fontSize: ".95rem",
          letterSpacing: ".5px",
          textTransform: "uppercase",
        }}
      >
        À vista
      </p>

      <div
        style={{
          color: "#B08B57",
          fontSize: isMobile ? "2rem" : "2.65rem",
          fontWeight: 700,
          marginTop: 8,
        }}
      >
        R$ 2.997,00
      </div>

      <div
        style={{
          display: "inline-block",
          marginTop: 12,
          background: "#EFE7DF",
          color: "#8C6A45",
          padding: "8px 15px",
          borderRadius: 30,
          fontWeight: 700,
          fontSize: ".88rem",
        }}
      >
        Economia de R$ 599,16 no pagamento à vista
      </div>
    </div>

    <p
      style={{
        color: "#7A6A64",
        fontSize: ".88rem",
        marginTop: 20,
      }}
    >
      Atendimento particular • 8 encontros • Online
    </p>
  </div>
</section>

      {/* VALOR */}
      <section style={section("#FFFFFF")}>
        <div
          style={{
            maxWidth: 1050,
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              maxWidth: 820,
              margin: "0 auto",
            }}
          >
            <span style={eyebrow}>
              O QUE ESTÁ POR TRÁS DO INVESTIMENTO
            </span>

            <h2 style={{ ...title, margin: "18px 0 22px" }}>
              O investimento não é apenas pelos encontros.{" "}
              <span style={{ color: "#B08B57" }}>
                É pelo processo.
              </span>
            </h2>

            <p style={{ ...body, margin: 0 }}>
              Vocês estão investindo em um espaço para compreender o que está
              acontecendo entre vocês, interromper padrões que se repetem e
              construir novas possibilidades para a relação.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2,1fr)",
              gap: 20,
              marginTop: 45,
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
            ].map(([h, p]) => (
              <div
                key={h}
                style={{
                  background: "#F8F5F2",
                  borderRadius: 24,
                  padding: 28,
                }}
              >
                <h3
                  style={{
                    color: "#4A3732",
                    fontSize: "1.12rem",
                    margin: "0 0 11px",
                  }}
                >
                  {h}
                </h3>

                <p
                  style={{
                    ...body,
                    fontSize: ".96rem",
                    margin: 0,
                  }}
                >
                  {p}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SEGURANÇA */}
      <section
        style={section(
          "linear-gradient(180deg,#EFE7DF 0%,#FCFAF7 100%)",
          "90px 7%"
        )}
      >
        <div
          style={{
            maxWidth: 850,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span style={eyebrow}>
            E SE VOCÊS AINDA NÃO TIVEREM CERTEZA?
          </span>

          <h2 style={{ ...title, margin: "18px 0 22px" }}>
            Vocês não precisam decidir tudo agora.
          </h2>

          <p style={{ ...body, margin: 0 }}>
            Depois de conhecer o processo, vocês podem entrar em contato e
            contar brevemente o que estão vivendo. A partir disso, podemos
            entender se o RECONEXÃO é realmente adequado para o momento de
            vocês.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)",
              gap: 14,
              marginTop: 35,
              textAlign: "left",
            }}
          >
            {[
              ["1", "Contem o que estão vivendo."],
              ["2", "Conversamos sobre o momento de vocês."],
              ["3", "Se fizer sentido, alinhamos os próximos passos."],
            ].map(([n, t]) => (
              <div
                key={n}
                style={{
                  background: "#FFF",
                  borderRadius: 20,
                  padding: 22,
                }}
              >
                <strong
                  style={{
                    color: "#B08B57",
                    fontSize: "1.25rem",
                  }}
                >
                  {n}
                </strong>

                <p
                  style={{
                    color: "#4A3732",
                    lineHeight: 1.6,
                    margin: "8px 0 0",
                  }}
                >
                  {t}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section style={section("#FCFAF7", "100px 7% 110px")}>
        <div
          style={{
            maxWidth: 900,
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span style={eyebrow}>
            UM NOVO NÓS PODE COMEÇAR COM UMA DECISÃO
          </span>

          <h2
            style={{
              ...title,
              fontSize: isMobile ? "2rem" : "3.1rem",
              margin: "18px 0 23px",
            }}
          >
            Vocês não precisam voltar a ser como antes.
          </h2>

          <p
            style={{
              ...body,
              maxWidth: 760,
              margin: "0 auto",
            }}
          >
            Talvez o que a relação de vocês precise não seja voltar ao passado,
            mas construir uma nova maneira de estar juntos.
          </p>

          <p
            style={{
              color: "#4A3732",
              fontSize: isMobile ? "1.25rem" : "1.55rem",
              fontWeight: 600,
              lineHeight: 1.6,
              margin: "24px 0 0",
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
            onClick={trackWhatsApp}
            aria-label="Conversar sobre o processo RECONEXÃO pelo WhatsApp"
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              marginTop: 34,
              background: "#25D366",
              color: "#FFF",
              padding: isMobile ? "16px 23px" : "18px 36px",
              borderRadius: 60,
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "1rem",
              boxShadow: "0 12px 30px rgba(37,211,102,.22)",
              textAlign: "center",
              maxWidth: "100%",
            }}
          >
            💬 Quero conversar sobre o processo RECONEXÃO
          </a>

          <p
            style={{
              color: "#7A6A64",
              fontSize: ".9rem",
              lineHeight: 1.6,
              margin: "15px auto 0",
              maxWidth: 620,
            }}
          >
            Conte brevemente o que vocês estão vivendo. A partir disso,
            conversamos sobre o momento de vocês, a adequação do processo e os
            próximos passos.
          </p>

          <p
            style={{
              color: "#7A6A64",
              fontSize: ".84rem",
              marginTop: 18,
            }}
          >
            Atendimento particular para casais
          </p>
        </div>
      </section>
    </main>
  );
}
