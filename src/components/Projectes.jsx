import { useState, useEffect,useRef } from "react"
import { importProjects } from "../services/importProjects.js"
import Card from "./Card.jsx";

export default function Projectes() {

    const [projects, setProjects] = useState([]);

    //Cargar proyectos al cargar página
    useEffect(() => {
        importProjects(setProjects);
    }, []);
    
    return (
        // carrusel con ref
        <>
        {projects.map((p) => 
                <div className="card">

        <Card key={p.id} title={p.name} description={p.description} imageUrl={p.image+"?random="+p.id}/>
        </div>)
                        

        }

        </>
    )
}