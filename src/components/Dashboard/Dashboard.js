import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";
import "./Dashboard";

const Dashboard = () => {
  // const userName = JSON.parse(localStorage.getItem("user"));
  // const userlogin = JSON.parse(localStorage.getItem("user-login"));


  

  const [user, setUser] = useState("");
  onAuthStateChanged(auth, (res) => {
    setUser(res);
  });

  // const isLoggedin = user ? true : false
  const navigate = useNavigate();
  // const username = localStorage.getItem("name");
  const handlelogout = () => {
    signOut(auth);
    // localStorage.removeItem("user");
    
    // localStorage.removeItem("loggedin");
    navigate("/signin");
  };

  return (
    <div class="container">
    
     

      <h1>hello</h1>
   
      {user.email}
      <button onClick={handlelogout}>logout</button>
      {/* form update */}
      

      <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">User Email</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" value={user.email}/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">User Name</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>

    </div>
    
  );
};

export default Dashboard;
