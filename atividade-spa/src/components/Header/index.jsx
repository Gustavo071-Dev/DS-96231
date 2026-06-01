import './style.css'; // Crie um arquivo style.css nesta mesma pasta se quiser customizar o Header separadamente

function Header() {
  return (
    <header className="main-header">
      <div className="logo">MotoXpert</div>
      <nav>
        <ul className="nav-links">
          <li><a href="#sobre">Sobre</a></li>
          <li><a href="#especificacoes">Especificações</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;