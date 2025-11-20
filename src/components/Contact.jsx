import { FaLinkedin } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import Header from "./Header";
import Footer from "./Footer";
export default function Contact() {
  return (
    <>
      <Header title="Contáctame :)" />
      <div id="app-container">
        <h2>Redes Sociales</h2>
        <div className="socialMedia">
         <a href="https://www.linkedin.com/in/antoni-xavier-bascu%C3%B1ana-s%C3%A1nchez-21091933a/"><FaLinkedin size={40}/></a>
         <a href="https://x.com/johndoe"><FaTwitter size={40}/></a>
         <a href="https://www.instagram.com/johndoe/"><AiFillInstagram size={40}/></a>
        </div>
        <h2> O si eres más old school</h2>

      </div>
      <Footer />
    </>
  );
}
