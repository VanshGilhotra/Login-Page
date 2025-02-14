import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [isLogin, setLogin] = useState(false);
  const [info, setInfo] = useState([]);
  const [firstname, setfirstName] = useState('');
  const [lastname, setlastName] = useState('');
  const [email, setmail] = useState('');
  const [password, setpass] = useState('');
  const [confirmPassword, setConfirmation] = useState('');
  
  const [loginMail, getMail] = useState('');
  const [loginPass, getPass] = useState('');

  function onSubmit() {

    const newsignUp = {
      Firstname: firstname,
      LastName: lastname,
      Mail: email,
      Pass: password,
      CPass: confirmPassword
    };
    
    if (newsignUp.Pass === newsignUp.CPass) {
      setInfo([...info, newsignUp]);
      alert("SignUp Successfully");
    } else {
      alert("Login Details Are Invalid");
    }
  };

  function onLogin() {
    if (email === loginMail && password === loginPass) {
      alert("Login Successfull");
    }
    else {
      alert("Invalid Login Credentials");
    }
  }
  
  const HandleConfirmation = (event) => {
    if (event.target.value == true) {
      setLogin(false);
    }
    else {
      setLogin(true);
    }
    console.log(event.target.value);
}


  return (
    <>
      {isLogin? <h1>Welcome Back</h1>:<h1>Sign Up</h1>}

      {isLogin ? (<div id='login_page'>
          <input type="email" placeholder='Enter Email' onChange={(detail) => getMail(detail.target.value)}/><br />
          <input type="password" placeholder='Enter Password' onChange={(detail) => getPass(detail.target.value)}/>

          <button onClick={() => onLogin()}>Login</button>
          <p>Don't Have an Account <u onClick={() => setLogin(false)}>SignUp</u></p>
      </div>) :
        (<div className="signup">
        <input type="text" placeholder='Enter First Name' onChange={(event) => (setfirstName(event.target.value))} />
        <br />
        <input type="text" placeholder='Enter Last Name' onChange={(event) => (setlastName(event.target.value))} />
        <br />
        <input type="email" placeholder='Enter Your Email' onChange={(event) => (setmail(event.target.value))} />
        <br />
        <input type="password" placeholder='Enter Password' onChange={(event) => (setpass(event.target.value))} />
        <br />
        <input type="password" placeholder='Confirm Password' onChange={(event) => (setConfirmation(event.target.value))} />
        
        <button onClick={() => onSubmit()}>Submit</button>
        <p>Already Have an Account <u onClick={() => setLogin(true)}>Login</u></p>
      </div>)}
      
    </>
  )
}

  export default App;
