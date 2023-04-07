import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import './Register.css';
import { signInWithEmailAndPassword } from "firebase/auth";
import {  useNavigate  } from "react-router-dom";
import {  auth } from "../../firebase";
import { toast } from "react-toastify";
function Register() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = event => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = event => {
    setPassword(event.target.value);
  };

  const handleFormSubmit = event => {
    event.preventDefault();
    // Write logic to submit the form data to the server
    if(username!=="" && password!==""){
      signInWithEmailAndPassword(auth, username, password).then(()=> {
        navigate('/dashboard');
  
      })
      .catch((err)=>{
        toast.error(err);
      })
      
    }
    else{
      toast.error("Fill the form field");
    }
   
  };
  return (
    <>
      <Navbar />
      <div className='container'>
        <div className='register-section'>
        <div className="form-container">
          <div className='row'>
            <div className='col-10 mx-auto mt-4'>
              <form onSubmit={handleFormSubmit}>
                <div className='form-group'>
                  <h1 className='text-center'>Log In</h1>
                </div>
                <div className='form-group'>
                  <input
                    className='form-control mx-auto m-3 p-2'
                    type='text'
                    placeholder='Username/email'
                    value={username}
                    onChange={handleUsernameChange}
                  />
                </div>
                 {/* error message show */}
                 <span></span>
                <div className='form-group'>
                  <input
                    className='form-control mx-auto m-3 p-2'
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={handlePasswordChange}
                  />
                </div>
                 {/* error message show */}
                 <span></span>
                <div className='form-group'>
                  <button className='form-control mx-auto m-3 bg-warning p-2'>Login</button>
                </div>
                <div className='mx-auto'>
                    <p>You don't have account?<span>  <Link to={"/register"}>SignUp</Link></span></p>
                </div>
              </form>
            </div>
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Register;