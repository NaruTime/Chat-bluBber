import React, { useState } from 'react'

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle login logic here
  }

  return (
    <div className='flex w-full min-h-screen justify-center items-center bg-[#ECF0F4]'>
      <h2>Login</h2>
    </div>
  )
}

export default LoginPage
