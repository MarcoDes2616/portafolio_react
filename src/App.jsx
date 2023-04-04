import React, { useEffect, useState } from "react";
import "./App.css";
import Background from "./components/Background";
import Menu from "./components/Menu";
import mia from "./assets/img/poster.png"
import mia2 from "./assets/img/poster2.jpg"
import { motion, useScroll } from "framer-motion";
import Lenguajes from "./components/lenguajes/Lenguajes";
import Cubo from "./components/swiper/Cubo";
import cv from "./assets/cv_marco_cardenas.pdf"
import Portafolio from "./components/portafolio/Portafolio";
import Contacto from "./components/contacto/Contacto";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
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
      <Menu setIsOpen={setIsOpen} isOpen={isOpen} />
      <header>
        <nav>
          <div className="nav_in">
            <p className="btn">Marco Cardenas</p>
            <div className="menu">
              <a class="link_m" href="#aboutme">I am...</a>
              <a class="link_m" href="#skills">My Skills</a>
              <a class="link_m" href="#portafolio">Briefcase</a>
              <a class="link_m" href="#contact">Contact</a>
            </div>
            <i onClick={() => setIsOpen(!isOpen)} className='bx bx-menu bx-md'></i>
          </div>
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
              <a href="https://www.linkedin.com/in/marco-cardenas-dj/" target="_blank">
                <i className='bx bxl-linkedin bx-lg'></i>
              </a>
              <a href="https://github.com/MarcoDes2616" target="_blank">
                <i className='bx bxl-github bx-lg'></i>
              </a>
            </div>
          </div>
          <Cubo />
          <h3 className="frases">{frases[index]}</h3>
        </div>
      </header>
      <main>
        <a href={cv} download={true}>
          <div className="float_container btn">
            <div className="float">
              <p>my CV</p>
              <i className='bx bx-cloud-download bx-fade-down bx-lg' ></i>
            </div>
          </div>
        </a>
        <h2 id="aboutme">Acerca de mi...</h2>
        <div className="about_me">
          <div className="aboutme_img">
            <img src={mia2} alt="" />
          </div>
          <p><i className='bx bxs-quote-left bx-flashing bx-md' >...</i> <br /> Siento pasión por mi crecimiento personal y profesional!. El desempeño de mis labores lo realizo con la mejor disposición de colaboración para lograr así el ambiente deseado y un FeedBack que constribuya fielmente a esa pasión. Poseo conocimientos y habilidades en lenguajes y tecnologías vanguardistas en el ambito del Desarrollo Web FullStack, las cuales estaré a gusto de aportar junto a mis habilidades blandas, para lograr los objetivos corporativos, del equipo, y los personales... <br /><br />
            <hr />
            <strong>¡estoy listo para ser parte de tu empresa!...</strong></p>
        </div>
        <br /><br /><br /><br /><br />
        <h2 id="skills">Habilidades IT...</h2>
        <Lenguajes />
        <Portafolio />
        <Contacto />
      </main>
      <footer>
        <div className="redes">
          <a href="https://wa.me/message/LFJWYV43FYKZG1" target="_blank">
            <i className='bx bxs-phone-call bx-lg' ></i>
          </a>
          <a href="https://www.linkedin.com/in/marco-cardenas-dj/" target="_blank">
            <i className='bx bxl-linkedin bx-lg'></i>
          </a>
          <a href="https://github.com/MarcoDes2616" target="_blank">
            <i className='bx bxl-github bx-lg'></i>
          </a>
          <a href="mailto:marco2616@gmail.com" target="_blank">
            <i className='bx bxl-gmail bx-lg'></i>
          </a>
        </div>
        <br /><br />
        <p>Hecho con ❤ por Marco Cardenas</p>
        <div className="referencias">
          <a href="https://github.com/MarcoDes2616/portafolio_react.git" target="_blank" rel="noopener noreferrer">Repositorio para este portafolio</a>
          <p>Librerias:</p>
          <a href="https://www.npmjs.com/package/axios" target="_blank" rel="noopener noreferrer">Axios</a>
          <a href="https://www.npmjs.com/package/framer-motion" target="_blank" rel="noopener noreferrer">FramerMotion</a>
          <a href="https://www.npmjs.com/package/react-hook-form" target="_blank" rel="noopener noreferrer">react-hook-form</a>
          <a href="https://www.npmjs.com/package/react-tsparticles" target="_blank" rel="noopener noreferrer">react-tsparticles</a>
          <a href="https://www.npmjs.com/package/react-tsparticles" target="_blank" rel="noopener noreferrer">tsparticles-path-polygon</a>
          <a href="https://www.npmjs.com/package/swiper" target="_blank" rel="noopener noreferrer">swiper</a>
        </div>
      </footer>
    </div>
  );
}

export default App;

