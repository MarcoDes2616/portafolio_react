import React, { useEffect, useState } from "react";
import "./App.css";
import Background from "./components/Background";
import IconsSkills from "./components/IconsSkills";
import Menu from "./components/Menu";
import mia from "./assets/img/poster.png"
import { motion, useScroll } from "framer-motion";
import Educacion from "./components/educacion/Educacion";
import Lenguajes from "./components/lenguajes/Lenguajes";
import Header from "./header/Header";

const App = () => {
  const [menu, setMenu] = useState(false)
  const { scrollYProgress } = useScroll();
  const [index, setIndex] = useState(0)
  const frases = ["Capacidad de Adaptabilidad...",
    "Trabajo con Valor Agregado...",
    "Disciplina y Responsabilidad..."]

  useEffect(() => {
    scrollTo(0,0)
    const interval = setInterval(() => {
      setIndex(currentValue => {
        if (currentValue + 1 === frases.length) {
          return 0;
        } else {
          return currentValue + 1
        }
      })
    }, 5000)
    return () => clearInterval(interval)
  }, [])

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
        {/* <Header /> */}
        {/* <IconsSkills /> */}
        <div className="contain_present_about">
          <div className="presentacion">
            <div className='photo'>
              <img src={mia} alt="mi foto" className="mi_foto" />
            </div>
            <p className="description"><strong>FullStack Developer | <br /> Management DataBase SQL</strong></p>
            <div className="redes">
              <i className='bx bxl-linkedin bx-lg'></i>
              <i className='bx bxl-github bx-lg'></i>
            </div>
          </div>
          <div className="about_me">
            <p>Siento pasión por el crecimiento personal y profesional!. Es por ello que el desempeño de mis labores lo realizo con la mejor disposición para lograr un FeedBack que constribuya a esa pasión. Poseo conocimientos en lenguajes y tecnologías en el ambito del Desarrollo Web, las cuales estaré a gusto de aportar junto a mis habilidades blandas, para lograr los objetivos corporativos, del equipo, y los personales... ¡estoy listo para ser parte de tu empresa!...</p>
          </div>
          <h3 className="frases">{frases[index]}</h3>
        </div>
      </header>
      <main>
        {/* <Educacion /> */}
        {/* <Lenguajes /> */}
      </main>
    </div>
  );
}

export default App;

