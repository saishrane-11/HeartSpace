
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Carous from './Carous'
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import { Container, Form } from 'react-bootstrap';

function Hero() {
    return (
        <div className='hero'>
            <div className='hero-crousel'>
                <Carous />
            </div>
            <div className='' style={{backgroundColor:"#a1b5a1d6", padding: "4px" ,width:"40%",color:"white",borderRadius:"10px"}}>
                {/* <button>Join Us</button> */}
               

                <Container>
                    <h1 className="text-center" style={{fontWeight:"bold",fontSize:"2rem"}}>Contact Form</h1>
                    <Form >
                        <Form.Group controlId="formName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter your name"
                                name="name"


                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control
                                type="email"
                                placeholder="Enter email"
                                name="email"

                                required
                            />
                        </Form.Group>
                        <Form.Group controlId="formMessage">
                            <Form.Label>Message</Form.Label>
                            <Form.Control
                                as="textarea"
                                rows={3}
                                placeholder="Enter your message"
                                name="message"

                                required
                            />
                        </Form.Group>
                        <br />
                        <div className="flex justify-center mb-2">
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </div>
                    

                    </Form>
                </Container>
            </div>
        </div>


    )
}


export default Hero;