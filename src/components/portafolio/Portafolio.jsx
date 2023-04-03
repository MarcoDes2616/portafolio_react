import "./portafolio.css"
import data from "../../portafolio.json"

const Portafolio = () => {
    return (
        <div className="portafolio_container">
            <h2>Portafolio</h2>
            <div className="cards_container">
                {
                    data.map((page) => (
                        <div className="card btn">
                            <div className="face front">
                                <img src={page.imagen} alt="" />
                                <p>{page.titulo}</p>
                            </div>
                            <div className="face back">
                                <p>{page.titulo}</p>
                                <p>{page.descripcion}</p>
                                <a href={page.url} className="link btn">
                                    ir al sitio
                                </a>
                            </div>
                        </div>
                    ))}
            </div>
        </div>
    );
};

export default Portafolio;