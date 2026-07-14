"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
// outros imports

export default function Home() {

const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkMobile = () => {
    setIsMobile(window.innerWidth < 768);
  };

  checkMobile();

  window.addEventListener("resize", checkMobile);

  return () => window.removeEventListener("resize", checkMobile);
}, []);
  return (
    <>
{/* HERO */}
<section
 id="inicio"
  style={{
    background: "linear-gradient(180deg,#FCFAF7 0%, #F5F1EC 100%)",
    padding: isMobile ? "60px 8% 80px" : "90px 8% 110px",
  }}
>
  <div
    style={{
      maxWidth: "1300px",
      margin: "0 auto",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "70px",
    }}
  >
    {/* TEXTO */}
    <div
      style={{
        flex: 1,
        maxWidth: "620px",
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
          fontWeight: "600",
          fontSize: ".9rem",
          marginBottom: "25px",
        }}
      >
        ✨ Atendimento Online para todo o Brasil
      </div>

      <h1
        style={{
          fontSize: isMobile ? "2.3rem" : "3.7rem",
          lineHeight: "1.15",
          color: "#4A3732",
          marginBottom: "28px",
          fontWeight: "700",
        }}
      >
        Você faz de tudo pelos outros...
        <br />
        <span style={{ color: "#B08B57" }}>
          Mas quem está cuidando de você?
        </span>
      </h1>

      <p
        style={{
          fontSize: "1.15rem",
          lineHeight: "2rem",
          color: "#6B5B56",
          marginBottom: "40px",
        }}
      >
        Você não precisa continuar carregando tudo sozinha(o).

Através de um acompanhamento terapêutico individual, você fortalece sua autoestima, rompe padrões emocionais e volta a viver com mais leveza.
      </p>

      <div
        style={{
          display: "flex",
          gap: "18px",
          flexWrap: "wrap",
          marginBottom: "35px",
        }}
      >
        <a
          href="https://wa.me/5546988042216?text=Olá%20Kamilah,%20vim%20pelo%20site%20e%20me%20identifiquei%20com%20o%20que%20li.%20Gostaria%20de%20saber%20como%20você%20pode%20me%20ajudar."
          target="_blank"
          rel="noopener noreferrer"
          onClick={() =>
            window.gtag?.("event", "whatsapp_click", {
              button_location: "hero",
            })
          }
          style={{
            background: "#25D366",
            color: "#fff",
            padding: "18px 34px",
            borderRadius: "60px",
            textDecoration: "none",
            fontWeight: "700",
            display: "flex",
            alignItems: "center",
            gap: "12px",
            boxShadow: "0 12px 30px rgba(37,211,102,.25)",
          }}
        >
          💬 Quero começar minha transformação
        </a>

        <a
          href="#processos"
          style={{
            border: "2px solid #B08B57",
            color: "#B08B57",
            padding: "18px 34px",
            borderRadius: "60px",
            textDecoration: "none",
            fontWeight: "700",
          }}
        >
          Como funciona o processo
        </a>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          color: "#6B5B56",
        }}
      >
        <div
          style={{
            fontSize: "1.2rem",
            color: "#D4AF37",
            letterSpacing: "2px",
          }}
        >
          ★★★★★
        </div>

        <div
          style={{
            fontSize: ".95rem",
          }}
        >
          Atendimento individual • Online e Presencial • Focado no fortalecimento emocional
        </div>
      </div>
    </div>

    {/* FOTO */}
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
      }}
