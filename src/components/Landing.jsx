import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Card from './Card.jsx'
import profilePic from "../assets/images/Yo.jpg"

function Landing() {

  return (
    <>
    <Header title="Principal" />
     <div id="app-container">
            <div className="presentation_card">
        <Card title={"Este soy yo"} imageUrl={profilePic} description={"Soy un estudiante de DAW, sé Java, Python y estoy estudiando javascript y php"}></Card>
            </div>

      <h2>Bienvenido a mi página principal</h2>
      <p>Esta es la página principal de mi proyecto React.</p>
      <p>Navega por los enlaces superiores para ver los diferentes proyectos y suscribirte al newsletter.</p>
     </div>
    <Footer />
    </>
  )
}

export default Landing
