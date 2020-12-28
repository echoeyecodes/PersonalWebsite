import React from 'react'
import {Link} from 'gatsby'
import '../assets/css/nav.css'

const links = [{
    name: "Home",
    link: '/'
},
{
    name: "About",
    link: '/about'
},
{
    name: "Projects",
    link: '/projects'
}
]

function Nav(){
    return(
        <nav id='nav-links'>
            <ul>
                {links.map(({link, name}, index) => <li><Link to={link}>{name}</Link></li> )}
            </ul>
        </nav>
    )
}

export default Nav