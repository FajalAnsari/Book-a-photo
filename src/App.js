
import React  from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from "./components/Home"
import Photographers from './components/Photographers/Photographers';
import Register from './components/Register/Register';
import Signin from "./components/Register/SignIn";
import Dashboard from './components/Dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {  auth } from "./firebase";
import { useEffect, useState } from 'react';

function App() {
  const [userName, setUserName] = useState("");
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if(user){
        setUserName(user.displayName);
      }
      else{
        setUserName("");
      }
      
    });
  },[]);
  return (
    <>
    <Router>
    <ToastContainer position="top-center" />
    <Routes>
      <Route>
        <Route path='/' element={<Home/>}/>
        <Route path="/photographers" element={<Photographers />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/dashboard" element={<Dashboard name={userName}/>} />

      </Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;