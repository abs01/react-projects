
export default function Card({title, description, imageUrl})  {

return (
    <>
            <h2 className="card-title">{title}</h2>

        <img className="card-image" alt="mi foto" src={imageUrl}></img>
        <p className="card-text">{description}</p>
    </>

    
)

}