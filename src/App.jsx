import React, { useEffect } from 'react';
import Home from './pages//Home/Home.jsx';
import Login from './pages/Login/Login.jsx'
import { Route, Routes, useNavigate } from 'react-router-dom';
import Player from './pages/Player/Player.jsx';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase.js';


function App() {

  const navigate = useNavigate();


  useEffect(()=>{
    onAuthStateChanged(auth, async (user)=>{
      if(user){
        console.log("Logged In")
        navigate('/');
      }else {
        console.log("Logged Out");
        navigate('/login');
      }
    })
  },[]);


  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/player/:id' element={<Player/>} />
      </Routes>
    </div>
  )
}

export default App
