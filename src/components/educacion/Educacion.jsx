import React from 'react';
import "./educacion.css"
import fcc from "../../assets/img/fcc.jpg"
import udemy from "../../assets/img/udemy.jpeg"
import academlo from "../../assets/img/academlo.jpeg"
import alura from "../../assets/img/alura.png"

const Educacion = () => {
    return (
        <div className='educacion'>
            <h2>Me Certifican:</h2>
            <div className='academias_container'>
            
                <div className='academias academlo'>
                    <img src={academlo} alt="logo academlo" loading='lazy' />
                    <p>Academlo</p>
                </div>
                <div className='academias UDEMY'>
                    <img src={udemy} alt="logo udemy" loading='lazy' />
                    <p>UDEMY</p>
                </div>
                <div className='academias Alura'>
                    <img src={alura} alt="logo alura" loading='lazy' />
                    <p>Alura</p>
                </div>
                <div className='academias FreeCodeCamp'>
                    <img src={fcc} alt="logo freecodecamp" loading='lazy'/>
                    <p>FreeCodeCamp</p>
                </div>
                
            </div>
            
        </div>
    );
};

export default Educacion;