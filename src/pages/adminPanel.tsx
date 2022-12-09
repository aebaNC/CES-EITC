import React, { useState } from 'react';
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane,    
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBNavbarLink,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBTypography,
  MDBListGroup, MDBListGroupItem
} from 'mdb-react-ui-kit';

import ClearIcon from '@mui/icons-material/Clear';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import * as faker from 'faker';

import PersonIcon from '@mui/icons-material/Person';
import Person2Icon from '@mui/icons-material/Person2';
import Person3Icon from '@mui/icons-material/Person3';
import Person4Icon from '@mui/icons-material/Person4';
import AddIcon from '@mui/icons-material/Add';


ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'East India Trading Co. - Daily Overview',
    },
  },
};

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];


export const data = {
  labels,
  datasets: [
    {
      label: 'Daily Income',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Number of Orders',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

export default function App() {
  const [fillActive, setFillActive] = useState('tab1');

  const handleFillClick = (value: string) => {
    if (value === fillActive) {
      return;
    }

    setFillActive(value);
  };

  return (
    <>    {/**Navigation Bar - Scuffed mode */}
      <MDBNavbar expand='lg' light bgColor='light'>
          <MDBContainer fluid>
              <MDBNavbarBrand href='home'>East India Trading Co.</MDBNavbarBrand>
              <MDBNavbarLink href='login'> Log out</MDBNavbarLink>
            </MDBContainer>
      </MDBNavbar>
      
      <MDBRow>
      <MDBCol md='4'>
      <MDBContainer>
      <MDBListGroup style={{ minWidth: '22rem' }} light>
      <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
          <Person2Icon style={{ width: '45px', height: '45px' }}></Person2Icon>
          <div className='ms-3'>
            <p className='fw-bold mb-1'>John Doe</p>
            <p className='text-muted mb-0'>john.doe@gmail.com</p>
          </div>
        </div>
        <MDBBtn size='sm' rounded color='link'>
        <ClearIcon style={{color: "red"}}></ClearIcon>
        </MDBBtn>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
        <Person3Icon style={{ width: '45px', height: '45px' }}></Person3Icon>
          <div className='ms-3'>
            <p className='fw-bold mb-1'>Alex Ray</p>
            <p className='text-muted mb-0'>alex.ray@gmail.com</p>
          </div>
        </div>
        <MDBBtn size='sm' rounded color='link'>
          <ClearIcon style={{color: "red"}}></ClearIcon>
        </MDBBtn>
      </MDBListGroupItem>
      <MDBListGroupItem className='d-flex justify-content-between align-items-center'>
        <div className='d-flex align-items-center'>
        <Person4Icon style={{ width: '45px', height: '45px' }}></Person4Icon>
          <div className='ms-3'>
            <p className='fw-bold mb-1'>Kate Hunington</p>
            <p className='text-muted mb-0'>kate.hunington@gmail.com</p>
          </div>
        </div>
        <MDBBtn size='sm' rounded color='link'>
        <ClearIcon style={{color: "red"}}></ClearIcon>
        </MDBBtn>
      </MDBListGroupItem>
      <MDBContainer className='' id='Test'>
        <MDBBtn className='bg-secondary d-flex justify-content-between align-items-center mt-40' size='sm' rounded color='link'>
          Add Employee
          <AddIcon></AddIcon>
        </MDBBtn> 
      </MDBContainer>
 
    </MDBListGroup>

      </MDBContainer>
      
      </MDBCol>
      <MDBCol md='8'>

      <MDBTabs fill className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab1')} active={fillActive === 'tab1'}>
            Daily Overview
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab2')} active={fillActive === 'tab2'}>
          Weekly Overview
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleFillClick('tab3')} active={fillActive === 'tab3'}>
          Monthly Overview
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>


      <MDBContainer>
      <MDBTabsContent>
        <MDBTabsPane show={fillActive === 'tab1'} className='d-flex'>
            <Bar options={options} data={data}></Bar>
        </MDBTabsPane>
        <MDBTabsPane show={fillActive === 'tab2'}>Tab 2 content</MDBTabsPane>
        <MDBTabsPane show={fillActive === 'tab3'}>Tab 3 content</MDBTabsPane>
      </MDBTabsContent>
      </MDBContainer>
      <MDBContainer >
      <br></br>
      <MDBTypography className='' variant='h3'>Total Income : 302,234 $</MDBTypography>
        <MDBBtn className='bg-secondary' size='sm' rounded color='link'>
          Export CSV
        </MDBBtn>      
        <MDBBtn className='bg-secondary' size='sm' rounded color='link'>
          Generate yearly rapport
        </MDBBtn>
      </MDBContainer>
      </MDBCol>
    </MDBRow>
    </>
  );
}