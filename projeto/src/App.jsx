import { useState } from 'react'
import './App.css'
import Mensagem from './components/Mensagem'
import InfoCurso from './components/InforCurso'

function App() {


  return (
    <>
      <h1>TCC</h1>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Pariatur iure at voluptatibus repellat rem iste nihil vero, modi reiciendis minus laboriosam voluptas vel adipisci culpa cum id provident facere? Minima.
      </p>

      <Mensagem />
      
      <InfoCurso />
    </>
  )
}

export default App
