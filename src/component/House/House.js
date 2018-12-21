import React from 'react';

export default function House(props) {
  return(
    <div>
      <p>{props.property_name}</p>
      <p>{props.address}</p>
      <p>{props.city}</p>
      <p>{props.state}</p>
      <p>{props.zip}</p>
      <button onClick={() => props.deleteHouseFn(props.id)}>Delete</button>
    </div>
  )
}