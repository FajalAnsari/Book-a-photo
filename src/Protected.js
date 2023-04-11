import React, { useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from "./firebase";
import Dashboard from './components/Dashboard/Dashboard';
const Protected = (props) => {
    const { Component } = props;
    const navigate = useNavigate();
    useEffect(() => {
        // let login = localStorage.getItem('login');
        // if(!login){
        //     navigate('/signin');
        // }
        // else{
        //     navigate('/dashboard');
        // }
        let login = Dashboard.isLoggedin;
        if(!login){
            navigate('/signin');
            
        }
        else{
            navigate('/dashboard');
        }
    }) 
  return (
    <div>Protected

<Component />
    </div>
    
  )
}

export default Protected