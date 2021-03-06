import React from "react"
import ProjectPreview from "./project-preview"
import { graphql, useStaticQuery } from "gatsby"
import "./project.css"

const Projects = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            id
            title
            slug
            description
            url
            image {
              publicURL
              childImageSharp {
                fluid{
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allProjectsJson.edges

  return (
    <div className="project-section" id="projects">

      <h1>Projects</h1>

      <div className="projects">
        {projects.map(({ node: project }) => {
          const id = project.id
          const title = project.title
          const description = project.description
          const slug = project.slug
          const imageData = project.image.childImageSharp.fluid
          const url = project.url
          return (
            <ProjectPreview
              key={id}
              title={title}
              description={description}
              url={url}
              slug={slug}
              imageData={imageData}
            />
          )
        })}

      </div>

    </div>

  )
}

export default Projects
