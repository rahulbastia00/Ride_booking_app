import React, { useState, useRef } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'

const Home = () => {
  const [pickUp, setpickUp] = useState('')
  const [destination, setdestination] = useState('')
  const [pannelOpen, setpannelOpen] = useState(false)
  const pannelRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault()
  }
  useGSAP(function() {
    if(pannelOpen){
      gsap.to(pannelRef.current, {
        height: '70%'
      })
    } else {
      gsap.to(pannelRef.current, {
        height: '0%'
      })
    }
  },[pannelOpen])

  return (
    <div className='h-screen relative'>
      <img className="w-16 absolute left-5 top-5" src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className='h-screen w-screen '>
        <img className='h-full w-full object-cover ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjgBWkh-2RpEXtRmA1vxakcVsTzG3XVMnd3Q&s" alt="" />
      </div>
      <div className=' flex flex-col justify-end h-screen absolute top-0 w-full '>
        <div className='h-[30%] p-5 bg-white relative'>
          <h4 className='text-2xl font-semibold'>Find a trip</h4>
          <form action="" onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className='line absolute h-16 w-1 top-1/2 top-[45%] left-10 bg-gray-800 rounded-full '></div>
            <input
              onClick={() => {
                setpannelOpen(true)
              }}
              value={pickUp}
              onChange={(e) => {
                setpickUp(e.target.value)
              }}
              className='bg-[#eee] px-12 text-lg py-2 text-base rounded-lg w-full mt-5' type="text" placeholder='add a picup location' />
            <input
              onClick={() => {
                setpannelOpen(true)
              }}
              value={destination}
              onChange={(e) => {
                setdestination(e.target.value)
              }}
              className='bg-[#eee] px-12 text-lg py-2 text-base rounded-lg mt-3 w-full' type="text" placeholder='enter your destination' />
          </form>
        </div>
        <div ref={pannelRef} className=' bg-red-500 h-[70%]'>

        </div>
      </div>
    </div>
  )
}

export default Home
