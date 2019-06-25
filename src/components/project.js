import React from 'react'
import { Link } from 'gatsby'
import Image from 'gatsby-image'

const Project = ({title, description, projectType, github, imageData, requirements}) => (
    <div className="project">
        <h1>{title}</h1>
        <Image fluid={imageData} alt={title} />
        <p>{description}</p>
        <p>Project Type: {projectType}</p>
        <p>
            <a href={github} target="_blank" rel="noopener noreferrer">Github Code</a>
        </p>
        <p>Project Demos- coming soon</p>
        
        <p>Project Requirements</p>
        <ul>
          {requirements.map((item, index)=> {
             return <li key={index}>{item}</li>       
    })
    
}
</ul>

<p>
            <Link to="/projects">Back to Projects</Link>
        </p>
    </div>
);

export default Project;