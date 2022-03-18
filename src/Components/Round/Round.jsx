import React from 'react';
import Card from '../Card/Card';

function Round(props) {
  // This function is for the round design layout . . .
  
  return (
    <>
        <div>
            {props.visible === "yes" && <h3>Round { props.rnd }</h3>}
            <Card card = { props.card1 }/>
            <Card card = { props.card2 }/>

            {props.option !== "" && 
            <>
                <Card card = { props.card3 }/>
                <p>{ props.option }</p>
                <p>{ props.status }</p>
            </>
            }
        </div>
    </>
  )
}

export default Round