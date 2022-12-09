import React, { Component } from 'react';
import {
        MDBBtn,
        MDBTable,
        MDBTableHead, 
        MDBTableBody,     
        MDBNavbar,
        MDBContainer,
        MDBNavbarBrand,
        MDBNavbarLink,
        MDBIcon,
        } from 'mdb-react-ui-kit';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import jsonData from '../utils/mockData.json'
import DiscountIcon from '@mui/icons-material/Discount';
import PaidIcon from '@mui/icons-material/Paid';
export default function App() {

    function createMultiple(item) {
      const list = item.Route
      const IconList = []
      for (let index = 0; index < list.length; index++) {
        const element = list[index];
        if (element.TransportType == "Pickup") {
          IconList.push(<LocationOnIcon key={element.CompanyName.toString()+element.CityName.toString()+item.EstimatedTime.Hours.toString()} style={{ width: '25px', height: '25px', paddingRight:'2px', paddingLeft:'2px' }}></LocationOnIcon>)
        }        
        if (element.TransportType == "Boat") {
          IconList.push(<DirectionsBoatIcon key={element.CompanyName.toString()+element.CityName.toString()+item.EstimatedTime.Hours.toString()} style={{ width: '25px', height: '25px', paddingRight:'2px', paddingLeft:'2px' }}></DirectionsBoatIcon>)
        }
        if (element.TransportType == "Plane") {
          IconList.push(<FlightTakeoffIcon key={element.CompanyName.toString()+element.CityName.toString()+item.EstimatedTime.Hours.toString()} style={{ width: '25px', height: '25px', paddingRight:'2px', paddingLeft:'2px' }}></FlightTakeoffIcon>)
        }
        if (element.TransportType == "Car") {
          IconList.push(<LocalShippingIcon key={element.CompanyName.toString()+element.CityName.toString()+item.EstimatedTime.Hours.toString()} style={{ width: '25px', height: '25px', paddingRight:'2px', paddingLeft:'2px' }}></LocalShippingIcon>)
        }
      }
      return IconList
    }

      
          
      

    function addIcon() {
      return (
        <>
        <DiscountIcon style={{ width: '25px', height: '25px', paddingRight:'2px', paddingLeft:'2px' }}></DiscountIcon>
        </>
        )

    }
    function getList(item){
      const list = item.Route
      const newList = [];
      for (let index = 0; index < list.length; index++) {
        const element = list[index];
        if(!newList.includes(element.TransportType,1)) {
          newList.push(element.TransportType + " - ");
        }
      }
      return newList
    }

    function getNote(item){
      const Note = item.Note;
      if(Note == "cheapest") {
       return <DiscountIcon style={{ width: '25px', height: '25px', paddingRight:'2px', paddingLeft:'2px' }}></DiscountIcon>
      }
      if(Note == "fastest") {
        return <AvTimerIcon style={{ width: '25px', height: '25px', paddingRight:'2px', paddingLeft:'2px' }}></AvTimerIcon>
      }
      if(Note == "best") {
        return <PaidIcon style={{ width: '25px', height: '25px', paddingRight:'2px', paddingLeft:'2px' }}></PaidIcon>
      }
    }



  return (
    <>
    {/**Navigation Bar - Scuffed mode */}
    <MDBNavbar expand='lg' light bgColor='light'>
        <MDBContainer fluid>
            <MDBNavbarBrand href='home'>East India Trading Co.</MDBNavbarBrand>
            <MDBNavbarLink href='login'> Log out</MDBNavbarLink>
        </MDBContainer>
    </MDBNavbar>

    <MDBContainer>

    <MDBTable align='middle'>
      <MDBTableHead>
        <tr>
          <th scope='col'>Note</th>
          <th scope='col'>Route</th>
          <th scope='col'>Type of Transport</th>
          <th scope='col'>Estimated Time</th>
          <th scope='col'>Price</th>
          <th scope='col'>Confirm</th>
        </tr>
      </MDBTableHead>

      <MDBTableBody>
        {
          jsonData.map((item) => (
            <tr key={item.Price.toString()}>
          <td>
            <div className='d-flex align-items-center'>
            {(getNote(item))}
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>{item.Route[0].CityName} - {item.Route[2].CityName}</p>
          </td>
          <td>
            <MDBContainer className='.ms-4 -me-4'>
            {/*(getList(item))*/}
            {createMultiple(item)}
            </MDBContainer>
          </td>
          <td>
          <div className='d-flex align-items-center'>
          <CalendarMonthIcon                
            style={{ width: '30px', height: '30px', paddingRight:'2px', paddingLeft:'2px', alignItems: 'center'}}>
          </CalendarMonthIcon>
          <div className='ms-3'>
                <p className='fw-bold mb-1'>{item.EstimatedTime.Hours} Hours</p>
                <p className='text-muted mb-0'>{item.EstimatedTime.startDate}</p>
          </div>
          </div>
          </td>         
         
          <td>
          <p className='fw-bold mb-1'>${item.Price}</p>
          </td>

          <td>
            <MDBBtn color='link' rounded size='sm'>
            <ArrowForwardIosIcon></ArrowForwardIosIcon>
            </MDBBtn>
          </td>
        </tr> 
            ))
        }
      </MDBTableBody>
    </MDBTable>
    </MDBContainer>

    </>
  );
};
