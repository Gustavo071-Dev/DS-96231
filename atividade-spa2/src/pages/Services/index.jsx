import fotoPerfil from '../../assets/foto.jpg';
import './style.css';

function Services() {
  const listaServicos = [
    { nome: "Desenvolvimento Web", escopo: "Sites institucionais, Landing Pages de alta conversão e Blogs gerenciáveis." },
    { nome: "Sistemas & Softwares", escopo: "Programas personalizados para automação comercial e banco de dados." },
    { nome: "Aplicativos Mobile", escopo: "Apps modernos sob medida para Android e iOS utilizando as melhores práticas." },
    { nome: "Consultoria de TI", escopo: "Análise de processos, otimização de sistemas e arquitetura de nuvem." }
  ];

  return (
    <div className="services-page-container" id="inicio">
      {/* Seção Principal (Hero) */}
      <section className="hero">
        <div className="hero-content">
          <span className="location-badge">📍 Salvador, Bahia</span>
          <h1>Soluções Digitais Inteligentes com <span className="text-gradient">Luiz Gustavo</span></h1>
          <p>Desenvolvedor de sites, programs e aplicativos focados em trazer resultados, otimizar processos e destacar sua empresa no ambiente digital.</p>
          <div className="hero-buttons">
            <a href="#servicos" className="btn-primary">Ver Serviços</a>
            <a href="#contato" className="btn-secondary">Contato Direto</a>
          </div>
        </div>
        
        <div className="hero-visual">
          <div className="image-wrapper">
            <img src={fotoPerfil} alt="Luiz Gustavo dev" className="profile-img" />
          </div>
        </div>
      </section>

      {/* Seção de Diferenciais */}
      <section className="cards-section" id="diferenciais">
        <div className="section-title">
          <h2>Por que escolher meus serviços?</h2>
          <p>Garantia de código limpo, prazos respeitados e entrega focada na melhor experiência.</p>
        </div>
        <div className="grid-cards">
          <div className="feature-card">
            <div className="card-icon">⚡</div>
            <h3>Alta Performance</h3>
            <p>Aplicações super rápidas que carregam instantaneamente em qualquer celular ou computador.</p>
          </div>
          <div className="feature-card">
            <div className="card-icon">📱</div>
            <h3>Design Responsivo</h3>
            <p>Seu sistema ou site perfeitamente adaptado para telas de todos os tamanhos.</p>
          </div>
          <div className="feature-card">
            <div className="card-icon">🛠️</div>
            <h3>Suporte Dedicado</h3>
            <p>Acompanhamento próximo antes, durante e após a entrega do seu projeto de software.</p>
          </div>
        </div>
      </section>

      {/* Seção de Tabela de Serviços */}
      <section className="table-section" id="servicos">
        <div className="section-title">
          <h2>Tabela de Soluções</h2>
          <p>Confira as tecnologias e ferramentas de software que posso implementar no seu negócio.</p>
        </div>
        <div className="table-wrapper">
          <table className="custom-table">
            <thead>
              <tr>
                <th>Serviço</th>
                <th>O que desenvolvemos</th>
              </tr>
            </thead>
            <tbody>
              {listaServicos.map((servico, index) => (
                <tr key={index}>
                  <td className="service-name"><strong>{servico.nome}</strong></td>
                  <td className="service-desc">{servico.escopo}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Services;