import '../../styles/card.css'
function CardProyecto({proyecto}){
    return(
        <>
        <div className="tarjeta">
            <div className="face front">
                <img src={proyecto.img} alt="Imagen de tarjeta"/>
                    <h3>{proyecto.nom_pr}</h3>
            </div>

            <div className="face back">
                <h3>{proyecto.nom_pr}</h3>
                <p>{proyecto.descr_pr}</p>
                <div className="link">
                    <a href={proyecto.link}>Explorar más</a>
                </div>
            </div>
        </div>
        </>
    )
}

export default CardProyecto