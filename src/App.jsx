import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  //All the variables declared using use state For Login and signup
  const [isLogin, setLogin] = useState(false);
  const [info, setInfo] = useState([]);
  const [firstname, setfirstName] = useState('');
  const [lastname, setlastName] = useState('');
  const [email, setmail] = useState('');
  const [password, setpass] = useState('');
  const [confirmPassword, setConfirmation] = useState('');
  
  const [loginMail, getMail] = useState('');
  const [loginPass, getPass] = useState('');

  //function created to signup and add user in Background for Login
  function onSubmit() {

    //created new object of Signup Details and adding it for Login Credential
    const newsignUp = {
      Firstname: firstname,
      LastName: lastname,
      Mail: email,
      Pass: password,
      CPass: confirmPassword
    };
  
    //Check Condition if Username Does'nt Exist and Password is same as Confirm Password Field 
    if (newsignUp.Pass === newsignUp.CPass && !info.some(user => user.Firstname === newsignUp.Firstname)) {
      setInfo([...info, newsignUp]);
      
      alert("SignUp Successfully");
    } else {
      alert("Signup Details Are Invalid || Username Already Exist");
    }
  };

  //Fucntion For LogIn with checking condition that email and password is correct
  function onLogin() {
    if (email === loginMail && password === loginPass) {
      alert("Login Successfull");
    }
    else {
      alert("Invalid Login Credentials");
    }
  };
  
//Now the Html Starts to Display Either Login Page Or Sign Up as per Requirement
  return (
    <>
      {isLogin? <h1>Welcome Back</h1>:<h1>Sign Up</h1>}

      {isLogin ? (<div id='login_page'>
        
          <input type="email" placeholder='Enter Email' onChange={(detail) => getMail(detail.target.value)} required/><br />
          <input type="password" placeholder='Enter Password' onChange={(detail) => getPass(detail.target.value)} required/>
        
          <br />
          <button onClick={() => onLogin()}>Login</button>
        
          <p>Don't Have an Account <u onClick={() => setLogin(false)}>SignUp</u></p>
      </div>) :

        (<div className="signup">
        
        <input type="text" placeholder='Enter First Name' onChange={(event) => (setfirstName(event.target.value))} required/>
        <br />
        <input type="text" placeholder='Enter Last Name' onChange={(event) => (setlastName(event.target.value))} required/>
        <br />
        <input type="email" placeholder='Enter Your Email' onChange={(event) => (setmail(event.target.value))} required/>
        <br />
        <input type="password" placeholder='Enter Password' onChange={(event) => (setpass(event.target.value))} required/>
        <br />
        <input type="password" placeholder='Confirm Password' onChange={(event) => (setConfirmation(event.target.value))} required/>
        <br />
        <button onClick={() => onSubmit()}>Submit</button>
        
        <p>Already Have an Account <u onClick={() => setLogin(true)}>Login</u></p>
      </div>)}
      
    </>
  )
}

  export default App;
