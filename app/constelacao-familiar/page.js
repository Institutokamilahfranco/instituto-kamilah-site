"use client";

import Link from "next/link";
const whatsapp =
  "https://wa.me/5546988042216?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20sess%C3%A3o%20de%20Constela%C3%A7%C3%A3o%20Familiar.";

const temas = [
  {
    titulo: "Relacionamentos",
    texto: "Observar padrões que se repetem nas relações amorosas e familiares.",
  },
  {
    titulo: "Vínculos familiares",
    texto: "Explorar sentimentos e experiências relacionados à história familiar.",
  },
  {
    titulo: "Pertencimento",
    texto: "Refletir sobre seu lugar na família e os vínculos que fazem parte da sua história.",
  },
  {
    titulo: "Vida financeira",
    texto: "Investigar crenças, sentimentos e percepções relacionados ao dinheiro.",
  },
  {
    titulo: "Conflitos internos",
    texto: "Olhar para questões que podem estar influenciando suas escolhas e decisões.",
  },
  {
    titulo: "Padrões repetitivos",
    texto: "Reconhecer situações que parecem se repetir e ampliar suas possibilidades de escolha.",
  },
];

export default function ConstelacaoFamiliar() {
  return (
    <main className="pagina">
      <header className="topo">
       <img
  src="/logo.jpeg"
  alt="Instituto Kamilah Franco"
  className="logo-instituto"
/>
        <a href={whatsapp} className="botao botao-pequeno">
          Fale comigo
        </a>
      </header>

      <section className="hero">
        <div className="hero-conteudo">
         <span className="sobretitulo">SEU CAMINHO DE AUTOCONHECIMENTO</span>
<h1>
  Constelação Familiar
  <em> Sistêmica</em>
</h1>
<h2 className="subtitulo-hero">
  Existem histórias que começaram antes de você.
  E padrões que merecem um novo olhar.
</h2>
          <p>
            Um espaço de acolhimento e autoconhecimento para olhar
            para sua história, compreender suas relações e ampliar
            suas possibilidades de escolha.
          </p>
          <a href={whatsapp} className="botao">
            Quero conhecer a constelação
          </a>
          <span className="nota">Atendimento individual e 100% online.</span>
        </div>
        <div className="hero-imagem">
          <div className="imagem-texto">
            <span>UM OLHAR PARA SUA HISTÓRIA</span>
            <strong>Reconhecer. Compreender. Ressignificar.</strong>
          </div>
        </div>
      </section>

      <section className="conceito">
        <span className="sobretitulo">UM OLHAR MAIS AMPLO</span>
        <h2>O que é a Constelação Familiar Sistêmica?</h2>
        <p>
          A Constelação Familiar Sistêmica é uma abordagem de
          autoconhecimento que convida a observar os vínculos,
          as relações e as dinâmicas familiares que fazem parte
          da nossa história.
        </p>
        <p>
          Durante a sessão, você é convidada a olhar para uma
          questão importante da sua vida sob uma perspectiva
          sistêmica, com espaço para reflexão, percepção e
          compreensão de novas possibilidades.
        </p>
      </section>

      <section className="temas">
        <span className="sobretitulo">O QUE PODEMOS EXPLORAR</span>
        <h2>Quais questões você pode levar para a sessão?</h2>
        <div className="grade">
          {temas.map((tema) => (
            <article className="tema" key={tema.titulo}>
              <span className="tema-ponto">✦</span>
              <h3>{tema.titulo}</h3>
              <p>{tema.texto}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="processo">
        <div>
          <span className="sobretitulo">SUA EXPERIÊNCIA</span>
          <h2>Como funciona a sessão?</h2>
          <p>
            O atendimento é individual, realizado online, em um
            ambiente reservado e acolhedor.
          </p>
        </div>
        <div className="etapas">
          <article>
            <span>01</span>
            <div>
              <h3>Você apresenta sua questão</h3>
              <p>
                Conversamos sobre o que você deseja olhar e compreender.
              </p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>Condução da sessão</h3>
              <p>
                A experiência é conduzida respeitando seu momento,
                seus limites e sua disponibilidade emocional.
              </p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>Integração e reflexão</h3>
              <p>
                Ao final, você terá espaço para refletir sobre o que
                vivenciou e os próximos passos que fazem sentido para você.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="sobre">
       <img
  src="/kamilah.png"
  alt="Kamilah Franco"
  className="foto-kamilah"
/>
        <div>
          <span className="sobretitulo">INSTITUTO KAMILAH FRANCO</span>
          <h2>Um espaço para olhar sua história com acolhimento.</h2>
          <p>
            Meu propósito é oferecer um espaço de escuta, cuidado
            e reflexão, onde você possa olhar para suas questões
            com respeito à sua trajetória e ao seu próprio tempo.
          </p>
          <strong>Kamilah Franco</strong>
        </div>
      </section>

      <section className="investimento">
        <span className="sobretitulo">COMECE POR VOCÊ</span>
        <h2>Agende sua sessão</h2>
        <p className="investimento-texto">
          Um encontro individual para olhar com atenção para
          uma questão importante da sua vida.
        </p>
        <div className="preco">R$ 250,00</div>
        <p className="pagamento">
          Pagamento à vista via PIX ou parcelamento em até 12x
          no cartão, com acréscimo das taxas de parcelamento.
        </p>
        <a href={whatsapp} className="botao">
          Quero agendar minha sessão
        </a>
        <span className="nota">Atendimento exclusivamente online.</span>
      </section>

      <section className="faq">
        <span className="sobretitulo">DÚVIDAS FREQUENTES</span>
        <h2>O que você precisa saber</h2>
        <details>
          <summary>A sessão é presencial?</summary>
          <p>
            Não. Os atendimentos são realizados exclusivamente online.
          </p>
        </details>
        <details>
          <summary>Preciso conhecer minha história familiar?</summary>
          <p>
            Não é necessário conhecer todos os detalhes da história
            familiar. Você pode começar pela questão que deseja olhar.
          </p>
        </details>
        <details>
          <summary>A constelação garante a solução do meu problema?</summary>
          <p>
            Não. A sessão é uma experiência de reflexão e autoconhecimento.
            Não há garantia de resultados específicos.
          </p>
        </details>
        <details>
          <summary>Posso fazer a sessão mesmo morando em outra cidade?</summary>
          <p>
            Sim. Por ser online, você pode participar de qualquer
            localidade, desde que tenha conexão com a internet e
            privacidade durante o atendimento.
          </p>
        </details>
      </section>

      <section className="final">
        <span className="sobretitulo">UM NOVO OLHAR PODE COMEÇAR AQUI</span>
        <h2>Você não precisa ter todas as respostas para começar.</h2>
        <p>Permita-se olhar para sua história com acolhimento.</p>
        <a href={whatsapp} className="botao">
          Conversar pelo WhatsApp
        </a>
      </section>

      <footer>
        <strong>INSTITUTO KAMILAH FRANCO</strong>
        <p>Atendimento online • Realeza – PR</p>
        <a href="/">Voltar para a página inicial</a>
      </footer>

      <style jsx>{`
     url("/constelacao-raizes.jpg")
        .pagina {
          --fundo: #fcfaf7;
          --claro: #f3ede5;
          --marrom: #4a3732;
          --dourado: #ad8956;
          --texto: #685a54;
          background: var(--fundo);
          color: var(--marrom);
          font-family: Arial, sans-serif;
          overflow: hidden;
        }
        .topo {
          min-height: 76px;
          padding: 18px 8%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #eae2d8;
        }
        .marca {
          color: var(--marrom);
          text-decoration: none;
          font-size: 13px;
          letter-spacing: 2px;
          font-weight: 600;
        }
        .marca span { color: var(--dourado); }
        .logo-instituto {
  width: 150px;
  height: auto;
  object-fit: contain;
  display: block;
}
        .botao {
          display: inline-block;
          background: var(--marrom);
          color: white;
          text-decoration: none;
          padding: 16px 28px;
          border-radius: 3px;
          font-size: 14px;
          letter-spacing: .3px;
          transition: .2s;
        }
        .botao:hover { background: var(--dourado); }
        .botao-pequeno { padding: 12px 20px; }
        .hero {
          display: grid;
          grid-template-columns: 1.05fr .95fr;
          min-height: 610px;
          align-items: center;
          padding: 65px 8%;
          gap: 55px;
        }
        .hero-conteudo { max-width: 590px; }
        .sobretitulo {
          color: var(--dourado);
          font-size: 11px;
          letter-spacing: 2.5px;
          font-weight: 700;
        }
        h1, h2, h3, p { margin-top: 0; }
       h1 {
  font-family: "Playfair Display", Georgia, serif;
  font-size: clamp(46px, 5vw, 68px);
  line-height: 1.08;
  font-weight: 500;
  letter-spacing: -1px;
  margin: 24px 0;
}

h1 em {
  color: var(--dourado);
  font-family: Georgia, serif;
  font-style: italic;
  font-weight: 400;
}
        .subtitulo-hero {
  font-family: Georgia, serif;
  font-size: 25px;
  line-height: 1.35;
  font-weight: 400;
  margin: 0 0 22px;
  color: var(--dourado);
}
        h1 em { color: var(--dourado); font-weight: 400; }
        .hero-conteudo > p {
          color: var(--texto);
          font-size: 17px;
          line-height: 1.8;
          max-width: 490px;
          margin-bottom: 30px;
        }
        .nota {
          display: block;
          color: var(--texto);
          font-size: 12px;
          margin-top: 17px;
        }
        .hero-imagem {
          min-height: 450px;
          border-radius: 48% 48% 3px 3px;
          background:
            linear-gradient(0deg, rgba(50,35,29,.55), rgba(50,35,29,.05)),
            url("https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?auto=format&fit=crop&w=1000&q=85")
            center/cover;
          display: flex;
          align-items: end;
          padding: 35px;
        }
        .imagem-texto { color: white; }
        .imagem-texto span {
          display: block;
          font-size: 10px;
          letter-spacing: 2px;
          margin-bottom: 10px;
        }
        .imagem-texto strong {
          font-family: Georgia, serif;
          font-size: 25px;
          font-weight: 400;
        }
        .conceito {
          background: var(--claro);
          text-align: center;
          padding: 100px 20px;
        }
        h2 {
          font-family: Georgia, serif;
          font-weight: 400;
          font-size: clamp(30px, 3.5vw, 43px);
          line-height: 1.2;
          margin: 20px auto;
        }
        .conceito h2 { max-width: 700px; }
        .conceito p {
          max-width: 760px;
          margin: 15px auto;
          color: var(--texto);
          line-height: 1.9;
          font-size: 16px;
        }
        .temas { padding: 100px 9%; text-align: center; }
        .temas h2 { max-width: 720px; margin-bottom: 50px; }
        .grade {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
          text-align: left;
        }
        .tema {
          padding: 30px;
          background: white;
          border: 1px solid #eee7df;
          min-height: 180px;
        }
        .tema-ponto { color: var(--dourado); font-size: 22px; }
        .tema h3 {
          font-family: Georgia, serif;
          font-size: 21px;
          font-weight: 400;
          margin: 15px 0 10px;
        }
        .tema p {
          color: var(--texto);
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 0;
        }
        .processo {
          background: var(--claro);
          padding: 95px 10%;
          display: grid;
          grid-template-columns: .9fr 1.1fr;
          gap: 70px;
        }
        .processo h2 { margin-left: 0; }
        .processo > div > p {
          color: var(--texto);
          line-height: 1.8;
        }
        .etapas article {
          display: flex;
          gap: 22px;
          padding: 20px 0;
          border-bottom: 1px solid #dfd4c8;
        }
        .etapas article > span {
          color: var(--dourado);
          font-family: Georgia, serif;
          font-size: 25px;
        }
        .etapas h3 {
          font-family: Georgia, serif;
          font-size: 20px;
          font-weight: 400;
          margin-bottom: 7px;
        }
        .etapas p {
          color: var(--texto);
          font-size: 14px;
          line-height: 1.7;
          margin-bottom: 0;
        }
        .sobre {
          padding: 100px 12%;
          display: grid;
          grid-template-columns: .6fr 1.4fr;
          align-items: center;
          gap: 55px;
        }
        .foto-kamilah {
  width: 100%;
  height: 300px;
  object-fit: cover;
  object-position: center 35%;
  border-radius: 48% 48% 3px 3px;
  display: block;
}
        .sobre h2 { margin-left: 0; }
        .sobre p {
          color: var(--texto);
          line-height: 1.9;
        }
        .sobre strong { font-family: Georgia, serif; font-size: 19px; }
        .investimento {
          background: var(--claro);
          text-align: center;
          padding: 90px 20px;
        }
        .investimento h2 { margin-bottom: 12px; }
        .investimento-texto {
          color: var(--texto);
          line-height: 1.7;
        }
        .preco {
          font-family: Georgia, serif;
          font-size: 48px;
          margin: 25px 0 8px;
        }
        .pagamento {
          max-width: 470px;
          margin: 0 auto 25px;
          color: var(--texto);
          font-size: 13px;
          line-height: 1.7;
        }
        .faq { padding: 90px 12%; }
        .faq h2 { margin-bottom: 35px; }
        details {
          border-bottom: 1px solid #e7ded4;
          padding: 20px 0;
        }
        summary {
          cursor: pointer;
          font-family: Georgia, serif;
          font-size: 19px;
        }
        details p {
          color: var(--texto);
          line-height: 1.8;
          margin: 15px 0 0;
        }
        .final {
          text-align: center;
          background: var(--marrom);
          color: white;
          padding: 90px 20px;
        }
        .final h2 { max-width: 700px; }
        .final p { color: #e8ded4; margin-bottom: 25px; }
        .final .botao { background: var(--dourado); }
        footer {
          text-align: center;
          padding: 35px 20px;
          color: var(--texto);
          font-size: 12px;
          line-height: 1.8;
        }
        footer strong { letter-spacing: 2px; }
        footer a { color: var(--dourado); }
        @media (max-width: 760px) {
          .topo { padding: 16px 6%; }
          .logo-instituto {
  width: 125px;
  height: auto;
}
          .botao-pequeno { padding: 10px 13px; font-size: 12px; }
          .hero {
            grid-template-columns: 1fr;
            padding: 55px 7%;
            gap: 35px;
          }
          h1 {
  font-size: 43px;
  line-height: 1.08;
}
          .hero-imagem { min-height: 350px; }
          .conceito, .temas, .investimento, .faq { padding: 70px 7%; }
          .grade { grid-template-columns: 1fr; }
          .processo {
            grid-template-columns: 1fr;
            padding: 70px 7%;
            gap: 25px;
          }
          .sobre {
            grid-template-columns: 1fr;
            padding: 70px 8%;
            gap: 30px;
          }
         .foto-kamilah {
  height: 280px;
  max-width: 320px;
  margin: 0 auto;
}
          .final { padding: 70px 7%; }
        }
        
/* AJUSTES DE IMAGENS E RESPONSIVIDADE */

/* Foto da Kamilah: mostrar melhor o rosto */
.foto-kamilah {
  object-position: center top;
}

/* Paisagem: proporção mais equilibrada no computador */
.hero-imagem {
  width: 100%;
  max-width: 600px;
  min-height: 500px;
  justify-self: end;
  background-size: cover;
  background-position: center;
}

/* Seção sobre você: impedir cortes no texto */
.sobre {
  grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
  gap: 40px;
}

.sobre > div {
  min-width: 0;
}

.sobre h2 {
  font-size: clamp(28px, 3.1vw, 40px);
  line-height: 1.2;
  overflow-wrap: break-word;
}

.sobre p {
  font-size: 15px;
  line-height: 1.8;
}

/* Ajustes para celular */
@media (max-width: 760px) {
  .hero-imagem {
    width: 100%;
    max-width: none;
    min-height: 350px;
  }

  .foto-kamilah {
    height: 280px;
    object-position: center top;
  }

  .sobre {
    grid-template-columns: 1fr;
    gap: 30px;
  }

  .sobre h2 {
    font-size: 30px;
  }
}

      `}</style>
    </main>
  );
}
