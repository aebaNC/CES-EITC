import React, { useState} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {
  MDBInput,
  MDBRow,
  MDBCol,
  MDBSwitch,
  MDBBtn,
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarLink,
  MDBInputGroup,
  MDBIcon
} from 'mdb-react-ui-kit';
export default function HeroImage() {

  const [pick, setPickup] = useState('');
  const [dest, setDest] = useState('');
  const [weight, setWeight] = useState('');
  const [dimension, setDimension] = useState('');
  const [type, setType] = useState('');
  const [date, setDate] = useState('');
  const [vip, setVIP] = useState('');
  const submitArray = [];


  function handleDimensionMapping(dimension){
    const stringSplit = dimension;
    var [l, w, h] = stringSplit.split('x');
    var array = []
    array.push(l)
    array.push(w)
    array.push(h)
    return array
  }

  const handleSubmit = async (event) => {
  event.preventDefault();

    setPickup(submitArray.push(pick));
    setDest(submitArray.push(dest));
    setWeight(submitArray.push(weight));
    setDimension(submitArray.push(handleDimensionMapping(dimension)));
    setType(submitArray.push(type));
    setDate(submitArray.push(date));
    setVIP(submitArray.push(vip));

    const response = await fetch('HTTP://API.SHOUTCLOUD.IO/V1/SHOUT', {
      method: 'POST',
      body: submitArray,
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const myJson = await response.json(); //extract JSON from the http response
    console.log(myJson);
    // do something with myJson
    
  };


    

  return (
    <>
    {/**Navigation Bar - Scuffed mode */}
    <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
            <MDBNavbarBrand href='home'>East India Trading Co.</MDBNavbarBrand>
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
              <MDBContainer size='auto' className=''>
                <MDBRow tag='form' className='row gy-3 gx-2 align-items-center'>
                    <MDBCol size='auto'>
                        <MDBInput id='pick' onChange={event => setPickup(event.target.value)} label='PickupPoint' />
                    </MDBCol>
                    <MDBCol size='auto'>
                        <MDBInput id='dest' onChange={event => setDest(event.target.value)} label='Destination' />
                    </MDBCol>
                    <MDBCol size='auto'>
                        <MDBInput id='weight' onChange={event => setWeight(event.target.value)} label='Weight' />
                    </MDBCol>
                    <MDBCol size='auto'>
                        <MDBInput id='dimensions' onChange={event => setDimension(event.target.value)} label='Dimensions' />
                    </MDBCol>
                    <MDBCol id='typ1'size='auto'>
                      <MDBContainer>
                        <select onChange={event => setType(event.target.value)} >
                        <option value="Standard_Delivery">Standard Delivery</option>
                        <option value="Recorded_Delivery">Recorded Delivery</option>
                        <option value="Weapons">Weapons</option>
                        <option value="Live_Animals">Live Animals</option>
                        <option value="Cautious_Parcels">Cautious Parcels</option>
                        <option value="Refrigerated_Goods">Refrigerated Goods</option>
                        </select>                    
                      </MDBContainer>
                    </MDBCol>
                    <MDBCol size='auto'>
                        <MDBInput id='form13Example1' onChange={event => setDate(event.target.value)} label='Date' />
                    </MDBCol>
                    <MDBCol size='auto'>
                        <MDBSwitch id='form13Example4' onChange={event => setVIP(event.target.value)} label='VIP' defaultChecked />
                    </MDBCol>
                    <MDBCol size='auto'>
                        <MDBBtn href='orders' type='submit' onClick={handleSubmit}>Search</MDBBtn>
                    </MDBCol>
                </MDBRow>
                </MDBContainer>
            </div>
          </div>
        </div>
      </div>
    </header>
    </>
  );
}