>
  <div
  style={{
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
  <div
    style={{
      position: "absolute",
      width: isMobile ? "280px" : "420px",
      height: isMobile ? "280px" : "420px",
      background: "#EADFCC",
      borderRadius: "50%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      zIndex: 1,
    }}
  />

        <Image
          src="/kamilah.png"
          alt="Kamilah Franco"
          width={520}
          height={700}
          priority
          style={{
  position: "relative",
  width: "100%",
  maxWidth: isMobile ? "300px" : "560px",
  height: "auto",
  display: "block",
  zIndex: 2,
}}
        />
      </div>
    </div>
  </div>
</section>
{/* FAIXA DE CONFIANÇA */}
<section
  style={{
    backgroundColor: "#FCFAF7",
    padding: isMobile ? "30px 8%" : "45px 8%",
    borderTop: "1px solid rgba(176,139,87,.15)",
    borderBottom: "1px solid rgba(176,139,87,.15)",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: isMobile
        ? "1fr"
        : "repeat(3,1fr)",
      gap: "25px",
    }}
  >
    {[
      {
        titulo: "🌿 Atendimento Individual",
        texto:
          "Cada processo é conduzido de forma personalizada, respeitando sua história, seu momento e seus objetivos.",
      },
      {
        titulo: "🤍 Espaço Seguro",
        texto:
          "Um ambiente acolhedor para você falar sobre o que sente, sem julgamentos e no seu tempo.",
      },
      {
        titulo: "✨ Online para todo o Brasil",
        texto:
          "Receba acompanhamento no conforto da sua casa, com praticidade, privacidade e segurança.",
      },
    ].map((item, index) => (
      <div
        key={index}
        style={{
          background: "#FFFFFF",
          borderRadius: "22px",
          padding: "28px",
          boxShadow: "0 10px 25px rgba(0,0,0,.05)",
        }}
      >
        <h3
          style={{
            color: "#4A3732",
            fontSize: "1.2rem",
            marginBottom: "15px",
          }}
        >
          {item.titulo}
        </h3>

        <p
          style={{
            color: "#6B5B56",
            lineHeight: "1.8rem",
            fontSize: ".98rem",
            margin: 0,
          }}
        >
          {item.texto}
        </p>
      </div>
    ))}
  </div>
</section>

{/* TRANSIÇÃO */}
<section
  style={{
    padding: isMobile ? "70px 8%" : "100px 8%",
    background:
      "linear-gradient(180deg,#FCFAF7 0%,#EFE7DF 100%)",
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
      Talvez você esteja vivendo isso...
    </span>

    <h2
      style={{
        fontSize: isMobile ? "2rem" : "3rem",
        color: "#4A3732",
        marginTop: "18px",
        marginBottom: "25px",
        lineHeight: "1.25",
      }}
    >
      Muitas pessoas chegam até aqui acreditando que precisam ser fortes o tempo todo.
    </h2>

    <p
      style={{
        maxWidth: "760px",
        margin: "0 auto",
        color: "#6B5B56",
        fontSize: "1.15rem",
        lineHeight: "2rem",
      }}
    >
      Com o tempo, passam a ignorar as próprias necessidades, carregam
      tudo sozinhas e sentem que estão se afastando de quem realmente são.
      Se alguma dessas situações faz sentido para você, saiba que não está
      sozinha(o).
    </p>
  </div>
</section>
{/* IDENTIFICAÇÃO */}
<section
  id="experiencias"
  style={{
    padding: isMobile ? "80px 8%" : "120px 8%",
    background: "#F8F5F2",
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
      VOCÊ NÃO ESTÁ SOZINHA(O)
    </span>

    <h2
      style={{
        marginTop: "20px",
        fontSize: isMobile ? "2rem" : "3.2rem",
        color: "#4A3732",
        lineHeight: "1.25",
      }}
    >
      Talvez você esteja vivendo exatamente isso...
    </h2>

    <p
      style={{
        maxWidth: "760px",
        margin: "30px auto 70px",
        fontSize: "1.15rem",
        lineHeight: "2rem",
        color: "#6B5B56",
      }}
    >
      Muitas pessoas chegam até aqui acreditando que precisam dar conta de
      tudo. Aos poucos, deixam de cuidar de si mesmas e passam a viver apenas
      para atender às necessidades dos outros.
    </p>

    <div
      style={{
        display: "grid",
       gridTemplateColumns: isMobile
    ? "1fr"
    : "repeat(3,1fr)",
        gap: "25px",
      }}
    >
      {[
        {
          titulo: "Você se coloca sempre em último lugar",
          texto:
            "Cuida de todo mundo, resolve tudo, mas quando chega a sua vez, já não sobra tempo nem energia para você.",
        },
        {
          titulo: "Sente culpa quando pensa em você",
          texto:
            "Mesmo sabendo que precisa descansar ou dizer 'não', algo faz você acreditar que está sendo egoísta.",
        },
        {
          titulo: "Repete situações que machucam",
          texto:
            "Relacionamentos, decisões ou comportamentos parecem mudar por um tempo, mas acabam voltando ao mesmo lugar.",
        },
        {
          titulo: "Está emocionalmente sobrecarregada(o)",
          texto:
            "Você sente que está cansada o tempo todo, mesmo quando aparentemente nada aconteceu.",
        },
        {
          titulo: "Tem dificuldade para dizer 'não'",
          texto:
            "Você evita conflitos, aceita mais do que gostaria e depois acaba frustrada(o) consigo mesma(o).",
        },
        {
          titulo: "Já não reconhece quem você era",
          texto:
            "Em algum momento da caminhada você deixou de olhar para si e hoje sente que perdeu sua essência.",
        },
      ].map((item, index) => (
        <div
          key={index}
          style={{
            background: "#FFFFFF",
            borderRadius: "28px",
            padding: "35px",
            textAlign: "left",
            boxShadow: "0 12px 30px rgba(0,0,0,.05)",
            transition: ".3s",
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
              marginBottom: "22px",
              fontSize: "1.3rem",
            }}
          >
            🤍
          </div>

          <h3
            style={{
              color: "#4A3732",
              marginBottom: "18px",
              fontSize: "1.35rem",
            }}
          >
            {item.titulo}
          </h3>

          <p
            style={{
              color: "#6B5B56",
              lineHeight: "1.9rem",
              fontSize: "1rem",
            }}
          >
            {item.texto}
          </p>
        </div>
      ))}
    </div>

    <div
      style={{
        marginTop: "80px",
        maxWidth: "820px",
        marginInline: "auto",
      }}
    >
      <h3
        style={{
          fontSize: isMobile ? "1.8rem" : "2.5rem",
          color: "#4A3732",
          marginBottom: "25px",
        }}
      >
        A boa notícia é que isso não precisa continuar fazendo parte da sua vida.
      </h3>

      <p
        style={{
          color: "#6B5B56",
          lineHeight: "2rem",
          fontSize: "1.15rem",
        }}
      >
        Muitas dessas dificuldades não surgiram de uma hora para outra.
        Elas foram sendo construídas ao longo da vida.
        Da mesma forma, elas também podem ser transformadas quando você
        começa a compreender sua história, fortalecer sua estrutura emocional
        e desenvolver uma nova forma de se relacionar consigo mesma.
      </p>

      <a
        href="https://wa.me/5546988042216?text=Olá%20Kamilah,%20vim%20pelo%20site%20e%20me%20identifiquei%20com%20o%20que%20li.%20Gostaria%20de%20saber%20como%20você%20pode%20me%20ajudar."
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          window.gtag?.("event", "whatsapp_click", {
            button_location: "identificacao",
          })
        }
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "45px",
          background: "#25D366",
          color: "#FFF",
          padding: "18px 38px",
          borderRadius: "60px",
          textDecoration: "none",
          fontWeight: "700",
          fontSize: "1rem",
          boxShadow: "0 12px 30px rgba(37,211,102,.25)",
        }}
      >
        Quero conversar com a Kamilah
      </a>
    </div>
  </div>
</section>
{/* TRANSFORMAÇÃO */}
<section
  id="transformacao"
  style={{
    padding: isMobile ? "80px 8%" : "120px 8%",
    background: "#FCFAF7",
  }}
>
  <div
    style={{
      maxWidth: "1150px",
      margin: "0 auto",
    }}
  >
    <div
      style={{
        textAlign: "center",
        maxWidth: "850px",
        margin: "0 auto 70px",
      }}
    >
      <span
        style={{
          color: "#B08B57",
          letterSpacing: "2px",
          fontWeight: "700",
          fontSize: ".85rem",
        }}
      >
        IMAGINE COMO SERIA...
      </span>

      <h2
        style={{
          fontSize: isMobile ? "2rem" : "3.2rem",
          marginTop: "20px",
          color: "#4A3732",
          lineHeight: "1.25",
        }}
      >
        Viver com mais leveza, segurança e tranquilidade emocional.
      </h2>

      <p
        style={{
          marginTop: "30px",
          fontSize: "1.15rem",
          lineHeight: "2rem",
          color: "#6B5B56",
        }}
      >
        Imagine acordar todos os dias sabendo que você não precisa mais
        carregar tudo sozinha, que consegue respeitar seus próprios limites
        e que suas decisões não são mais guiadas pelo medo ou pela culpa.
      </p>
    </div>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: isMobile
  ? "1fr"
  : "repeat(auto-fit,minmax(280px,1fr))",
        gap: "25px",
      }}
    >
      {[
        "Desenvolver uma autoestima mais forte e saudável.",
        "Aprender a estabelecer limites sem culpa.",
        "Sentir mais leveza emocional no dia a dia.",
        "Tomar decisões com mais segurança.",
        "Construir relacionamentos mais saudáveis.",
        "Romper padrões de autossabotagem.",
        "Reduzir a ansiedade gerada pela sobrecarga emocional.",
        "Voltar a olhar para si mesma com carinho e respeito.",
      ].map((item, index) => (
        <div
          key={index}
          style={{
            background: "#FFFFFF",
            padding: "30px",
            borderRadius: "25px",
            display: "flex",
            alignItems: "center",
            gap: "18px",
            boxShadow: "0 10px 30px rgba(0,0,0,.05)",
          }}
        >
          <div
            style={{
              width: "45px",
              height: "45px",
              borderRadius: "50%",
              background: "#EFE7DF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
              fontSize: "1.2rem",
            }}
          >
            ✨
          </div>

          <p
            style={{
              margin: 0,
              lineHeight: "1.8rem",
              color: "#4A3732",
              fontWeight: "500",
            }}
          >
            {item}
          </p>
        </div>
      ))}
    </div>

    <div
      style={{
        marginTop: "80px",
        background: "#EFE7DF",
        borderRadius: "35px",
        padding: isMobile ? "35px" : "60px",
        textAlign: "center",
      }}
    >
      <h3
        style={{
          fontSize: isMobile ? "1.8rem" : "2.5rem",
          color: "#4A3732",
          marginBottom: "25px",
        }}
      >
        Você não precisa fazer isso sozinha.
      </h3>

      <p
        style={{
          maxWidth: "750px",
          margin: "0 auto",
          lineHeight: "2rem",
          color: "#6B5B56",
          fontSize: "1.15rem",
        }}
      >
        O acompanhamento terapêutico é um espaço seguro para compreender
        sua história, fortalecer sua estrutura emocional e construir
        mudanças reais, respeitando seu tempo e sua individualidade.
      </p>

      <a
        href="https://wa.me/5546988042216?text=Olá%20Kamilah,%20vim%20pelo%20site%20e%20me%20identifiquei%20com%20o%20que%20li.%20Gostaria%20de%20saber%20como%20você%20pode%20me%20ajudar."
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          window.gtag?.("event", "whatsapp_click", {
            button_location: "transformacao",
          })
        }
        style={{
          display: "inline-flex",
          marginTop: "40px",
          background: "#25D366",
          color: "#fff",
          padding: "18px 40px",
          borderRadius: "60px",
          textDecoration: "none",
          fontWeight: "700",
          boxShadow: "0 10px 30px rgba(37,211,102,.25)",
        }}
      >
        Quero iniciar meu processo
      </a>
    </div>
  </div>
