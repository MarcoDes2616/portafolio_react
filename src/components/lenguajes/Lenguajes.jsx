import React from 'react';
import "./lenguajes.css"
import VelocityScroll from './VelocityScroll';
import html from "../../assets/img/html.png"
import css from "../../assets/img/css.png"
import js from "../../assets/img/js.png"
import react from "../../assets/img/react.png"
import next from "../../assets/img/next.png"
import jquery from "../../assets/img/jquery.png"
import node from "../../assets/img/node.png"
import express from "../../assets/img/express.png"
import java from "../../assets/img/java.png"
import spring from "../../assets/img/spring.webp"
import postgres from "../../assets/img/postgres.png"
import mysql from "../../assets/img/mysql.png"
import mongo from "../../assets/img/mongodb.png"
import firebase from "../../assets/img/firebase.png"
import git from "../../assets/img/git.png"
import github from "../../assets/img/github.png"
import power from "../../assets/img/power.png"

const Lenguajes = () => {
    return (
        <>
            <h3>Lenguajes FrontEnd</h3>
            <div className='lenguajes'>
                <section className="velocity_scroll">
                    <VelocityScroll baseVelocity={-4}>
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                        <img src={js} alt="" />
                        <img src={react} alt="" />
                        <img src={next} alt="" />
                        <img src={jquery} alt="" />
                    </VelocityScroll>
                </section>
            </div>
            <h3>Lenguajes BackEnd</h3>
            <div className='lenguajes'>
                <section className="velocity_scroll">
                    <VelocityScroll baseVelocity={4}>
                        <img src={node} alt="" />
                        <img src={java} alt="" />
                        <img src={postgres} alt="" />
                        <img src={mysql} alt="" />
                        <img src={mongo} alt="" />
                        <img src={firebase} alt="" />
                    </VelocityScroll>
                </section>
            </div>
            <h3>FrameWork y Otras Tecnologías</h3>
            <div className='lenguajes'>
                <section className="velocity_scroll">
                    <VelocityScroll baseVelocity={-4}>
                        <img src={express} alt="" />
                        <img src={spring} alt="" />
                        <img src={git} alt="" />
                        <img src={github} alt="" />
                        <img src={power} alt="" />
                    </VelocityScroll>
                </section>
            </div>
        </>
    );
};

export default Lenguajes;