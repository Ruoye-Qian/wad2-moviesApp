import React, { useState } from 'react' ;
//import { useFirebaseApp } from 'reactfire' ;
import firebase from "./firebaseConfig.js"
import 'firebase/auth'
import { Link } from "react-router-dom";
import PageTemplate from "./components/templateLoginPage";
//import './Signup.css' ;

const Login = () => {
  // User State
  const [user, setUser] = useState({
    email : '' ,
    password : '' ,
    error : '' ,
  });
 
  // onChange function
  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
      error : '' ,
    })
  };
 
  // Import firebase
  //const firebase = useFirebaseApp();
 
  // Submit function (Log in user)
  const handleSubmit = e => {
    e.preventDefault();
    // Log in code here.
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
      .then( result => {
        if (!result.user.emailVerified) {
          setUser({
            ...user,
            error : 'Please verify your email before to continue' ,
          })
          firebase.auth().signOut();
        }
      })
      .catch( error => {
        // Update the error
        setUser({
          ...user,
          error : error.message,
        })
      })
  }
 
  return (
    <>
      {/* <h1>Login in</h1> */}
      <PageTemplate
      title='Login in'
      />
      <form onSubmit={handleSubmit} align="center">
        <box>
        <input type="text" placeholder="Email" name="email" onChange={handleChange}/><br />
        </box>
        <box>
        <input type="password" placeholder="Password" name="password" onChange={handleChange}/><br />
        </box>
        <box>
        <Link
                  to="/"
                > 
        <button type="submit" >Log in</button>
        </Link>
        </box>
        </form>
      {user.error && <h4>{user.error}</h4>}
    </>
  )
};
 
export default Login;