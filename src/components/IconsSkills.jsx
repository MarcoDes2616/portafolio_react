import React, { useEffect, useState } from 'react';
import iconReact from "../assets/img/react.png"
import iconHtml from "../assets/img/html.png"
import iconNode from "../assets/img/node.png"

const IconsSkills = () => {
    const [reactX, setReactX] = useState()
    const [reactY, setReactY] = useState()
    const [htmlX, setHtmlX] = useState()
    const [htmlY, setHtmlY] = useState()
    const [nodeX, setNodeX] = useState()
    const [nodeY, setNodeY] = useState()

    useEffect(() => {
        setInterval(() => {
            getRandonReact()
            getRandonHtml()
            getRandonNode()
        }, 5000)
    }, [])
    

    const getRandonReact = () => {
        setReactX(Math.ceil(Math.random() * 80))
        setReactY(Math.ceil(Math.random() * 20))
    }
    const getRandonHtml = () => {
        setHtmlX(Math.ceil(Math.random() * 80))
        setHtmlY(Math.ceil(Math.random() * 15 + 68))
    }
    const getRandonNode = () => {
        setNodeX(Math.ceil(Math.random() * 80))
        setNodeY(Math.ceil(Math.random() * 20))
    }

    return (
        <div className='icons_skills'>
            <div style={{top: `${reactY}vh`, left: `${reactX}vw`}} 
            className='icon react'>
                <img src={iconReact} alt="" />
            </div>
            <div style={{top: `${htmlY}vh`, left: `${htmlX}vw`}} 
            className='icon html'>
                <img src={iconHtml} alt="" />
            </div>
            <div style={{top: `${nodeY}vh`, left: `${nodeX}vw`}} 
            className='icon node'>
                <img src={iconNode} alt="" />
            </div>

        </div>
    );
};

export default IconsSkills;