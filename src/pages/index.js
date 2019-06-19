import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import headshot from '../images/arwehrman.jpg'


const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
   
    <div>
      <img className="image-neon" src={headshot} alt="My headshot" />
    </div> 
    <div>
    <div>
    <h1>About Me</h1>
            <p>If I had to pick one word to describe me it would be Driven.</p>
            <p>My employment background is a mixed bag, that has in its own unique  way led me to searching for my first developer role. I've worked on the retail floor, in restaurants, warehouse distribution, banking, real estate law and hospitality.</p>
            <p>9 years ago I started working in the information technology field, as the administrative assistant for an IT Department. I had the fortunate experience of having a supervisor that saw that I had a knack for learning technical skills quickly. Based on that, I took on greater responsibilities and received the right tools to grow and develop those skills.  Through a combination of those increased responsibilities and self-study, in 3 years I was promoted into a management position. Consequently, I took on the responsibility of managing our website, the company’s intranet site, and event management software.</p>
            <p>To success in my IT Manager role, I have taught myself HTML, CSS, SQL, and Crystal Reports. This led me into discovering software development. I went through the online Full Stack development  program at Flatiron while still working full-time.  Now I am currently  balancing a full-time job while honing in my developer skills in my free time. I am currently looking for a full time developer position to take my recently acquired coding skills to the next level.</p>
        </div>
    </div> 
  </Layout>
)
export default IndexPage