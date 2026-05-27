import './style.css'
import logo from '../../assets/logo.jpg'

//CONTEÚDO PRINCIPAL DA PÁGINA.
export default function Clientes() {
    return (
        <div className='clientes'>

            <h2>Cadastrar Clientes</h2>
            <img src={ logo } alt='Logo da empresa'></img>

            <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit maiores incidunt velit, numquam consequatur quisquam animi quae temporibus doloribus, ipsum, ut praesentium explicabo ipsa blanditiis provident quos debitis nobis? Nemo.
            </p>

        </div>
    )
}