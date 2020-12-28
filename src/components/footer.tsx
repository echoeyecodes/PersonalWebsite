import React, { ReactNode } from "react"
import '../assets/css/footer.css'
import PropTypes from 'prop-types'
import {socials} from '../data/socials'


function FooterItem({data}){
    return(
        <a href={data.link}>{data.icon()}</a>
    )
}

FooterItem.propTypes = {
    data: PropTypes.exact({
        name: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        icon: PropTypes.func.isRequired
    }).isRequired
};



function Footer(){

  return (
    <footer>
        {socials.map((item, index) => <FooterItem key={index} data={item} />)}
    </footer>
  )
}

export default Footer
