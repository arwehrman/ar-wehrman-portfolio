import React from "react"
import Layout from "../components/layout"
import Job from "../components/job"
import { graphql, useStaticQuery } from "gatsby"

const Facts = () => {
  const data = useStaticQuery(graphql`
  {
    allJobsJson{
      edges {
        node {
          id
          title
          company
          startdate
          enddate
          description
        }
      }
    }
  }
`)

const jobs = data.allJobsJson.edges

 return (
<Layout>
    <div className="facts">
     
      <div className="skills">
      <h2>Skills</h2>
        <div className="skillBlock">
          <h3>Core</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>SQL</li>
            <li>Ruby</li>
          </ul>
        </div>
        <div className="skillBlock">
          <h3>Libaries</h3>
          <ul>
            <li>React</li>
            <li>Gatsby</li>
          </ul>
        </div>
        <div className="skillBlock">
          <h3>Essential</h3>
          <ul>
            <li>Organization</li>
            <li>Peristence</li>
            <li>Self-Motivated</li>
          </ul>
        </div>
      </div>

      <div className="resume">

        <h2>Job Experience</h2>
        {jobs.map(({ node: job }) => {
        const id = job.id
        const title = job.title
        const company = job.company
        const startdate = job.startdate
        const enddate = job.enddate
        const description = job.description
      
    
        return (
          <Job
            key = {id}
            title={title}
            company={company}
            startdate={startdate}
            enddate={enddate}
            description={description}
            
          />
        )
      })}

        <div className="education">
          <h2>Education</h2>
          <div className="school">
          <p>Flatiron School - 2018</p>
          <p>
            Full Stack Web Development, Ruby on Rails and JavaScript online
            program
          </p>
          </div>
          <div className="school">
          <p>Ohio University - Athens, OH - 2008- 2010</p>
          <p> Major Fine Arts- Photography</p>
          </div>
          <div className="school">
          <p>Northern Kentucky University - Newport, KY - 2003- 2009</p>
          <p> Major Fine Arts- Photography</p>
          </div>   
        </div>
      </div>
    </div>
  </Layout>
 )
}

 



export default Facts
