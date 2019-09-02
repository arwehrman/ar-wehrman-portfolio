import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import "./project.css"

const ProjectPreview = ({ id, title, description, slug, imageData, url }) => (
  <div className="project-preview">
  
      <Image fluid={imageData} alt={title} />
    <h2>{title}</h2>
    <p>{description}</p>
    <p>
      <Link to={`/${slug}/`}>View Project</Link>
    </p>
  </div>
)

export default ProjectPreview;