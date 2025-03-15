import React, { useEffect, useState } from 'react'
import Navbar from '../../components/navbar/Navbar'
import axios from 'axios'

const Trends = () => {
    const [trend, setTrend] = useState([])
    const API_URL = 'https://dummyjson.com/products'

    useEffect(() => {
        const fetchTrend = async () => {
            try {
                const response = await axios.get(API_URL)
                setTrend(response.data.products)
            } catch (error) {
                console.error('Error fetching trends:', error)
            }
        }
            fetchTrend()
    }, [])

return (
    <div>
            <Navbar />
            <div className='p-6'>
                    <h2 className='text-2xl font-bold mb-4'>Twitter Trends</h2>
                    <ul className='mt-4'>
                            {trend.slice(0, 10).map((trends, index) => (
                                    <li key={trends.id} className='p-2 border rounded mb-2'>
                                            {index + 1}. {trends.title}
                                    </li>
                            ))}
                            </ul>
            </div>
    </div>
)
}

export default Trends