</section>
{/* COMO FUNCIONA */}
<section
  id="processos"
  style={{
    padding: isMobile ? "90px 8%" : "130px 8%",
    background: "#F8F5F2",
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
        letterSpacing: "2px",
        fontWeight: "700",
        fontSize: ".85rem",
      }}
    >
      COMO FUNCIONA
    </span>

    <h2
      style={{
        fontSize: isMobile ? "2rem" : "3.2rem",
        color: "#4A3732",
        marginTop: "20px",
        marginBottom: "25px",
        lineHeight: "1.2",
      }}
    >
      Seu processo acontece em três etapas.
    </h2>

    <p
      style={{
        maxWidth: "760px",
        margin: "0 auto 70px",
        color: "#6B5B56",
        lineHeight: "2rem",
        fontSize: "1.1rem",
      }}
    >
      O objetivo não é apenas aliviar o que você está sentindo hoje,
      mas fortalecer sua estrutura emocional para que você possa viver
      de forma mais leve, consciente e segura.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "repeat(3,1fr)",
        gap: "30px",
      }}
    >
      {/* PASSO 1 */}

      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "30px",
          padding: "45px 35px",
          boxShadow: "0 15px 35px rgba(0,0,0,.05)",
        }}
      >
        <div
          style={{
            width: "75px",
            height: "75px",
            margin: "0 auto 30px",
            borderRadius: "50%",
            background: "#EFE7DF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.8rem",
            color: "#B08B57",
            fontWeight: "700",
          }}
        >
          1
        </div>

        <h3
          style={{
            color: "#4A3732",
            fontSize: "1.5rem",
            marginBottom: "20px",
          }}
        >
          Clareza
        </h3>

        <p
          style={{
            color: "#6B5B56",
            lineHeight: "1.9rem",
          }}
        >
          No primeiro momento buscamos compreender sua história,
          identificar padrões emocionais e entender o que está
          impedindo você de viver com mais tranquilidade.
        </p>
      </div>

      {/* PASSO 2 */}

      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "30px",
          padding: "45px 35px",
          boxShadow: "0 15px 35px rgba(0,0,0,.05)",
        }}
      >
        <div
          style={{
            width: "75px",
            height: "75px",
            margin: "0 auto 30px",
            borderRadius: "50%",
            background: "#EFE7DF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.8rem",
            color: "#B08B57",
            fontWeight: "700",
          }}
        >
          2
        </div>

        <h3
          style={{
            color: "#4A3732",
            fontSize: "1.5rem",
            marginBottom: "20px",
          }}
        >
          Fortalecimento
        </h3>

        <p
          style={{
            color: "#6B5B56",
            lineHeight: "1.9rem",
          }}
        >
          Durante o acompanhamento você desenvolve recursos emocionais,
          aprende a estabelecer limites, fortalece sua autoestima
          e começa a construir uma nova forma de se relacionar consigo mesma.
        </p>
      </div>

      {/* PASSO 3 */}

      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "30px",
          padding: "45px 35px",
          boxShadow: "0 15px 35px rgba(0,0,0,.05)",
        }}
      >
        <div
          style={{
            width: "75px",
            height: "75px",
            margin: "0 auto 30px",
            borderRadius: "50%",
            background: "#EFE7DF",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "1.8rem",
            color: "#B08B57",
            fontWeight: "700",
          }}
        >
          3
        </div>

        <h3
          style={{
            color: "#4A3732",
            fontSize: "1.5rem",
            marginBottom: "20px",
          }}
        >
          Transformação
        </h3>

        <p
          style={{
            color: "#6B5B56",
            lineHeight: "1.9rem",
          }}
        >
          Aos poucos você passa a viver com mais segurança,
          clareza emocional e autonomia, construindo mudanças
          que permanecem também fora das sessões.
        </p>
      </div>
    </div>

    <div
      style={{
        marginTop: "80px",
        background: "#FFFFFF",
        padding: isMobile ? "35px" : "55px",
        borderRadius: "35px",
        boxShadow: "0 15px 40px rgba(0,0,0,.05)",
      }}
    >
      <h3
        style={{
          color: "#4A3732",
          fontSize: isMobile ? "1.7rem" : "2.3rem",
          marginBottom: "25px",
        }}
      >
        Cada mulher vive um processo único.
      </h3>

      <p
        style={{
          maxWidth: "760px",
          margin: "0 auto",
          color: "#6B5B56",
          lineHeight: "2rem",
          fontSize: "1.1rem",
        }}
      >
        O acompanhamento é totalmente individualizado.
        Respeitamos sua história, seu momento e seus objetivos,
        para que cada passo seja dado com segurança e no seu tempo.
      </p>

      <a
        href="https://wa.me/5546988042216?text=Olá%20Kamilah,%20vim%20pelo%20site%20e%20me%20identifiquei%20com%20o%20que%20li.%20Gostaria%20de%20saber%20como%20você%20pode%20me%20ajudar."
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          window.gtag?.("event", "whatsapp_click", {
            button_location: "como_funciona",
          })
        }
        style={{
          display: "inline-block",
          marginTop: "35px",
          background: "#25D366",
          color: "#FFF",
          padding: "18px 38px",
          borderRadius: "60px",
          textDecoration: "none",
          fontWeight: "700",
          boxShadow: "0 12px 30px rgba(37,211,102,.25)",
        }}
      >
        Quero conversar com a Kamilah
      </a>
    </div>
  </div>
