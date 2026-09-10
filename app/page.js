"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
// outros imports

export default function Home() {

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
        ✨ Atendimento Particular - Online para todo o Brasil
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
        Você já mudou muita coisa na sua vida.
        <br />
        <span style={{ color: "#B08B57" }}>
         Agora é hora de mudar a forma como você se coloca nela.
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

Através da mentoria terapêutica individual, você fortalece sua autoestima, rompe padrões e bloqueios emocionais e volta a viver com mais leveza.
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
        href="https://wa.me/5546988042216?text=Ola%20Kamilah%2C%20vim%20pelo%20site%2C%20me%20identifiquei%20com%20o%20que%20li%2C%20e%20gostaria%20de%20dar%20o%20proximo%20passo%20e%20agendar%20a%20minha%20sessao%20de%20clareza%20emocional."
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
          💬 Agendar Sessão de Clareza — R$97,00
                  
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
          Atendimento particular individual • Online • Focado no fortalecimento emocional
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
href="https://wa.me/5546988042216?text=Ola%20Kamilah%2C%20vim%20pelo%20site%2C%20me%20identifiquei%20com%20o%20que%20li%2C%20e%20gostaria%20de%20dar%20o%20proximo%20passo%20e%20agendar%20a%20minha%20sessao%20de%20clareza%20emocional."        target="_blank"
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
          e agendar minha sessão de clareza emocional 
            R$97,00
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
        Você não precisa fazer isso sozinha(o).
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
href="https://wa.me/5546988042216?text=Ola%20Kamilah%2C%20vim%20pelo%20site%2C%20me%20identifiquei%20com%20o%20que%20li%2C%20e%20gostaria%20de%20dar%20o%20proximo%20passo%20e%20agendar%20a%20minha%20sessao%20de%20clareza%20emocional."        target="_blank"
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
        Cada pessoa vive um processo único.
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
href="https://wa.me/5546988042216?text=Ola%20Kamilah%2C%20vim%20pelo%20site%2C%20me%20identifiquei%20com%20o%20que%20li%2C%20e%20gostaria%20de%20dar%20o%20proximo%20passo%20e%20agendar%20a%20minha%20sessao%20de%20clareza%20emocional."        target="_blank"
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
        Agendar minha sessão de clareza por R$97,00
      </a>
    </div>
  </div>
</section>
{/* RECONEXÃO — UM NOVO NÓS */}
<section
  id="reconexao"
  style={{
    padding: isMobile ? "85px 8%" : "120px 8%",
    background: "linear-gradient(180deg,#EFE7DF 0%, #FCFAF7 100%)",
  }}
>
  <div
    style={{
      maxWidth: "1180px",
      margin: "0 auto",
    }}
  >

    {/* TRANSIÇÃO PARA RELACIONAMENTOS */}
    <div
      style={{
        textAlign: "center",
        maxWidth: "860px",
        margin: "0 auto 70px",
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
        RELACIONAMENTOS & CASAIS
      </span>

      <h2
        style={{
          fontSize: isMobile ? "2rem" : "3.1rem",
          color: "#4A3732",
          marginTop: "20px",
          marginBottom: "28px",
          lineHeight: "1.22",
        }}
      >
        E quando a transformação que você deseja
        <br />
        também envolve a relação que você vive?
      </h2>

      <p
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          color: "#6B5B56",
          fontSize: "1.12rem",
          lineHeight: "2rem",
        }}
      >
        Existem momentos em que o casal percebe que está preso nos mesmos
        conflitos, se afastando emocionalmente ou vivendo uma relação
        diferente daquela que gostaria de viver.
      </p>

      <p
        style={{
          maxWidth: "760px",
          margin: "22px auto 0",
          color: "#6B5B56",
          fontSize: "1.12rem",
          lineHeight: "2rem",
        }}
      >
        E talvez o que esteja acontecendo não seja simplesmente falta de amor.
        Talvez existam padrões, feridas e formas de se relacionar que precisam
        ser compreendidos e transformados.
      </p>
    </div>

    {/* IDENTIFICAÇÃO */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
        gap: isMobile ? "35px" : "70px",
        alignItems: "center",
      }}
    >

      {/* TEXTO DE IDENTIFICAÇÃO */}
      <div>
        <span
          style={{
            color: "#B08B57",
            fontWeight: "700",
            letterSpacing: "2px",
            fontSize: ".85rem",
          }}
        >
          TALVEZ VOCÊS ESTEJAM VIVENDO ISSO
        </span>

        <h3
          style={{
            color: "#4A3732",
            fontSize: isMobile ? "1.8rem" : "2.35rem",
            lineHeight: "1.3",
            marginTop: "18px",
            marginBottom: "25px",
          }}
        >
          Vocês ainda se amam, mas parece que não conseguem mais se encontrar?
        </h3>

        <p
          style={{
            color: "#6B5B56",
            fontSize: "1.08rem",
            lineHeight: "2rem",
            marginBottom: "18px",
          }}
        >
          As mesmas discussões voltam a acontecer.
          Pequenas situações se transformam em grandes conflitos.
          Um tenta conversar, o outro se fecha.
          Um cobra, o outro se distancia.
        </p>

        <p
          style={{
            color: "#6B5B56",
            fontSize: "1.08rem",
            lineHeight: "2rem",
            marginBottom: "18px",
          }}
        >
          Talvez vocês já tenham tentado conversar.
          Talvez tenham prometido que seria diferente.
          Talvez estejam cansados de repetir os mesmos ciclos.
        </p>

        <p
          style={{
            color: "#6B5B56",
            fontSize: "1.08rem",
            lineHeight: "2rem",
            margin: 0,
          }}
        >
          Quando a relação começa a ser marcada por distância, cobranças,
          silêncio, mágoas ou conflitos recorrentes, olhar apenas para o último
          problema nem sempre é suficiente.
        </p>
      </div>

      {/* FRASE DE IMPACTO */}
      <div
        style={{
          background: "#FFFFFF",
          borderRadius: "30px",
          padding: isMobile ? "35px 28px" : "50px",
          boxShadow: "0 15px 40px rgba(0,0,0,.05)",
          border: "1px solid rgba(176,139,87,.12)",
        }}
      >
        <div
          style={{
            fontSize: "2.5rem",
            color: "#B08B57",
            marginBottom: "18px",
            lineHeight: 1,
          }}
        >
          “
        </div>

        <h3
          style={{
            color: "#4A3732",
            fontSize: isMobile ? "1.7rem" : "2.2rem",
            lineHeight: "1.35",
            marginBottom: "20px",
          }}
        >
          Talvez o problema não seja a falta de amor.
        </h3>

        <p
          style={{
            color: "#B08B57",
            fontSize: isMobile ? "1.25rem" : "1.5rem",
            lineHeight: "1.6",
            fontWeight: "600",
            margin: 0,
          }}
        >
          Talvez seja a forma como vocês aprenderam a se relacionar.
        </p>
      </div>
    </div>

    {/* APRESENTAÇÃO DO PROCESSO */}
    <div
      style={{
        marginTop: isMobile ? "75px" : "95px",
        background: "#F8F5F2",
        borderRadius: "35px",
        padding: isMobile ? "40px 28px" : "60px",
        textAlign: "center",
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
        UM PROCESSO PARA DOIS
      </span>

      <h3
        style={{
          marginTop: "18px",
          color: "#4A3732",
          fontSize: isMobile ? "2rem" : "2.8rem",
          lineHeight: "1.2",
          marginBottom: "22px",
        }}
      >
        RECONEXÃO — UM NOVO NÓS
      </h3>

      <p
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          color: "#6B5B56",
          fontSize: "1.1rem",
          lineHeight: "2rem",
        }}
      >
        Um processo terapêutico estruturado para casais que desejam compreender
        a dinâmica da relação, reconhecer padrões que se repetem, transformar
        formas de comunicação e construir uma nova maneira de se relacionar.
      </p>

      <p
        style={{
          maxWidth: "780px",
          margin: "22px auto 0",
          color: "#6B5B56",
          fontSize: "1.08rem",
          lineHeight: "2rem",
        }}
      >
        São 8 encontros, organizados para que o casal possa olhar para a
        relação com mais consciência, compreender o que sustenta os conflitos
        e construir novos caminhos para a convivência.
      </p>
    </div>

    {/* COMO FUNCIONA O ACOMPANHAMENTO */}
    <div
      style={{
        marginTop: isMobile ? "65px" : "80px",
        textAlign: "center",
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
        COMO FUNCIONA O ACOMPANHAMENTO
      </span>

      <h3
        style={{
          color: "#4A3732",
          fontSize: isMobile ? "1.9rem" : "2.7rem",
          marginTop: "18px",
          marginBottom: "25px",
          lineHeight: "1.25",
        }}
      >
        Um processo com começo, desenvolvimento e continuidade.
      </h3>

      <p
        style={{
          maxWidth: "780px",
          margin: "0 auto 55px",
          color: "#6B5B56",
          fontSize: "1.08rem",
          lineHeight: "2rem",
        }}
      >
        Cada encontro possui uma função dentro do processo. A estrutura oferece
        direção ao casal, enquanto a condução respeita a história, o momento e
        as necessidades que surgem ao longo do acompanhamento.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: isMobile ? "1fr" : "repeat(4,1fr)",
          gap: "22px",
        }}
      >
        {[
          {
            numero: "01",
            titulo: "Compreender",
            texto:
              "Olhar para a dinâmica do casal, identificar padrões de conflito e compreender o que existe por trás do que vocês vivem.",
          },
          {
            numero: "02",
            titulo: "Desconstruir",
            texto:
              "Trabalhar emoções, feridas, ressentimentos e formas de comunicação que mantêm o casal preso aos mesmos ciclos.",
          },
          {
            numero: "03",
            titulo: "Reconstruir",
            texto:
              "Desenvolver novas formas de diálogo, responsabilidade, confiança e acordos dentro da relação.",
          },
          {
            numero: "04",
            titulo: "Sustentar",
            texto:
              "Fortalecer as mudanças construídas e criar recursos para que uma nova forma de se relacionar possa continuar.",
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              background: "#FFFFFF",
              borderRadius: "25px",
              padding: "32px 25px",
              textAlign: "left",
              boxShadow: "0 12px 30px rgba(0,0,0,.05)",
              border: "1px solid rgba(176,139,87,.08)",
            }}
          >
            <div
              style={{
                width: "52px",
                height: "52px",
                borderRadius: "50%",
                background: "#EFE7DF",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#B08B57",
                fontWeight: "700",
                fontSize: ".95rem",
                marginBottom: "22px",
              }}
            >
              {item.numero}
            </div>

            <h4
              style={{
                color: "#4A3732",
                fontSize: "1.25rem",
                marginBottom: "15px",
              }}
            >
              {item.titulo}
            </h4>

            <p
              style={{
                color: "#6B5B56",
                lineHeight: "1.8rem",
                fontSize: ".96rem",
                margin: 0,
              }}
            >
              {item.texto}
            </p>
          </div>
        ))}
      </div>
    </div>

    {/* RESPONSABILIDADE E PROPÓSITO */}
    <div
      style={{
        marginTop: isMobile ? "70px" : "90px",
        textAlign: "center",
        maxWidth: "900px",
        marginInline: "auto",
      }}
    >
      <h3
        style={{
          color: "#4A3732",
          fontSize: isMobile ? "1.8rem" : "2.35rem",
          lineHeight: "1.3",
          marginBottom: "22px",
        }}
      >
        Não é sobre encontrar culpados.
        <br />
        É sobre compreender a dinâmica que vocês construíram.
      </h3>

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

    {/* INVESTIMENTO */}
    <div
      style={{
        marginTop: isMobile ? "70px" : "90px",
        background: "#FFFFFF",
        borderRadius: "35px",
        padding: isMobile ? "42px 28px" : "60px",
        textAlign: "center",
        boxShadow: "0 15px 40px rgba(0,0,0,.05)",
        border: "1px solid rgba(176,139,87,.12)",
      }}
    >
      <span
        style={{
          color: "#B08B57",
          fontWeight: "700",
          letterSpacing: "2px",
          fontSize: ".85rem",
          textTransform: "uppercase",
        }}
      >
        ATENDIMENTO PARTICULAR PARA CASAIS
      </span>

      <h3
        style={{
          color: "#4A3732",
          fontSize: isMobile ? "2rem" : "2.7rem",
          marginTop: "18px",
          marginBottom: "18px",
          lineHeight: "1.2",
        }}
      >
        Um investimento na relação que vocês desejam construir.
      </h3>

      <p
        style={{
          maxWidth: "760px",
          margin: "0 auto 40px",
          color: "#6B5B56",
          fontSize: "1.05rem",
          lineHeight: "1.9rem",
        }}
      >
        O RECONEXÃO é um acompanhamento terapêutico particular,
        estruturado em 8 encontros e desenvolvido especificamente para o casal.
      </p>

      {/* CONDIÇÕES DE PAGAMENTO */}
      <div
        style={{
          background: "#F8F5F2",
          borderRadius: "25px",
          padding: isMobile ? "30px 20px" : "40px",
          maxWidth: "650px",
          margin: "0 auto",
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
            fontSize: isMobile ? "2.1rem" : "2.7rem",
            lineHeight: "1.2",
          }}
        >
          12x de R$ 299,68
        </div>

        <div
          style={{
            width: "100%",
            height: "1px",
            background: "rgba(176,139,87,.18)",
            margin: "30px 0",
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
            fontSize: isMobile ? "2rem" : "2.5rem",
            lineHeight: "1.2",
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
      </div>

      {/* COMPARAÇÃO COM DOIS PROCESSOS INDIVIDUAIS */}
      <div
        style={{
          maxWidth: "720px",
          margin: "35px auto 0",
          padding: isMobile ? "24px 20px" : "28px 35px",
          background: "#FCFAF7",
          borderRadius: "22px",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#6B5B56",
            fontSize: ".98rem",
            lineHeight: "1.8rem",
          }}
        >
          O RECONEXÃO não é a soma de dois processos individuais.
          Para comparação, dois acompanhamentos individuais somariam{" "}
          <strong style={{ color: "#4A3732" }}>
            R$ 4.000,00
          </strong>
          . O RECONEXÃO foi estruturado especificamente para trabalhar a{" "}
          <strong style={{ color: "#4A3732" }}>
            relação como um todo
          </strong>
          .
        </p>
      </div>

      {/* FRASE MANIFESTO */}
      <div
        style={{
          marginTop: "42px",
          paddingTop: "32px",
          borderTop: "1px solid rgba(176,139,87,.18)",
        }}
      >
        <p
          style={{
            margin: 0,
            color: "#4A3732",
            fontSize: isMobile ? "1.3rem" : "1.6rem",
            lineHeight: "1.6",
            fontWeight: "600",
          }}
        >
          Não é sobre voltar a ser como antes.
          <br />
          <span style={{ color: "#B08B57" }}>
            É sobre construir um novo nós.
          </span>
        </p>
      </div>

      {/* CTA WHATSAPP */}
      <a
        href="https://wa.me/5546988042216?text=Ol%C3%A1%2C%20Kamilah%21%20Conheci%20o%20processo%20RECONEX%C3%83O%20%E2%80%94%20UM%20NOVO%20N%C3%93S%20no%20site%20e%20tenho%20interesse%20em%20iniciar%20o%20processo%20de%20terapia%20de%20casal.%20Gostaria%20de%20entender%20como%20funciona%20e%20saber%20os%20pr%C3%B3ximos%20passos."
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          window.gtag?.("event", "whatsapp_click", {
            button_location: "reconexao",
          })
        }
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "40px",
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
          marginTop: "18px",
          color: "#7A6A64",
          fontSize: ".9rem",
          lineHeight: "1.6",
        }}
      >
        Atendimento particular • 8 encontros • Processo terapêutico para casais
      </p>
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
      Cada pessoa possui uma história única. Por isso, o processo terapêutico
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
          titulo: "Olhar para o ser humano como um todo",
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
      gap: isMobile ? "45px" : "70px",
    }}
  >

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
          overflow: "hidden",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
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
        width: "100%",
      }}
    >
      <span
        style={{
          color: "#B08B57",
          fontWeight: "700",
          letterSpacing: "2px",
          fontSize: ".85rem",
          textTransform: "uppercase",
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
        Meu trabalho é acompanhar pessoas e casais que perceberam que não
        querem continuar vivendo da mesma forma.
      </h2>

      <p
        style={{
          color: "#6B5B56",
          lineHeight: "2rem",
          fontSize: "1.08rem",
          marginBottom: "22px",
        }}
      >
        Eu me chamo Kamilah Franco, e meu propósito é acompanhar processos
        de transformação emocional com profundidade, acolhimento e
        direcionamento.
      </p>

      <p
        style={{
          color: "#6B5B56",
          lineHeight: "2rem",
          fontSize: "1.08rem",
          marginBottom: "22px",
        }}
      >
        No atendimento individual, meu trabalho é ajudar você a compreender
        padrões emocionais, fortalecer sua estrutura interna e desenvolver
        uma nova forma de se posicionar diante da própria vida.
      </p>

      <p
        style={{
          color: "#6B5B56",
          lineHeight: "2rem",
          fontSize: "1.08rem",
          marginBottom: "22px",
        }}
      >
        No trabalho com casais, o olhar se amplia para a relação: para os
        padrões que vocês construíram juntos, os conflitos que se repetem,
        as feridas que ainda interferem na convivência e a forma como vocês
        podem construir uma nova maneira de se relacionar.
      </p>

      <p
        style={{
          color: "#6B5B56",
          lineHeight: "2rem",
          fontSize: "1.08rem",
          marginBottom: "25px",
        }}
      >
        Em ambos os processos, existe um ponto em comum:
        <strong style={{ color: "#4A3732" }}>
          {" "}compreender antes de transformar.
        </strong>
      </p>

      <p
        style={{
          color: "#6B5B56",
          lineHeight: "2rem",
          fontSize: "1.08rem",
          marginBottom: "0",
        }}
      >
             Cada acompanhamento é conduzido de forma estruturada e personalizada,
        respeitando a história, o momento e os objetivos de quem chega até mim.
      </p>

      {/* DIFERENCIAIS DO TRABALHO */}
      <div
        style={{
          marginTop: "35px",
          display: "grid",
          gap: "15px",
        }}
      >
        {[
          "✔ Atendimento personalizado individual e para casais",
          "✔ Processos estruturados e adaptados a cada realidade",
          "✔ Olhar profundo para padrões emocionais e relacionais",
          "✔ Atendimento online ",
        ].map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              color: "#4A3732",
              fontWeight: "500",
              lineHeight: "1.5rem",
            }}
          >
            {item}
          </div>
        ))}
      </div>
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

    {/* TÍTULO */}
    <span
      style={{
        color: "#B08B57",
        letterSpacing: "2px",
        fontWeight: "700",
        fontSize: ".85rem",
        textTransform: "uppercase",
      }}
    >
      O QUE TORNA O NOSSO TRABALHO DIFERENTE
    </span>

    <h2
      style={{
        marginTop: "18px",
        color: "#4A3732",
        fontSize: isMobile ? "2rem" : "3rem",
        lineHeight: "1.2",
        maxWidth: "1000px",
        marginInline: "auto",
      }}
    >
      Mais do que sessões, você encontra processos estruturados
      para gerar mudanças reais.
    </h2>

    <p
      style={{
        maxWidth: "800px",
        margin: "30px auto 70px",
        color: "#6B5B56",
        lineHeight: "2rem",
        fontSize: "1.1rem",
      }}
    >
      Cada história é única. Por isso, os processos são estruturados com
      direção, mas conduzidos com sensibilidade para respeitar o momento,
      as necessidades e os objetivos de cada pessoa ou casal.
    </p>

    {/* CARDS */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: isMobile
          ? "1fr"
          : "repeat(3, 1fr)",
        gap: "28px",
      }}
    >
      {[
        {
          icone: "🌿",
          titulo: "Atendimento personalizado",
          texto:
            "Cada acompanhamento considera a história, o momento, as necessidades e os objetivos de quem está sendo atendido — seja individualmente ou como casal.",
        },
        {
          icone: "✨",
          titulo: "Processos estruturados",
          texto:
            "Cada processo possui uma direção clara e etapas definidas, sem perder a flexibilidade necessária para respeitar a realidade de cada história.",
        },
        {
          icone: "🤍",
          titulo: "Olhar para além do conflito",
          texto:
            "O trabalho não se limita ao problema que trouxe você até aqui. Buscamos compreender os padrões que sustentam o que está sendo vivido para que mudanças mais profundas possam acontecer.",
        },
        {
          icone: "🌸",
          titulo: "Profundidade e continuidade",
          texto:
            "O objetivo não é apenas aliviar um desconforto momentâneo, mas promover compreensão, desenvolvimento e mudanças que possam ser sustentadas ao longo do tempo.",
        },
        {
          icone: "💻",
          titulo: "Atendimento online",
          texto:
            "Acompanhamentos realizados com privacidade, acolhimento e segurança, de forma online para todo o Brasil e presencialmente no Instituto.",
        },
        {
          icone: "💛",
          titulo: "Um olhar para a pessoa e para a relação",
          texto:
            "Cada processo considera o ser humano em sua totalidade e, quando o atendimento é para casais, também olha para a dinâmica construída entre os dois.",
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

          {/* ÍCONE */}
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

          {/* TÍTULO DO CARD */}
          <h3
            style={{
              color: "#4A3732",
              marginBottom: "18px",
              fontSize: "1.35rem",
              lineHeight: "1.35",
            }}
          >
            {item.titulo}
          </h3>

          {/* TEXTO */}
          <p
            style={{
              color: "#6B5B56",
              lineHeight: "1.9rem",
              margin: 0,
              fontSize: "1rem",
            }}
          >
            {item.texto}
          </p>

        </div>
      ))}
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
        textTransform: "uppercase",
      }}
    >
      EXPERIÊNCIAS REAIS
    </span>

    <h2
      style={{
        marginTop: "20px",
        marginBottom: "25px",
        color: "#4A3732",
        fontSize: isMobile ? "2rem" : "3rem",
        lineHeight: "1.25",
      }}
    >
      Cada processo é único.
      <br />
      Toda transformação começa com uma decisão.
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
      Pessoas chegam ao Instituto com histórias, desafios e momentos
      diferentes. O que existe em comum é a decisão de olhar para aquilo
      que precisa ser compreendido e transformado.
    </p>

    {/* CARDS DE DEPOIMENTOS */}
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
          tipo: "Processo Individual",
        },
        {
          texto:
            "Cheguei completamente sobrecarregada. Aos poucos fui entendendo meus padrões e hoje consigo estabelecer limites sem culpa.",
          tipo: "Processo Individual",
        },
        {
          texto:
            "Foi a primeira vez que realmente me senti acolhida. O processo me ajudou a reencontrar minha confiança.",
          tipo: "Processo Individual",
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
              fontSize: ".95rem",
            }}
          >
            {item.tipo}
          </strong>
        </div>
      ))}
    </div>

    {/* CTA */}
    <div
      style={{
        marginTop: "70px",
      }}
    >
      <a
        href="https://wa.me/5546988042216?text=Ol%C3%A1%2C%20Kamilah%21%20Conheci%20o%20Instituto%20pelo%20site%20e%20gostaria%20de%20conhecer%20os%20processos%20de%20atendimento."
        target="_blank"
        rel="noopener noreferrer"
        onClick={() =>
          window.gtag?.("event", "whatsapp_click", {
            button_location: "depoimentos",
          })
        }
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#25D366",
          color: "#FFF",
          padding: isMobile ? "17px 28px" : "18px 40px",
          borderRadius: "60px",
          textDecoration: "none",
          fontWeight: "700",
          fontSize: "1rem",
          boxShadow: "0 10px 30px rgba(37,211,102,.25)",
          textAlign: "center",
        }}
      >
        Conhecer os processos do Instituto
      </a>
    </div>
  </div>
</section>
  </>
  );
}
