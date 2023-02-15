import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCheckbox,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow
} from 'mdb-react-ui-kit';
import AuthContext from '../../context/AuthContext';

const LoginForm = ({ onSubmit }) => {
  const { loginUser } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const password = e.target.password.value;
    username.length > 0 && loginUser(username, password);
  };

  return (
    <MDBContainer fluid>
      <form onSubmit={onSubmit || handleSubmit}>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard
              className='bg-white my-5 mx-auto'
              style={{ borderRadius: '1rem', maxWidth: '500px' }}
            >
              <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                <h2 className='fw-bold mb-2 text-center'>Iniciar Sesión</h2>
                <p className='text-white-50 mb-3'>
                  ¡Por favor introduzca sus datos de inicio de sesión!
                </p>
                <MDBInput
                  wrapperClass='mb-4 w-100'
                  label='Correo electrónico'
                  htmlFor='email-input'
                  id='email-input'
                  type='email'
                  size='lg'
                />
                <MDBInput
                  wrapperClass='mb-4 w-100'
                  label='Contraseña'
                  htmlFor='password-input'
                  id='password-input'
                  type='password'
                  size='lg'
                />
                <MDBCheckbox
                  name='remember-password'
                  id='remember-password'
                  className='mb-4'
                  label='Recordar contraseña'
                />
                <MDBBtn size='lg'>Iniciar Sesión</MDBBtn>
                <hr className='my-4' />
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </form>
    </MDBContainer>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func
};

export default LoginForm;
