import React from 'react';
import { Route, Routes } from 'react-router-dom';
import UserLogin from './pages/UserLogin';
import UserSignup from './pages/UserSignup';
import Captainlogin from './pages/Captainlogin';
import CaptainSignup from './pages/CaptainSignup';
import Start from './pages/Start';
import Home from './pages/Home';
import UserContext from '/src/context/UserContext.jsx';
import UserProtectedWrapper from '../src/pages/UserProtectedWrapper'
import UserLogout from './pages/UserLogout';
import CaptainHome from './pages/CaptainHome';
import CaptainProtectWrapper from './pages/CaptainProtectedWrapper';

const App = () => {
  return (
    <UserContext>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />
        <Route path="/captain-login" element={<Captainlogin />} />
        <Route path="/captain-signup" element={<CaptainSignup />} />
        <Route path="/home" element={
          <UserProtectedWrapper>
            <Home />
          </UserProtectedWrapper>
        } />
         <Route path='/user/logout'
          element={<UserProtectedWrapper>
            <UserLogout />
          </UserProtectedWrapper>
          } />
          <Route path='captain-home' element={
            <CaptainProtectWrapper>
              <CaptainHome/>
            </CaptainProtectWrapper>
          }/>
      </Routes>
    </UserContext>
  );
};

export default App;
