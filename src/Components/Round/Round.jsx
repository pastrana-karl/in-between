import React from 'react';
import Card from '../Card/Card';
import './Round.css';

function Round(props) {
  // This function is for the round design layout . . .
  
  return (
    <>
        <div>
           {props.visible === "yes" &&
            <>
            <p className='rounds-number'>Round { props.rnd }</p>
           <Card card = { props.card1 }/><br/>
           <Card card = { props.card2 }/><br/>
            </>}

            {props.option !== "" && 
            <>
                <Card card = { props.card3 }/><br/><br/>

               <div className='result'>
                  <p className='card-result'>{ props.option }<br/>
                     { props.status }</p>
               </div>
            </>
            }
        </div>
    </>
  )
}

export default Round