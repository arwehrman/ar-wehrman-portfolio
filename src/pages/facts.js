import React from "react"
import Layout from "../components/layout"

const Facts = () => (
  <Layout>
    <div>
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
          <li>Wordpress</li>
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

      <div className="resume">
        <h2>Job Experience</h2>
        <h3>IT Manager</h3>
        <p>Pennsylvania Convention Center, Philadelphia, PA</p>
        <p>December 2010 to present</p>
        <ul>
          <li>
            configure, write custom Crystal reports, and train users on
            Ungerboeck, event management software
          </li>
          <li>
            conducted quality control testing for Ungerboeck, event management
            software upgrade, allowing for smooth transition for users between
            versions
          </li>
          <li>
            troubleshoot and make technical suggestions for changes and
            additions to the company website
          </li>
          <li>
            scheduled and managed outside vendors on projects, reducing the
            amount of downtime for clients and staff{" "}
          </li>
          <li>
            re-designed and implemented cost model for digital signage system,
            leading to an increase in revenue
          </li>
          <li>
            create, manage and deploy content to over 140 digital signage
            displays
          </li>
        </ul>

        <h3>Museum Photographer</h3>
        <p>Kennedy Museum of Art, Athens, OH</p>
        <p>September 2009 to June 2010</p>
        <ul>
          <li>photographed artwork for museum’s inventory database</li>
          <li>assisted in the installation of visiting artist exhibits</li>
          <li>
            photographed exhibits and openings for the museum’s website and
            other promotional material
          </li>
        </ul>
        <h2>Education</h2>
        <p>Flatiron School - 2018</p>
        <p>
          Full Stack Web Development, Ruby on Rails and JavaScript online
          program
        </p>
        <p>Ohio University - Athens, OH - 2008- 2010</p>
        <p> Major Fine Arts- Photography</p>
        <p>Northern Kentucky University - Newport, KY - 2003- 2009</p>
        <p> Major Fine Arts- Photography</p>
      </div>
    </div>
  </Layout>
)

export default Facts
