import React from 'react';
import github from "../assets/icons/github.png";

export default function ProjectCard({projects:{name,image,deployed_url,github_url}}) {
    return (
        // medium and large screen responsiveness as per bootstrap
        <div className="projectCard col-md-6 col-lg-4">
            <figure className="projectCard_wrapper">
            <a href={deployed_url} target="blank" >
                <img src={image} alt={name} className="projectCard_image" />
            </a>
            <div className="projectCard_title"> 
            <a href={github_url} target="blank">
                <img src={github} alt="Github Link" className="projectCard_icon" />
            </a> 
            <strong className="projectName">{name} </strong>
            </div>

            </figure>
        </div>
    )
}
