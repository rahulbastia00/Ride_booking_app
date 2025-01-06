import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '/src/context/UserContext.jsx';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const UserLogin = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userData, setUserData] = useState({})


    const { user, setUser } = useContext(UserDataContext)
    const navigate = useNavigate()

    const submitHandler = async (e) => {
        e.preventDefault();
        const userData = {

            email: email,
            password: password

        }
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
        if(response.status == 200){
            const data = response.data
            setUser(data.user)
            localStorage.setItem('token', data.token)
            navigate('/home')
        }

        setEmail('')
        setPassword('')
    }


    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
            <div>
                <img className='w-16 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />

                <form onSubmit={(e) => {
                    submitHandler(e)
                }}>
                    <h3 className='text-lg font-medium mb-3'>What's Your Email</h3>
                    <input
                        className='bg-[#eeeeee] mb-7 rounded px-3 py-2 border w-full text-lg placeholder:text-base'
                        type="email"
                        required
                        placeholder='email@email.com'
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value)
                        }} />
                    <h3 className='text-xl mb-2'>Enter Password</h3>
                    <input className='bg-[#eeeeee] mb-7 rounded px-3 py-2 border w-full text-lg placeholder:text-base'
                        type="password"
                        required
                        placeholder='password'
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
                        }}
                    />
                    <button className='bg-[#111] text-white font-semibold mb-7 rounded px-3 py-2  w-full text-lg placeholder:text-base'>Login</button>
                    <p className='text-center'>New here? <Link to='/signup' className="text-blue-600">Create new account</Link></p>
                </form>
            </div>
            <div>
                <Link to='/captain-login' className='bg-[#10b461] mb-7 flex items-center justify-center text-white font-semibold  rounded px-3 py-2  w-full text-lg placeholder:text-base'>Sign in as captain</Link>

            </div>
        </div>
    )
}

export default UserLogin
