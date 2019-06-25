import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import Project from '../components/project';

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      projectType
      url
      github
      requirements
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
  const projectType = project.projectType;
  const description = project.description;
  const imageData = project.image.childImageSharp.fluid;
  const url = project.url;
  const github = project.github
  const requirements = project.requirements

  return (
    <Layout>
      <div className="project-content">
      <Project
        title={title}
        projectType={projectType}
        description={description}
        imageData={imageData}
        url={url}
        github={github}
        requirements={requirements}
      />
      </div>
     
    </Layout>
  );
};

export default ProjectTemplate;
