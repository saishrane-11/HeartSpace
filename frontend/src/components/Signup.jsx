import React, { useState } from 'react';
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
import {useNavigate} from 'react-router-dom'
import { Link } from 'react-router-dom';
import axios from 'axios';

function Signup() {
  const [name,setName]= useState();
  const [email,setEmail]=useState();
  const [password,setPassword]=useState();
  const navigate = useNavigate();

  const handleSubmit=(e)=>{
    e.preventDefault();
    axios.post('/api/users/register',{name,email,password}).then(
      result =>{
        console.log(result);
        navigate('/login')
      }
    ).catch(err=>(console.log(err)))
  }
  return (
    <MDBContainer fluid>

      <MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
        <MDBCardBody>
          <MDBRow>
            <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

              <h2 className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{fontWeight:"bodler"}}>Sign up</h2 >
            

              <div className="d-flex flex-row align-items-center mb-4 ">
                <MDBIcon fas icon="user me-3" size='lg'/>
                <MDBInput label='Your Name' onChange={(e)=>setName(e.target.value)} id='form1' type='text' className='w-100'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="envelope me-3" size='lg'/>
                <MDBInput onChange={(e)=>setEmail(e.target.value)}  label='Your Email' id='form2' type='email'/>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="lock me-3" size='lg'/>
                <MDBInput onChange={(e)=>setPassword(e.target.value)}  label='Password' id='form3' type='password'/>
              </div>

              {/* <div className="d-flex flex-row align-items-center mb-4">
                <MDBIcon fas icon="key me-3" size='lg'/>
                <MDBInput label='Repeat your password' id='form4' type='password'/>
              </div> */}

          
              <div style={{display:"flex",alignItems:"center",justifyContent:"space-around"}}> 

              <MDBBtn onClick={handleSubmit} className='mb-4' style={{marginRight:"20px"}} size='lg' >Submit</MDBBtn>

              <Link to="/login">
              <MDBBtn style={{backgroundColor:"red"}} className='mb-4' size='lg'>Login</MDBBtn>


              </Link>

              </div>

             

            </MDBCol>

            <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
              <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
            </MDBCol>

          </MDBRow>
        </MDBCardBody>
      </MDBCard>

    </MDBContainer>
  );
}

export default Signup;     