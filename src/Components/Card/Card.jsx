import React from 'react';
import './Card.css';

function Card(props) {
  // This function is for the card design layout . . .
  
  return (
    <>
        <div>
            <p>{ props.card }</p>
        </div>
    </>
  )
}

export default Card