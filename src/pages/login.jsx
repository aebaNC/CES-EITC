import React from 'react';
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
}
from 'mdb-react-ui-kit';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <MDBContainer className="p-3 my-5 d-flex flex-column w-50">

      <MDBInput wrapperClass='mb-4' label='Email address' id='form1' type='email'/>
      <MDBInput wrapperClass='mb-4' label='Password' id='form2' type='password'/>

      <div className="d-flex justify-content-between mx-3 mb-4">
        <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Remember me' />
        <a data-modal-toggle="defaultModal">Forgot password?</a>
        
      </div>

      <MDBBtn className="mb-4" href="Home">Sign in</MDBBtn>

      <div className="text-center">
        <p>Not a member? <a href="#!">Contact Admin to Create Account</a></p>

      </div>

    </MDBContainer>
  );
}

export default App;