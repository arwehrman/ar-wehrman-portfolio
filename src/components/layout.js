import React from "react"
import { Link } from "gatsby"
import logo from "../images/icon.png"
import "./layout.css"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link className="topnav" to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({ children }) => (
  <React.Fragment>
    <header className="header">
      <Link to="/"><img src={logo} alt="W logo" /></Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink  to="/facts">Facts</ListLink>
        <ListLink to="/hobbies">Hobbies</ListLink>
        <ListLink  to="/projects">Projects</ListLink>
      </ul>
    </header>
    <main className="content">{children}</main>
  </React.Fragment>
)

export default Layout
