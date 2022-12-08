import React from 'react';
import { MDBBadge,
        MDBBtn,
        MDBTable,
        MDBTableHead, 
        MDBTableBody,     
        MDBNavbar,
        MDBContainer,
        MDBNavbarBrand,
        MDBNavbarLink,
        MDBIcon
        } from 'mdb-react-ui-kit';
import AvTimerIcon from '@mui/icons-material/AvTimer';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import DirectionsBoatIcon from '@mui/icons-material/DirectionsBoat';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function App() {
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
        <tr>
          <td>
            <div className='d-flex align-items-center'>
            <AvTimerIcon
                style={{ width: '40px', height: '40px', paddingRight:'2px', paddingLeft:'2px' }}>
            </AvTimerIcon>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Zanzibar - GuldKysten</p>
          </td>
          <td>
            <MDBContainer className='.ms-4 -me-4'>
            <FlightTakeoffIcon
                style={{ width: '25px', height: '25px', paddingRight:'2px', paddingLeft:'2px' }}>
            </FlightTakeoffIcon>
            <ArrowRightIcon
                style={{ width: '25px', height: '25px', paddingRight:'2px', paddingLeft:'2px' }}>
            </ArrowRightIcon>
            <DirectionsBoatIcon>
            </DirectionsBoatIcon>
            </MDBContainer>
          </td>
          <td>
          <div className='d-flex align-items-center'>
          <CalendarMonthIcon                
            style={{ width: '30px', height: '30px', paddingRight:'2px', paddingLeft:'2px', alignItems: 'center'}}>
          </CalendarMonthIcon>
          <div className='ms-3'>
                <p className='fw-bold mb-1'>8 days</p>
                <p className='text-muted mb-0'>22/12-2022</p>
          </div>
          </div>
          </td>         
         
          <td>
            <AttachMoneyIcon></AttachMoneyIcon>
            <AttachMoneyIcon></AttachMoneyIcon>
            <AttachMoneyIcon></AttachMoneyIcon>
          </td>

          <td>
            <MDBBtn color='link' rounded size='sm'>
            <ArrowForwardIosIcon></ArrowForwardIosIcon>
            </MDBBtn>
          </td>
        </tr>
       

        <tr>
          <td>
            <div className='d-flex align-items-center'>
            <AvTimerIcon
                style={{ width: '40px', height: '40px', paddingRight:'2px', paddingLeft:'2px' }}>
            </AvTimerIcon>
            </div>
          </td>
          <td>
            <p className='fw-normal mb-1'>Zanzibar - GuldKysten</p>
          </td>
          <td>
            <MDBContainer className='.ms-4 -me-4'>
            <FlightTakeoffIcon
                style={{ width: '25px', height: '25px', paddingRight:'2px', paddingLeft:'2px' }}>
            </FlightTakeoffIcon>
            <ArrowRightIcon
                style={{ width: '25px', height: '25px', paddingRight:'2px', paddingLeft:'2px' }}>
            </ArrowRightIcon>
            <DirectionsBoatIcon>
            </DirectionsBoatIcon>
            </MDBContainer>
          </td>
          <td>
          <div className='d-flex align-items-center'>
          <CalendarMonthIcon                
            style={{ width: '30px', height: '30px', paddingRight:'2px', paddingLeft:'2px', alignItems: 'center'}}>
          </CalendarMonthIcon>
          <div className='ms-3'>
                <p className='fw-bold mb-1'>8 days</p>
                <p className='text-muted mb-0'>22/12-2022</p>
          </div>
          </div>
          </td>         
         
          <td>
            <AttachMoneyIcon></AttachMoneyIcon>
            <AttachMoneyIcon></AttachMoneyIcon>
            <AttachMoneyIcon></AttachMoneyIcon>
          </td>

          <td>
            <MDBBtn color='link' rounded size='sm'>
            <ArrowForwardIosIcon></ArrowForwardIosIcon>
            </MDBBtn>
          </td>
        </tr>

      </MDBTableBody>
    </MDBTable>
    </MDBContainer>

    </>
  );
}