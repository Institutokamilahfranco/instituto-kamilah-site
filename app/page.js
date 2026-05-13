export default function Home() {
  return (
    <main
      style={{
        backgroundColor: '#F5F1EC',
        color: '#4B3A36',
        fontFamily: 'Arial, sans-serif',
        overflowX: 'hidden',
      }}
    >
      {/* HERO */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '60px 8%',
          gap: '60px',
          flexWrap: 'wrap',
        }}
      >
        <div style={{ flex: 1, minWidth: '300px' }}>
          <img
            src="/logo.jpeg"
            alt="Instituto Kamilah Franco"
            style={{
              width: '180px',
              marginBottom: '30px',
            }}
          />

          <h1
            style={{
              fontSize: '4rem',
              lineHeight: '1.1',
              marginBottom: '30px',
              color: '#4A3732',
            }}
          >
            Instituto <br />
            Kamilah Franco
          </h1>

          <p
            style={{
              fontSize: '1.2rem',
              lineHeight: '2rem',
              maxWidth: '700px',
              marginBottom: '25px',
            }}
          >
            O Instituto Kamilah Franco nasceu com o propósito de acolher
            mulheres em seus processos de fortalecimento emocional,
            reconstrução interna e transformação pessoal.
          </p>

          <p
            style={{
              fontSize: '1.1rem',
              lineHeight: '2rem',
              maxWidth: '700px',
            }}
          >
            Mais do que um espaço terapêutico, o instituto foi criado para
            auxiliar mulheres que desejam romper padrões de autossabotagem,
            fortalecer sua estrutura emocional e desenvolver uma vida com mais
            clareza, posicionamento, segurança e propósito.
          </p>
        </div>

        <div style={{ flex: 1, minWidth: '300px', textAlign: 'center' }}>
          <img
            src="/kamilah.png"
            alt="Kamilah Franco"
            style={{
              width: '100%',
              maxWidth: '480px',
              borderRadius: '25px',
              boxShadow: '0 15px 40px rgba(0,0,0,0.12)',
            }}
          />
        </div>
      </section>

      {/* SOBRE */}
      <section
        style={{
          padding: '100px 8%',
          backgroundColor: '#EFE7DF',
        }}
      >
        <div
          style={{
            maxWidth: '1100px',
            margin: '0 auto',
            textAlign: 'center',
          }}
        >
            <h2
              style={{
                fontSize: '3rem',
                marginBottom: '40px',
                color: '#4A3732',
              }}
            >
              Sobre o Instituto
            </h2>

            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: '2.2rem',
                marginBottom: '30px',
              }}
            >
              O Instituto Kamilah Franco é um espaço dedicado ao
              desenvolvimento emocional feminino, criado para acolher mulheres
              que desejam compreender seus padrões internos, fortalecer sua
              estrutura emocional e construir uma vida mais alinhada com sua
              essência, propósito e verdade.
            </p>

            <p
              style={{
                fontSize: '1.15rem',
                lineHeight: '2.2rem',
              }}
            >
              Aqui, cada processo é conduzido de forma estratégica,
              individualizada e humanizada, respeitando a história, os limites
              e o momento emocional de cada mulher.
            </p>
        </div>
      </section>

      {/* MISSÃO VISÃO VALORES */}
      <section
        style={{
          padding: '100px 8%',
        }}
      >
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '40px',
            maxWidth: '1300px',
            margin: '0 auto',
          }}
        >
          {/* MISSÃO */}
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '25px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
              transition: '0.4s',
            }}
          >
            <img
              src="/missao.png"
              alt="Missão"
              style={{
                width: '100%',
                height: '260px',
                objectFit: 'cover',
              }}
            />

            <div style={{ padding: '35px' }}>
              <h3
                style={{
                  fontSize: '2rem',
                  marginBottom: '20px',
                  color: '#4A3732',
                }}
              >
                Missão
              </h3>

              <p
                style={{
                  lineHeight: '2rem',
                  fontSize: '1.05rem',
                }}
              >
                Promover fortalecimento emocional e desenvolvimento interno
                para mulheres que desejam romper padrões de autossabotagem,
                construir segurança emocional e viver com mais clareza,
                autenticidade e propósito.
              </p>
            </div>
          </div>

          {/* VISÃO */}
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '25px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            }}
          >
            <img
              src="/visao.png"
              alt="Visão"
              style={{
                width: '100%',
                height: '260px',
                objectFit: 'cover',
              }}
            />

            <div style={{ padding: '35px' }}>
              <h3
                style={{
                  fontSize: '2rem',
                  marginBottom: '20px',
                  color: '#4A3732',
                }}
              >
                Visão
              </h3>

              <p
                style={{
                  lineHeight: '2rem',
                  fontSize: '1.05rem',
                }}
              >
                Ser referência no desenvolvimento emocional feminino,
                oferecendo processos terapêuticos humanizados, estratégicos e
                transformadores que auxiliem mulheres a fortalecerem sua relação
                consigo mesmas.
              </p>
            </div>
          </div>

          {/* VALORES */}
          <div
            style={{
              backgroundColor: '#fff',
              borderRadius: '25px',
              overflow: 'hidden',
              boxShadow: '0 10px 30px rgba(0,0,0,0.08)',
            }}
          >
            <img
              src="/valores.png"
              alt="Valores"
              style={{
                width: '100%',
                height: '260px',
                objectFit: 'cover',
              }}
            />

            <div style={{ padding: '35px' }}>
              <h3
                style={{
                  fontSize: '2rem',
                  marginBottom: '20px',
                  color: '#4A3732',
                }}
              >
                Valores
              </h3>

              <p
                style={{
                  lineHeight: '2rem',
                  fontSize: '1.05rem',
                }}
              >
                Acolhimento, ética, profundidade, autenticidade, respeito aos
                processos individuais, fortalecimento emocional e compromisso
                com transformações reais e sustentáveis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* AGENDAMENTO */}
      <section
        style={{
          backgroundColor: '#EFE7DF',
          padding: '100px 8%',
          textAlign: 'center',
        }}
      >
        <h2
          style={{
            fontSize: '3rem',
            marginBottom: '30px',
            color: '#4A3732',
          }}
        >
          Agendamento
        </h2>

        <p
          style={{
            maxWidth: '850px',
            margin: '0 auto 40px auto',
            lineHeight: '2rem',
            fontSize: '1.1rem',
          }}
        >
          Se você sente que está vivendo ciclos repetitivos, insegurança,
          autossabotagem ou deseja fortalecer sua estrutura emocional para viver
          com mais clareza e sustentação interna, entre em contato e agende seu
          atendimento.
        </p>

        <a
          href="https://wa.me/5500000000000"
          target="_blank"
          style={{
            backgroundColor: '#B08B57',
            color: '#fff',
            padding: '18px 40px',
            borderRadius: '50px',
            textDecoration: 'none',
            fontSize: '1rem',
            fontWeight: 'bold',
            display: 'inline-block',
          }}
        >
          Agendar Atendimento
        </a>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          padding: '35px',
          textAlign: 'center',
          backgroundColor: '#4A3732',
          color: '#fff',
        }}
      >
        <p>
          Instituto Kamilah Franco — Desenvolvimento emocional feminino,
          fortalecimento interno e transformação pessoal.
        </p>
      </footer>

      {/* BOTÃO WHATSAPP */}
      <a
        href="https://wa.me/5546988042216"
        target="_blank"
        style={{
          position: 'fixed',
          bottom: '25px',
          right: '25px',
          backgroundColor: '#25D366',
          width: '65px',
          height: '65px',
          borderRadius: '50%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '2rem',
          color: '#fff',
          textDecoration: 'none',
          boxShadow: '0 10px 25px rgba(0,0,0,0.2)',
          zIndex: 999,
        }}
      >
        ✆
      </a>
    </main>
  )
}
