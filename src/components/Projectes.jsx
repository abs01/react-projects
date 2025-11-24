import { useState, useEffect, useRef } from "react";
import { importProjects } from "../services/importProjects.js";
import Card from "./Card.jsx";

export default function Projectes() {
  const [projects, setProjects] = useState([]);
  const myRefs = useRef([]);
  //Cargar proyectos al cargar página
  useEffect(() => {
    importProjects(setProjects);
  }, []);

  
function submitclick(ref){
  console.log(ref)
    ref.scrollIntoView({ behavior: "smooth", block: "end", inline: "nearest" })
}

  return (
    /*carrusel con ref
    usado https://stackoverflow.com/questions/57810378/how-to-create-dynamic-refs-in-functional-component-using-useref-hook
    */
   
    <>
      <div id="app-container">
        <div className="projects-container">
          {projects.map((p, i) => (
            <div key={p.id} className="scrollers">
              <button
                id={i}
                onClick={() => submitclick(myRefs.current[i])}
              >
                {p.name}
              </button>
            </div>
          ))}

          {projects.map((p,i) => (
            
            <div className="card" key={p.id} ref={(el) => (myRefs.current[i] = el)}>
              <Card
                title={p.name}
                description={p.description}
                imageUrl={p.image + "?random=" + p.id}
              />
            </div>
            
          ))}
        </div>
      </div>
    </>
  );
}
