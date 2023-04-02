import React, { useEffect, useState } from "react";
import "./App.css";
import Background from "./components/Background";
import Menu from "./components/Menu";
import mia from "./assets/img/poster.png"
import mia2 from "./assets/img/poster2.jpg"
import { motion, useScroll } from "framer-motion";
import Lenguajes from "./components/lenguajes/Lenguajes";
import Cubo from "./components/swiper/Cubo";

const App = () => {
  const [menu, setMenu] = useState(false)
  const { scrollYProgress } = useScroll();
  const [index, setIndex] = useState(0)
  const frases = ["Capacidad de Adaptabilidad...", "Adaptability...",
    "Trabajo con Valor Agregado...", "Work with Added Value...",
    "Disciplina y Responsabilidad...", "Discipline and Responsibility..."]

  useEffect(() => {
    scrollTo(0, 0)
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
          <Cubo />
          <h3 className="frases">{frases[index]}</h3>
        </div>
      </header>
      <main>
        <h2>Acerca de mi...</h2>
        <div className="about_me">
          <div className="aboutme_img">
            <img src={mia2} alt="" />
          </div>
          <p><i className='bx bxs-quote-left bx-flashing bx-md' >...</i> <br /> Siento pasión por mi crecimiento personal y profesional!. El desempeño de mis labores lo realizo con la mejor disposición de colaboración para lograr así el ambiente deseado y un FeedBack que constribuya fielmente a esa pasión. Poseo conocimientos y habilidades en lenguajes y tecnologías vanguardistas en el ambito del Desarrollo Web FullStack, las cuales estaré a gusto de aportar junto a mis habilidades blandas, para lograr los objetivos corporativos, del equipo, y los personales... <br /><br />
          <hr />
          <strong>¡estoy listo para ser parte de tu empresa!...</strong></p>
        </div>
        <br /><br /><br /><br /><br />
        <h2>Habilidades IT...</h2>
        <Lenguajes />
      </main>
    </div>
  );
}

export default App;

