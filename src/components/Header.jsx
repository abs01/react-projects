import { FaRegSun } from "react-icons/fa6";

export default function Header({title}) {
    return (
        <>
        <header>
            <h1>{title}</h1>
            <nav>
                <a href="../../index.html">Pagina principal</a> &nbsp;
                <a href="../../indexes/projectes.html">Projectes</a> &nbsp; 
                <a href="../../indexes/newsLetter.html">Newsletter</a> &nbsp;
                <a href="../../indexes/contacte.html">Contacte</a>   &nbsp;
                <button id="theme-button"><FaRegSun size={20}/></button>
            </nav>
            
        </header>
        </>
    )
}