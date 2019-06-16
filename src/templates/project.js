import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Project from '../components/project';

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      url
      github
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson;
  const title = project.title;
  const description = project.description;
  const imageData = project.image.childImageSharp.fluid;
  const url = project.url;
  const github = project.github
  return (
    <Layout>
      <div className="project-content">
      <Project
        title={title}
        description={description}
        imageData={imageData}
        url={url}
        github={github}
      />
      </div>
     
    </Layout>
  );
};

export default ProjectTemplate;
