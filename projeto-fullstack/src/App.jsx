import './App.css'
import CadastroPage from './pages/CadastroPage'
import ListaUsuariosPage from './pages/ListaUsuariosPage'
import HomePage from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <Header />
        <main>
          <Routes>
            <Route path ='/' element ={<HomePage />}/>
            <Route path ='/cadastro' element ={<CadastroPage />}/>
            <Route path ='/lista-usuarios' element ={<ListaUsuariosPage />}/>
          </Routes>
        </main>
      <Footer />
    </>
  )
}

export default App
