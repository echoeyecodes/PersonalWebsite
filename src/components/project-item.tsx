import React, { ReactPropTypes } from 'react'
import PropTypes from 'prop-types'

function SkillItem({ text }) {
    return (
        <p className="skill-item">{text}</p>
    )
}

function DownloadBtn({link}) {
    return (
        <div className="download-btn">
            <a href={`${link}`}>Download</a>
        </div>
    )
}

DownloadBtn.propTypes = {
    link: PropTypes.string.isRequired
};

SkillItem.propTypes = {
    text: PropTypes.string.isRequired
};


ProjectItem.propTypes = {
    data: PropTypes.exact({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        techs: PropTypes.arrayOf(PropTypes.string).isRequired,
        link: PropTypes.string.isRequired,
        image:PropTypes.string.isRequired
    }).isRequired
};


function ProjectItem({ data }) {

    return (
        <div className="project-item">
            <img src={data.image} />

            <h3>{data.title}</h3>

            <p>{data.description}</p>

            <div id="technologies-container">
                {data.techs.map((item, index) => <SkillItem key={index} text={item} />)}
            </div>

            <DownloadBtn link={data.link} />
        </div>
    )
}

export {SkillItem}
export default ProjectItem