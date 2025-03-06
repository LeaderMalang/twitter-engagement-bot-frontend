import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {

    const [formData, setFromData] = useState({
        email: '',
        password: '',
        confirmPassword: '',
    })

    const handleChange = (e) => {
        setFromData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if (formData.password !== formData.confirmPassword) {
            alert('Passwrods do not match!')
            return
        }
        console.log('Signup Data:', formData)
    }

  return (
    <div className='flex justify-center items-center min-h-screen bg-gray-100'>
        <div className='bg-white p-8 rounded-lg shadow-lg w-96'>
            <h2 className='text-2xl font-bold text-center mb-6'>Sign Up</h2>
            <form onSubmit={handleSubmit} className='space-y-4'>
                <input type='email'
                name='email'
                placeholder='Email'
                className='w-full p-2 border rounded'
                value={formData.email}
                onChange={handleChange}
                required 
                />
                <input type='password'
                name='password'
                placeholder='Password'
                className='w-full p-2 border rounded'
                value={formData.password}
                onChange={handleChange}
                required 
                />
                <input type='password'
                name='confirmPassword'
                placeholder='Confirm Password'
                className='w-full p-2 border rounded'
                value={formData.confirmPassword}
                onChange={handleChange}
                required 
                />
                <button type='submit' className='w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600'>
                    Sign Up
                </button>
            </form>
            <p className='text-center mt-4 text-sm'>
                Already have an an account?{' '}
                <Link to='/login' className='text-blue-500 hover:underline'>
                    Login
                </Link>
            </p>
        </div>
    </div>
  )
}

export default Signup