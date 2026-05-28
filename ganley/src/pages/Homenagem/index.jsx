import './style.css'
import logo from '../../assets/logo.jpg'

//CONTEÚDO PRINCIPAL DA PÁGINA.
export default function Homenagem() {
    return(
        <div className='homenagem'>
            <h2>Essa é uma homenagem ao Gabriel Ganley</h2>
            <img src={ logo } alt="Imagem de tributo" />
            <p>
                Eterno Gabriel Ganley: Uma Homenagem à Sua Jornada
                Dizer adeus nunca é fácil, especialmente quando nos despedimos de alguém que transbordava tanta energia, foco e dedicação. A partida precoce de Gabriel Ganley deixa um vazio imenso no coração de sua família, de seus amigos e de todos aqueles que acompanhavam a sua evolução e se inspiravam na sua força dentro e fora dos treinos.

                <br />
                <br />
                Gabriel transformou o esporte em arte, e cada gota de suor era o reflexo de sua busca incansável por superar os próprios limites. Mais do que a impressionante dedicação física, ele carregava consigo um espírito resiliente que motivava quem estava ao seu redor a também dar o seu melhor.

                <br />
                <br />
                Seu físico imponente era apenas o reflexo visível de uma determinação mental ainda maior. O peso que ele carregava nas barras era leve perto do tamanho do seu legado. Hoje, as luzes dos palcos e das academias ficam um pouco mais opacas, mas a sua memória e o seu exemplo de disciplina continuarão vivos em cada repetição, em cada gota de suor e no coração de todos que tiveram o privilégio de conhecê-lo.
                <br />
                <br />
                Descanse em paz, Gabriel. Seu legado será eterno. 🕊️✨
                <br />
                <br />
            </p>

        </div>
    )
}