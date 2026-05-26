import { use, useState } from 'react'

export default function InfoCurso() {
    const [nome, setNome] = useState('Lógica de Programação')
    const [cargaHoraria, setCargaHoraria] = useState(162)
    const [dataInicio, setDataInicio] = useState('03/02/2025')
    const [dataTermino, setDataTermino] = useState('18/12/2026')
    const [professores, setProfessores] = useState(['Carlos Anderson', 'Fernando'])
    const [dataMaterias, setMaterias] = useState(['Desenvolvimento de Sistemas', 'IoT', 'Prototipagem de Projetos'])

    return (
        <div className='info-curso'>
            <h2>Dados do Curso:</h2>
            <p>Nome: { nome }</p>
            <p>Carga Horária: { cargaHoraria }</p>
            <p>Data de início: { dataInicio }</p>
            <p>Data de término: { dataTermino }</p>
            <p>Professores: { professores }</p>
            <p>Matérias: { dataMaterias }</p>

        </div>
    )
}
