import React, { useState } from 'react'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

const FormState = () => {
  const history = useHistory();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: ""
  })
  function handleSubmit(e) {
    e.preventDefault()
    console.log(formData)
    history.push('/card', { formData: formData.current });
  }
  function handleChange(e){
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  return (
    <div id='form-state-link'>
      <form id='info-form' onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="full_name">Full Name: </label>
        <input 
          type="text" 
          id="full_name" 
          placeholder='Full Name' 
          name="fullName"
          value={formData.fullName}
          onChange={(e) => handleChange(e)}
        /><br />
        <label htmlFor="email">Email: </label>
        <input 
          type="email" 
          id="email"
          placeholder='Email' 
          name="email"
          value={formData.email}
          onChange={(e) => handleChange(e)}
        /><br />
        <label htmlFor="password">Password: </label>
        <input 
          type="password" 
          id="password"
          placeholder='Password' 
          name="password"
          value={formData.password}
          onChange={(e) => handleChange(e)}
        /><br />
        <label htmlFor="password_confirmation">Confirm Password: </label>
        <input 
          type="password" 
          id="password_confirmation"
          placeholder='Confirm Password' 
          name="confirmPassword"
          value={formData.confirmPassword}
          onChange={(e) => handleChange(e)}
        /><br />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default FormState