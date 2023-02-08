import React, { useState } from "react";
import "./App.css";
import Background from "./components/Background";
import IconsSkills from "./components/IconsSkills";
import Menu from "./components/Menu";
import mia from "./assets/img/poster.png"
import { motion, useScroll } from "framer-motion";
import Educacion from "./components/Educacion";

const App = () => {
  const [menu, setMenu] = useState(false)
  const { scrollYProgress } = useScroll();

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
        <IconsSkills />
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
      </header>
      <main>
        <Educacion />
      </main>
    </div>
  );
}

export default App;

