import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const userName = JSON.parse(localStorage.getItem("user"));
  // const [user, setUser] = useState("");
  // onAuthStateChanged(auth, (res) => {
  //   setUser(res);
  // });
  const navigate = useNavigate();
  // const username = localStorage.getItem("name");
  const handlelogout = () => {
    // signOut(auth);
    localStorage.removeItem("user");
    localStorage.removeItem("loggedin");
    navigate("/signin");
  };

  return (
    <div>
      {/* {
        (auth) ?
        <>
          <Link to="/add">Add</Link>
          <Link to="/add">Home</Link>
        </>
        :
        <>
      
          <Link to="/add">Dashboard</Link>
          <Link to="/add">Logout</Link>
        
        </>
      } */}
      {/* {localStorage.getItem("email") ? (
        <>
          <Link to="/add">Add</Link>
          <Link to="/add">Home</Link>
        </>
      ) : (
        <>
          <Link to="/add">Dashboard</Link>
          <Link to="/add">Logout</Link>
        </>
      )} */}

      <h1>hello</h1>
      {/* <h1>{props.name ? `welcome ${props.name}`: "Login" }</h1> */}
      <h1>welcome {userName.username}</h1>
      {/* {user.email} */}
      <button onClick={handlelogout}>logout</button>
    </div>
  );
};

export default Dashboard;
