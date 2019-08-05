import React from "react"
import { Link } from "gatsby"
import "./layout.css"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link className="topnav" to={props.to}>{props.children}</Link>
  </li>
)

const Layout = ({ children }) => (
  <React.Fragment>
    <header className="header">
      <Link className="logo" to="/">A<span>R</span> WEHR<span>MA</span>N</Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink  to="/facts">Facts</ListLink>
        <ListLink to="/hobbies">Hobbies</ListLink>
        <ListLink  to="/projects">Projects</ListLink>
        <ListLink to="/contact">Contact</ListLink>
      </ul>
    </header>
    <main className="content">{children}</main>
  </React.Fragment>
)

export default Layout
