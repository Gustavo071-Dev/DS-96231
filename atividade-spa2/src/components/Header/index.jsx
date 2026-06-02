import React from 'react';
import './style.css';

function Header() {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        LG<span className="tech-dot">.</span>Tech
      </div>
      <nav>
        <ul className="navbar-links">
          <li><a href="#inicio">Início</a></li>
          <li><a href="#diferenciais">Diferenciais</a></li>
          <li><a href="#servicos">Serviços</a></li>
          <li><a href="#contato" className="nav-btn">Falar com Luiz</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;