</section>
{/* DIFERENCIAIS */}
<section
  style={{
    background: "#FCFAF7",
    padding: isMobile ? "90px 8%" : "120px 8%",
  }}
>
  <div
    style={{
      maxWidth: "1180px",
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <span
      style={{
        color: "#B08B57",
        letterSpacing: "2px",
        fontWeight: "700",
        fontSize: ".85rem",
      }}
    >
      O QUE TORNA ESTE PROCESSO DIFERENTE
    </span>

    <h2
      style={{
        marginTop: "18px",
        color: "#4A3732",
        fontSize: isMobile ? "2rem" : "3rem",
        lineHeight: "1.2",
      }}
    >
      Mais do que sessões, você recebe um acompanhamento pensado para gerar mudanças reais.
    </h2>

    <p
      style={{
        maxWidth: "760px",
        margin: "30px auto 70px",
        color: "#6B5B56",
        lineHeight: "2rem",
        fontSize: "1.1rem",
      }}
    >
      Cada mulher possui uma história única. Por isso, o processo terapêutico
      é construído de forma individualizada, respeitando seu momento,
      suas necessidades e seus objetivos.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: isMobile
    ? "1fr"
    : "repeat(3,1fr)",
        gap: "28px",
      }}
    >
      {[
        {
          icone: "🌿",
          titulo: "Atendimento individualizado",
          texto:
            "Cada acompanhamento é planejado considerando sua história, suas necessidades e o momento que você está vivendo.",
        },
        {
          icone: "✨",
          titulo: "Processo personalizado",
          texto:
            "Não existem protocolos engessados. Cada etapa é construída para favorecer sua evolução emocional.",
        },
        {
          icone: "🤍",
          titulo: "Acompanhamento contínuo",
          texto:
            "O objetivo não é apenas aliviar um problema momentâneo, mas fortalecer sua estrutura emocional ao longo do processo.",
        },
        {
          icone: "🌸",
          titulo: "Abordagem integrativa",
          texto:
            "Durante o acompanhamento utilizo diferentes recursos terapêuticos de acordo com a necessidade de cada pessoa, sempre de forma ética e personalizada.",
        },
        {
          icone: "💻",
          titulo: "Atendimento online",
          texto:
            "Você pode realizar todo o acompanhamento com conforto, privacidade e segurança, de qualquer lugar do Brasil.",
        },
        {
          icone: "💛",
          titulo: "Olhar para a mulher como um todo",
          texto:
            "O foco não está apenas nos sintomas, mas em fortalecer você para viver com mais equilíbrio, autonomia e qualidade de vida.",
        },
      ].map((item, index) => (
        <div
          key={index}
          style={{
            background: "#FFFFFF",
            borderRadius: "28px",
            padding: "35px",
            textAlign: "left",
            boxShadow: "0 15px 35px rgba(0,0,0,.05)",
          }}
        >
          <div
            style={{
              width: "65px",
              height: "65px",
              borderRadius: "50%",
              background: "#EFE7DF",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.6rem",
              marginBottom: "22px",
            }}
          >
            {item.icone}
          </div>

          <h3
            style={{
              color: "#4A3732",
              marginBottom: "18px",
              fontSize: "1.35rem",
            }}
          >
            {item.titulo}
          </h3>

          <p
            style={{
              color: "#6B5B56",
              lineHeight: "1.9rem",
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
{/* SOBRE KAMILAH */}
<section
 id="sobre"
  style={{
    padding: isMobile ? "90px 8%" : "130px 8%",
    background: "#FFFFFF",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      display: "flex",
      flexDirection: isMobile ? "column" : "row",
      alignItems: "center",
      gap: "70px",
    }}
  >
    {/* FOTO */}
    <div
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
      }}
    >
    <div
  style={{
    position: "relative",
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }}
>
        <div
          style={{
            position: "absolute",
            width: isMobile ? "280px" : "420px",
            height: isMobile ? "280px" : "420px",
            background: "#EFE7DF",
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
          style={{
            position: "relative",
            width: "100%",
            maxWidth: isMobile ? "300px" : "420px",
            height: "auto",
            zIndex: 2,
          }}
        />
      </div>
    </div>

    {/* TEXTO */}
    <div
      style={{
        flex: 1,
      }}
    >
      <span
        style={{
          color: "#B08B57",
          fontWeight: "700",
          letterSpacing: "2px",
          fontSize: ".85rem",
        }}
      >
        QUEM VAI CAMINHAR COM VOCÊ
      </span>

      <h2
        style={{
          fontSize: isMobile ? "2rem" : "3rem",
          color: "#4A3732",
          marginTop: "20px",
          marginBottom: "30px",
          lineHeight: "1.2",
        }}
      >
      Talvez você tenha chegado até aqui porque cansou de tentar resolver tudo sozinha. Eu me chamo Kamilah Franco.
      </h2>

      <p
        style={{
          color: "#6B5B56",
          lineHeight: "2rem",
          fontSize: "1.08rem",
          marginBottom: "22px",
        }}
      >
        Meu propósito é ajudar mulheres que, por muito tempo,
        aprenderam a cuidar de todos, mas acabaram esquecendo de cuidar de si.
      </p>

      <p
        style={{
          color: "#6B5B56",
          lineHeight: "2rem",
          fontSize: "1.08rem",
          marginBottom: "22px",
        }}
      >
        Ao longo da minha trajetória percebi que, por trás da ansiedade,
        da culpa, da dificuldade em dizer "não" e da sensação de estar sempre
        sobrecarregada, quase sempre existem padrões emocionais que precisam
        ser compreendidos e fortalecidos.
      </p>

      <p
        style={{
          color: "#6B5B56",
          lineHeight: "2rem",
          fontSize: "1.08rem",
          marginBottom: "22px",
        }}
      >
        É por isso que cada atendimento acontece de forma individual,
        respeitando sua história, seu tempo e seus objetivos.
        Mais do que oferecer uma sessão, meu compromisso é caminhar ao seu lado
        para que você desenvolva recursos internos e construa mudanças reais.
      </p>

      <div
        style={{
          marginTop: "35px",
          display: "grid",
          gap: "15px",
        }}
      >
        {[
          "✔ Atendimento acolhedor e individualizado",
          "✔ Processo adaptado à sua realidade",
          "✔ Desenvolvimento emocional com profundidade",
          "✔ Atendimento online para todo o Brasil",
        ].map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "#4A3732",
              fontWeight: "500",
            }}
          >
            {item}
          </div>
        ))}
      </div>

      <a
        href="https://wa.me/5546988042216?text=Olá%20Kamilah,%20vim%20pelo%20site%20e%20me%20identifiquei%20com%20o%20que%20li.%20Gostaria%20de%20saber%20como%20você%20pode%20me%20ajudar."
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          window.gtag?.("event", "whatsapp_click", {
            button_location: "sobre",
          })
        }
        style={{
          display: "inline-block",
          marginTop: "45px",
          background: "#25D366",
          color: "#FFF",
          padding: "18px 38px",
          borderRadius: "60px",
          textDecoration: "none",
          fontWeight: "700",
          boxShadow: "0 12px 30px rgba(37,211,102,.25)",
        }}
      >
        Quero dar o primeiro passo
      </a>
    </div>
  </div>
