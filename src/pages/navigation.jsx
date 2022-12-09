import React from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarLink,
} from 'mdb-react-ui-kit';

export default function App() {
  return (
    <>
      <MDBContainer>
        <MDBNavbar expand='lg' light bgColor='light'>
          <MDBContainer fluid>
            <MDBNavbarBrand href='home'>East India Trading Co.</MDBNavbarBrand>
            <MDBNavbarLink href='login'> Log out</MDBNavbarLink>
          </MDBContainer>
        </MDBNavbar>
      </MDBContainer>
    </>
  );
}