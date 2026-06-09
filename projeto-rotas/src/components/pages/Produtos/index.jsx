import './style.css'

export default function Produtos() {
    return (
        <div className='page-produtos'>
            <h1>Nossas Soluções</h1>
            <p className="subtitle">Ferramentas projetadas para dar velocidade ao crescimento do seu negócio.</p>
            
            <div className="products-grid">
                <div className="product-card">
                    <h3>Plataforma ERP Start</h3>
                    <p>Controle financeiro, emissão de notas fiscais e fluxo de caixa em um único clique.</p>
                    <button className="btn-product">Saiba Mais</button>
                </div>
                <div className="product-card em-destaque">
                    <span className="badge">Mais Vendido</span>
                    <h3>Hub Fiscal Inteligente</h3>
                    <p>Automação completa das suas obrigações fiscais com auditoria em tempo real.</p>
                    <button className="btn-product">Experimentar Grátis</button>
                </div>
            </div>
        </div>
    )
}