/*
 * Manuel Pizano
 * Copyright (c) 2022.
 */

import React from 'react';
import {MDBContainer, MDBNavbar, MDBNavbarBrand} from 'mdb-react-ui-kit';
import NavBar from "./Bars/NavBar";

export default function Header() {
    return (
        <>
            <MDBNavbar expand='xll' light bgColor='light'>
                <MDBContainer fluid className="w-100 p-3 d-flex justify-content-center fixed">
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
                <NavBar/>
            </MDBNavbar>
        </>
    );
}
