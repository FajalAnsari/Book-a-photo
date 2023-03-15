
import React from 'react';
import { BrowserRouter as Router, Routes, Route, } from 'react-router-dom';
import Home from "./components/Home"
import Photographers from './components/Photographers/Photographers';


function App() {
  return (
    <>
    <Router>
    <Routes>
      <Route>
        <Route path='/' element={<Home/>}/>
        <Route path="/photographers" element={<Photographers />} />
      </Route>
    </Routes>
    </Router>
    </>
  );
}

export default App;