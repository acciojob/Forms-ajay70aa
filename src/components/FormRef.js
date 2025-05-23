import React, { useRef } from 'react'
import { Route, BrowserRouter as Router, Link, Switch, useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const FormRef = () => {
  const formData = useRef({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  const history = useHistory();
  
  function handleChange(e) {
    formData.current[e.target.name] = e.target.value
  }
  function handleSubmit(e){
    e.preventDefault()
    console.log(formData.current)
    history.push('/card', { formData: formData.current });
  }
  return (
    <div id='form-ref-link'>
      <form id='info-form' onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="full_name">Full Name: </label>
        <input 
          type="text" 
          id="full_name" 
          placeholder='Full Name' 
          name="fullName"
          onChange={(e) => handleChange(e)}
        /><br />
        <label htmlFor="email">Email: </label>
        <input 
          type="email" 
          id="email"
          placeholder='Email'
          name="email"
          onChange={(e) => handleChange(e)}
        /><br />
        <label htmlFor="password">Password: </label>
        <input 
          type="password" 
          id="password"
          placeholder='Password' 
          name="password"
          onChange={(e) => handleChange(e)}
        /><br />
        <label htmlFor="password_confirmation">Confirm Password: </label>
        <input 
          type="password" 
          id="password_confirmation"
          placeholder='Confirm Password' 
          name="confirmPassword"
          onChange={(e) => handleChange(e)}
        /><br />
        <button type='submit'>Submit</button>
      </form>      
    </div>
  )
}

export default FormRef