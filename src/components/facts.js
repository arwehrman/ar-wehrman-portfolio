import React from "react"
import Job from "./job"
import { graphql, useStaticQuery } from "gatsby"
import "./facts.css"
const Facts = () => {
  const data = useStaticQuery(graphql`
    {
      allJobsJson {
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
  
      <div className="facts" id="facts">
        <h1>Facts</h1>
        <div className="skills">
          <div className="skillBlock">
            <h3>Core</h3>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>SQL</li>
              <li>Ruby</li>
              <li>Rails</li>
            </ul>
          </div>
          <div className="skillBlock">
            <h3>Libraries</h3>
            <ul>
              <li>React.js</li>
              <li>Gatsby</li>
              <li>jQuery</li>
              <li>Bootstrap</li>
              <li>Sass</li>
            </ul>
          </div>
          <div className="skillBlock">
            <h3>Industry</h3>
            <ul>
              <li>Project Management</li>
              <li>Software Documetation</li>
              <li>Software User Training</li>
            </ul>
          </div>
          <div className="skillBlock">
            <h3>Essential</h3>
            <ul>
              <li>Organization</li>
              <li>Peristence</li>
              <li>Self-Motivation</li>
              <li>Troubleshooting</li>
            </ul>
          </div>
        </div>

        <div className="experience">
          <div className="jobs">
          {jobs.map(({ node: job }) => {
            const id = job.id
            const title = job.title
            const company = job.company
            const startdate = job.startdate
            const enddate = job.enddate
            const description = job.description

            return (
              <Job
                key={id}
                title={title}
                company={company}
                startdate={startdate}
                enddate={enddate}
                description={description}
              />
            )
          })}
        </div>
        </div>
        <div className="education-grid">
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
        <div className="certs">
          <h2>Certifications</h2>
          <div className="cert">
            <p>MTA Database Fundamentals</p>
            <p>Microsoft</p>
          </div>
          <div className="cert">
            <p>Responsive Web Design</p>
            <p>freeCodeCamp</p>
          </div>
          <div className="cert">
            <p>Javascript Algorithms and Data Structures</p>
            <p>freeCodeCamp</p>
          </div>
        </div>
      </div>
      </div>
  )
}

export default Facts