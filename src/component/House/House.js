import React from 'react';
import './House.css';


export default function House(props) {
  return(
    <div className='listing-style'>
      <div>
        <a href={props.img}><img src={props.img} height={150} alt='Home Listing' /></a>
      </div>
      <div>
        <p>Property Name: {props.property_name}</p>
        <p>Address: {props.address}</p>
        <p>City: {props.city}</p>
        <p>State: {props.state}</p>
        <p>Zip: {props.zip}</p>
      </div>
      <div>
        <p>Monthly Mortgage: {props.mortgage}</p>
        <p>Desired Rent: {props.rent}</p>
      </div>
      <button id='delete-style' onClick={() => props.deleteHouseFn(props.id)}>X</button>
    </div>
  )
}