"use client";
import Image from "next/image";

const checkoutUrl = "https://pay.kiwify.com.br/Aq4x7UB";

export default function ReconexaoPage() {
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
          font-family: Arial, Helvetica, sans-serif;
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
          font-size: clamp(42px, 6.5vw, 72px);
          line-height: 1.02;
          letter-spacing: -0.04em;
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
          font-size: clamp(28px, 4vw, 44px);
          line-height: 1.15;
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
          font-size: clamp(36px, 5vw, 56px);
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
          font-size: 22px;
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
          font-size: 24px;
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
          font-size: 26px;
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
          font-size: 30px;
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
          font-size: clamp(36px, 5vw, 56px);
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
          font-size: clamp(38px, 5.5vw, 62px);
          line-height: 1.05;
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
          font-size: 24px;
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
          font-size: clamp(38px, 5.5vw, 62px);
          line-height: 1.05;
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
            font-size: 42px;
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

      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Reconexão</span>
            <h1>
              Será que o amor que você espera receber é o amor que o outro{" "}
              <em>sabe entregar?</em>
            </h1>
            <p className="hero-subtitle">
              Vocês se amam… mas às vezes parece que o amor não está chegando.
            </p>
            <p className="hero-support">
              Talvez o problema não seja falta de amor.
              <br />
              Talvez esteja faltando <strong>tradução</strong>.
            </p>
          </div>
          <div className="hero-image">
            <div className="hero-image-frame">
              <Image
                src="/images/reconexao-pare-de-ter-a-mesma-briga.png"
                alt="Reconexão — Os 3 Mapas da Reconexão"
                width={900}
                height={1100}
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* DOR / IDENTIFICAÇÃO */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Talvez você reconheça isso</span>
            <h2>
              A gente se ama. Mas as formas de cuidar um do outro nem sempre se
              encontram.
            </h2>
            <p>
              O carinho pode existir e, mesmo assim, a sensação de não ser
              compreendido(a) continua aparecendo.
            </p>
          </div>
          <div className="pain-grid">
            <div className="pain-card">
              <p>
                “Eu tento demonstrar amor, mas parece que não é suficiente.”
              </p>
            </div>
            <div className="pain-card">
              <p>
                “Ele(a) faz coisas por mim, mas eu continuo me sentindo
                invisível.”
              </p>
            </div>
            <div className="pain-card">
              <p>
                “A gente se ama, mas as formas de cuidar um do outro não se
                encontram.”
              </p>
            </div>
            <div className="pain-card">
              <p>“Eu peço uma coisa e o outro entrega outra.”</p>
            </div>
            <div className="pain-card">
              <p>
                “Sinto que estou dando o meu melhor… e ainda assim não me sinto
                amado(a).”
              </p>
            </div>
            <div className="pain-card">
              <p>
                “Parece que falamos idiomas diferentes quando o assunto é
                amor.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O DESENCONTRO (substitui o ciclo de brigas) */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">O que pode estar acontecendo</span>
            <h2>
              Talvez não esteja faltando amor. Talvez esteja faltando tradução.
            </h2>
            <p>
              Quando as formas de dar e receber amor não se encontram, o
              carinho real pode existir… e ainda assim a conexão se perde no
              caminho.
            </p>
          </div>
          <div className="cycle">
            <div className="cycle-card">
              <div className="cycle-number">01</div>
              <h3>Eu espero</h3>
              <p>
                Você tem uma forma específica de se sentir amado(a), visto(a)
                e conectado(a).
              </p>
            </div>
            <div className="cycle-card">
              <div className="cycle-number">02</div>
              <h3>Eu ofereço</h3>
              <p>
                Você demonstra amor da maneira que é natural e espontânea para
                você.
              </p>
            </div>
            <div className="cycle-card">
              <div className="cycle-number">03</div>
              <h3>O outro recebe</h3>
              <p>
                O que você oferece pode não ser o que a outra pessoa consegue
                reconhecer como amor.
              </p>
            </div>
            <div className="cycle-card">
              <div className="cycle-number">04</div>
              <h3>O desencontro</h3>
              <p>
                Expectativas não comunicadas e demonstrações que passam
                despercebidas.
              </p>
            </div>
            <div className="cycle-card">
              <div className="cycle-number">05</div>
              <h3>A distância</h3>
              <p>
                Mesmo com carinho real, a sensação de não ser compreendido(a)
                cresce.
              </p>
            </div>
          </div>
          <div className="turning-point">
            <h3>
              Antes de tentar mudar a relação, olhe para os três lugares onde
              o amor acontece: em você, no outro e no encontro entre vocês.
            </h3>
            <p>
              Quando você começa a enxergar como ama, como precisa ser amado(a)
              e como o outro demonstra afeto, deixa de olhar apenas para “o que
              está faltando” e passa a observar onde o amor se encontra — e onde
              ele se perde.
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
              E se a pergunta deixasse de ser “por que ele(a) não me ama do
              jeito que eu preciso?”
            </h2>
            <p>
              Durante essa jornada, você vai começar a substituir essa pergunta
              por outras:
            </p>
          </div>
          <div className="turning-point">
            <h3>
              “Como eu realmente preciso ser amado(a)?”
              <br />
              “Como eu naturalmente demonstro amor?”
              <br />
              “E se o outro estiver tentando me amar… de um jeito diferente?”
            </h3>
            <p>
              Essa mudança de olhar permite reconhecer necessidades,
              compreender diferenças e começar a criar novas formas de conexão.
            </p>
          </div>
        </div>
      </section>

      {/* CURSO / INTRODUÇÃO */}
      <section className="section">
        <div className="container course-intro">
          <div className="course-intro-image">
            <Image
              src="/images/reconexao-pare-de-ter-a-mesma-briga.png"
              alt="Curso Reconexão — Os 3 Mapas da Reconexão"
              width={900}
              height={1100}
            />
          </div>
          <div className="course-intro-copy">
            <span className="eyebrow">Conheça a jornada</span>
            <h2>Reconexão — Os 3 Mapas da Reconexão</h2>
            <p>
              Um curso online, 100% gravado, criado para quem está em um
              relacionamento e deseja compreender melhor a si próprio(a), a
              pessoa que ama e a forma como o amor é dado e recebido entre
              vocês.
            </p>
            <p>
              Pode ser feito individualmente ou pelo casal. Você pode começar
              essa jornada mesmo que a outra pessoa ainda não esteja pronta.
            </p>
            <div className="quote">
              “Talvez não esteja faltando amor.
              <br />
              Talvez esteja faltando tradução.”
            </div>
          </div>
        </div>
      </section>

      {/* O QUE VOCÊ VAI DESCOBRIR */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">O que você vai descobrir</span>
            <h2>
              Uma jornada para compreender antes de tentar consertar.
            </h2>
          </div>
          <div className="features">
            <div className="feature">
              <h3>Como você recebe amor</h3>
              <p>
                O que realmente te faz se sentir valorizado(a), visto(a),
                lembrado(a) e conectado(a).
              </p>
            </div>
            <div className="feature">
              <h3>Como você demonstra amor</h3>
              <p>
                O padrão espontâneo de cuidado e afeto que você oferece — e se
                ele é diferente do que você gostaria de receber.
              </p>
            </div>
            <div className="feature">
              <h3>O desencontro interno</h3>
              <p>
                Se você está oferecendo ao outro aquilo que gostaria de
                receber.
              </p>
            </div>
            <div className="feature">
              <h3>O olhar para o outro</h3>
              <p>
                Como a pessoa que você ama pode estar tentando demonstrar amor
                de uma maneira diferente da sua.
              </p>
            </div>
            <div className="feature">
              <h3>O que passa despercebido</h3>
              <p>
                Quais demonstrações de amor podem estar acontecendo e você
                ainda não está reconhecendo.
              </p>
            </div>
            <div className="feature">
              <h3>Novas formas de conexão</h3>
              <p>
                Como transformar necessidades em comunicação mais clara e
                experimentar novas possibilidades de relação.
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
            <h2>
              Uma sequência pensada para levar você de um ponto ao outro.
            </h2>
            <p>
              Cada etapa foi organizada para que o conhecimento seja colocado
              em prática antes de avançar.
            </p>
          </div>
          <div className="modules">
            <div className="module">
              <div className="module-number">00</div>
              <div>
                <h3>Comece Aqui — A jornada começa por você</h3>
                <p>
                  Preparação, orientação e a primeira reflexão para entrar na
                  jornada com clareza.
                </p>
              </div>
            </div>
            <div className="module">
              <div className="module-number">01</div>
              <div>
                <h3>Por que eu não me sinto amado(a)?</h3>
                <p>
                  Entrada pela dor real e compreensão do desencontro emocional
                  entre o que se espera e o que se recebe.
                </p>
              </div>
            </div>
            <div className="module">
              <div className="module-number">02</div>
              <div>
                <h3>Descobrindo como eu amo</h3>
                <p>
                  Necessidades, formas de receber e formas de demonstrar amor —
                  o ponto de partida do autoconhecimento.
                </p>
              </div>
            </div>
            <div className="module">
              <div className="module-number">03</div>
              <div>
                <h3>Meu Mapa da Linguagem do Amor</h3>
                <p>
                  As cinco linguagens como ferramenta de compreensão +
                  diagnóstico e construção do Mapa 1 — EU.
                </p>
              </div>
            </div>
            <div className="module">
              <div className="module-number">04</div>
              <div>
                <h3>Aprendendo a enxergar o outro</h3>
                <p>
                  Diferenças individuais, observação e construção do Mapa 2 — O
                  OUTRO.
                </p>
              </div>
            </div>
            <div className="module">
              <div className="module-number">05</div>
              <div>
                <h3>Onde o amor se perde no caminho</h3>
                <p>
                  Desencontros, expectativas não comunicadas e o cruzamento que
                  forma o Mapa 3 — NÓS.
                </p>
              </div>
            </div>
            <div className="module">
              <div className="module-number">06</div>
              <div>
                <h3>Construindo novas formas de conexão</h3>
                <p>
                  Aplicação prática, desafio e o Plano de Reconexão para
                  continuar a jornada.
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
              A proposta é que você assista, reflita, pratique e observe o que
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
              <span>Olhar para a própria experiência.</span>
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
            Recomendamos aproximadamente uma aula a cada dois dias. Assim, a
            jornada pode ser percorrida em cerca de 30 dias. Você terá 1 ano de
            acesso ao curso.
          </p>
        </div>
      </section>

      {/* O QUE RECEBE */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Ao entrar</span>
            <h2>O que você recebe</h2>
          </div>
          <div className="features">
            <div className="feature">
              <h3>16 aulas</h3>
              <p>
                Uma sequência organizada em 6 módulos + Comece Aqui para
                acompanhar toda a jornada.
              </p>
            </div>
            <div className="feature">
              <h3>Mapa da Linguagem do Amor</h3>
              <p>
                Diagnóstico próprio do curso para identificar como você tende a
                receber e a demonstrar amor.
              </p>
            </div>
            <div className="feature">
              <h3>Exercícios práticos</h3>
              <p>
                Atividades pensadas para transformar o conteúdo em experiência
                real — sozinho(a) ou em casal.
              </p>
            </div>
            <div className="feature">
              <h3>Plano de Reconexão</h3>
              <p>
                Ferramenta final de integração para continuar praticando o que
                foi descoberto.
              </p>
            </div>
            <div className="feature">
              <h3>Área de membros</h3>
              <p>Todo o conteúdo reunido em um único ambiente.</p>
            </div>
            <div className="feature">
              <h3>1 ano de acesso</h3>
              <p>
                Tempo para fazer o curso com calma e revisitar o conteúdo
                sempre que precisar.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="section section-soft">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">Este curso é para você?</span>
            <h2>
              Para quem deseja compreender melhor a si, o outro e a relação.
            </h2>
          </div>
          <div className="audience">
            <div className="audience-card">
              <h3>Pode fazer sentido se...</h3>
              <ul>
                <li>
                  Você está em um relacionamento e sente que o amor não está
                  chegando como gostaria.
                </li>
                <li>
                  Percebe diferença entre a forma como demonstra amor e a forma
                  como gostaria de receber.
                </li>
                <li>
                  Quer compreender melhor a si mesmo(a) e a pessoa que ama.
                </li>
                <li>
                  Deseja sair da sensação de “não sou compreendido(a)”.
                </li>
                <li>
                  Quer aprender a comunicar necessidades de forma mais clara e
                  conectiva.
                </li>
                <li>
                  Pode fazer sozinho(a) ou em casal — e quer começar mesmo que o
                  outro ainda não esteja pronto.
                </li>
              </ul>
            </div>
            <div className="audience-card">
              <h3>Talvez não seja o momento se...</h3>
              <ul>
                <li>
                  Você procura uma promessa de eliminar todos os conflitos ou
                  “salvar” o relacionamento.
                </li>
                <li>
                  Espera que o curso mude o outro sem nenhum envolvimento seu.
                </li>
                <li>
                  Busca que o curso determine quem está certo ou errado.
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

      {/* PROPOSTA RESPONSÁVEL */}
      <section className="section not-section">
        <div className="container">
          <div className="not-box">
            <span className="eyebrow">Uma proposta responsável</span>
            <h2>
              Este curso não promete transformar o outro nem eliminar todos os
              conflitos.
            </h2>
            <p>
              Ele não promete salvar o relacionamento, mudar o parceiro ou
              garantir um determinado resultado. A proposta é mais concreta e
              honesta: ajudar você a compreender as diferentes formas de dar e
              receber amor, reconhecer desencontros e começar a construir novas
              formas de conexão — a partir do que está sob o seu alcance.
            </p>
          </div>
        </div>
      </section>

      {/* OFERTA */}
      <section className="offer">
        <div className="container offer-inner">
          <span className="eyebrow">Comece agora</span>
          <h2>
            Um primeiro passo para olhar o amor de uma forma diferente.
          </h2>
          <p className="offer-intro">
            Faça a jornada com calma, no seu ritmo, e comece a enxergar onde o
            amor se encontra… e onde ele se perde no caminho.
          </p>
          <div className="price-card">
            <div className="installments-label">Forma parcelada</div>
            <div className="installments">12x de R$ 10,03</div>
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
              <h3>Preciso fazer com o meu parceiro(a)?</h3>
              <p>
                Não. O curso pode ser feito individualmente. O casal também
                pode percorrer a jornada junto. Você pode começar mesmo que a
                outra pessoa ainda não esteja pronta.
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
                praticar e observar. Você pode avançar no próprio ritmo.
              </p>
            </div>
            <div className="faq-item">
              <h3>Por quanto tempo terei acesso?</h3>
              <p>Você terá 1 ano de acesso ao curso.</p>
            </div>
            <div className="faq-item">
              <h3>O que é o Mapa da Linguagem do Amor?</h3>
              <p>
                É um diagnóstico próprio do curso que ajuda você a enxergar
                como tende a receber e a demonstrar amor, além de possíveis
                pontos de desencontro. Ele não é um teste psicológico ou
                instrumento clínico.
              </p>
            </div>
            <div className="faq-item">
              <h3>O curso é terapia de casal?</h3>
              <p>
                Não. É um curso educativo e de autoconhecimento. Ele não
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
            Talvez você não precise de mais uma conversa sobre o que está
            faltando.
          </h2>
          <p>
            Talvez precise começar a entender como o amor é dado, recebido e
            traduzido entre vocês.
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
          Reconexão — Os 3 Mapas da Reconexão.
        </div>
      </footer>
    </main>
  );
}
