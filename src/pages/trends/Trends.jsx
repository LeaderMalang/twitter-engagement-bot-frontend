import React from 'react'
import Navbar from '../../components/navbar/Navbar'

const trend = [
    { id: 1, topic: '#ReactJS'},
    { id: 2, topic: '#OpenAI'},
    { id: 3, topic: '#CryptoNews'},
]

const Trends = () => {
  return (
    <div>
        <Navbar />
        <div className='p-6'>
            <h2 className='text-2xl font-bold mb-4'>Twitter Trends</h2>
            <ul className='mt-4'>
                {trend.map((trends) => (
                    <li key={trend.id} className='p-2 border rounded mb-2'>{trend.topic}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Trends