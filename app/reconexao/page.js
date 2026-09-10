"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function ReconexaoPage() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();

    window.addEventListener("resize", checkMobile);

    document.title =
      "Terapia de Casal | RECONEXÃO — UM NOVO NÓS | Instituto Kamilah Franco";

    const metaDescription = document.querySelector(
      'meta[name="description"]'
    );

    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Terapia de casal com processo estruturado em 8 encontros. RECONEXÃO — UM NOVO NÓS, do Instituto Kamilah Franco."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Terapia de casal com processo estruturado em 8 encontros. RECONEXÃO — UM NOVO NÓS, do Instituto Kamilah Franco.";
      document.head.appendChild(meta);
    }

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
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

  return (
    <>
      {/* =========================================================
          HERO
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
          {/* TEXTO */}
          <div
            style={{
              flex: 1,
              maxWidth: "650px",
              width: "100%",
            }}
          >
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
              Talvez o problema não seja a falta de amor.
              <strong style={{ color: "#4A3732" }}>
                {" "}
                Talvez seja a forma como vocês aprenderam a se relacionar.
              </strong>
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
                background: "#25D366",
                color: "#FFF",
                padding: isMobile ? "17px 24px" : "18px 34px",
                borderRadius: "60px",
                textDecoration: "none",
                fontWeight: "700",
                fontSize: "1rem",
                boxShadow: "0 12px 30px rgba(37,211,102,.25)",
                textAlign: "center",
              }}
            >
              💬 Quero conhecer o RECONEXÃO
            </a>

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

          {/* FOTO */}
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
      <section
        id="identificacao"
        style={{
          background: "#FFFFFF",
          padding: isMobile ? "85px 8%" : "120px 8%",
        }}
      >
        <div
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span
            style={{
              color: "#B08B57",
              fontWeight: "700",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontSize: ".85rem",
            }}
          >
            TALVEZ VOCÊS ESTEJAM VIVENDO ISSO
          </span>

          <h2
            style={{
              fontSize: isMobile ? "2rem" : "3.1rem",
              lineHeight: "1.2",
              color: "#4A3732",
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
              {
                titulo: "Os mesmos conflitos",
                texto:
                  "Vocês conversam sobre as mesmas coisas, prometem mudar e acabam novamente no mesmo lugar.",
              },
              {
                titulo: "Distância emocional",
                texto:
                  "Existe convivência, mas falta conexão, escuta, intimidade ou a sensação de realmente serem uma equipe.",
              },
              {
                titulo: "Mágoas acumuladas",
                texto:
                  "Experiências passadas continuam influenciando a forma como vocês reagem um ao outro hoje.",
              },
            ].map((item, index) => (
              <div
                key={index}
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
                  {item.titulo}
                </h3>

                <p
                  style={{
                    color: "#6B5B56",
                    lineHeight: "1.85rem",
                    margin: 0,
                  }}
                >
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
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
      <section
        id="processo"
        style={{
          background: "#FFFFFF",
          padding: isMobile ? "85px 8%" : "120px 8%",
        }}
      >
        <div
          style={{
            maxWidth: "1050px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span
            style={{
              color: "#B08B57",
              fontWeight: "700",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontSize: ".85rem",
            }}
          >
            RECONEXÃO — UM NOVO NÓS
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
      <section
        id="como-funciona"
        style={{
          background: "#F8F5F2",
          padding: isMobile ? "85px 8%" : "120px 8%",
        }}
      >
        <div
          style={{
            maxWidth: "1150px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span
            style={{
              color: "#B08B57",
              fontWeight: "700",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontSize: ".85rem",
            }}
          >
            COMO FUNCIONA
          </span>

          <h2
            style={{
              color: "#4A3732",
              fontSize: isMobile ? "2rem" : "3.1rem",
              marginTop: "20px",
              marginBottom: "25px",
              lineHeight: "1.2",
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
              {
                numero: "01",
                titulo: "Compreender",
                texto:
                  "Identificar a dinâmica do casal e os padrões que sustentam os conflitos.",
              },
              {
                numero: "02",
                titulo: "Desconstruir",
                texto:
                  "Olhar para emoções, feridas, ressentimentos e formas de comunicação que mantêm os mesmos ciclos.",
              },
              {
                numero: "03",
                titulo: "Reconstruir",
                texto:
                  "Desenvolver novas formas de diálogo, responsabilidade, confiança e acordos.",
              },
              {
                numero: "04",
                titulo: "Sustentar",
                texto:
                  "Fortalecer as mudanças construídas para que uma nova forma de se relacionar possa continuar.",
              },
            ].map((item, index) => (
              <div
                key={index}
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
                  {item.numero}
                </div>

                <h3
                  style={{
                    color: "#4A3732",
                    fontSize: "1.25rem",
                    marginBottom: "15px",
                  }}
                >
                  {item.titulo}
                </h3>

                <p
                  style={{
                    color: "#6B5B56",
                    lineHeight: "1.8rem",
                    margin: 0,
                    fontSize: ".97rem",
                  }}
                >
                  {item.texto}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          RESPONSABILIDADE
      ========================================================= */}
      <section
        style={{
          background: "#FCFAF7",
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
            O RECONEXÃO não promete salvar uma relação a qualquer custo.
            É um processo estruturado para que os dois possam olhar para a
            relação com mais consciência, responsabilidade e disposição para
            transformar aquilo que precisa ser transformado.
          </p>
        </div>
      </section>

      {/* =========================================================
          PARA QUEM É
      ========================================================= */}
      <section
        id="para-quem-e"
        style={{
          background: "#FFFFFF",
          padding: isMobile ? "85px 8%" : "120px 8%",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span
            style={{
              color: "#B08B57",
              fontWeight: "700",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontSize: ".85rem",
            }}
          >
            PARA QUEM É O RECONEXÃO
          </span>

          <h2
            style={{
              color: "#4A3732",
              fontSize: isMobile ? "2rem" : "3rem",
              lineHeight: "1.2",
              marginTop: "20px",
              marginBottom: "50px",
            }}
          >
            Para casais que decidiram olhar para a relação com disposição para
            construir algo diferente.
          </h2>

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
            ].map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  gap: "14px",
                  alignItems: "flex-start",
                  background: "#F8F5F2",
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
          INVESTIMENTO
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
          <span
            style={{
              color: "#B08B57",
              fontWeight: "700",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontSize: ".85rem",
            }}
          >
            ATENDIMENTO PARTICULAR PARA CASAIS
          </span>

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
              margin: "0 auto 45px",
              color: "#6B5B56",
              fontSize: "1.08rem",
              lineHeight: "2rem",
            }}
          >
            Um acompanhamento terapêutico particular, estruturado em 8
            encontros e desenvolvido especificamente para a relação.
          </p>

          <div
            style={{
              background: "#FFFFFF",
              borderRadius: "35px",
              padding: isMobile ? "35px 22px" : "55px",
              boxShadow: "0 15px 40px rgba(0,0,0,.05)",
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
              No cartão
            </p>

            <div
              style={{
                marginTop: "8px",
                color: "#4A3732",
                fontWeight: "700",
                fontSize: isMobile ? "2.2rem" : "3rem",
              }}
            >
              12x de R$ 299,68
            </div>

            <div
              style={{
                width: "100%",
                height: "1px",
                background: "rgba(176,139,87,.18)",
                margin: "32px 0",
              }}
            />

            <p
              style={{
                margin: 0,
                color: "#7A6A64",
                fontSize: ".95rem",
              }}
            >
              À vista
            </p>

            <div
              style={{
                marginTop: "8px",
                color: "#B08B57",
                fontWeight: "700",
                fontSize: isMobile ? "2rem" : "2.6rem",
              }}
            >
              R$ 2.997,00
            </div>

            <div
              style={{
                display: "inline-block",
                marginTop: "15px",
                background: "#EFE7DF",
                color: "#8C6A45",
                padding: "8px 16px",
                borderRadius: "30px",
                fontWeight: "700",
                fontSize: ".9rem",
              }}
            >
              Economize R$ 599,16 no pagamento à vista
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
              O RECONEXÃO não é a soma de dois processos individuais.
              Dois acompanhamentos individuais somariam R$ 4.000,00.
              Aqui, o trabalho é direcionado especificamente para a relação.
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
          CTA FINAL
      ========================================================= */}
      <section
        style={{
          background:
            "linear-gradient(180deg,#EFE7DF 0%, #FCFAF7 100%)",
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
          <span
            style={{
              color: "#B08B57",
              fontWeight: "700",
              letterSpacing: "2px",
              textTransform: "uppercase",
              fontSize: ".85rem",
            }}
          >
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
            💬 Quero conhecer o processo RECONEXÃO
          </a>

          <p
            style={{
              marginTop: "16px",
              color: "#7A6A64",
              fontSize: ".9rem",
            }}
          >
            Atendimento particular para casais
          </p>
        </div>
      </section>
    </>
  );
}
