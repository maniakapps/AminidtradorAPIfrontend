/*
 * Manuel Pizano
 * Copyright (c) 2022.
 */
import React from 'react';
import {Container, Image} from "react-bootstrap";

export default function Empresa() {
    return (
        <Container fluid>
            <Image fluid
                   rounded
                   src="https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                   className='img-fluid shadow-4 w-50  mx-auto d-block '
                   alt='...'/>
        </Container>
    );
}
