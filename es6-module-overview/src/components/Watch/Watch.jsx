/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Watch = ({watch}) => {

    const{name,price}=watch;

  return (
    <div>
      <h2>Watch:{name}</h2>
      <p>Price:{price}</p>
    </div>
  )
}

export default Watch
