import React from 'react';
import user from '../assests/user.png';

export default function AboutCard({personInfo}) {
  return (
    <div className="row row-cols-1 row-cols-md-3 g-4">
      {personInfo.map((person) => (
        <div key={person.id} className="col">
          <div className="card h-100">
            <img src={user} className="card-img-top" alt={person.name} />
            <div className="card-body">
              <h5 className="card-title">{person.name}</h5>
              <p className="card-text">{person.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
