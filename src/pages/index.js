import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import About from "../components/about"
import Facts from "../components/facts"
import Hobbies from "../components/hobbies"
import Projects from "../components/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <About />
    <Projects />
    <Facts />
    <Hobbies />
  </Layout>
)
export default IndexPage