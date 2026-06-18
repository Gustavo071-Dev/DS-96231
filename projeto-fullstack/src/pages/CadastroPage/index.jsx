import { useState } from "react";
import './style.css';
import api from '../../services/api'; 
import { toast } from 'react-toastify'; 

export default function CadastroPage() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [estaEnviando, setEstaEnviando] = useState(false); 

    function limparCampos() {
        setNome('');
        setEmail('');
        setSenha('');
    }

    async function envioFormulario(event) {
        
        event.preventDefault(); 
        
        
        setEstaEnviando(true); 

        const dadosFormulario = {
            nome,
            email,
            senha
        };

        try {
            const resposta = await api.post('/usuarios', dadosFormulario);

           
            toast.success(resposta.data.mensagem);
            limparCampos(); 
        } catch (erro) {
            const mensagemDoServidor = erro?.response?.data?.mensagem || "Erro ao cadastrar";
           
            toast.error(mensagemDoServidor);
        } finally {
            
            setEstaEnviando(false);
        }
    }

    return (
        <div className="cadastro-page"> 
        <form onSubmit={envioFormulario}>
            <div className="grupo-form">
                <label htmlFor="campo-nome">Nome</label>
                <input
                    id = 'campo-nome'
                    type='text'
                    placeholder='Ex.: Maria Silva'
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />
            </div>

            <div className="grupo-form">
                <label htmlFor="campo-email">Email</label>
                <input
                    id = 'campo-email'
                    type='email'
                    placeholder='Ex.: maria@email.com'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="grupo-form">
                <label htmlFor="campo-senha">Senha</label>
                <input
                    id = 'campo-senha'
                    type='password'
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                />
            </div>

            <buttom type='subit' disable={estaEnviando}>
                {estaEnviando ? 'Cadastrando...' : 'Cadastrar'} 

            </buttom>
        </form>
        </div>
    )
}