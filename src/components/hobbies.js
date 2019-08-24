import React from 'react'
import wonder from '../images/wonder_wehrman.jpg'
import "./hobbies.css"

const Hobbies = () => (
        <div className="hobbies" id="hobbies">
            <h1>Hobbies</h1>
            <img className="derby" src={wonder} alt="Wonder Wehrman" />
        <div className="hobby">
            
            <p>Since 2010 I've been involved with Philly Roller Derby. I've been an announcer, photographer, volunteer and skater. In 2017 I was in charge of planning and organize our leagues annual 3 day tournament, East Coast Derby Extravaganza. This tournament hosted leagues from all over the United States and internationally. I cordinated teams, officials, photographers, vendors, and created game schedules.  I also worked as the Clips Media Manager for WFTDA Broadcast, which involved creating clips from broadcast footage to be used in commericials and media coverage.</p>
        </div>

        <div className="hobby">
            <p>About 4 years ago I started traveling outside of the United States. Rick Steves says it best "Ideally, travel broadens our perspectives personally, culturally, and politically. Suddenly, the palette with which we paint the story of our lives has more colors.” I've been to France, Ireland, and Argentina.  I'm currently planning a trip to China.</p>
        </div>
        <div className="hobby">
            <p>I love all forms of art but photography is my favorite. I started building cameras out of Legos when I was 4 years old. I would pretend that I was taking pictures and then I would develop them in my "dark room", which was me drawing  the pictures I took. I enjoy capturing everyday life.  My favorite photographers are Robert Frank and Sylvia Placky.</p>
        </div>
        </div>
    
)
export default Hobbies;