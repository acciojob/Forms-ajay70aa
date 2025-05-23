import React from 'react'

const Form = () => {
  return (
    <div id='form-link'>
      <form id='info-form'>
        <label htmlFor="full_name">Full Name: </label>
        <input 
          type="text" 
          id="full_name" 
          placeholder='Full Name' 
          onChange={(e) => handleChange(e)}
        /><br />
        <label htmlFor="email">Email: </label>
        <input 
          type="email" 
          id="email"
          placeholder='Email' 
          onChange={(e) => handleChange(e)}
        /><br />
        <label htmlFor="password">Password: </label>
        <input 
          type="password" 
          id="password"
          placeholder='Password' 
          onChange={(e) => handleChange(e)}
        /><br />
        <label htmlFor="password_confirmation">Confirm Password: </label>
        <input 
          type="password" 
          id="password_confirmation"
          placeholder='Confirm Password' 
          onChange={(e) => handleChange(e)}
        />
      </form>
    </div>
  )
}

export default Form