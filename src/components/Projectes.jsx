import { useState, useEffect, useRef } from "react";
import { importProjects } from "../assets/importProjects.js"
import Card from "./Card.jsx";
import { AnimatedBackground } from 'animated-backgrounds';
import { nanoid } from "nanoid";
export default function Projectes() {
  const [projects, setProjects] = useState([]);
  const principalRef = useRef(null);

  const myRefs = useRef([]);

  //Cargar proyectos al cargar página
  useEffect(() => {
    importProjects(setProjects);
  }, []);

  
function submitclick(ref){
  console.log(ref)
    ref.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
}
function submitclickPrincipal(ref){
  console.log(ref)
    ref.current.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
}


  return (
    /*carrusel con ref
    usado https://stackoverflow.com/questions/57810378/how-to-create-dynamic-refs-in-functional-component-using-useref-hook
    */
   
    <>
    <div>
<AnimatedBackground 
  animationName="auroraBorealis"
  theme="portofolio" // gaming, portfolio, landing, presentation, wellness, party, cyberpunk, retro
/>
 <div id="app-container">
        <div className="projects-container"  >
          <div  className="scrollers"  >
          {projects.map((p, i) => (
          
              <button
                key={nanoid()}
                ref={principalRef}
                id={i}
                onClick={() => submitclick(myRefs.current[i])}
              >
                {p.name}
              </button>
          ))}
            </div>

          {projects.map((p,i) => (
            
            <div className="card" key={nanoid()} ref={(el) => (myRefs.current[i] = el)}>
              <Card
                title={p.name}
                description={p.description}
                imageUrl={p.image}
                video={p.video}
              />
            </div>
            
          ))}
        </div>
        <button className="boton-inicio" onClick={() => submitclickPrincipal(principalRef)}>Volver a inicio</button>
      </div>
    </div>
     
    </>
  );
}
