import React from 'react';
import './style.css';
import foto from '../../assets/foto.jpg'

function Product() {
  const especificacoes = [
    { item: "Motor", detalhe: "Bicilíndrico, 471 cc, refrigeração líquida" },
    { item: "Potência", detalhe: "50,2 cv a 8.500 rpm" },
    { item: "Torque", detalhe: "4,54 kgf.m a 6.500 rpm" },
    { item: "Câmbio", detalhe: "6 marchas com embreagem deslizante" },
  ];

  return (
    <div className="product-page">
      {/* Seção Principal / Banner */}
      <section className="hero-section">
        <div className="hero-text">
          <span className="badge">LANÇAMENTO 2026</span>
          <h1>Nova Honda CB 500X</h1>
          <p>A aventura nunca termina. Conheça a máquina perfeita para dominar o asfalto e a terra com o máximo de conforto e tecnologia.</p>
          <button className="cta-button">Quero Garantir a Minha</button>
        </div>
        <div className="hero-image-container">
          <img src={foto} alt="Honda CB 500X" className="product-image" />
        </div>
      </section>

      

      {/* Seção de Detalhes */}
      <section id="sobre" className="details-section">
        <h2>Por que escolher a CB 500X?</h2>
        <div className="cards-container">
          <div className="card">
            <h3>Performance</h3>
            <p>Motor elástico e econômico, perfeito para o dia a dia e lançar-se na estrada.</p>
          </div>
          <div className="card">
            <h3>Ergonomia</h3>
            <p>Posição de pilotagem ereta que evita o cansaço mesmo após horas de viagem.</p>
          </div>
          <div className="card">
            <h3>Segurança</h3>
            <p>Freios ABS de dois canais e suspensão invertida para total controle.</p>
          </div>
        </div>
      </section>

      {/* Seção de Ficha Técnica */}
      <section id="especificacoes" className="specs-section">
        <h2>Ficha Técnica</h2>
        <table className="specs-table">
          <thead>
            <tr>
              <th>Atributo</th>
              <th>Especificação</th>
            </tr>
          </thead>
          <tbody>
            {especificacoes.map((spec, index) => (
              <tr key={index}>
                <td><strong>{spec.item}</strong></td>
                <td>{spec.detalhe}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}

export default Product;