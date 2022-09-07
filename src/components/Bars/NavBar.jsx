/*
 * Manuel Pizano
 * Copyright (c) 2022.
 */

import {useContext, useState} from "react";
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


const NavBar = () => {
    const {user, logoutUser} = useContext(AuthContext);
    const [showNav, setShowNav] = useState(false);
    return (
        <nav>
            <div>
                <div>
                    {user ? (
                        <>
                            <MDBNavbar expand='lg' light bgColor='light'>
                                <MDBContainer breakpoint="lg">
                                    <MDBNavbarBrand href='/'>API Manager</MDBNavbarBrand>
                                    <MDBNavbarToggler
                                        type='button'
                                        aria-expanded='false'
                                        aria-label='Toggle navigation'
                                        onClick={() => setShowNav(!showNav)}
                                    >
                                        <MDBIcon icon='bars' fas/>
                                    </MDBNavbarToggler>
                                    <MDBCollapse navbar show={showNav}>
                                        <MDBNavbarNav>
                                            <MDBNavbarItem>
                                                <MDBNavbarLink active aria-current='page' href='/'>
                                                    Home
                                                </MDBNavbarLink>
                                            </MDBNavbarItem>
                                            <MDBNavbarItem>
                                                <MDBNavbarLink href='dashboard'>Dashboard</MDBNavbarLink>
                                            </MDBNavbarItem>
                                            <MDBNavbarItem>
                                                <MDBBtn onClick={logoutUser}>Log out</MDBBtn>
                                            </MDBNavbarItem>
                                        </MDBNavbarNav>
                                    </MDBCollapse>
                                </MDBContainer>
                            </MDBNavbar>
                        </>
                    ) : (
                        <>
                            <NoAuthBar/>
                        </>
                    )}
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
