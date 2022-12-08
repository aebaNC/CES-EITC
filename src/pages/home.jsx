import React from 'react';
import {
  MDBInput,
  MDBRow,
  MDBCol,
  MDBCheckbox,
  MDBSwitch,
  MDBBtn,
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarLink,
  MDBNavbarItem,
} from 'mdb-react-ui-kit';
export default function HeroImage() {
  return (
    <>
    {/**Navigation Bar - Scuffed mode */}
    <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
            <MDBNavbarBrand href='home'>East India Trading Co.</MDBNavbarBrand>
            <MDBNavbarLink href='admin'> Admin Panel</MDBNavbarLink>
            <MDBNavbarLink href='login'> Log out</MDBNavbarLink>
            </MDBContainer>
    </MDBNavbar>
    
    <header style={{ paddingLeft: 0 }}>
      <div
        className='p-5 text-center bg-image'
        style={{ backgroundImage: "url(./hero.jpg)", height: 400 }}
      >
        <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
          <div className='d-flex justify-content-center align-items-center h-100'>
            <div className='text-white'>
              <h1 className='mb-3'>Find the cheapest and fastest delivery route </h1>
                    
                <MDBRow tag='form' className='gy-2 gx-3 align-items-center'>
                    <MDBCol size='auto'>
                        <MDBInput id='form13Example1' label='Pick-up Point' />
                    </MDBCol>
                    <MDBCol size='auto'>
                        <MDBInput id='form13Example1' label='Destination' />
                    </MDBCol>
                    <MDBCol size='auto'>
                        <MDBInput id='form13Example1' label='Weight' />
                    </MDBCol>
                    <MDBCol size='auto'>
                        <MDBInput id='form13Example1' label='Dimensions' />
                    </MDBCol>
                    <MDBCol size='auto'>
                        <MDBInput id='form13Example1' label='Type' />
                    </MDBCol>
                    <MDBCol size='auto'>
                        <MDBInput id='form13Example1' label='Date' />
                    </MDBCol>
                    <MDBCol size='auto'>
                        <MDBSwitch id='form13Example4' label='VIP' defaultChecked />
                    </MDBCol>
                    <MDBCol size='auto'>
                        <MDBBtn href='orders'type='submit'>Search</MDBBtn>
                    </MDBCol>
                </MDBRow>

            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}