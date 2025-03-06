import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const handleLogin = (e) => {
        e.preventDefault()

        if (email==='admin@example.com' && password==='password') {
            localStorage.setItem('authToken', 'authenticated')
            navigate('/dashboard')
        } else {
            alert('Invalid Email or Password!')
        }
    }

  return (
    <div className='flex h-screen items-center justify-center bg-gray-100'>
        <div className='bg-white p-8 shadow-lg rounded-lg w-96'>
            <h2 className='text-2xl font-semibold text-center mb-4'>Login</h2>
            <form onSubmit={handleLogin} className='space-y-4'>
                <input
                 type="email"
                 placeholder='Email'
                 className='w-full p-2 border rounded'
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
                 required 
                 />
                 <input
                 type="password"
                 placeholder='Password'
                 className='w-full p-2 border rounded'
                 value={password}
                 onChange={(e) => setPassword(e.target.value)}
                 required 
                 />
                 <button type='submit' className='w-full bg-blue-500 text-white p-2 rounded'>
                    Login
                 </button>
            </form>
            <p className='text-center mt-4 text-sm'>
                Create a new account{' '}
                    <Link to='/' className='text-blue-500 hover:underline'>
                        SignUp
                    </Link>
            </p>
        </div>
    </div>
  )
}

export default Login