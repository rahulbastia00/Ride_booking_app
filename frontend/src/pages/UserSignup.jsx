import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { UserDataContext } from '/src/context/UserContext.jsx';

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setlastName] = useState('');

  const navigate = useNavigate();
  const { user, setUser } = useContext(UserDataContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      fullname: {
        firstname: firstName,
        lastname: lastName,
      },
      email,
      password,
    };

    try {
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser);
      if (response.status === 201) {
        setUser(response.data.user);
        localStorage.setItem('token', data.token)
        navigate('/home');
      }
      setEmail('');
      setfirstName('');
      setlastName('');
      setPassword('');
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
          alt=""
        />

        <form onSubmit={submitHandler}>
          <h3 className="text-base font-medium mb-3">What's your name</h3>
          <div className="flex gap-4 mb-5">
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-3 py-2 border text-base placeholder:text-sm"
              type="text"
              required
              placeholder="firstName"
              value={firstName}
              onChange={(e) => setfirstName(e.target.value)}
            />
            <input
              className="bg-[#eeeeee] w-1/2 rounded px-3 py-2 border text-base placeholder:text-sm"
              type="text"
              required
              placeholder="Secondname"
              value={lastName}
              onChange={(e) => setlastName(e.target.value)}
            />
          </div>

          <h3 className="text-base font-medium mb-3">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-5 w-full rounded px-3 py-2 border text-base placeholder:text-base"
            type="email"
            required
            placeholder="email@mail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <h3 className="text-lg font-medium mb-3">Enter password</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-3 py-2 border w-full text-base placeholder:text-base"
            type="password"
            required
            placeholder="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button className="bg-[#111] text-white font-semibold mb-7 rounded px-3 py-2 w-full text-lg">
            Create Account
          </button>
          <p className="text-center">
            Already exists? <Link to="/login" className="text-blue-600">Login here</Link>
          </p>
        </form>
      </div>
      <div>
        <p className="text-[10px] leading-tight">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis,
          veritatis. Ipsa modi nulla ex dolor! Doloribus nulla, consectetur
          delectus accusantium dolorem incidunt, modi aliquam!
        </p>
      </div>
    </div>
  );
};

export default UserSignup;
