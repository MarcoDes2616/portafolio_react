import React, { useState } from "react";
import "./App.css";
import Background from "./components/Background";
import IconsSkills from "./components/IconsSkills";
import Menu from "./components/Menu";
import mia from "./assets/img/poster.png"

const App = () => {
  const [menu, setMenu] = useState(false)

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
        </nav>
        <IconsSkills />
        <div className="wrapper_photo">
          <div className='photo'>
            <img src={mia} alt="" />
          </div>
        </div>
        <p className="description"><strong>Developer Full Stack | <br /> Management DataBase SQL</strong></p>
      </header>

    </div>
  );
}

export default App;

