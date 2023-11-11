import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { auth } from './firebase';
import { login } from './features/userSlice'
import './Login.css'

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [profilePic, setProfilePic] = useState("");
  const dispatch = useDispatch();
  
  const loginToApp = (e) => {
    e.preventDefault();

    auth.signInWithEmailAndPassword(email, password)
    .then(userAuth => {
      dispatch(login({
        email: userAuth.email,
        uid: userAuth.user.uid,
        displayName: userAuth.user.displayName,
        profileUrl: userAuth.user.profileURL,
      }))
    }).catch(error => alert(error));
  };

  const register = () => {
    if (!name) {
      return alert("Please enter full name!");
    }

    auth.createUserWithEmailAndPassword(email, password)
    .then((userAuth) => {
      userAuth.user.updateProfile({
        displayName: name,
        photoURL: profilePic,
      })
      .then(() => {
        dispatch(
          login({
            email: userAuth.user.email,
            uid: userAuth.user.uid,
            displayName: name,
            photoUrl: profilePic,
        }));
      });
    }).catch(error => alert(error.message));
  };
  
  return (
    <div className="login">
      <img 
        src="https://logos-download.com/wp-content/uploads/2016/03/LinkedIn_Logo_2003.png" 
        alt="" 
      />

    <form action="">
      <input 
        placeholder="Full name (required if registering)" type="text"
        value={name} onChange={e => setName(e.target.value)}  
      />
      <input 
        placeholder="Profile picture URL (optional)" type="text" 
        value={profilePic} onChange={e => setProfilePic(e.target.value)}
      />
      <input 
        placeholder="Email" type="email"
        value={email} onChange={e => setEmail(e.target.value)} 
      />
      <input 
        placeholder="Password" type="password"
        value={password} onChange={e => setPassword(e.target.value)}  
      />

      <button type='submit' onClick={loginToApp}>Sign In</button>
    </form>

    <p>
      Not a member? {" "}
      <span className="login__register" onClick={register}>
        Register Now
      </span>
    </p>
    </div>
  )
}

export default Login