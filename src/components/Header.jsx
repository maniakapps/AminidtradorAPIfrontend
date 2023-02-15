import React from 'react';
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from 'mdb-react-ui-kit';
import NavBar from './Bars/NavBar';

export default function Header() {
  return (
    <MDBNavbar expand='xl' light bgColor='light'>
      <MDBContainer fluid className="d-flex justify-content-center fixed">
        <MDBNavbarBrand href='#'>
          <img
            src='https://mdbootstrap.com/img/logo/mdb-transaprent-noshadows.webp'
            height='30'
            alt=''
            loading='lazy'
          />
          ManiakApps
        </MDBNavbarBrand>
      </MDBContainer>
      <NavBar />
    </MDBNavbar>
  );
}
