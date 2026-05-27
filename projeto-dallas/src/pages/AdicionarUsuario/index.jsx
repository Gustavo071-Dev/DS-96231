import { useState } from 'react'
import './style.css'
export default function AdicionarUsuario() {
const [nome, setNome] = useState('')
const [email, setEmail] = useState('')
const [listaUsuarios, setListaUsuarios] = useState([])

const adicionarNovoUsuario = (event) => {
    event.preventDefault()
    if (nome && email) {
        setListarUsuarios([...ListarUsuario, {nome, email}])
        setNome('')
        setEmail('')
    }
}

    return (
        <h1>Adicionar usuário</h1>
    )
}