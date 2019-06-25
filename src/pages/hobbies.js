import React from 'react'
import wonder from '../images/wonder_wehrman.jpg'
import Layout from '../components/layout'

const Hobbies = () => (
    <Layout>
        <div>
            <h1>Hobbies</h1>
        
        <div className="hobby">
            <img src={wonder} alt="Wonder Wehrman" />
            <p>Since 2010 I've been involved with Philly Roller Derby. I've been an announcer, photographer, volunteer and skater. In 2017 I was in charge of planning and organize our leagues annual 3 day tournament, East Coast Derby Extravaganza. This tournament hosted leagues from all over the United States and internationally. I cordinated teams, officials, photographers, vendors, and created game schedules.  I also worked as the Clips Media Manager for WFTDA Broadcast, which involved creating clips from broadcast footage to be used in commericials and media coverage.</p>
        </div>

        <div className="hobby">
            <p>I love to travel within the United States and internationally. I've been to France, Ireland, and Argentina. I'm currently planning a trip to China.</p>
        </div>
        <div className="hobby">
            <p>I really enjoy photography. I started building cameras out of Legos when I was 4 years old. I would pretend that I was taking pictures and then I would go to my "dark room" and draw the pictures I took. My favorite photographers are Robert Frank and Sylvia Placky</p>
        </div>
        </div>
    </Layout>
    
)

export default Hobbies;