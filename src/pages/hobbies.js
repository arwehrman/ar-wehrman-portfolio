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
            <p>Photography</p>
            
        </div>
    </Layout>
    
)

export default Hobbies;