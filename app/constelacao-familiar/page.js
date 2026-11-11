
"use client";

const linkAgendamento =
  "https://loja.infinitepay.io/luana-kamila-47i/gcx3424-sessao-constelacao-familiar-sistemica";

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
        <a href="/" className="marca" aria-label="Instituto Kamilah Franco - início">
          <img
            src="/logo.jpeg"
            alt="Instituto Kamilah Franco"
            className="logo-instituto"
          />
        </a>

        <nav className="navegacao" aria-label="Navegação principal">
          <a href="#inicio">Início</a>
          <a href="#conceito">Sobre</a>
          <a href="#temas">O que podemos explorar</a>
          <a href="#duvidas">Dúvidas</a>
        </nav>

        <a
          href={linkAgendamento}
          className="botao botao-topo"
          target="_blank"
          rel="noopener noreferrer"
        >
          Agendar sessão
        </a>
      </header>

     
<section className="hero" id="inicio">
  <div className="hero-conteudo">
    <span className="etiqueta">
      CONSTELAÇÃO FAMILIAR SISTÊMICA
    </span>

    <h1>
      Existem histórias que começaram antes de você.
      <em> E padrões que merecem um novo olhar.</em>
    </h1>

    <p>
      Um espaço de acolhimento e autoconhecimento para olhar
      para sua história, compreender suas relações e ampliar
      suas possibilidades de escolha.
    </p>

    <span className="nota">
      Atendimento individual e 100% online.
    </span>

    <a
      href={linkAgendamento}
      className="botao botao-desktop"
      target="_blank"
      rel="noopener noreferrer"
    >
      Quero agendar minha constelação
    </a>
  </div>

  <div className="hero-imagem-mobile">
    <img
      src="/constelacao-bonecos.png"
      alt="Representação de uma constelação familiar"
    />
  </div>

  <a
    href={linkAgendamento}
    className="botao botao-mobile"
    target="_blank"
    rel="noopener noreferrer"
  >
    Quero agendar minha constelação
  </a>
