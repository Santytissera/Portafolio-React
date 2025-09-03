
function ExperienciaRow({experiencia}){

    return(
        <>
          <div className="row justify-content-between">
            <div className="col-md-4">
                <div className="">
                    <p>Fin:   {experiencia.fechafin}</p>
                    <p>Inicio:   {experiencia.fechaini}</p>
                    
                </div>

            </div>

            <div className="col-md-7">
                <h4>{experiencia.puesto}</h4>
                <h5>{experiencia.empresa}</h5>
                <p>{experiencia.descr}</p>
            </div>

            <hr />
        </div>
        </>
    )
}

export default ExperienciaRow