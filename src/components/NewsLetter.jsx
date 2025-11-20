import { checkEmail } from "../utils/checkEMail.js"
import { useState } from "react"
import { BsNewspaper } from "react-icons/bs";

export default function NewsLetter() {
    const [email, setEmail] = useState("");
    const [verified, setVerified] = useState(false);

    function sendEmail(){
         checkEmail(email) && setVerified(true);  
              
    }   
    function handleChange(e){
        setVerified(false);
        setEmail(e.target.value);
    }
    return (
        <>
             <div id="app-container">
        <div className="fa-icon">
            <BsNewspaper size={70}/>
        </div>
        
        <h2>Quieres recibir noticias?</h2>
        <input type="text" onChange={(e) => handleChange(e)}/>
        <button onClick={() => sendEmail()}>Subscribe</button>  
        
        {verified &&  <p>Gracias por suscribirte al newsletter! {email.slice(0, email.indexOf("@"))} </p>}      
             
             </div>
        </>
    )
}