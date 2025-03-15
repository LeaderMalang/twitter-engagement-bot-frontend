import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startBot, stopBot } from '../../features/botSlice'
import Navbar from '../../components/navbar/Navbar'

const BotActions = () => {
  const dispatch = useDispatch()
  const { isRunning, status, lastAction } = useSelector((state) => state.bot)

  useEffect(() => {
    console.log('Status:', status)
  }, [status])

  return (
      <div>
          <Navbar />
          <div className='p-6'>
              <h2 className='text-2xl font-bold mb-4'>Bot Actions</h2>
              
              <p className='mb-2 text-lg'>
                  <strong>Status:</strong> 
                  <span className={`ml-2 ${isRunning ? 'text-green-600' : 'text-red-600'}`}>
                      {isRunning ? 'Running' : 'Stopped'}
                  </span>
              </p>
              
              <p className='mb-4 text-gray-600'>
                  <strong>Last Action:</strong> {lastAction || 'None'}
              </p>

              <button
                  onClick={() => dispatch(isRunning ? stopBot() : startBot())}
                  className={`px-5 py-2.5 rounded-md text-white font-semibold ${
                      isRunning ? 'bg-red-500 hover:bg-red-600' : 'bg-green-500 hover:bg-green-600'
                  }`}
              >
                  {isRunning ? 'Stop Bot' : 'Start Bot'}
              </button>
          </div>
      </div>
  )
}

export default BotActions