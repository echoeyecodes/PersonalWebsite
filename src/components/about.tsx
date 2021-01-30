import React from 'react'
import { PrimaryButton } from './hero'
import { SkillItem } from './project-item'
import PropTypes from 'prop-types'
import { skills } from '../data/skills'

function TechnologyItem({ text }) {
    return (
        <p>{text}</p>
    )
}


TechnologyItem.propTypes = {
    text: PropTypes.string.isRequired
};


function About(){
    return(
        <div id="about">
            <h3>Who am I?</h3>

            <p id="about-description">
                This amazing dude right here is a final year student of Olabisi Onabanjo University, Nigeria, pursuing a degree in Computer Engineering. While I got introduced to computers at an early age, I grew up playing games on whatever devices I could find, and I believe that it's the primary thing that contributed to my knowledge on how computers really work (to some extent).

                This also influenced my decision to study a computer related course in the university, and for that reason, I chose to be a Computer Engineer.
                
                <br />
                <br />
                Fun fact! Never really got into programming until my second year, and when I eventually got started with it, I dabbled into a couple of programming languages for various career options, trying to find a path I mostly vibed with. Mobile application development became the lucky candidate for me and I decided to focus primarily on this.
                
                <br />
                <br />
                Most times, I'm all about video games and art! Words cannot actually express how much I love them, so you'll most likely find me sharing people's artwork, illustration, and concepts for video games on my <a href="https://twitter.com/echoeyecodes">twitter</a> account. I'm usually wowed by those amazing artists and video editors that work on games, character arts, cinematic trailers and effects.

                <br />
                <br />

                Another fun fact lol! My nickname, <strong>EchoEye</strong>, was actually coined from one of the games I played and really enjoyed - Tales from the borderlands. I think I'll just leave it to the internet to describe how awesome that game really is :-)
                
                <br />
                <br />

                <h3>Technologies I've worked with</h3>
                <div id="technologies-container">
                        {skills.map((item, index) => <SkillItem key={index} text={item} />)}
                    </div>

                <br />
                <br />
                
                    <h3>Resume</h3>
                    <PrimaryButton text="Download" link="https://drive.google.com/file/d/1sRZOo_F_9XQ6fcfhwEQiaxozso5DfF81/view?usp=sharing" />

                <br />
                <br />
                Fancy me much?😊 You probably do! Which is why you have no reason to not clear your schedule for today and contact me right now! I'm open to making new friends, meeting new people, sharing ideas, and working on really cool projects.

                <br />
                <PrimaryButton text="Reach Out" link="mailto:femiobajuluwa@gmail.com" />
                
            </p>
        </div>
    )
}

export default About
