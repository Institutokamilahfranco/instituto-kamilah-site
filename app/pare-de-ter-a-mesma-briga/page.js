import Image from "next/image";

const checkoutUrl =
  "https://pay.kiwify.com.br/SEU-CHECKOUT_AQUI";

export default function PareDeTerAMesmaBrigaPage() {
  return (
    <main className="reconexao-page">
      <style jsx global>{`
        :root {
          --bg: #f8f5f0;
          --bg-soft: #f1ebe3;
          --text: #2f2925;
          --muted: #756b63;
          --accent: #7d6252;
          --accent-dark: #5f493c;
          --line: rgba(47, 41, 37, 0.12);
          --white: #ffffff;
          --max: 1180px;
        }

        * {
          box-sizing: border-box;
        }

        html {
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          background: var(--bg);
          color: var(--text);
          font-family:
            Arial, Helvetica, sans-serif;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .reconexao-page {
          overflow: hidden;
          background: var(--bg);
        }

        .container {
          width: min(calc(100% - 40px), var(--max));
          margin: 0 auto;
        }

        .eyebrow {
          display: inline-block;
          margin-bottom: 18px;
          font-size: 12px;
          letter-spacing: 0.22em;
          text-transform: uppercase;
          color: var(--accent);
          font-weight: 700;
        }

        h1,
        h2,
        h3,
        p {
          margin-top: 0;
        }

        h1,
        h2,
        h3 {
          font-family: Georgia, "Times New Roman", serif;
          font-weight: 500;
        }

        .topbar {
          position: relative;
          z-index: 5;
          padding: 24px 0;
          border-bottom: 1px solid var(--line);
          background: rgba(248, 245, 240, 0.95);
        }

        .topbar-inner {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
        }

        .brand {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 18px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .brand span {
          display: block;
          margin-top: 4px;
          font-family: Arial, Helvetica, sans-serif;
          font-size: 10px;
          letter-spacing: 0.18em;
          color: var(--muted);
        }

        .hero {
          padding: 90px 0 110px;
        }

        .hero-grid {
          display: grid;
          grid-template-columns: 1.05fr 0.95fr;
          align-items: center;
          gap: 70px;
        }

        .hero-copy {
          max-width: 680px;
        }

        .hero h1 {
          margin-bottom: 24px;
          font-size: clamp(46px, 7vw, 82px);
          line-height: 0.98;
          letter-spacing: -0.045em;
        }

        .hero h1 em {
          color: var(--accent);
          font-style: normal;
        }

        .hero-subtitle {
          max-width: 640px;
          margin-bottom: 26px;
          font-size: 21px;
          line-height: 1.65;
          color: var(--muted);
        }

        .hero-support {
          max-width: 600px;
          font-size: 15px;
          line-height: 1.8;
          color: var(--text);
        }

        .hero-image {
          position: relative;
        }

        .hero-image::before {
          content: "";
          position: absolute;
          width: 170px;
          height: 170px;
          border-radius: 50%;
          background: #e7ddd2;
          top: -30px;
          right: -20px;
          z-index: 0;
        }

        .hero-image-frame {
          position: relative;
          z-index: 1;
          overflow: hidden;
          border-radius: 28px;
          box-shadow: 0 30px 70px rgba(57, 43, 33, 0.14);
        }

        .hero-image-frame img {
          display: block;
          width: 100%;
          height: auto;
        }

        .section {
          padding: 100px 0;
        }

        .section-soft {
          background: var(--bg-soft);
        }

        .section-heading {
          max-width: 760px;
          margin-bottom: 55px;
        }

        .section-heading h2 {
          margin-bottom: 18px;
          font-size: clamp(36px, 5vw, 58px);
          line-height: 1.05;
          letter-spacing: -0.03em;
        }

        .section-heading p {
          margin-bottom: 0;
          font-size: 18px;
          line-height: 1.8;
          color: var(--muted);
        }

        .pain-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 22px;
        }

        .pain-card {
          padding: 30px;
          border: 1px solid var(--line);
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.58);
        }

        .pain-card p {
          margin: 0;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 21px;
          line-height: 1.5;
        }

        .cycle {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
          align-items: stretch;
        }

        .cycle-card {
          position: relative;
          min-height: 220px;
          padding: 28px 22px;
          border-radius: 18px;
          background: var(--white);
          border: 1px solid var(--line);
        }

        .cycle-number {
          margin-bottom: 25px;
          font-size: 12px;
          letter-spacing: 0.12em;
          color: var(--accent);
          font-weight: 700;
        }

        .cycle-card h3 {
          margin-bottom: 12px;
          font-size: 25px;
        }

        .cycle-card p {
          margin: 0;
          font-size: 14px;
          line-height: 1.65;
          color: var(--muted);
        }

        .turning-point {
          margin-top: 50px;
          padding: 45px;
          border-radius: 24px;
          background: #e6dbcf;
        }

        .turning-point h3 {
          max-width: 800px;
          margin-bottom: 14px;
          font-size: clamp(30px, 4vw, 48px);
          line-height: 1.1;
        }

        .turning-point p {
          max-width: 820px;
          margin: 0;
          font-size: 17px;
          line-height: 1.8;
          color: #63574f;
        }

        .course-intro {
          display: grid;
          grid-template-columns: 0.92fr 1.08fr;
          gap: 70px;
          align-items: center;
        }

        .course-intro-image {
          overflow: hidden;
          border-radius: 24px;
          box-shadow: 0 28px 60px rgba(57, 43, 33, 0.12);
        }

        .course-intro-image img {
          display: block;
          width: 100%;
          height: auto;
        }

        .course-intro-copy h2 {
          margin-bottom: 20px;
          font-size: clamp(38px, 5vw, 62px);
          line-height: 1.05;
        }

        .course-intro-copy p {
          margin-bottom: 20px;
          font-size: 17px;
          line-height: 1.8;
          color: var(--muted);
        }

        .quote {
          margin-top: 30px;
          padding-left: 22px;
          border-left: 2px solid var(--accent);
          font-family: Georgia, "Times New Roman", serif;
          font-size: 24px;
          line-height: 1.5;
        }

        .features {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .feature {
          padding: 30px;
          border-top: 2px solid var(--accent);
          background: rgba(255, 255, 255, 0.42);
        }

        .feature h3 {
          margin-bottom: 12px;
          font-size: 26px;
        }

        .feature p {
          margin: 0;
          color: var(--muted);
          line-height: 1.7;
          font-size: 15px;
        }

        .modules {
          display: grid;
          gap: 15px;
        }

        .module {
          display: grid;
          grid-template-columns: 80px 1fr;
          gap: 20px;
          padding: 28px;
          border: 1px solid var(--line);
          border-radius: 18px;
          background: var(--white);
        }

        .module-number {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 32px;
          color: var(--accent);
        }

        .module h3 {
          margin-bottom: 7px;
          font-size: 28px;
        }

        .module p {
          margin: 0;
          font-size: 15px;
          line-height: 1.7;
          color: var(--muted);
        }

        .how-it-works {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 14px;
        }

        .step {
          padding: 28px 18px;
          text-align: center;
          border-radius: 18px;
          background: var(--white);
          border: 1px solid var(--line);
        }

        .step strong {
          display: block;
          margin-bottom: 10px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: 24px;
          font-weight: 500;
        }

        .step span {
          color: var(--muted);
          font-size: 14px;
        }

        .timeline-note {
          max-width: 850px;
          margin: 35px auto 0;
          text-align: center;
          color: var(--muted);
          font-size: 15px;
          line-height: 1.8;
        }

        .audience {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 28px;
        }

        .audience-card {
          padding: 35px;
          border-radius: 22px;
          background: var(--white);
          border: 1px solid var(--line);
        }

        .audience-card h3 {
          margin-bottom: 18px;
          font-size: 34px;
        }

        .audience-card ul {
          margin: 0;
          padding-left: 20px;
        }

        .audience-card li {
          margin-bottom: 12px;
          color: var(--muted);
          line-height: 1.65;
        }

        .not-section {
          background: #efe5da;
        }

        .not-box {
          max-width: 920px;
          margin: 0 auto;
          text-align: center;
        }

        .not-box h2 {
          margin-bottom: 22px;
          font-size: clamp(38px, 5vw, 60px);
        }

        .not-box p {
          margin: 0 auto;
          max-width: 770px;
          color: var(--muted);
          line-height: 1.8;
          font-size: 17px;
        }

        .offer {
          padding: 105px 0;
          background: #3b3029;
          color: #fff;
        }

        .offer-inner {
          max-width: 850px;
          margin: 0 auto;
          text-align: center;
        }

        .offer .eyebrow {
          color: #ddc8b6;
        }

        .offer h2 {
          margin-bottom: 18px;
          font-size: clamp(40px, 6vw, 68px);
          line-height: 1.04;
        }

        .offer-intro {
          max-width: 700px;
          margin: 0 auto 35px;
          color: rgba(255, 255, 255, 0.75);
          font-size: 17px;
          line-height: 1.8;
        }

        .price-card {
          max-width: 600px;
          margin: 0 auto;
          padding: 40px 30px;
          border-radius: 24px;
          background: #f7f1ea;
          color: var(--text);
        }

        .installments-label {
          margin-bottom: 4px;
          font-size: 14px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--muted);
        }

        .installments {
          margin-bottom: 6px;
          font-family: Georgia, "Times New Roman", serif;
          font-size: clamp(48px, 7vw, 74px);
          line-height: 1;
          color: var(--accent-dark);
        }

        .cash {
          margin-bottom: 24px;
          font-size: 17px;
          color: var(--muted);
        }

        .cash strong {
          color: var(--text);
        }

        .cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          min-height: 56px;
          padding: 0 32px;
          border-radius: 999px;
          background: var(--accent-dark);
          color: #fff;
          font-weight: 700;
          letter-spacing: 0.03em;
          text-transform: uppercase;
          transition:
            transform 0.2s ease,
            opacity 0.2s ease;
        }

        .cta:hover {
          transform: translateY(-2px);
          opacity: 0.93;
        }

        .price-note {
          margin-top: 18px;
          font-size: 12px;
          line-height: 1.6;
          color: var(--muted);
        }

        .faq {
          display: grid;
          gap: 12px;
        }

        .faq-item {
          padding: 26px 0;
          border-bottom: 1px solid var(--line);
        }

        .faq-item h3 {
          margin-bottom: 10px;
          font-size: 25px;
        }

        .faq-item p {
          margin: 0;
          color: var(--muted);
          line-height: 1.75;
        }

        .final-cta {
          padding: 110px 0 120px;
          text-align: center;
        }

        .final-cta h2 {
          max-width: 850px;
          margin: 0 auto 22px;
          font-size: clamp(42px, 6vw, 70px);
          line-height: 1.02;
        }

        .final-cta p {
          max-width: 700px;
          margin: 0 auto 30px;
          color: var(--muted);
          font-size: 17px;
          line-height: 1.8;
        }

        .footer {
          padding: 28px 0;
          border-top: 1px solid var(--line);
          text-align: center;
          color: var(--muted);
          font-size: 12px;
          line-height: 1.6;
        }

        @media (max-width: 980px) {
          .hero-grid,
          .course-intro,
          .audience {
            grid-template-columns: 1fr;
          }

          .hero {
            padding: 70px 0 90px;
          }

          .hero-copy {
            max-width: none;
          }

          .cycle,
          .how-it-works {
            grid-template-columns: repeat(2, 1fr);
          }

          .features {
            grid-template-columns: 1fr;
          }

          .hero-image {
            max-width: 720px;
            margin: 0 auto;
          }
        }

        @media (max-width: 640px) {
          .container {
            width: min(calc(100% - 28px), var(--max));
          }

          .topbar {
            padding: 18px 0;
          }

          .brand {
            font-size: 15px;
          }

          .hero {
            padding: 52px 0 70px;
          }

          .hero h1 {
            font-size: 48px;
          }

          .hero-subtitle {
            font-size: 18px;
          }

          .section {
            padding: 72px 0;
          }

          .section-heading {
            margin-bottom: 35px;
          }

          .pain-grid,
          .cycle,
          .how-it-works {
            grid-template-columns: 1fr;
          }

          .cycle-card {
            min-height: auto;
          }

          .turning-point {
            padding: 30px 24px;
          }

          .module {
            grid-template-columns: 1fr;
          }

          .audience-card {
            padding: 28px;
          }

          .offer {
            padding: 78px 0;
          }

          .price-card {
            padding: 34px 20px;
          }

          .cta {
            width: 100%;
            padding: 0 20px;
          }
        }
      `}</style>

      {/* HEADER */}
      <header className="topbar">
        <div className="container topbar-inner">
          <div className="brand">
            Reconexão
            <span>Instituto Kamilah Franco</span>
          </div>
        </div>
      </header>

      {/* HERO — SEM PREÇO E SEM CTA */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Reconexão</span>

            <h1>
              Pare de ter <em>a mesma briga.</em>
            </h1>

            <p className="hero-subtitle">
              Vocês se amam, mas parece que toda conversa importante
              termina do mesmo jeito?
            </p>

            <p className="hero-support">
              Talvez o problema não esteja apenas na discussão.
              Talvez vocês estejam presos em um ciclo que se repete
              entre vocês — e o primeiro passo para mudar isso é
              aprender a enxergá-lo.
            </p>
          </div>

          <div className="hero-image">
            <div className="hero-image-frame">
              <Image
                src="/images/reconexao-pare-de-ter-a-mesma-briga.png"
                alt="Reconexão — Pare de Ter a Mesma Briga"
                width={900}
                height={1100}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* DOR */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Talvez vocês reconheçam isso</span>

            <h2>
              A discussão muda. O final parece ser sempre o mesmo.
            </h2>

            <p>
              O assunto pode ser diferente, mas a dinâmica entre vocês
              continua se repetindo.
            </p>
          </div>

          <div className="pain-grid">
            <div className="pain-card">
              <p>“A gente já conversou sobre isso tantas vezes.”</p>
            </div>

            <div className="pain-card">
              <p>“Qualquer assunto importante acaba virando discussão.”</p>
            </div>

            <div className="pain-card">
              <p>“Eu tento falar e parece que ele(a) não me escuta.”</p>
            </div>

            <div className="pain-card">
              <p>“Quando eu insisto, ele(a) se fecha ainda mais.”</p>
            </div>

            <div className="pain-card">
              <p>“Depois da briga vem o silêncio e a distância.”</p>
            </div>

            <div className="pain-card">
              <p>“A gente faz as pazes, mas pouco tempo depois tudo volta.”</p>
            </div>
          </div>
        </div>
      </section>

      {/* CICLO */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">O que pode estar acontecendo</span>

            <h2>
              Vocês podem não estar apenas brigando. Podem estar presos em
              um ciclo.
            </h2>

            <p>
              Quando o conflito começa, uma reação pode alimentar a próxima.
              E, sem perceber, vocês passam a responder ao comportamento um
              do outro em vez de realmente resolver o que está por trás.
            </p>
          </div>

          <div className="cycle">
            <div className="cycle-card">
              <div className="cycle-number">01</div>
              <h3>Gatilho</h3>
              <p>
                Algo acontece e desperta frustração, insegurança ou sensação
                de não ser compreendido.
              </p>
            </div>

            <div className="cycle-card">
              <div className="cycle-number">02</div>
              <h3>Reação</h3>
              <p>
                Um reage tentando se proteger, ser ouvido ou resolver a
                situação.
              </p>
            </div>

            <div className="cycle-card">
              <div className="cycle-number">03</div>
              <h3>Contra-reação</h3>
              <p>
                O outro responde ao que recebeu — e a tensão começa a crescer.
              </p>
            </div>

            <div className="cycle-card">
              <div className="cycle-number">04</div>
              <h3>Escalada</h3>
              <p>
                Cobranças, defesa, silêncio ou afastamento entram em cena.
              </p>
            </div>

            <div className="cycle-card">
              <div className="cycle-number">05</div>
              <h3>Distância</h3>
              <p>
                O assunto não é realmente resolvido e o padrão fica pronto
                para se repetir.
              </p>
            </div>
          </div>

          <div className="turning-point">
            <h3>
              Antes de tentar resolver a próxima briga, vocês precisam
              aprender a enxergar o ciclo.
            </h3>

            <p>
              Quando vocês começam a perceber o que acontece entre os dois,
              deixam de olhar apenas para “quem começou” e passam a observar
              a dinâmica da relação.
            </p>
          </div>
        </div>
      </section>

      {/* NOVA PERSPECTIVA */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Uma nova perspectiva</span>

            <h2>
              E se a pergunta deixasse de ser “quem está certo?”
            </h2>

            <p>
              Durante essa jornada, vocês vão começar a substituir essa
              pergunta por outra:
            </p>
          </div>

          <div className="turning-point">
            <h3>“O que acontece entre nós quando isso começa?”</h3>

            <p>
              Essa mudança de olhar permite reconhecer padrões, compreender
              reações e começar a criar espaço para respostas diferentes.
            </p>
          </div>
        </div>
      </section>

      {/* CURSO */}
      <section className="section">
        <div className="container course-intro">
          <div className="course-intro-image">
            <Image
              src="/images/reconexao-pare-de-ter-a-mesma-briga.png"
              alt="Curso Reconexão — Pare de Ter a Mesma Briga"
              width={900}
              height={1100}
            />
          </div>

          <div className="course-intro-copy">
            <span className="eyebrow">Conheça a jornada</span>

            <h2>
              Reconexão — Pare de Ter a Mesma Briga
            </h2>

            <p>
              Um curso online, 100% gravado, criado para casais que estão
              cansados de repetir os mesmos conflitos e querem compreender
              melhor a dinâmica da própria relação.
            </p>

            <p>
              A proposta é simples: vocês aprendem a observar, compreender
              e começar a interromper padrões que continuam levando a relação
              para o mesmo lugar.
            </p>

            <div className="quote">
              “Não é sobre descobrir quem está certo.
              <br />
              É sobre entender o que está acontecendo entre vocês.”
            </div>
          </div>
        </div>
      </section>

      {/* APRENDIZADOS */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">O que vocês vão aprender</span>

            <h2>
              Uma jornada para compreender antes de tentar consertar.
            </h2>
          </div>

          <div className="features">
            <div className="feature">
              <h3>Identificar o ciclo</h3>
              <p>
                Entender como os conflitos começam, como uma reação influencia
                a outra e por que algumas discussões seguem caminhos tão
                parecidos.
              </p>
            </div>

            <div className="feature">
              <h3>Olhar além da briga</h3>
              <p>
                Perceber sentimentos, necessidades e vulnerabilidades que nem
                sempre aparecem naquilo que é dito durante o conflito.
              </p>
            </div>

            <div className="feature">
              <h3>Reconhecer o automático</h3>
              <p>
                Identificar as respostas que surgem quando cada parceiro se
                sente frustrado, incompreendido ou ameaçado emocionalmente.
              </p>
            </div>

            <div className="feature">
              <h3>Interromper o padrão</h3>
              <p>
                Aprender a perceber quando o ciclo começa e experimentar
                respostas diferentes antes que a situação escale.
              </p>
            </div>

            <div className="feature">
              <h3>Criar novas respostas</h3>
              <p>
                Desenvolver formas mais conscientes de expressar sentimentos,
                necessidades e pedidos.
              </p>
            </div>

            <div className="feature">
              <h3>Começar a reconectar</h3>
              <p>
                Transformar a compreensão em pequenas mudanças práticas na
                forma como vocês se relacionam.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* MÓDULOS */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Por dentro do curso</span>

            <h2>Uma sequência pensada para levar vocês de um ponto ao outro.</h2>

            <p>
              Cada etapa foi organizada para que o conhecimento seja colocado
              em prática antes de avançar.
            </p>
          </div>

          <div className="modules">
            <div className="module">
              <div className="module-number">01</div>
              <div>
                <h3>A Briga Não É o Problema</h3>
                <p>
                  Vocês começam a perceber que as discussões fazem parte de
                  uma dinâmica maior e identificam o ciclo de conflitos.
                </p>
              </div>
            </div>

            <div className="module">
              <div className="module-number">02</div>
              <div>
                <h3>O Que Está Por Trás da Briga</h3>
                <p>
                  Vamos olhar para emoções, necessidades e respostas que
                  aparecem por trás do comportamento visível.
                </p>
              </div>
            </div>

            <div className="module">
              <div className="module-number">03</div>
              <div>
                <h3>O Padrão Começa a Mudar</h3>
                <p>
                  O casal aprende a identificar os primeiros sinais do ciclo e
                  começa a experimentar respostas diferentes.
                </p>
              </div>
            </div>

            <div className="module">
              <div className="module-number">04</div>
              <div>
                <h3>Reconstruindo a Conexão</h3>
                <p>
                  Pequenas mudanças de comunicação, segurança e interação
                  começam a ganhar espaço na relação.
                </p>
              </div>
            </div>

            <div className="module">
              <div className="module-number">05</div>
              <div>
                <h3>E Agora?</h3>
                <p>
                  Vocês revisitam o ponto de partida, percebem o que mudou e
                  refletem sobre os próximos passos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMO FUNCIONA */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Como funciona</span>

            <h2>Não foi feito para assistir correndo.</h2>

            <p>
              A proposta é que vocês assistam, pratiquem e observem o que
              acontece na relação antes de seguir para a próxima etapa.
            </p>
          </div>

          <div className="how-it-works">
            <div className="step">
              <strong>Assistir</strong>
              <span>Uma aula por vez.</span>
            </div>

            <div className="step">
              <strong>Refletir</strong>
              <span>Olhar para a própria relação.</span>
            </div>

            <div className="step">
              <strong>Praticar</strong>
              <span>Aplicar o exercício proposto.</span>
            </div>

            <div className="step">
              <strong>Observar</strong>
              <span>Perceber o que muda.</span>
            </div>

            <div className="step">
              <strong>Avançar</strong>
              <span>Seguir para a próxima etapa.</span>
            </div>
          </div>

          <p className="timeline-note">
            Recomendamos aproximadamente uma aula a cada dois dias. Assim,
            a jornada pode ser percorrida em cerca de 30 dias. Vocês terão
            1 ano de acesso ao curso.
          </p>
        </div>
      </section>

      {/* O QUE RECEBE */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Ao entrar</span>

            <h2>O que vocês recebem</h2>
          </div>

          <div className="features">
            <div className="feature">
              <h3>15 aulas</h3>
              <p>
                Uma sequência organizada em cinco módulos para acompanhar toda
                a jornada.
              </p>
            </div>

            <div className="feature">
              <h3>Mapa Inicial do Casal</h3>
              <p>
                Um formulário individual para que cada parceiro reconheça
                como está vivendo a relação hoje.
              </p>
            </div>

            <div className="feature">
              <h3>Exercícios práticos</h3>
              <p>
                Atividades pensadas para transformar o conteúdo em experiência
                dentro da relação.
              </p>
            </div>

            <div className="feature">
              <h3>Avaliação Final</h3>
              <p>
                Um momento para comparar a percepção inicial com aquilo que
                foi vivido ao longo da jornada.
              </p>
            </div>

            <div className="feature">
              <h3>Área de membros</h3>
              <p>
                Todo o conteúdo reunido em um único ambiente.
              </p>
            </div>

            <div className="feature">
              <h3>1 ano de acesso</h3>
              <p>
                Tempo para fazer o curso com calma e revisitar o conteúdo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Este curso é para vocês?</span>

            <h2>
              Para casais que ainda querem investir na relação.
            </h2>
          </div>

          <div className="audience">
            <div className="audience-card">
              <h3>Pode fazer sentido para vocês se...</h3>

              <ul>
                <li>
                  Vocês estão cansados das mesmas discussões.
                </li>
                <li>
                  Sentem que qualquer conversa importante pode virar conflito.
                </li>
                <li>
                  Percebem distância emocional.
                </li>
                <li>
                  Um fala e o outro se fecha.
                </li>
                <li>
                  Vocês sentem que já conversaram muitas vezes e continuam
                  repetindo os mesmos padrões.
                </li>
                <li>
                  Vocês querem compreender melhor o que está acontecendo entre
                  vocês.
                </li>
              </ul>
            </div>

            <div className="audience-card">
              <h3>Talvez não seja o momento se...</h3>

              <ul>
                <li>
                  Vocês procuram uma promessa de eliminar completamente os
                  conflitos.
                </li>
                <li>
                  Um parceiro não deseja participar de nenhuma reflexão sobre
                  a própria relação.
                </li>
                <li>
                  Vocês esperam que o curso determine quem está certo ou errado.
                </li>
                <li>
                  A situação exige uma avaliação profissional individualizada
                  ou um cuidado específico de segurança.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* O QUE NÃO PROMETE */}
      <section className="section not-section">
        <div className="container">
          <div className="not-box">
            <span className="eyebrow">Uma proposta responsável</span>

            <h2>Este curso não promete resolver tudo em poucas aulas.</h2>

            <p>
              Ele não promete eliminar todos os conflitos, transformar um
              parceiro no culpado ou garantir um determinado resultado para a
              relação. A proposta é mais concreta: ajudar vocês a compreender
              o ciclo de conflitos e começar a responder a ele de uma maneira
              diferente.
            </p>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section className="offer">
        <div className="container offer-inner">
          <span className="eyebrow">Comece agora</span>

          <h2>Um primeiro passo para mudar a dinâmica entre vocês.</h2>

          <p className="offer-intro">
            Faça a jornada com calma, no seu ritmo, e comece a olhar para as
            mesmas brigas de uma maneira diferente.
          </p>

          <div className="price-card">
            <div className="installments-label">
              Forma parcelada
            </div>

            <div className="installments">
              12x de R$ 10,05
            </div>

            <div className="cash">
              ou <strong>R$ 97,00 à vista</strong>
            </div>

            <a
              href={checkoutUrl}
              className="cta"
              aria-label="Quero começar agora"
            >
              Quero começar agora
            </a>

            <div className="price-note">
              Pagamento único • Acesso por 1 ano
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Dúvidas frequentes</span>

            <h2>Antes de começar</h2>
          </div>

          <div className="faq">
            <div className="faq-item">
              <h3>O curso é ao vivo?</h3>
              <p>
                Não. O curso é 100% gravado e fica disponível na área de
                membros.
              </p>
            </div>

            <div className="faq-item">
              <h3>Precisamos assistir juntos?</h3>
              <p>
                O curso foi pensado para o casal, mas algumas atividades são
                individuais e outras são feitas em conjunto. As orientações
                aparecem ao longo das aulas.
              </p>
            </div>

            <div className="faq-item">
              <h3>Quanto tempo dura a jornada?</h3>
              <p>
                Recomendamos aproximadamente uma aula a cada dois dias, levando
                cerca de 30 dias para percorrer o conteúdo com calma.
              </p>
            </div>

            <div className="faq-item">
              <h3>Posso fazer mais rápido?</h3>
              <p>
                Sim. A recomendação de intervalo serve para dar tempo de
                praticar e observar o conteúdo. Vocês podem avançar no próprio
                ritmo.
              </p>
            </div>

            <div className="faq-item">
              <h3>Por quanto tempo terei acesso?</h3>
              <p>
                Você terá 1 ano de acesso ao curso.
              </p>
            </div>

            <div className="faq-item">
              <h3>O que é o Mapa Inicial do Casal?</h3>
              <p>
                É um formulário individual preenchido antes de começar a
                jornada, para ajudar cada parceiro a olhar para a relação como
                ela está hoje.
              </p>
            </div>

            <div className="faq-item">
              <h3>O curso é terapia de casal?</h3>
              <p>
                Não. É um curso educativo e de reflexão para casais. Ele não
                substitui uma avaliação ou acompanhamento profissional quando
                estes forem necessários.
              </p>
            </div>

            <div className="faq-item">
              <h3>E se houver medo, ameaça ou violência na relação?</h3>
              <p>
                Situações de medo, ameaça, coerção ou violência exigem atenção
                específica e não devem ser tratadas simplesmente como mais um
                problema de comunicação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="final-cta">
        <div className="container">
          <span className="eyebrow">Seu primeiro passo</span>

          <h2>
            Talvez vocês não precisem de outra conversa sobre a última briga.
          </h2>

          <p>
            Talvez precisem começar a entender por que ela continua
            acontecendo.
          </p>

          <a href={checkoutUrl} className="cta">
            Quero começar agora
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} Instituto Kamilah Franco.
          <br />
          Reconexão — Pare de Ter a Mesma Briga.
        </div>
      </footer>
    </main>
  );
}
