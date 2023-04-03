import "./portafolio.css"
import data from "../../portafolio.json"
import dl from "../../../public/images/dlirios.png"

const Portafolio = () => {
    return (
        <div className="portafolio_container">
            <h2 className="portafolio">Portafolio</h2>
            <div className="cards_container">
                {/* <div className="card btn">
                    <div className="face front">
                        <img src={dl} alt="" />
                        <p>Titulo</p>
                    </div>
                    <div className="face back">
                        <p>Titulo</p>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint eligendi, velit natus architecto accusamus quis dolor praesentium sunt ducimus iusto harum repellat tempora assumenda laudantium, ipsa temporibus quisquam repellendus fugit!</p>
                        <div className="link btn">
                            ir al sitio
                        </div>
                    </div>
                </div> */}
            </div>
        </div>
    );
};

export default Portafolio;