import React from 'react';
import { Flip } from 'react-reveal';

const Menu = () => {
    return (
        <Flip right>
            <div className='menu'>
                <div className='wrapper_tOne'>
                    <div className='trapecio t_one'></div>
                </div>
                <div className='wrapper_tTwo'>
                    <div className='trapecio t_two'></div>
                </div>
                <div className='line'>
                </div>
                <div className='access'>
                    <div className='access_item'>
                        <i className='bx bxs-school bx-md'></i>
                        <p>Educacion</p>
                    </div>
                    <div className='access_item'>
                        <i className='bx bx-code-alt bx-md'></i>
                        <p>Lenguajes</p>
                    </div>
                    <div className='access_item'>
                        <i className='bx bx-shape-circle bx-md'></i>
                        <p>Servicios</p>
                    </div>
                    <div className='access_item'>
                        <i className='bx bx-bulb bx-md'></i>
                        <p>Proyectos</p>
                    </div>
                    <div className='access_item'>
                        <i className='bx bx-phone bx-md'></i>
                        <p>Contacto</p>
                    </div>
                </div>
            </div>
        </Flip>
    );
};

export default Menu;