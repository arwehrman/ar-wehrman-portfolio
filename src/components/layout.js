import React from "react"
import { Link } from "gatsby"
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import "./layout.css"

library.add(fab, faEnvelopeSquare)

const ListLink = props => (
  <li>
    <Link className="topnav" to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({ children }) => (
  <React.Fragment>
    <header className="header">
      <div className="header-content">
        <div className="logo-holder">
          <Link className="logo" to="/">A<span>R</span> WEHR<span>MA</span>N</Link>
        </div>
        <nav className="main-nav">
          <ul>
            <ListLink to="#facts">Facts</ListLink>
            <ListLink to="#hobbies">Hobbies</ListLink>
            <ListLink to="#projects">Projects</ListLink>
            <li className="contact-icon"><a href="mailto: arwehrman@gmail.com"><FontAwesomeIcon icon="envelope-square" size="2x" /></a></li>
            <li className="contact-icon"><a href="https://github.com/arwehrman" target="blank"><FontAwesomeIcon icon={['fab', 'github-square']} size="2x" /></a></li>
            <li className="contact-icon"><a href="https://www.linkedin.com/in/amanda-wehrman/" target="blank"><FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" /></a></li>
            <li className="contact-icon"><a href="https://twitter.com/Wonder_Wehrman" target="blank"><FontAwesomeIcon icon={['fab', 'twitter-square']} size="2x" /></a></li>
          </ul>
        </nav>
      </div>
    </header>
  <main>{children}</main>
  </React.Fragment >
)

export default Layout
