import React from "react"
import Layout from "../components/layout"
import ProjectPreview from "../components/project-preview"
import { graphql, useStaticQuery } from "gatsby"

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
            image {
              publicURL
              childImageSharp {
                fluid {
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
    <Layout>
      <div className="project-content">
      {projects.map(({ node: project }) => {
        const id = project.id
        const title = project.title
        const description = project.description
        const slug = project.slug
        const imageData = project.image.childImageSharp.fluid
        return (
          <ProjectPreview
            key = {id}
            title={title}
            description={description}
            slug={slug}
            imageData={imageData}
          />
        )
      })}
      </div>
     
    </Layout>
  )
}

export default Projects
