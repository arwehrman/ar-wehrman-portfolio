import React from 'react';


const Job = ({ id, title, description, startdate, enddate, company}) => (
    <div className="job">
        <h3>{title}</h3>
          <p>{company}</p>
          <p>{startdate} to {enddate}</p>
          <ul>
          {description.map((item, index)=> {
             return <li key={index}>{item}</li>       
    })
    
}
</ul>
    </div>
);

export default Job;