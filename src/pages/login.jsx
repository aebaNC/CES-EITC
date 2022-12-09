import React, {useState} from 'react';
import PropTypes from 'prop-types';

import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
}
from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

async function loginUser(credentials) {
  return fetch('http://localhost:8080/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
 }

export default function Login({setToken}) {
  const [username, setUserName] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
      username,
      password
    });
    console.log("Username " + username);
    console.log("Password " + password);
    console.log("Token " + token);

    setToken(token);
  }
  return (
    <>
      <div>
      <form onSubmit={handleSubmit}>
        <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

        <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email' onChange={e => setUserName(e.target.value)}/>
        <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password' onChange={e => setPassword(e.target.value)}/>

        <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a data-modal-toggle="defaultModal">Forgot password?</a>
      </div>
        <MDBBtn className="mb-4" href="Home" onClick={handleSubmit}>Sign in</MDBBtn>
      <div className="text-center">
        <p>Not a member? <a href="#!">Contact Admin to Create Account</a></p>
      </div>
      </MDBContainer>
      </form>
      </div>
    </>

    
  );
}
Login.prototype = {
  setToken: PropTypes.func.isRequired
}


{
/*
  export default App;
*/
}