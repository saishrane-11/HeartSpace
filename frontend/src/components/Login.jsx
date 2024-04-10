import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBInput,
  MDBIcon,
  MDBCheckbox
}

  from 'mdb-react-ui-kit';
  import { useState } from 'react';
import { useNavigate } from 'react-router-dom'

import { Link } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('/api/users/login', { email, password }).then(
      result => {
        console.log(result);
      
          navigate('/afterLogin')
        

      }
    ).catch(err => (console.log("this is ")))
  }
  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{ borderRadius: '25px' }}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <h2 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{ fontWeight: "bodler" }}>Login</h2 >


              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg' />
                <MDBInput onChange={(e) => { setEmail(e.target.value) }} label='Your Email' id='form2' type='email' />
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg' />
                <MDBInput onChange={(e) => { setPassword(e.target.value) }} label='Password' id='form3' type='password' />
              </div>




              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                <Link to="/signup">
                  <MDBBtn className='mb-4' style={{ marginRight: "20px" }} size='lg' >Register</MDBBtn>
                </Link>



                <MDBBtn onClick={handleSubmit} style={{ backgroundColor: "red" }} className='mb-4' size='lg'>Login</MDBBtn>




              </div>



            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid />
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Login;     