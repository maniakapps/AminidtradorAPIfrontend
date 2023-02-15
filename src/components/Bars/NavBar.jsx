import React, { useContext, useState } from "react";
import PropTypes from "prop-types";
import AuthContext from "../../context/AuthContext";
import {
  MDBBtn,
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarNav,
  MDBNavbarToggler
} from "mdb-react-ui-kit";
import NoAuthBar from "./NoAuthBar";

const NavBar = ({ title }) => {
  const { user, logoutUser } = useContext(AuthContext);
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav>
      {user ? (
        <MDBNavbar expand="lg" light bgColor="light">
          <MDBContainer breakpoint="lg">
            <MDBNavbarBrand href="/">{title}</MDBNavbarBrand>
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
                  <MDBNavbarLink active aria-current="page" href="/">
                    Home
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href="dashboard">Dashboard</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBBtn onClick={logoutUser}>Log out</MDBBtn>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>
      ) : (
        <NoAuthBar />
      )}
    </nav>
  );
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired
};

export { NavBar };
