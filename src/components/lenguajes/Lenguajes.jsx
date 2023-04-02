import React from 'react';
import "./lenguajes.css"
import VelocityScroll from './VelocityScroll';

const Lenguajes = () => {
    return (
        <div className='lenguajes'>
                <section className="velocity_scroll">
                    <VelocityScroll baseVelocity={-5}>Framer Motion</VelocityScroll>
                    <VelocityScroll baseVelocity={5}>Scroll velocity</VelocityScroll>
                </section>
        </div>
    );
};

export default Lenguajes;