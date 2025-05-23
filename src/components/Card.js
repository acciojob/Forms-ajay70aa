import React from 'react'

const Card = ({location}) => {
  const formData = location.state?.formData;
  return (
    <div id='card'>
      <h3>{formData.fullName}</h3>
      <p>{formData.email}</p>
    </div>
  )
}

export default Card