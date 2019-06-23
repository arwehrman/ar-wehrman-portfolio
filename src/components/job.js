import React from 'react';


const Job = ({ id, title, description, startdate, enddate, company}) => (
    <div className="job">
        <h3>{title}</h3>
          <p>{company}</p>
          <p>{startdate} to {enddate}</p>
          <p>{description}</p>
    </div>
);

export default Job;