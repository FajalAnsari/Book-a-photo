import React, { useState, useEffect } from 'react';
import photographersData from './Photographers-data.json';

const PhotographerCards = () => {
  const [photographers, setPhotographers] = useState([]);

  useEffect(() => {
    setPhotographers(photographersData);
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        {photographers.map(photographer => (
          <div className='col-md-4 mb-4' key={photographer.id}>
            <div className='card'>
              <img src={photographer.image} className='card-img-top' alt={photographer.name} />
              <div className='card-body'>
                <h5 className='card-title'>{photographer.name}</h5>
                <p className='card-text'>{photographer.city}, {photographer.country}</p>
                <a href={`/photographer/${photographer.id}`} className='btn btn-primary'>View Profile</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhotographerCards;