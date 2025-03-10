import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
         <div className=' bg-cover bc-center bg-[url(https://as2.ftcdn.net/v2/jpg/02/53/76/75/1000_F_253767579_zPGV5jASZJYqDwEvtdYKzWVLqPJOXcpN.jpg)] h-screen pt-8 flex justify-between flex-col w-full bg-red-400'>
         <img className='w-16 ml-8' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
        <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-3xl font-bold'>Get Started with User</h2>
            <Link to="/login" className='flex item-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Start
