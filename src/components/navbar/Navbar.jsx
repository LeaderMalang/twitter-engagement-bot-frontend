import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {

    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem('authToken')
        navigate('/login')
    }

  return (
    <nav className='bg-blue-500 text-white p-4 flex flex-col md:flex-row justify-between items-center'>
        <h1 className='text-xl font-bold mb-4 md:mb-0'>Twitter Bot</h1>
        <div className='space-x-4 mb-4 md:mb-0'>
            <Link to='/dashboard' className='block md:inline'>Dashboard</Link>
            <Link to='/trends' className='block md:inline'>Trends</Link>
            <Link to='/engagements' className='block md:inline'>Engagements</Link>
            <Link to='/reports' className='block md:inline'>Reports</Link>
            <Link to='/bot-actions' className='block md:inline'>Bot Actions</Link>
        </div>
        <button onClick={handleLogout}
        className='bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600'>
            Logout
        </button>
    </nav>
  )
}

export default Navbar