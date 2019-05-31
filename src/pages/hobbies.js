import React from 'react'
import wonder from '../images/wonder_wehrman.jpg'
import Layout from '../components/layout'

const Hobbies = () => (
    <Layout>
        <div>
            <h1>Hobbies</h1>
        </div>
        <div>
            <br></br>
            <img src={wonder} alt="Wonder Wehrman" />
            <p>Roller Derby</p>
                <ul className="hobbies-list">
                    <li>Player- 3 years</li>
                    <li>Announcer- 2 years</li>
                    <li>Photographer- 1 year</li>
                    <li>WFTDA Volunteer- worked as Clips Media Manager for WFTDA Broadcast</li>
                </ul>
            
        </div>
    </Layout>
    
)

export default Hobbies;