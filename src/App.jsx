import React, { useEffect, useState } from "react";
import "./App.css";
import Background from "./components/Background";
import IconsSkills from "./components/IconsSkills";
import Menu from "./components/Menu";
import mia from "./assets/img/poster.png"
import { motion, useScroll } from "framer-motion";
import Educacion from "./components/educacion/Educacion";
import Lenguajes from "./components/lenguajes/Lenguajes";

const App = () => {
  const [menu, setMenu] = useState(false)
  const { scrollYProgress } = useScroll();
  const [index, setIndex] = useState(0) 
  const frases = ["Capacidad de Adaptabilidad", 
                  "Trabajo con Valor Agregado", 
                  "Disciplina y Responsabilidad"]
  
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex(currentValue => {
        if(currentValue + 1 === frases.length){
          return 0;
        } else {
          return currentValue + 1
        }
      } )
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  console.log(index)

  return (
    <div className="App">
      <Background />
      {menu &&
        <Menu />
      }
      <header>
        <nav>
          <p>Marco Cardenas</p>
          <i onClick={() => setMenu(!menu)} className='bx bx-menu bx-md'></i>
          <div className='wrapper'>
            <motion.div className='progress'
              style={{ scaleX: scrollYProgress }} />
          </div>
        </nav>
        {/* <IconsSkills /> */}
        <div className="contain_present_about">
        <div className="presentacion">
          <div className={menu ? "wrapper_photo active" : "wrapper_photo"}>
            <div className='photo'>
              <img src={mia} alt="" />
            </div>
          </div>
          <p className={menu ? "description active" : "description"}><strong>Developer Full Stack | <br /> Management DataBase SQL</strong></p>
          <div className={menu ? "redes active" : "redes"}>
            <i className='bx bxl-linkedin bx-lg'></i>
            <i className='bx bxl-github bx-lg'></i>
          </div>
        </div>
        <div className="about_me">
              <h1>{frases[index]}</h1>
              <p>Pasión por el crecimiento personal y profesional!, es por ello que el desempeño de mis labores lo realizo con la mejor disposición para lograr un FeedBack que constribuya a esa pasión. Poseo conocimientos en lenguajes y tecnologías en el ambito del Desarrollo Web, las cuales estaré a gusto de aportar junto a mis habilidades blandas, para lograr los objetivos corporativos, del equipo, y los personales... ¡estoy listo para ser parte de tu empresa!</p>
        </div>
        </div>
      </header>
      <main>
        <Educacion />
        <Lenguajes />
      </main>
    </div>
  );
}

export default App;

