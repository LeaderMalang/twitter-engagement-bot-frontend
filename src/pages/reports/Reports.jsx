import React, { useEffect, useState } from 'react'
import { CartesianGrid, Line, LineChart, XAxis, YAxis, ResponsiveContainer, Tooltip } from 'recharts'
import axios from 'axios'
import Navbar from '../../components/navbar/Navbar'


const Reports = () => {

    const [reportData, setReportData] =useState([])

    const API_URL = 'https://api.example.com/reports';

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(API_URL)
                if (response.data && Array.isArray(response.data)) {
                    setReportData(response.data.map(item => ({
                        date: item.date,
                        tweets: item.tweets,
                        likes: item.likes,
                        retweets: item.retweets
                    })));
                } else {
                    console.error('Unexpected response structure:', response.data);
                }
            } catch (error) {
                console.error('Error fetching reports:', error)
            }
        }
        fetchData()
    }, [])

  return (
    <div>
        <Navbar />
        <div className='p-6 bg-white shadow-md rounded-lg'>
            <h2 className='text-xl font-bold mb-4'>Bot Activity Reports</h2>
            <ResponsiveContainer width='100%' height={300}>
                <LineChart data={reportData}>
                    <CartesianGrid strokeDasharray='3 3' />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Line type='monotone' dataKey='tweets' stroke='#8884d8' />
                    <Line type='monotone' dataKey='likes' stroke='#82ca9d' />
                    <Line type='monotone' dataKey='retweets' stroke='#ff7300' />
                </LineChart>
            </ResponsiveContainer>
        </div>
    </div>
  )
}

export default Reports