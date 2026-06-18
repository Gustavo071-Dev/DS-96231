import { Link } from 'react-router-dom'
import './style.css'


export default function Header() {
    return(

        <header className='header'>
            <h1>Sistema de Gerenciamento de Usuarios</h1>

            <nav>
                <Link to='/'>Inicio</Link>
                <Link to='/cadastro'>Cadastrar</Link>
                <Link to='/lista_usuarios'>Lista de Usuarios</Link>
            </nav>
        </header>
        
    );
}