import './style.css'

export default function Servicos() {
    return (
        <div className='page-servicos'>
            <h1>Nossos Serviços</h1>
            <p className="subtitle">Descomplicamos a burocracia com processos ágeis e tecnologia de ponta.</p>
            
            <div className="services-grid">
                <div className="service-card">
                    <div className="icon-placeholder">📊</div>
                    <h3>Contabilidade Digital</h3>
                    <p>Acesso em tempo real aos seus números com relatórios dinâmicos e integrados.</p>
                </div>
                <div className="service-card">
                    <div className="icon-placeholder">⚡</div>
                    <h3>Abertura de Empresas</h3>
                    <p>Processo 100% online e acelerado para você começar a faturar o quanto antes.</p>
                </div>
                <div className="service-card">
                    <div className="icon-placeholder">🛡️</div>
                    <h3>Planejamento Tributário</h3>
                    <p>Análise inteligente para reduzir seus impostos de forma totalmente legal.</p>
                </div>
            </div>
        </div>
    )
}