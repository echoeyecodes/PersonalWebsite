import React, { ReactPropTypes } from 'react'
import '../assets/css/hero.css'


interface PrimaryBtnProps {
    link: string,
    text: string
}


function PrimaryButton(props: PrimaryBtnProps) {
    return <div className="primary-btn">
        <a href={props.link}>{props.text}</a>
    </div>
}


function Hero() {

    return (
        <div className="hero">
            <h3>Hi! I'm Oluwafemi Obajuluwa</h3>

            <p>A fullstack Android developer, and an aspiring Video Game designer!</p>

            <PrimaryButton text="Reach out" link="mailto:femiobajuluwa@gmail.com" />
        </div>

    )
}


export { PrimaryButton }

export default Hero