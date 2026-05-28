import './style.css'

//FICARÁ NO FINAL DA PÁGINA.
export default function Footer() {
    return (
        <div className='footer'>
        <footer>
            <p>
                &copy; {new Date().getFullYear()} - Tributo ao Gabriel Ganley
                <br />
                Descanse em paz
            </p>
        
        </footer>    

        </div>
    )
}