import React, { useState } from "react";
import { MDBCollapse, MDBContainer, MDBNavbar, MDBNavbarBrand, MDBNavbarItem, MDBNavbarLink, MDBNavbarNav, MDBNavbarToggler } from "mdb-react-ui-kit";
import { MDBIcon } from "mdbreact";

const NoAuthBar = ({ brandName }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <MDBNavbar expand="lg" light bgColor="light">
      <MDBContainer fluid>
        <MDBNavbarBrand href="/">{brandName}</MDBNavbarBrand>
        <MDBNavbarToggler
          type="button"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setIsNavOpen(!isNavOpen)}
        >
          <MDBIcon icon="bars" fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar show={isNavOpen}>
          <MDBNavbarNav>
            <MDBNavbarItem>
              <MDBNavbarLink active aria-current="page" href="login">
                Iniciar sesión
              </MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href="register">Registrarse</MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
};

export default NoAuthBar;
