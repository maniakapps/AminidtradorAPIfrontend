/*
 * Manuel Pizano
 * Copyright (c) 2022.
 */

import {useContext} from "react";
import AuthContext from "../context/AuthContext";
import {MDBBtn, MDBCheckbox, MDBCol, MDBInput, MDBRow} from "mdb-react-ui-kit";
import {Link} from "react-router-dom";

const LoginPage = () => {
    const {loginUser} = useContext(AuthContext);
    const handleSubmit = e => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        username.length > 0 && loginUser(username, password);
    };

    return (
        <section className="w-100 p-3 d-flex justify-content-center">
            <form onSubmit={handleSubmit}>
                <MDBInput className='mb-4' type='text' id='username' label='Usuario'/>
                <MDBInput className='mb-4' type='password' id='password' label='Contraseña'/>

                <MDBRow className="mb-4">
                      <MDBCol className="d-flex justify-content-center">
                        <MDBCheckbox id="form1Example3" label="Recordarme" defaultChecked />
                      </MDBCol>
                      <MDBCol>
                        <Link to="/forgot-password">¿Olvidó su contraseña?</Link>
                      </MDBCol>
                    </MDBRow>

                <MDBBtn type='submit' block>
                    Iniciar sesión
                </MDBBtn>
            </form>
        </section>
    );
};

export default LoginPage;
