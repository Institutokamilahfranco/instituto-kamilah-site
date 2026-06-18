"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [isMobile, setIsMobile] = useState(false);

useEffect(() => {
  const checkScreen = () => {
    setIsMobile(window.innerWidth < 900);
  };

  checkScreen();
  window.addEventListener("resize", checkScreen);

  return () => window.removeEventListener("resize", checkScreen);
}, []);
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
    padding: "80px 8%",
    background:
      "linear-gradient(to bottom, #FCFAF7 0%, #F5F1EC 100%)",
    maxWidth: "1400px",
    margin: "0 auto",
  }}
>
<div
  style={{
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "40px",
    marginBottom: "40px",
  }}
>
  <h1
    style={{
      order: isMobile ? 2 : 1,
      flex: 1,
      fontSize: "clamp(2rem, 3vw, 3rem)",
      lineHeight: "1",
      color: "#4A3732",
      margin: 0,
    }}
  >
    Fortalecimento emocional para mulheres que desejam viver com mais leveza, clareza, segurança e propósito.
  </h1>
      
<div
  style={{
    order: isMobile ? 1 : 2,
  }}
>
  <Image
    src="/logo.jpeg"
    alt="Instituto Kamilah Franco"
    width={280}
    height={280}
    style={{
      width: "100%",
      maxWidth: "280px",
      height: "auto",
      filter: "drop-shadow(0 10px 25px rgba(0,0,0,0.08))",
    }}
  />
</div>

</div> 

<p
  style={{
    fontSize: "1.25rem",
    lineHeight: "2.2rem",
    maxWidth: "1100px",
    marginBottom: "25px",
  }}
>
  Mulheres que desejam viver com mais clareza, segurança e propósito muitas vezes carregam padrões emocionais, sobrecarga interna e desafios que impactam sua forma de se relacionar consigo mesmas e com a vida.

Por meio de um acompanhamento integrativo que considera o ser humano como um todo — corpo, mente e espírito — cada processo é conduzido de forma individualizada, respeitando a singularidade, o momento e as necessidades de cada mulher.

O Instituto Kamilah Franco nasceu para acolher mulheres em seus processos de fortalecimento emocional e desenvolvimento humano, promovendo transformações profundas e sustentáveis por meio do desenvolvimento emocional, da consciência de padrões e do alinhamento energético.

Mais do que promover mudanças externas, o propósito é favorecer uma vida mais alinhada à essência de cada mulher, para que ela possa viver com mais leveza, clareza, segurança e propósito.

</p>

    <div
      style={{
        display: "flex",
        gap: "15px",
        flexWrap: "wrap",
      }}
    >
    <a
href="https://wa.me/5546988042216?text=Olá%20Kamilah,%20vim%20pelo%20site%20e%20me%20identifiquei%20com%20o%20que%20li.%20Gostaria%20de%20saber%20como%20você%20pode%20me%20ajudar."  target="_blank"
  rel="noopener noreferrer"
onClick={() => {
    window.gtag?.("event", "whatsapp_click", {
      button_location: "hero",
    });
  }}
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "#25D366",
    color: "#fff",
    padding: "16px 30px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0 8px 20px rgba(37,211,102,0.25)",
    transition: "0.3s",
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M20.52 3.48A11.85 11.85 0 0 0 12.04 0C5.46 0 .12 5.34.12 11.92c0 2.1.55 4.16 1.59 5.98L0 24l6.27-1.64a11.87 11.87 0 0 0 5.77 1.47h.01c6.58 0 11.92-5.34 11.92-11.92 0-3.18-1.24-6.17-3.45-8.43zM12.05 21.8h-.01a9.8 9.8 0 0 1-4.99-1.36l-.36-.21-3.72.98.99-3.63-.24-.37a9.8 9.8 0 1 1 8.33 4.59zm5.38-7.35c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.73.94-.9 1.13-.16.19-.33.21-.62.07-.29-.14-1.2-.44-2.29-1.4-.85-.76-1.43-1.7-1.59-1.99-.17-.29-.02-.45.12-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43 0 1.43 1.03 2.8 1.17 2.99.14.19 2.02 3.08 4.89 4.32.68.29 1.22.46 1.64.59.69.22 1.32.19 1.82.12.56-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z"/>
  </svg>

  <span>Conversar pelo WhatsApp</span>
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

    </div>   {/* FECHA O DIV DOS BOTÕES */}
      
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

