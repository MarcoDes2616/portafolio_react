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
        <div className='lenguajes'>
                <section className="velocity_scroll">
                    <VelocityScroll baseVelocity={-3}>
                        <img src={html} alt="" />
                        <img src={css} alt="" />
                        <img src={js} alt="" />
                        <img src={react} alt="" />
                        <img src={next} alt="" />
                        <img src={jquery} alt="" />
                    </VelocityScroll>
                    <VelocityScroll baseVelocity={3}>
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                        <img src="" alt="" />
                    </VelocityScroll>
                </section>
        </div>
    );
};

export default Lenguajes;