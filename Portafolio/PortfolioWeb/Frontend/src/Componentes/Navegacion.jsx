function Navegacion(){
    return(
    <>
        <nav className="navbar navbar-expand-lg navbar-dark sticky-top">
            <div className="container">
                <a className="navbar-brand" href="#"><i className="bi bi-code-square"></i></a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="toogle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#Inicio">Inicio</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Experiencia">Experiencia</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Proyectos">Proyectos</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#Contacto">Contacto</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </>
)}

export default Navegacion