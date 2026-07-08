"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{
        background: "#FCFAF7",
        overflowX: "hidden",
        fontFamily: "Georgia, serif",
      }}
    >
      {/* HERO */}

      <section
        style={{
          padding: "80px 7%",
          maxWidth: "1350px",
          margin: "0 auto",
        }}
      >
        <div className="hero">

          {/* TEXTO */}

          <div>

            <div className="badge">
              ✨ Atendimento Online para todo o Brasil
            </div>

            <h1>
              Você faz de tudo pelos outros...
              <br />
              <span>Mas quem está cuidando de você?</span>
            </h1>

            <p>
              Você não precisa continuar carregando tudo sozinha.
              Através de um acompanhamento terapêutico individual,
              você aprende a fortalecer sua autoestima, romper padrões
              de autossabotagem e voltar a viver com leveza,
              clareza e segurança emocional.
            </p>

            <div className="buttons">

              <a
                href="https://wa.me/5549991300256"
                target="_blank"
                className="btnPrimary"
              >
                💬 Quero ter uma vida mais leve
              </a>

              <a
                href="#processo"
                className="btnSecondary"
              >
                Conheça o acompanhamento
              </a>

            </div>

            <div className="avaliacao">

              <div className="stars">
                ★★★★★
              </div>

              <span>
                Atendimento individual • Online e Presencial •
                Focado no fortalecimento emocional feminino
              </span>

            </div>

          </div>

          {/* FOTO */}

          <div className="photoArea">

            <div className="circle"></div>

            <Image
              src="/kamilah.png"
              alt="Kamilah Franco"
              width={520}
              height={700}
              priority
              className="photo"
            />

          </div>

        </div>

      </section>

      <style jsx>{`

main{
width:100%;
}

.hero{

display:grid;
grid-template-columns:1.1fr 1fr;
align-items:center;
gap:70px;

}

.badge{

display:inline-flex;

padding:12px 22px;

border-radius:40px;

background:#EFE7DF;

color:#A37A42;

font-weight:600;

margin-bottom:28px;

}

h1{

font-size:68px;

line-height:1.1;

color:#4A3732;

margin-bottom:28px;

font-weight:700;

}

h1 span{

color:#B38A52;

}

p{

font-size:24px;

line-height:1.8;

color:#5F5652;

margin-bottom:40px;

}

.buttons{

display:flex;

gap:20px;

flex-wrap:wrap;

margin-bottom:40px;

}

.btnPrimary{

background:#25D366;

color:white;

padding:18px 34px;

border-radius:50px;

text-decoration:none;

font-weight:700;

transition:.3s;

}

.btnPrimary:hover{

transform:translateY(-2px);

}

.btnSecondary{

padding:18px 34px;

border-radius:50px;

border:2px solid #B38A52;

color:#A37A42;

text-decoration:none;

font-weight:700;

}

.avaliacao{

display:flex;

flex-direction:column;

gap:12px;

}

.stars{

color:#D8B243;

font-size:24px;

letter-spacing:3px;

}

.photoArea{

position:relative;

display:flex;

justify-content:center;

align-items:center;

}

.circle{

position:absolute;

width:460px;

height:460px;

background:#EFE2CF;

border-radius:50%;

}

.photo{

position:relative;

width:100%;

max-width:470px;

height:auto;

z-index:2;

}

@media(max-width:900px){

.hero{

grid-template-columns:1fr;

gap:40px;

}

.photoArea{

order:-1;

}

.circle{

width:280px;

height:280px;

}

.photo{

max-width:290px;

}

h1{

font-size:50px;

}

p{

font-size:20px;

}

.buttons{

flex-direction:column;

}

.btnPrimary,
.btnSecondary{

text-align:center;

}

}

@media(max-width:500px){

section{

padding-top:60px;

}

h1{

font-size:42px;

}

p{

font-size:18px;

}

.badge{

font-size:14px;

}

}

`}</style>

    </main>
  );
}
      {/* PARA QUEM É */}

      <section
        style={{
          background: "#F8F5F2",
          padding: "110px 7%",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span
            style={{
              color: "#B38A52",
              letterSpacing: "2px",
              fontWeight: "700",
              fontSize: ".9rem",
            }}
          >
            ESTE ACOMPANHAMENTO É PARA VOCÊ QUE...
          </span>

          <h2
            style={{
              color: "#4A3732",
              fontSize: "clamp(2.2rem,5vw,3.5rem)",
              marginTop: "20px",
              marginBottom: "25px",
              lineHeight: "1.2",
            }}
          >
            Está cansada de viver sempre
            <br />
            colocando todo mundo em primeiro lugar.
          </h2>

          <p
            style={{
              maxWidth: "750px",
              margin: "0 auto 70px",
              color: "#6B5B56",
              lineHeight: "1.9",
              fontSize: "1.1rem",
            }}
          >
            Talvez você tenha aprendido a ser forte o tempo todo.
            Mas hoje sente que perdeu a leveza, vive sobrecarregada,
            tem dificuldade para dizer "não" e percebe que está
            deixando a própria felicidade para depois.
          </p>

          <div className="cards3">

            <div className="cardInfo">
              <div className="icone">🌿</div>

              <h3>
                Vive sobrecarregada
              </h3>

              <p>
                Você resolve tudo, cuida de todos,
                mas sente que nunca sobra energia
                para cuidar de si mesma.
              </p>

            </div>

            <div className="cardInfo">

              <div className="icone">
                🤍
              </div>

              <h3>
                Se sente perdida
              </h3>

              <p>
                Já não sabe mais quem você é,
                quais são seus desejos ou
                o que realmente faz sentido
                para sua vida.
              </p>

            </div>

            <div className="cardInfo">

              <div className="icone">
                ✨
              </div>

              <h3>
                Quer voltar a viver leve
              </h3>

              <p>
                Busca autoestima,
                segurança emocional
                e uma vida mais tranquila,
                equilibrada e feliz.
              </p>

            </div>

          </div>

        </div>

      </section>
      {/* COMO FUNCIONA */}

      <section
        id="processo"
        style={{
          background: "#FCFAF7",
          padding: "110px 7%",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span
            style={{
              color: "#B38A52",
              letterSpacing: "2px",
              fontWeight: "700",
              fontSize: ".9rem",
            }}
          >
            COMO FUNCIONA O ACOMPANHAMENTO
          </span>

          <h2
            style={{
              color: "#4A3732",
              fontSize: "clamp(2.2rem,5vw,3.5rem)",
              marginTop: "20px",
              marginBottom: "25px",
              lineHeight: "1.2",
            }}
          >
            Um processo construído
            <br />
            para gerar mudanças reais.
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto 70px",
              color: "#6B5B56",
              fontSize: "1.1rem",
              lineHeight: "1.9",
            }}
          >
            O objetivo não é apenas aliviar o que você sente hoje.
            É fortalecer sua estrutura emocional para que você possa
            enfrentar a vida com mais equilíbrio, autonomia e segurança.
          </p>

          <div className="processGrid">

            <div className="stepCard">

              <div className="stepNumber">
                1
              </div>

              <h3>
                Clareza
              </h3>

              <p>
                Primeiro compreendemos sua história,
                identificamos padrões emocionais e
                descobrimos o que está impedindo você
                de viver de forma mais leve.
              </p>

            </div>

            <div className="stepCard">

              <div className="stepNumber">
                2
              </div>

              <h3>
                Fortalecimento
              </h3>

              <p>
                Durante o acompanhamento você desenvolve
                autoestima, aprende a estabelecer limites
                e fortalece recursos emocionais para lidar
                com os desafios da vida.
              </p>

            </div>

            <div className="stepCard">

              <div className="stepNumber">
                3
              </div>

              <h3>
                Transformação
              </h3>

              <p>
                Aos poucos você passa a tomar decisões
                com mais segurança, rompe padrões antigos
                e constrói uma nova forma de viver.
              </p>

            </div>

          </div>

          <div className="processBox">

            <h3>
              Cada mulher possui uma história única.
            </h3>

            <p>
              Por isso o acompanhamento é totalmente
              personalizado. Não existem protocolos
              prontos. Cada etapa respeita seu momento,
              sua história e seus objetivos.
            </p>

            <a
              href="https://wa.me/5546988042216"
              target="_blank"
              className="btnPrimary"
            >
              Quero conversar com a Kamilah
            </a>

          </div>

        </div>

      </section>
.processGrid{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(280px,1fr));

gap:30px;

margin-bottom:70px;

}

.stepCard{

background:white;

padding:45px 35px;

border-radius:30px;

box-shadow:0 18px 40px rgba(0,0,0,.05);

transition:.35s;

}

.stepCard:hover{

transform:translateY(-8px);

}

.stepNumber{

width:70px;

height:70px;

margin:0 auto 28px;

border-radius:50%;

background:#EFE2CF;

display:flex;

align-items:center;

justify-content:center;

font-size:28px;

font-weight:700;

color:#B38A52;

}

.stepCard h3{

font-size:30px;

margin-bottom:18px;

color:#4A3732;

text-align:center;

}

.stepCard p{

margin:0;

font-size:18px;

line-height:1.9;

color:#6B5B56;

text-align:center;

}

.processBox{

background:white;

padding:60px;

border-radius:35px;

box-shadow:0 18px 45px rgba(0,0,0,.05);

}

.processBox h3{

font-size:38px;

margin-bottom:25px;

color:#4A3732;

}

.processBox p{

max-width:760px;

margin:0 auto 40px;

}
      {/* SOBRE */}

      <section
        style={{
          background: "#FFFFFF",
          padding: "120px 7%",
        }}
      >
        <div className="about">

          {/* FOTO */}

          <div className="aboutPhoto">

            <div className="aboutCircle"></div>

            <Image
              src="/kamilah.png"
              alt="Kamilah Franco"
              width={500}
              height={700}
              className="aboutImg"
            />

          </div>

          {/* TEXTO */}

          <div>

            <span
              style={{
                color:"#B38A52",
                letterSpacing:"2px",
                fontWeight:"700",
                fontSize:".9rem",
              }}
            >
              QUEM VAI CAMINHAR COM VOCÊ
            </span>

            <h2 className="aboutTitle">

              Talvez você tenha chegado até aqui
              porque cansou de tentar resolver tudo sozinha.

            </h2>

            <p>

              Eu sou <strong>Kamilah Franco</strong>,
              terapeuta integrativa, e meu propósito é
              ajudar mulheres que passaram anos colocando
              todos em primeiro lugar e acabaram esquecendo
              de cuidar de si mesmas.

            </p>

            <p>

              Ao longo da minha trajetória percebi que,
              por trás da ansiedade, da culpa,
              da dificuldade em dizer "não"
              e da sensação constante de sobrecarga,
              quase sempre existem padrões emocionais
              que precisam ser compreendidos.

            </p>

            <p>

              Meu trabalho não é apenas aliviar um sintoma.
              É fortalecer sua estrutura emocional para que
              você consiga construir mudanças profundas,
              respeitando seu tempo e sua história.

            </p>

            <div className="aboutList">

              <div>✔ Atendimento totalmente individualizado</div>

              <div>✔ Processo adaptado à sua realidade</div>

              <div>✔ Diversas ferramentas terapêuticas integradas</div>

              <div>✔ Atendimento online para todo o Brasil</div>

            </div>

            <a
              href="https://wa.me/5546988042216"
              target="_blank"
              className="btnPrimary"
            >
              Quero dar o primeiro passo
            </a>

          </div>

        </div>

      </section>
.about{

display:grid;

grid-template-columns:1fr 1.1fr;

gap:80px;

align-items:center;

}

.aboutPhoto{

display:flex;

justify-content:center;

position:relative;

}

.aboutCircle{

position:absolute;

width:420px;

height:420px;

border-radius:50%;

background:#EFE2CF;

}

.aboutImg{

position:relative;

width:100%;

max-width:420px;

height:auto;

z-index:2;

}

.aboutTitle{

font-size:54px;

line-height:1.2;

margin:20px 0 30px;

color:#4A3732;

}

.about p{

font-size:20px;

line-height:1.9;

color:#6B5B56;

margin-bottom:25px;

}

.aboutList{

display:grid;

gap:16px;

margin:35px 0 40px;

}

.aboutList div{

background:#F8F5F2;

padding:18px 22px;

border-radius:18px;

font-weight:600;

color:#4A3732;

}
.about{

grid-template-columns:1fr;

gap:50px;

}

.aboutPhoto{

order:-1;

}

.aboutCircle{

width:280px;

height:280px;

}

.aboutImg{

max-width:290px;

}

.aboutTitle{

font-size:40px;

}
      {/* DIFERENCIAIS */}

      <section
        style={{
          background: "#F8F5F2",
          padding: "120px 7%",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            textAlign: "center",
          }}
        >
          <span
            style={{
              color: "#B38A52",
              letterSpacing: "2px",
              fontWeight: "700",
              fontSize: ".9rem",
            }}
          >
            POR QUE ESCOLHER O INSTITUTO KAMILAH FRANCO
          </span>

          <h2
            style={{
              fontSize: "clamp(2.2rem,5vw,3.4rem)",
              color: "#4A3732",
              marginTop: "20px",
              marginBottom: "25px",
              lineHeight: "1.2",
            }}
          >
            Um acompanhamento pensado
            para cuidar de você por completo.
          </h2>

          <p
            style={{
              maxWidth: "760px",
              margin: "0 auto 70px",
              color: "#6B5B56",
              lineHeight: "1.9",
              fontSize: "1.1rem",
            }}
          >
            Cada atendimento é construído de forma individualizada,
            respeitando sua história, suas necessidades e o momento
            que você está vivendo.
          </p>

          <div className="benefitsGrid">

            {[
              {
                icon: "🌿",
                title: "Atendimento Individual",
                text: "Cada processo é único e adaptado à sua realidade."
              },

              {
                icon: "🤍",
                title: "Espaço Seguro",
                text: "Um ambiente acolhedor para você falar sem julgamentos."
              },

              {
                icon: "✨",
                title: "Processo Personalizado",
                text: "Nada de protocolos prontos. Você é quem conduz o ritmo."

              },

              {
                icon: "💻",
                title: "Online para todo o Brasil",
                text: "Faça seu acompanhamento de qualquer lugar."

              },

              {
                icon: "🌸",
                title: "Diversas Ferramentas",
                text: "Recursos integrados escolhidos conforme sua necessidade."

              },

              {
                icon: "💛",
                title: "Mudança Duradoura",
                text: "Nosso objetivo é fortalecer sua estrutura emocional."

              }

            ].map((item,index)=>(

              <div
                className="benefitCard"
                key={index}
              >

                <div className="benefitIcon">

                  {item.icon}

                </div>

                <h3>

                  {item.title}

                </h3>

                <p>

                  {item.text}

                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
.benefitsGrid{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(280px,1fr));

gap:30px;

}

.benefitCard{

background:white;

padding:42px 35px;

border-radius:28px;

transition:.35s;

box-shadow:0 15px 35px rgba(0,0,0,.05);

}

.benefitCard:hover{

transform:translateY(-8px);

}

.benefitIcon{

width:70px;

height:70px;

margin:0 auto 28px;

display:flex;

align-items:center;

justify-content:center;

border-radius:50%;

background:#EFE2CF;

font-size:34px;

}

.benefitCard h3{

margin-bottom:18px;

font-size:28px;

color:#4A3732;

}

.benefitCard p{

margin:0;

font-size:18px;

line-height:1.8;

color:#6B5B56;

}
.benefitsGrid{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(280px,1fr));

gap:30px;

}

.benefitCard{

background:white;

padding:42px 35px;

border-radius:28px;

transition:.35s;

box-shadow:0 15px 35px rgba(0,0,0,.05);

}

.benefitCard:hover{

transform:translateY(-8px);

}

.benefitIcon{

width:70px;

height:70px;

margin:0 auto 28px;

display:flex;

align-items:center;

justify-content:center;

border-radius:50%;

background:#EFE2CF;

font-size:34px;

}

.benefitCard h3{

margin-bottom:18px;

font-size:28px;

color:#4A3732;

}

.benefitCard p{

margin:0;

font-size:18px;

line-height:1.8;

color:#6B5B56;

}
.testimonialGrid{

display:grid;

grid-template-columns:repeat(auto-fit,minmax(320px,1fr));

gap:30px;

}

.testimonialCard{

background:#F8F5F2;

padding:40px;

border-radius:28px;

text-align:left;

box-shadow:0 18px 35px rgba(0,0,0,.05);

transition:.35s;

}

.testimonialCard:hover{

transform:translateY(-8px);

}

.starsCard{

font-size:26px;

letter-spacing:3px;

color:#D8B243;

margin-bottom:25px;

}

.testimonialCard p{

font-size:18px;

line-height:1.9;

margin-bottom:25px;

color:#5F5652;

font-style:italic;

}

.testimonialCard strong{

color:#4A3732;

font-size:16px;

}
      {/* SESSÃO DE CLAREZA */}

      <section
        style={{
          background: "linear-gradient(180deg,#FCFAF7 0%, #EFE7DF 100%)",
          padding: "120px 7%",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <div className="clarityBox">

            <div className="clarityLeft">

              <span className="sectionTag">
                PRIMEIRO PASSO
              </span>

              <h2 className="clarityTitle">
                Sessão de
                <br />
                Clareza Emocional
              </h2>

              <p className="clarityText">

                Antes de iniciar qualquer acompanhamento,
                realizamos uma sessão de Clareza Emocional.

                Ela foi criada para compreender sua história,
                identificar os padrões que estão mantendo você
                presa ao sofrimento e mostrar um caminho claro
                para sua transformação.

              </p>

              <a
                href="https://wa.me/5546988042216?text=Olá Kamilah! Gostaria de agendar minha Sessão de Clareza Emocional."
                target="_blank"
                className="btnPrimary"
              >
                Quero agendar minha Sessão
              </a>

            </div>

            <div className="clarityRight">

              <div className="clarityCard">

                <h3>
                  Durante essa sessão você irá:
                </h3>

                <ul>

                  <li>✔ Compreender sua situação atual.</li>

                  <li>✔ Identificar padrões emocionais.</li>

                  <li>✔ Descobrir o que está impedindo sua evolução.</li>

                  <li>✔ Entender quais áreas precisam ser fortalecidas.</li>

                  <li>✔ Receber orientação sobre os próximos passos.</li>

                </ul>

              </div>

            </div>

          </div>

        </div>

      </section>
.sectionTag{

display:inline-block;

padding:10px 20px;

border-radius:40px;

background:#EFE2CF;

color:#A27A44;

font-weight:700;

letter-spacing:2px;

font-size:.85rem;

margin-bottom:25px;

}

.clarityBox{

display:grid;

grid-template-columns:1.2fr 1fr;

gap:60px;

align-items:center;

}

.clarityTitle{

font-size:56px;

line-height:1.15;

margin-bottom:30px;

color:#4A3732;

}

.clarityText{

font-size:20px;

line-height:1.9;

margin-bottom:40px;

color:#5F5652;

}

.clarityCard{

background:white;

padding:45px;

border-radius:30px;

box-shadow:0 18px 40px rgba(0,0,0,.05);

}

.clarityCard h3{

margin-bottom:30px;

font-size:30px;

color:#4A3732;

}

.clarityCard ul{

padding:0;

margin:0;

list-style:none;

display:grid;

gap:18px;

}

.clarityCard li{

font-size:18px;

line-height:1.8;

color:#5F5652;

}
.clarityBox{

grid-template-columns:1fr;

}

.clarityTitle{

font-size:40px;

}
      {/* FAQ */}

      <section
        style={{
          background: "#FFFFFF",
          padding: "120px 7%",
        }}
      >
        <div
          style={{
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "70px",
            }}
          >
            <span
              style={{
                color: "#B38A52",
                letterSpacing: "2px",
                fontWeight: "700",
                fontSize: ".9rem",
              }}
            >
              DÚVIDAS FREQUENTES
            </span>

            <h2
              style={{
                fontSize: "clamp(2.2rem,5vw,3.5rem)",
                color: "#4A3732",
                marginTop: "20px",
              }}
            >
              Perguntas Frequentes
            </h2>
          </div>

          <div className="faq">

            <div className="faqItem">
              <h3>O atendimento é somente presencial?</h3>
              <p>
                Não. Você pode realizar seu acompanhamento
                de forma online, com a mesma qualidade,
                de qualquer lugar do Brasil.
              </p>
            </div>

            <div className="faqItem">
              <h3>Como funciona a primeira sessão?</h3>
              <p>
                Iniciamos pela Sessão de Clareza Emocional,
                onde compreendemos sua história,
                identificamos os principais desafios
                e definimos os próximos passos.
              </p>
            </div>

            <div className="faqItem">
              <h3>Preciso já saber exatamente o que estou sentindo?</h3>
              <p>
                Não. Muitas mulheres chegam apenas
                sabendo que estão cansadas,
                sobrecarregadas ou emocionalmente esgotadas.
                A clareza faz parte do processo.
              </p>
            </div>

            <div className="faqItem">
              <h3>Quanto tempo dura o acompanhamento?</h3>
              <p>
                Cada processo é único.
                O acompanhamento é personalizado
                conforme seus objetivos e evolução.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* CTA FINAL */}

      <section
        style={{
          background: "#4A3732",
          padding: "120px 7%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "850px",
            margin: "0 auto",
          }}
        >
          <h2
            style={{
              color: "#FFFFFF",
              fontSize: "clamp(2.5rem,6vw,4rem)",
              lineHeight: "1.2",
              marginBottom: "30px",
            }}
          >
            Você não precisa continuar
            carregando tudo sozinha.
          </h2>

          <p
            style={{
              color: "#EFE7DF",
              fontSize: "1.25rem",
              lineHeight: "2",
              marginBottom: "45px",
            }}
          >
            Permita-se dar o primeiro passo.
            Estou pronta para caminhar ao seu lado
            nesse processo de fortalecimento emocional.
          </p>

          <a
            href="https://wa.me/5546988042216?text=Olá Kamilah! Gostaria de agendar minha Sessão de Clareza Emocional."
            className="btnPrimary"
            target="_blank"
          >
            Agendar minha Sessão
          </a>

        </div>
      </section>

      {/* RODAPÉ */}

      <footer
        style={{
          background: "#362722",
          padding: "45px 7%",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div>

            <h3
              style={{
                color: "#FFFFFF",
                marginBottom: "10px",
              }}
            >
              Instituto Kamilah Franco
            </h3>

            <p
              style={{
                color: "#D8CEC6",
                margin: 0,
              }}
            >
              Atendimento Online para todo o Brasil
            </p>

          </div>

          <div
            style={{
              color: "#D8CEC6",
              textAlign: "right",
            }}
          >
            <div>WhatsApp</div>
            <div>Instagram</div>
            <div style={{ marginTop: "10px", fontSize: ".9rem" }}>
              © {new Date().getFullYear()} Instituto Kamilah Franco
            </div>
          </div>

        </div>
      </footer>
.faq{

display:grid;

gap:25px;

}

.faqItem{

background:#F8F5F2;

padding:35px;

border-radius:22px;

}

.faqItem h3{

color:#4A3732;

margin-bottom:15px;

font-size:24px;

}

.faqItem p{

margin:0;

font-size:18px;

line-height:1.8;

color:#6B5B56;

}
