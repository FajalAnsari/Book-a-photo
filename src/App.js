
import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from "./components/Home"
import Photographers from './components/Photographers/Photographers';
import Register from './components/Register/Register';
import Signin from "./components/Register/SignIn";



function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route>
        <Route path='/' element={<Home/>}/>
        <Route path="/photographers" element={<Photographers />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signin" element={<Signin />} />

      </Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;