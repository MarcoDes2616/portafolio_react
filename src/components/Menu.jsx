import React from 'react';

const Menu = ({isOpen, setIsOpen}) => {
    
    return (
        <div className={isOpen ? "menu_slider" : "menu_slider hide"} id="menu">
            <div className={isOpen ? "child_menu" : "child_menu hide"}>
                {/* <img src={logo} alt="logo empresa" />
                <a href="#">Home</a>
                <a href="#">Productos</a> */}
            </div>
        </div>
    );
};

export default Menu;