/*
 * Manuel Pizano
 * Copyright (c) 2022.
 */

import React, {useContext} from 'react';
import {MDBBtn, MDBCard, MDBCardBody, MDBCheckbox, MDBCol, MDBContainer, MDBInput, MDBRow} from 'mdb-react-ui-kit';
import AuthContext from "../../context/AuthContext";


function LoginPage() {
    const {loginUser} = useContext(AuthContext);
    const handleSubmit = e => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        username.length > 0 && loginUser(username, password);
    };
    return (
        <MDBContainer fluid>
            <form onSubmit={handleSubmit}>
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol col='12'>

                        <MDBCard className='bg-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '500px'}}>
                            <MDBCardBody className='p-5 w-100 d-flex flex-column'>

                                <h2 className="fw-bold mb-2 text-center">Iniciar Sesión</h2>
                                <p className="text-white-50 mb-3">!Por favor introduzca sus datos de inicio de
                                    sesión!</p>

                                <MDBInput wrapperClass='mb-4 w-100' label='Correo electrónico' id='formControlLg'
                                          type='email' size="lg"/>
                                <MDBInput wrapperClass='mb-4 w-100' label='Contraseña' id='formControlLg'
                                          type='password'
                                          size="lg"/>

                                <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4'
                                             label='Recordar contraseña'/>

                                <MDBBtn size='lg'>
                                    Iniciar Sesión
                                </MDBBtn>

                                <hr className="my-4"/>

                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>
            </form>
        </MDBContainer>
    );
}

export default LoginPage;
