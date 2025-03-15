import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../../components/navbar/Navbar'

const Engagements = () => {

    const [engagement, setEngagement] = useState([])
    const API_URL = 'https://jsonplaceholder.typicode.com/posts'

    useEffect(() => {
        const fetchEngagement = async () => {
            try {
                const response = await axios.get(API_URL)
                setEngagement(response.data)
            } catch (error) {
                console.error('Error fetching engagements:', error)
            }
        }
            fetchEngagement()
    }, [])

  return (
    <div>
        <Navbar />
        <div className='p-6'>
            <h1 className='text-2xl font-bold mb-4'>Engagements</h1>
            <div className='bg-white p-4 shadow-md rounded-lg'>
                {engagement.length === 0 ? (
                    <p>No Engagements Yet.</p>
                ) : (
                    <ul className='divide-y'>
                        {engagement.map((eng, index) => (
                            <li key={index} className='p-3 hover:bg-gray-100'>
                                <p><strong>{eng.username}</strong>: {eng.action} on <a href={eng.tweetUrl} className='text-blue-500'>Tweet</a></p>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    </div>
  )
}

export default Engagements