</section>


      <section className="beneficios">
        <article>
          <span className="beneficio-icone">✧</span>
          <strong>Clareza sobre padrões repetitivos</strong>
        </article>
        <article>
          <span className="beneficio-icone">♡</span>
          <strong>Um novo olhar para os relacionamentos</strong>
        </article>
        <article>
          <span className="beneficio-icone">✦</span>
          <strong>Mais consciência sobre suas escolhas</strong>
        </article>
      </section>

      <section className="conceito" id="conceito">
        <span className="sobretitulo">UM OLHAR MAIS AMPLO</span>
        <h2>O que é a Constelação Familiar Sistêmica?</h2>

        <div className="linha-dourada" />

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

      <section className="temas" id="temas">
        <div className="temas-conteudo">
          <div className="temas-lista">
            <span className="sobretitulo">O QUE PODEMOS EXPLORAR</span>
            <h2>Quais questões você pode levar para a sessão?</h2>

            <div className="grade">
              {temas.map((tema) => (
                <article className="tema" key={tema.titulo}>
                  <span className="tema-ponto">✦</span>
                  <div>
                    <h3>{tema.titulo}</h3>
                    <p>{tema.texto}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>

         <div className="arvore-decorativa" aria-hidden="true">
  <img
    src="/arvore-da-vida.png"
    alt=""
    className="imagem-arvore-vida"
  />
</div>
        </div>
      </section>

      <section className="processo" id="processo">
        <div className="processo-intro">
          <span className="sobretitulo">SUA EXPERIÊNCIA</span>
          <h2>Como funciona a sessão?</h2>
          <div className="linha-dourada" />
          <p>
            O atendimento é individual, realizado online, em um
            ambiente reservado e acolhedor.
          </p>
        </div>

        <div className="etapas">
          <article>
            <div className="etapa-icone">01</div>
            <h3>Você apresenta sua questão</h3>
            <p>
              Conversamos sobre o que você deseja olhar e compreender.
            </p>
          </article>

          <article>
            <div className="etapa-icone">02</div>
            <h3>Condução da sessão</h3>
            <p>
              A experiência é conduzida respeitando seu momento,
              seus limites e sua disponibilidade emocional.
            </p>
          </article>

          <article>
            <div className="etapa-icone">03</div>
            <h3>Integração e reflexão</h3>
            <p>
              Ao final, você terá espaço para refletir sobre o que
              vivenciou e os próximos passos que fazem sentido para você.
            </p>
          </article>
        </div>

        <a
          href={linkAgendamento}
          className="botao"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quero agendar minha constelação
        </a>
      </section>

      <section className="sobre">
        <div className="sobre-foto">
          <img
            src="/kamilah.png"
            alt="Kamilah Franco"
            className="foto-kamilah"
          />
        </div>

        <div className="sobre-conteudo">
          <span className="sobretitulo">INSTITUTO KAMILAH FRANCO</span>
          <h2>Um espaço para olhar sua história com acolhimento.</h2>
          <div className="linha-dourada" />

          <p>
            Meu propósito é oferecer um espaço de escuta, cuidado
            e reflexão, onde você possa olhar para suas questões
            com respeito à sua trajetória e ao seu próprio tempo.
          </p>

          <strong>Kamilah Franco</strong>
        </div>
      </section>

      <section className="investimento" id="agendamento">
        <span className="sobretitulo">COMECE POR VOCÊ</span>
        <h2>Um encontro para olhar sua história com atenção.</h2>
        <div className="linha-dourada" />

        <p className="investimento-texto">
          Sessão individual de Constelação Familiar Sistêmica,
          realizada exclusivamente online.
        </p>

        <div className="preco">R$ 250,00</div>

        <p className="pagamento">
          Pagamento via PIX ou cartão de crédito, com parcelamento
          em até 12x e taxas de parcelamento repassadas à cliente.
        </p>

        <a
          href={linkAgendamento}
          className="botao"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quero agendar minha constelação
        </a>

        <span className="nota">
          Escolha seu dia e horário diretamente na plataforma de agendamento.
        </span>
      </section>

      <section className="faq" id="duvidas">
        <span className="sobretitulo">DÚVIDAS FREQUENTES</span>
        <h2>O que você precisa saber</h2>
        <div className="linha-dourada" />

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
            A Constelação Familiar não oferece garantias ou resultados
            iguais para todas as pessoas. Cada experiência é única,
            e os desdobramentos podem variar de acordo com a forma
            como cada pessoa acolhe, compreende e integra as percepções
            vivenciadas durante a sessão.

            O processo não termina no encontro: a reflexão, a abertura
            para novos olhares e a disposição para reconhecer e construir
            novas possibilidades também fazem parte dessa caminhada.
            Cada pessoa tem seu próprio tempo e sua própria maneira
            de vivenciar esse processo.
          </p>
        </details>

        <details>
          <summary>
            Posso fazer a sessão mesmo morando em outra cidade?
          </summary>
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
        <p>
          Permita-se olhar para sua história com acolhimento.
        </p>

        <a
          href={linkAgendamento}
          className="botao"
          target="_blank"
          rel="noopener noreferrer"
        >
          Quero agendar minha constelação
        </a>
      </section>

      <footer className="rodape">
        <div className="rodape-marca">
          <img
            src="/logo.jpeg"
            alt="Instituto Kamilah Franco"
            className="logo-rodape"
          />
          <strong>INSTITUTO KAMILAH FRANCO</strong>
        </div>

        <div className="rodape-contatos">
          <p>Atendimento exclusivamente online • Realeza – PR</p>

          <p>
            WhatsApp:{" "}
            <a
              href="https://wa.me/5546988042216"
              target="_blank"
              rel="noopener noreferrer"
            >
              (46) 98804-2216
            </a>
          </p>

          <p>
            E-mail:{" "}
            <a href="mailto:kamilahgomes.comunicacao@gmail.com">
              kamilahgomes.comunicacao@gmail.com
            </a>
          </p>
        </div>

        <a href="/" className="voltar-inicio">
          Voltar para a página inicial
        </a>
      </footer>

      <style jsx>{`
        .pagina {
          --fundo: #fbf2ed;
          --claro: #f5e5dd;
          --rose: #e9cfc7;
          --vinho: #642536;
          --vinho-escuro: #481b2b;
          --dourado: #c18a32;
          --dourado-claro: #e1b96f;
          --texto: #49343a;
          background: var(--fundo);
          color: var(--vinho-escuro);
          font-family: Arial, sans-serif;
          overflow: hidden;
        }

   .topo {
  min-height: 86px;
  padding: 12px 7%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 25px;
  background: rgba(251, 242, 237, .96);
  border-bottom: 1px solid #ead8d0;
}
.navegacao {
  grid-column: 1 / -1;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px 18px;
  padding-top: 12px;
  border-top: 1px solid #ead8d0;
}

.navegacao a {
  font-size: 12px;
}

        .marca {
          display: flex;
          align-items: center;
          text-decoration: none;
        }

        .logo-instituto {
          width: 155px;
          height: auto;
          object-fit: contain;
          display: block;
        }

        .navegacao {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 28px;
        }

        .navegacao a {
          color: var(--vinho-escuro);
          text-decoration: none;
          font-size: 13px;
          font-weight: 600;
          transition: color .2s;
        }

        .navegacao a:hover {
          color: var(--dourado);
        }

        .botao {
          display: inline-block;
          background: linear-gradient(135deg, #d6a143, #a96d17);
          color: #fff !important;
          text-decoration: none;
          padding: 19px 34px;
          border: 1px solid rgba(255,255,255,.25);
          border-radius: 9px;
          font-size: 16px;
          font-weight: 700;
          letter-spacing: .2px;
          text-align: center;
          box-shadow: 0 7px 18px rgba(111, 65, 23, .23);
          transition: all .3s ease;
        }

        .botao:hover {
          background: linear-gradient(135deg, #7b3447, #511d30);
          transform: translateY(-2px);
          box-shadow: 0 10px 22px rgba(72, 27, 43, .22);
        }

        .botao-topo {
          padding: 13px 22px;
          font-size: 13px;
          white-space: nowrap;
        }

    .hero {
  display: flex;
  align-items: center;
  min-height: 590px;
  padding: 65px 7%;
 background-color: var(--fundo);
background-image:
  linear-gradient(
    90deg,
    #fbf2ed 0%,
    rgba(251, 242, 237, 0.96) 32%,
    rgba(251, 242, 237, 0.55) 55%,
    rgba(251, 242, 237, 0.05) 78%
  ),
  url("/constelacao-bonecos.png");
background-position: center, right center;
background-size: cover;
background-repeat: no-repeat;
  position: relative;
}

.hero-conteudo {
  max-width: 590px;
  width: 55%;
  position: relative;
  z-index: 1;
}
.hero-imagem-mobile {
  display: none;
}

.botao-mobile {
  display: none;
}

.botao-desktop {
  display: inline-block;
}
        .etiqueta {
          display: inline-block;
          padding: 9px 17px;
          border-radius: 30px;
          background: #a45e5c;
          color: white;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: .7px;
        }

        .hero h1 {
          font-family: Georgia, serif;
          font-size: clamp(42px, 4.4vw, 60px);
          line-height: 1.08;
          font-weight: 500;
          letter-spacing: -1px;
          margin: 24px 0;
          color: var(--vinho);
        }

        .hero h1 em {
          display: block;
          color: #a65e63;
          font-style: italic;
          font-weight: 400;
        }

        .hero-conteudo > p {
          color: var(--texto);
          font-size: 16px;
          line-height: 1.85;
          max-width: 490px;
          margin-bottom: 22px;
        }

        .nota {
          display: block;
          color: var(--texto);
          font-size: 12px;
          margin: 0 0 18px;
        }

        .hero-imagem {
          width: 100%;
          min-height: 470px;
          justify-self: end;
          border-radius: 48% 48% 7px 7px;
          background-image:
            linear-gradient(0deg, rgba(72, 27, 43, .38), transparent 55%),
            url("/constelação-ossos.png");
          background-position: center;
          background-size: cover;
          background-repeat: no-repeat;
          display: flex;
          align-items: end;
          padding: 32px;
          box-shadow: 0 15px 35px rgba(90, 43, 54, .12);
        }

        .imagem-texto {
          color: white;
          text-shadow: 0 2px 8px rgba(0,0,0,.35);
        }

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

        .beneficios {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          align-items: center;
          padding: 25px 7%;
          background: #f4e5de;
          border-top: 1px solid #ead8d0;
          border-bottom: 1px solid #ead8d0;
        }

        .beneficios article {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 13px;
          padding: 8px 18px;
          text-align: left;
          border-right: 1px solid #dfc6bb;
        }

        .beneficios article:last-child {
          border-right: 0;
        }

        .beneficio-icone {
          color: var(--dourado);
          font-size: 28px;
        }

        .beneficios strong {
          max-width: 175px;
          color: var(--vinho);
          font-family: Georgia, serif;
          font-size: 15px;
          font-weight: 500;
          line-height: 1.35;
        }

        .sobretitulo {
          color: var(--dourado);
          font-size: 11px;
          letter-spacing: 2.2px;
          font-weight: 700;
        }

        .conceito {
          text-align: center;
          padding: 85px 8%;
          background: var(--fundo);
        }

        h2 {
          font-family: Georgia, serif;
          font-weight: 500;
          font-size: clamp(30px, 3.5vw, 43px);
          line-height: 1.2;
          color: var(--vinho);
          margin: 18px auto;
        }

        .conceito h2 {
          max-width: 760px;
        }

        .linha-dourada {
          width: 65px;
          height: 3px;
          background: var(--dourado);
          margin: 18px auto 28px;
        }

        .conceito p {
          max-width: 780px;
          margin: 15px auto;
          color: var(--texto);
          line-height: 1.9;
          font-size: 16px;
        }

       .temas {
  margin: 0 5%;
  padding: 45px 5%;
  border-radius: 22px;
  background: linear-gradient(
    90deg,
    #a45e68 0%,
    #824052 38%,
    #642536 68%,
    #481b2b 100%
  );
  color: white;
  overflow: hidden;
}

        .temas-conteudo {
          display: grid;
          grid-template-columns: 1.4fr .6fr;
          align-items: center;
          gap: 35px;
        }

        .temas .sobretitulo {
          color: #f0c77e;
        }

        .temas h2 {
          color: white;
          margin: 15px 0 30px;
          font-size: clamp(28px, 3vw, 39px);
        }

        .grade {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px 28px;
        }

        .tema {
          display: flex;
          align-items: flex-start;
          gap: 12px;
        }

        .tema-ponto {
          color: #f0c77e;
          font-size: 21px;
          line-height: 1;
        }

        .tema h3 {
          font-family: Georgia, serif;
          font-size: 18px;
          font-weight: 500;
          color: white;
          margin: 0 0 7px;
        }

        .tema p {
          color: #f7e8e5;
          font-size: 13px;
          line-height: 1.65;
          margin: 0;
        }

       .arvore-decorativa {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 300px;
  width: 100%;
  position: relative;
}

.imagem-arvore-vida {
  display: block;
  width: 360px;
  max-width: none;
  height: 360px;
  object-fit: contain;
  mix-blend-mode: lighten;
}
        .arvore-decorativa span {
          font-size: 30px;
        }

        .arvore-tronco {
          font-size: 145px;
          line-height: 1.1;
          opacity: .8;
        }

        
.processo {
  padding: 85px 8%;
  background: #f8eae4;
  color: #481b2b;
  text-align: center;
}

.processo h2 {
  color: #642536;
  font-family: Georgia, serif;
}

.processo-intro p {
  color: #49343a;
  line-height: 1.8;
  font-size: 15px;
}

.processo .sobretitulo {
  color: #f0c77e;
}

.etapas article {
  text-align: center;
  padding: 12px 15px;
}

.etapa-icone {
  width: 76px;
  height: 76px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, .10);
  border: 1px solid #d5a65d;
  color: #f0c77e;
  font-family: Georgia, serif;
  font-size: 26px;
}

.etapas h3 {
  font-family: Georgia, serif;
  font-size: 21px;
  font-weight: 500;
  color: #642536;
  margin: 0 0 12px;
}

.etapas p {
  color: #49343a;
  font-size: 14px;
  line-height: 1.75;
  margin: 0;
}


        .processo-intro {
          max-width: 680px;
          margin: 0 auto 45px;
        }

        .processo-intro p {
          color: var(--texto);
          line-height: 1.8;
          font-size: 15px;
        }

        .etapas {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 35px;
          max-width: 1050px;
          margin: 0 auto 45px;
        }

        .etapas article {
          text-align: center;
          padding: 12px 15px;
        }

      .etapa-icone {
  width: 76px;
  height: 76px;
  margin: 0 auto 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #f1ddd2;
  border: 1px solid #dfc0ae;
  color: #a96d17;
  font-family: Georgia, serif;
  font-size: 26px;
}

        .etapas h3 {
          font-family: Georgia, serif;
          font-size: 21px;
          font-weight: 500;
          color: var(--vinho);
          margin: 0 0 12px;
        }

        .etapas p {
          color: var(--texto);
          font-size: 14px;
          line-height: 1.75;
          margin: 0;
        }

        .sobre {
          padding: 95px 12%;
          display: grid;
          grid-template-columns: .75fr 1.25fr;
          align-items: center;
          gap: 65px;
          background: var(--fundo);
        }

        .sobre-foto {
          max-width: 360px;
          margin: 0 auto;
        }

        .foto-kamilah {
          width: 100%;
          height: 390px;
          object-fit: cover;
          object-position: center top;
          border-radius: 48% 48% 7px 7px;
          display: block;
          box-shadow: 0 12px 30px rgba(90, 43, 54, .13);
        }

.sobre-conteudo {
  background: linear-gradient(135deg, #a45e68, #642536);
  padding: 42px;
  border-radius: 18px;
  color: #ffffff;
  box-shadow: 0 12px 30px rgba(90, 43, 54, .13);
}

.sobre-conteudo .sobretitulo {
  color: #f0c77e;
}

    
.sobre-conteudo h2 {
  margin: 18px 0;
  font-size: clamp(30px, 3vw, 40px);
  color: #ffffff;
}

.sobre-conteudo p {
  color: #f7e8e5;
  line-height: 1.9;
  font-size: 15px;
}

.sobre-conteudo .linha-dourada {
  margin-left: 0;
}

.sobre-conteudo strong {
  display: block;
  margin-top: 25px;
  color: #f0c77e;
  font-family: Georgia, serif;
  font-size: 22px;
  font-weight: 500;
}


        .sobre p {
          color: var(--texto);
          line-height: 1.9;
          font-size: 15px;
        }

        .sobre strong {
          display: block;
          margin-top: 25px;
          color: var(--vinho);
          font-family: Georgia, serif;
          font-size: 22px;
          font-weight: 500;
        }

       
.sobre-conteudo h2 {
  margin: 18px 0;
  font-size: clamp(30px, 3vw, 40px);
  color: #ffffff;
}

.sobre-conteudo p {
  color: #f7e8e5;
  line-height: 1.9;
  font-size: 15px;
}

.sobre-conteudo .linha-dourada {
  margin-left: 0;
}

.sobre-conteudo strong {
  display: block;
  margin-top: 25px;
  color: #f0c77e;
  font-family: Georgia, serif;
  font-size: 22px;
  font-weight: 500;
}
.investimento {
  padding: 85px 12%;
  background: var(--fundo);
  color: var(--vinho-escuro);
  text-align: left;
}

.investimento h2 {
  max-width: 850px;
  margin: 18px 0;
  color: var(--vinho);
  font-family: Georgia, serif;
  font-size: clamp(30px, 3.5vw, 43px);
  line-height: 1.2;
}

.investimento .linha-dourada {
  margin: 18px 0 28px;
}

.investimento-texto,
.investimento .pagamento {
  color: var(--texto);
  font-size: 15px;
  line-height: 1.8;
  max-width: 850px;
}

.investimento .preco {
  color: var(--vinho);
  font-family: Georgia, serif;
  font-size: 27px;
  margin: 18px 0;
}

.investimento .nota {
  margin-top: 12px;
}
        .faq {
          padding: 85px 12%;
          background: var(--fundo);
        }

        .faq h2 {
          margin-left: 0;
          margin-bottom: 10px;
        }

        .faq > .linha-dourada {
          margin-left: 0;
          margin-bottom: 30px;
        }

        details {
          margin-bottom: 12px;
          padding: 18px 20px;
          border: 1px solid #edddd5;
          border-radius: 9px;
          background: #f8eee9;
        }

        summary {
          cursor: pointer;
          font-family: Georgia, serif;
          font-size: 17px;
          font-weight: 600;
          color: var(--vinho);
          line-height: 1.5;
        }

        details p {
          color: var(--texto);
          line-height: 1.8;
          font-size: 14px;
          margin: 14px 0 0;
        }

       .final {
  text-align: center;
  background: linear-gradient(120deg, #a45e68, #824052);
  color: white;
  padding: 85px 20px;
}

        .final .sobretitulo {
          color: #e8bd73;
        }

        .final h2 {
          max-width: 720px;
          color: white;
          margin: 20px auto;
        }

        .final p {
          color: #f1dfe1;
          margin-bottom: 28px;
          line-height: 1.7;
        }

        .rodape {
          display: grid;
          grid-template-columns: .8fr 1.5fr .7fr;
          align-items: center;
          gap: 30px;
          padding: 38px 7%;
          background: #421827;
          color: #f8eee9;
          font-size: 12px;
          line-height: 1.8;
        }

        .rodape-marca {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
          text-align: center;
        }

      .logo-rodape {
  width: 135px;
  height: auto;
  object-fit: contain;
  opacity: 1;
  display: block;
}

        .rodape-marca strong {
          letter-spacing: 1.5px;
          font-size: 11px;
        }

        .rodape-contatos p {
          margin: 5px 0;
          overflow-wrap: anywhere;
        }

        .rodape a {
          color: #edc276;
          text-decoration: none;
        }

        .rodape a:hover {
          text-decoration: underline;
        }

        .voltar-inicio {
          justify-self: end;
          padding: 10px 16px;
          border: 1px solid #c18a32;
          border-radius: 30px;
          text-align: center;
        }

        @media (max-width: 900px) {
          .topo {
            padding: 15px 5%;
            gap: 15px;
          }

          .navegacao {
            gap: 14px;
          }

          .navegacao a {
            font-size: 12px;
          }

          .logo-instituto {
            width: 130px;
          }

          .hero {
            gap: 30px;
            padding: 55px 6%;
          }

          .hero-imagem {
            min-height: 420px;
          }

        .rodape {
  display: grid;
  grid-template-columns: 0.9fr 1.5fr 0.8fr;
  align-items: center;
  gap: 30px;
  padding: 45px 7%;
  background: #421827;
  color: #f8eee9;
  font-size: 13px;
  line-height: 1.8;
}
        

       @media (max-width: 760px) {

  .marca,
  .botao-topo {
    display: none !important;
  }

        .topo {
  min-height: auto;
  padding: 12px 6%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
}

.marca {
  order: 1;
}

.logo-instituto {
  width: 95px;
  height: auto;
}

.botao-topo {
  order: 2;
  width: auto;
  padding: 11px 15px;
  font-size: 12px;
  white-space: nowrap;
}

.navegacao {
  order: 3;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 10px 18px;
  padding-top: 12px;
  border-top: 1px solid #ead8d0;
}

.navegacao a {
  font-size: 12px;
}
        .botao-topo {
  order: 2;
  width: auto;
  max-width: none;
  flex-shrink: 0;
  padding: 11px 15px;
  font-size: 12px;
}

        .hero {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  min-height: auto;
  padding: 45px 7%;
  gap: 24px;
  background: var(--fundo);
}

.hero-conteudo {
  width: 100%;
  max-width: 100%;
}
.hero-imagem-mobile {
  display: none !important;
}
.hero h1 {
  font-size: clamp(34px, 9vw, 44px);
  line-height: 1.1;
}

.hero-conteudo > p {
  font-size: 15px;
  line-height: 1.7;
}

.hero-imagem-mobile {
  display: block;
  width: 100%;
}

.hero-imagem-mobile img {
  display: block;
  width: 100%;
  height: auto;
  max-height: 420px;
  object-fit: contain;
  border-radius: 14px;
}

.botao-desktop {
  display: none;
}

.botao-mobile {
  display: block;
  width: 100%;
  max-width: 100%;
  margin-top: 0;
  padding: 17px;
  text-align: center;
}

          .hero h1 {
            font-size: clamp(39px, 10vw, 49px);
            line-height: 1.1;
          }

          .hero-conteudo > p {
            font-size: 15px;
          }

          .beneficios {
            grid-template-columns: 1fr;
            padding: 12px 7%;
          }

          .beneficios article {
            justify-content: flex-start;
            border-right: 0;
            border-bottom: 1px solid #dfc6bb;
            padding: 15px 5px;
          }

          .beneficios article:last-child {
            border-bottom: 0;
          }

          .conceito {
            padding: 65px 7%;
          }

          .conceito p {
            font-size: 14px;
          }

          .temas {
            margin: 0 4%;
            padding: 35px 7%;
            border-radius: 16px;
          }

          .temas-conteudo {
            grid-template-columns: 1fr;
          }

          .temas h2 {
            font-size: 30px;
          }

          .grade {
            grid-template-columns: 1fr;
            gap: 20px;
          }

         .arvore-decorativa {
  display: flex;
  min-height: 220px;
  margin-top: 20px;
}

.imagem-arvore-vida {
  max-width: 260px;
}

          .processo {
            padding: 70px 7%;
          }

          .etapas {
            grid-template-columns: 1fr;
            gap: 15px;
          }

          .etapas article {
            max-width: 430px;
            margin: 0 auto;
          }

          .sobre {
            grid-template-columns: 1fr;
            padding: 70px 8%;
            gap: 35px;
          }

          .sobre-foto {
            max-width: 300px;
          }

          .foto-kamilah {
            height: 320px;
          }

          .investimento {
            padding: 70px 7%;
          }

          .investimento h2 {
            font-size: 32px;
          }

          .botao {
            width: 100%;
            max-width: 420px;
            padding: 18px 18px;
            font-size: 14px;
          }

          .faq {
            padding: 70px 7%;
          }

          details {
            padding: 16px;
          }

          summary {
            font-size: 15px;
          }

          .final {
            padding: 70px 7%;
          }

          .final h2 {
            font-size: 31px;
          }

          .rodape {
            grid-template-columns: 1fr;
            text-align: center;
            padding: 40px 7%;
            gap: 22px;
          }

          .rodape-contatos {
            overflow-wrap: anywhere;
          }

          .voltar-inicio {
            grid-column: auto;
            justify-self: center;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .botao {
            transition: none;
          }
        }
      `}</style>
    </main>
  );
}
