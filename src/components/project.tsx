import React from 'react'
import { projects } from '../data/projects'
import ProjectItem from './project-item'


function Project(){
    return(
        <div id="about">
            <h3>Projects</h3>
            <p id="quote"><em>I know what you're looking for. I'm in</em>😎 - Wraith</p>
            <div id="projects-container">
            {projects.map((item, index) => <ProjectItem key={index} data={item} />)}
            </div>
        </div>
    )
}


export default Project