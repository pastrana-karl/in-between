import React from 'react';
import './Card.css';

function Card(props) {
  // This function is for the card design layout . . .
  
  return (
    <>
        <div className='cards'>
            <img className= 'card-icon' src= "https://res.cloudinary.com/karlstorage/image/upload/v1647855397/free-img/waybvnftlkt2pzjld2hk.png"/>
                <p className='card-text'>{ props.card }</p>
              </div>
    </>
  )
}

export default Card