{/* PARA QUEM É */}
<section
  style={{
    padding: "100px 8%",
    backgroundColor: "#FCFAF7",
  }}
>
  <div
    style={{
      maxWidth: "1200px",
      margin: "0 auto",
      textAlign: "center",
    }}
  >
    <h2
      style={{
        fontSize: "2.8rem",
        marginBottom: "20px",
        color: "#4A3732",
      }}
    >
      Para quem é este acompanhamento?
    </h2>

    <p
      style={{
        fontSize: "1.1rem",
        lineHeight: "2rem",
        maxWidth: "850px",
        margin: "0 auto 50px auto",
        color: "#6B5B56",
      }}
    >
      Este processo foi pensado para mulheres que desejam fortalecer sua estrutura emocional, desenvolver um posicionamento mais consciente e construir uma vida alinhada à sua essência.
    </p>

    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "25px",
      }}
    >
      {[
        "Vivem sobrecarga emocional e sentem que carregam o mundo nas costas.",
        "Têm dificuldade em estabelecer limites saudáveis.",
        "Percebem padrões repetitivos em seus relacionamentos.",
        "Sentem-se desconectadas de si mesmas e da própria essência.",
        "Sabem o que precisam fazer, mas acabam desistindo ou deixando para depois.",
        "Possuem dificuldade em se posicionar e expressar suas necessidades.",
        "Colocam todos em primeiro lugar e deixam a si mesmas por último.",
        "Fazem muito pelos outros, mas perdem energia quando chega o momento de cuidar de si.",
      ].map((item, index) => (
        <div
          key={index}
          style={{
            backgroundColor: "#fff",
            padding: "30px",
            borderRadius: "25px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.05)",
            textAlign: "left",
          }}
        >
          <p
            style={{
              lineHeight: "1.9rem",
              fontSize: "1rem",
            }}
          >
            ✨ {item}
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
{/* INSTAGRAM */}
<section
  style={{
    padding: "90px 8%",
    backgroundColor: "#F5F1EC",
  }}
>
  <div
    style={{
      maxWidth: "900px",
      margin: "0 auto",
      textAlign: "center",
      backgroundColor: "#FCFAF7",
      padding: "60px 40px",
      borderRadius: "30px",
      boxShadow: "0 10px 30px rgba(0,0,0,0.05)",
    }}
  >
    <h2
      style={{
        fontSize: "2.4rem",
        color: "#4A3732",
        marginBottom: "20px",
      }}
    >
      Acompanhe conteúdos sobre desenvolvimento emocional feminino
    </h2>

    <p
      style={{
        fontSize: "1.1rem",
        lineHeight: "2rem",
        color: "#6B5B56",
        maxWidth: "700px",
        margin: "0 auto 35px auto",
      }}
    >
      Reflexões, conteúdos e experiências sobre fortalecimento emocional,
      desenvolvimento humano, corpo, mente e espírito, além de temas
      relacionados ao alinhamento energético e ao processo de transformação
      pessoal.
    </p>

    <a
      href="https://instagram.com/instituto.kamilah.franco"
      target="_blank"
      rel="noopener noreferrer"
      style={{
  display: "inline-block",
  backgroundColor: "#C13584",
  color: "#fff",
  padding: "16px 35px",
  borderRadius: "50px",
  textDecoration: "none",
  fontWeight: "bold",
  fontSize: "1rem",
  boxShadow: "0 8px 20px rgba(193,53,132,0.25)",
  transition: "0.3s",
}}
    >
      <span
  style={{
    display: "flex",
    alignItems: "center",
    gap: "10px",
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M7.75 2C4.57 2 2 4.57 2 7.75v8.5C2 19.43 4.57 22 7.75 22h8.5C19.43 22 22 19.43 22 16.25v-8.5C22 4.57 19.43 2 16.25 2h-8.5zm0 2h8.5A3.75 3.75 0 0 1 20 7.75v8.5A3.75 3.75 0 0 1 16.25 20h-8.5A3.75 3.75 0 0 1 4 16.25v-8.5A3.75 3.75 0 0 1 7.75 4zm8.75 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM12 7a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/>
  </svg>

  <span>Acompanhar no Instagram</span>
</span>
    </a>
  </div>
</section>
{/* VOCÊ NÃO PRECISA PASSAR POR ISSO SOZINHA */}
<section
  style={{
    padding: "100px 8%",
    backgroundColor: "#F8F4F0",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "2.2rem",
      color: "#4A3836",
      marginBottom: "30px",
    }}
  >
    Você não precisa passar por isso sozinha.
  </h2>

  <p
    style={{
      maxWidth: "900px",
      margin: "0 auto",
      fontSize: "1.15rem",
      lineHeight: "2rem",
      color: "#5C4A47",
      marginBottom: "25px",
    }}
  >
    Você não precisa ter tudo resolvido para buscar ajuda.
  </p>

  <p
    style={{
      maxWidth: "900px",
      margin: "0 auto",
      fontSize: "1.15rem",
      lineHeight: "2rem",
      color: "#5C4A47",
      marginBottom: "25px",
    }}
  >
    Se você chegou até aqui, talvez uma parte de você já reconheça que está cansada de repetir os mesmos padrões, carregar tudo sozinha ou se colocar sempre em último lugar.
  </p>

  <p
    style={{
      maxWidth: "900px",
      margin: "0 auto",
      fontSize: "1.15rem",
      lineHeight: "2rem",
      color: "#5C4A47",
      marginBottom: "40px",
    }}
  >
    Vamos conversar sobre o que você está vivendo e entender se este processo faz sentido para você neste momento.
  </p>

  <a
href="https://wa.me/5546988042216?text=Olá%20Kamilah,%20vim%20pelo%20site%20e%20me%20identifiquei%20com%20o%20que%20li.%20Gostaria%20de%20saber%20como%20você%20pode%20me%20ajudar."    target="_blank"
    rel="noopener noreferrer"
    onClick={() => {
      gtag("event", "whatsapp_click");
    }}
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      backgroundColor: "#25D366",
      color: "#fff",
      padding: "18px 35px",
      borderRadius: "50px",
      textDecoration: "none",
      fontWeight: "bold",
      fontSize: "1.1rem",
      boxShadow: "0 8px 20px rgba(37,211,102,0.25)",
      transition: "0.3s",
    }}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 32 32"
      fill="currentColor"
    >
      <path d="M16.004 3C8.82 3 3 8.82 3 16.004c0 2.546.748 5.034 2.162 7.168L3 29l5.992-2.123a12.94 12.94 0 0 0 7.012 2.053C23.18 28.93 29 23.11 29 15.926 29 8.82 23.18 3 16.004 3zm0 23.61c-2.07 0-4.09-.554-5.855-1.604l-.42-.25-3.557 1.26 1.193-3.47-.273-.447a10.57 10.57 0 0 1-1.63-5.67c0-5.84 4.75-10.59 10.59-10.59s10.59 4.75 10.59 10.59-4.75 10.59-10.59 10.59zm5.805-7.89c-.316-.158-1.87-.922-2.16-1.027-.29-.106-.5-.158-.71.158-.21.316-.816 1.027-1 1.237-.184.21-.368.237-.684.08-.316-.158-1.334-.492-2.54-1.57-.938-.837-1.57-1.87-1.754-2.186-.184-.316-.02-.487.138-.645.142-.142.316-.368.474-.553.158-.184.21-.316.316-.526.105-.21.053-.395-.026-.553-.08-.158-.71-1.71-.974-2.344-.257-.618-.52-.534-.71-.544l-.605-.01c-.21 0-.553.08-.842.395-.29.316-1.105 1.08-1.105 2.634s1.132 3.055 1.29 3.265c.158.21 2.228 3.4 5.4 4.768.755.326 1.344.52 1.804.665.758.24 1.447.206 1.992.125.608-.09 1.87-.764 2.134-1.5.263-.737.263-1.37.184-1.5-.08-.132-.29-.21-.605-.368z" />
    </svg>

    Conversar no WhatsApp
  </a>
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
href="https://wa.me/5546988042216?text=Olá%20Kamilah,%20vim%20pelo%20site%20e%20me%20identifiquei%20com%20o%20que%20li.%20Gostaria%20de%20saber%20como%20você%20pode%20me%20ajudar."  target="_blank"
  rel="noopener noreferrer"
onClick={() => {
    window.gtag?.("event", "whatsapp_click", {
      button_location: "hero",
    });
  }}
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "10px",
    backgroundColor: "#25D366",
    color: "#fff",
    padding: "16px 30px",
    borderRadius: "50px",
    textDecoration: "none",
    fontWeight: "bold",
    boxShadow: "0 8px 20px rgba(37,211,102,0.25)",
    transition: "0.3s",
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="22"
    height="22"
    viewBox="0 0 24 24"
    fill="white"
  >
    <path d="M20.52 3.48A11.85 11.85 0 0 0 12.04 0C5.46 0 .12 5.34.12 11.92c0 2.1.55 4.16 1.59 5.98L0 24l6.27-1.64a11.87 11.87 0 0 0 5.77 1.47h.01c6.58 0 11.92-5.34 11.92-11.92 0-3.18-1.24-6.17-3.45-8.43zM12.05 21.8h-.01a9.8 9.8 0 0 1-4.99-1.36l-.36-.21-3.72.98.99-3.63-.24-.37a9.8 9.8 0 1 1 8.33 4.59zm5.38-7.35c-.29-.14-1.7-.84-1.96-.94-.26-.1-.45-.14-.64.14-.19.29-.73.94-.9 1.13-.16.19-.33.21-.62.07-.29-.14-1.2-.44-2.29-1.4-.85-.76-1.43-1.7-1.59-1.99-.17-.29-.02-.45.12-.59.13-.13.29-.33.43-.5.14-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36-.26.29-1 1-.99 2.43 0 1.43 1.03 2.8 1.17 2.99.14.19 2.02 3.08 4.89 4.32.68.29 1.22.46 1.64.59.69.22 1.32.19 1.82.12.56-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.33z"/>
  </svg>

  <span>Conversar pelo WhatsApp</span>
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
        <div
    style={{
      marginTop: "20px",
      display: "flex",
      justifyContent: "center",
    }}
  >
    
  <a
    href="https://instagram.com/instituto.kamilah.franco"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      color: "#E3C58B",
      textDecoration: "none",
      fontSize: "1rem",
      fontWeight: "500",
      transition: "0.3s",
    }}
  >
    📷 Acompanhe o Instituto no Instagram @instituto.kamilah.franco
  </a>
</div>
      </footer>

      {/* BOTÃO FLUTUANTE WHATSAPP */}
      <a
onClick={() => {
  window.gtag?.("event", "whatsapp_click", {
    button_location: "floating",
  });
}}
href="https://wa.me/5546988042216?text=Olá%20Kamilah,%20vim%20pelo%20site%20e%20me%20identifiquei%20com%20o%20que%20li.%20Gostaria%20de%20saber%20como%20você%20pode%20me%20ajudar."        target="_blank"
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
