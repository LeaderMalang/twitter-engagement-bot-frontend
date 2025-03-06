import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startBot, stopBot } from '../../features/botSlice'
import Navbar from '../../components/navbar/Navbar'

const BotActions = () => {

    const dispatch = useDispatch()
    const isRunning = useSelector(state => state.bot.isRunning)
    
  return (
    <div>
      <Navbar />
      <div className='p-6'>
          <h2 className='text-2xl font-bold mb-4'>Bot Actions</h2>
          <button onClick={() => dispatch(isRunning ? stopBot() : startBot())} className='px-4 py-2 bg-blue-500 text-white'>
              { isRunning ? 'Stop Bot' : 'Start Bot'}
          </button>
      </div>
    </div>
  )
}

export default BotActions