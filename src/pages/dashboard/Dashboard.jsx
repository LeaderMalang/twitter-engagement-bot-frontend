import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchTrends } from '../../features/trendsSlice'
import Navbar from '../../components/navbar/Navbar'

const Dashboard = () => {

  const dispatch = useDispatch()
  const { trends, loading } = useSelector(state => state.trends)

  useEffect(() => {
    dispatch(fetchTrends())
  }, [dispatch])

  return (
    <div>
      <Navbar />
      <div className='p-6'>
        <h2 className='text-2xl font-bold mb-4'>Trending Topics</h2>
        {
          loading ? <p>Loading...</p> :
          <ul>
            {trends.map((trend, index) => <li key={index}>
              {trend.name}
            </li>)}
          </ul>
        }
      </div>
    </div>
  )
}

export default Dashboard