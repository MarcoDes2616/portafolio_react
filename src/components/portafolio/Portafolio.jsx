import "./portafolio.css"
import data from "../../portafolio.json"

const Portafolio = () => {
    return (
        <div className="portafolio_container">
            <h2 id="portafolio">Portafolio</h2>
            <div className="cards_container">
                {
                    data.map((page) => (
                        <div key={page.url} className="card btn">
                            <div className="face front">
                                <img src={page.imagen} alt="" />
                                <p>{page.titulo}</p>
                            </div>
                            <div className="face back">
                                <div>
                                    <p className="cart_title">{page.titulo}</p>
                                    <p className="card_description">{page.descripcion}</p>
                                </div>
                                <a href={page.url} target="_blank" className="link btn">
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