</section>
{/* DEPOIMENTOS */}
<section
  style={{
    background: "#F8F5F2",
    padding: isMobile ? "90px 8%" : "130px 8%",
  }}
>
  <div
    style={{
      maxWidth: "1180px",
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <span
      style={{
        color: "#B08B57",
        letterSpacing: "2px",
        fontWeight: "700",
        fontSize: ".85rem",
      }}
    >
      DEPOIMENTOS
    </span>

    <h2
      style={{
        marginTop: "20px",
        marginBottom: "25px",
        color: "#4A3732",
        fontSize: isMobile ? "2rem" : "3rem",
      }}
    >
      Cada processo é único.
      <br />
      Mas todos começam com uma decisão.
    </h2>

    <p
      style={{
        maxWidth: "720px",
        margin: "0 auto 70px",
        color: "#6B5B56",
        lineHeight: "2rem",
        fontSize: "1.1rem",
      }}
    >
      Algumas mulheres chegaram até aqui cansadas,
      inseguras e sem saber por onde começar.
      Hoje vivem sua jornada de forma muito diferente.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns: isMobile
    ? "1fr"
    : "repeat(3,1fr)",
        gap: "28px",
      }}
    >
      {[
        {
          texto:
            "Hoje consigo olhar para mim com mais carinho. Aprendi que cuidar de mim não é egoísmo. Foi um processo transformador.",
        },
        {
          texto:
            "Cheguei completamente sobrecarregada. Aos poucos fui entendendo meus padrões e hoje consigo estabelecer limites sem culpa.",
        },
        {
          texto:
            "Foi a primeira vez que realmente me senti acolhida. O processo me ajudou a reencontrar minha confiança.",
        },
      ].map((item, index) => (
        <div
          key={index}
          style={{
            background: "#FFF",
            padding: "35px",
            borderRadius: "28px",
            textAlign: "left",
            boxShadow: "0 15px 35px rgba(0,0,0,.05)",
          }}
        >
          <div
            style={{
              fontSize: "2rem",
              color: "#B08B57",
              marginBottom: "18px",
            }}
          >
            “
          </div>

          <p
            style={{
              color: "#6B5B56",
              lineHeight: "2rem",
              marginBottom: "25px",
            }}
          >
            {item.texto}
          </p>

          <strong
            style={{
              color: "#4A3732",
            }}
          >
            Atendimento Individual
          </strong>
        </div>
      ))}
    </div>

    <div
      style={{
        marginTop: "70px",
      }}
    >
      <a
        href="https://wa.me/5546988042216?text=Olá%20Kamilah,%20vim%20pelo%20site%20e%20gostaria%20de%20conhecer%20o%20acompanhamento."
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          window.gtag?.("event", "whatsapp_click", {
            button_location: "depoimentos",
          })
        }
        style={{
          display: "inline-block",
          background: "#25D366",
          color: "#FFF",
          padding: "18px 40px",
          borderRadius: "60px",
          textDecoration: "none",
          fontWeight: "700",
          boxShadow: "0 10px 30px rgba(37,211,102,.25)",
        }}
      >
        Quero iniciar meu acompanhamento
      </a>
    </div>
  </div>
</section>
    </>
  );
}
