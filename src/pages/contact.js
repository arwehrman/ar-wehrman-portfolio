import React from 'react';
import Layout from '../components/layout'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Contact = () => (
    <Layout>
    <div className="contactInfo">
        <h2>Contact Info</h2>
        <ul>
            <li><a href = "mailto: arwehrman@gmail.com"><FontAwesomeIcon icon="envelope-square" size="5x" /></a></li>
            <li><a href="https://github.com/arwehrman" target="blank"><FontAwesomeIcon icon={['fab', 'github-square'] } size="5x"/></a></li>
            <li><a href="https://www.linkedin.com/in/amanda-wehrman/" target="blank"><FontAwesomeIcon icon={['fab', 'linkedin']} size="5x" /></a></li>
            <li><a href="https://twitter.com/Wonder_Wehrman" target="blank"><FontAwesomeIcon icon={['fab', 'twitter-square']} size="5x" /></a></li>
            <li>HackerRank: arwehrman</li>
            <li>CodeWars: arwehrman</li>
        </ul>
    </div>
    </Layout>
)

export default Contact;