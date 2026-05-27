import './style.css'

//FICARÁ NO FINAL DA PÁGINA.
export default function Footer() {
    return (
        <div className='footer'>
        <footer>

            <p>
                &copy; {new Date().getFullYear()} - Todos os direitos reservados
                <br />
                SENAI Bahia
            </p>

        </footer>
        </div>
    )
}