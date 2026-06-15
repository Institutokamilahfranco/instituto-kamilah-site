export default function Home() {
  return (
    <main style={{ maxWidth: "1000px", margin: "0 auto", padding: "40px 20px" }}>

      {/* HERO */}
      <section style={{ textAlign: "center", marginBottom: "60px" }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "20px" }}>
          Desenvolvimento emocional para mulheres que desejam fortalecer a autoestima e romper a autossabotagem
        </h1>

        <p style={{ fontSize: "1.2rem", lineHeight: "1.8" }}>
          Atendimento terapêutico online para mulheres que enfrentam ansiedade,
          insegurança emocional, dependência emocional e padrões que limitam seu crescimento.
        </p>

        <p style={{ fontSize: "1.1rem", lineHeight: "1.8", marginTop: "20px" }}>
          Se você sente que está sempre cuidando de todos, mas tem dificuldade
          de cuidar de si mesma, vive ciclos repetitivos que causam sofrimento
          emocional ou percebe que algo dentro de você impede seu avanço,
          saiba que não precisa enfrentar esse processo sozinha.
        </p>

        <a
          href="https://wa.me/046988042216"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "30px",
            padding: "15px 30px",
            background: "#b38a72",
            color: "#fff",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Agendar sessão
        </a>
      </section>

      {/* COMO POSSO AJUDAR */}
      <section style={{ marginBottom: "60px" }}>
        <h2>Como posso te ajudar</h2>

        <p>
          Meu trabalho é auxiliar mulheres a compreenderem seus padrões
          emocionais, fortalecerem sua estrutura interna e desenvolverem
          mais clareza, confiança, segurança e autonomia emocional.
        </p>

        <ul>
          <li>Fortalecimento da autoestima</li>
          <li>Superação da autossabotagem</li>
          <li>Dependência emocional</li>
          <li>Ansiedade e insegurança emocional</li>
          <li>Autoconhecimento</li>
          <li>Desenvolvimento da confiança pessoal</li>
        </ul>
      </section>

      {/* IDENTIFICAÇÃO */}
      <section style={{ marginBottom: "60px" }}>
        <h2>Você se identifica com alguma destas situações?</h2>

        <ul>
          <li>Sente que está sempre colocando os outros em primeiro lugar?</li>
          <li>Tem dificuldade em dizer não?</li>
          <li>Vive ciclos repetitivos de sofrimento emocional?</li>
          <li>Sofre com baixa autoestima?</li>
          <li>Percebe padrões de autossabotagem?</li>
          <li>Deseja viver com mais leveza e segurança emocional?</li>
        </ul>

        <p style={{ marginTop: "20px" }}>
          O acompanhamento terapêutico pode ajudá-la a compreender a origem
          desses padrões e desenvolver recursos emocionais para construir
          uma vida mais equilibrada e autêntica.
        </p>
      </section>

      {/* SOBRE */}
      <section style={{ marginBottom: "60px" }}>
        <h2>Instituto Kamilah Franco</h2>

        <p>
          O Instituto Kamilah Franco foi criado para acolher mulheres
          que desejam fortalecer sua autoestima, superar bloqueios
          emocionais e construir uma relação mais saudável consigo mesmas.
        </p>

        <p>
          Cada processo terapêutico é conduzido de forma individualizada,
          respeitando a história, o momento e as necessidades de cada mulher.
        </p>
      </section>

    </main>
  );
}
