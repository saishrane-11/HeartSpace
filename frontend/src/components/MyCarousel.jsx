import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

function MyCarousel() {
    return (
        <div className="mb-10" style={{ width: "100%", overflow: "hidden", backgroundColor: "skin", height: "auto" }}>
            <Container style={{ maxWidth: "100%", padding: "0px" }}>
                <Carousel fade>
                    <Carousel.Item interval={3000}>
                        <img
                            className="d-block w-100"
                            src=
                            "https://media.istockphoto.com/id/1181180127/photo/heart-health.jpg?s=612x612&w=0&k=20&c=X81JsSE_VzEyAneS_axQK1HP6T_Lw9klYaDHmViMAQ4="
                            alt="JAVA"
                            style={{ height: "540px", width: "100%" }}
                        />

                        <Carousel.Caption>
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Link to="/signup">
                            <Button className='myCarousel-joinUs-btn' variant="primary">Join Us</Button>{' '}
                            </Link>
                            
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            style={{ height: "540px", width: "100%" }}
                            className="d-block w-100"
                            src=
                            "https://omnihospitals.in/wp-content/uploads/2022/02/Heart-Problems-Diagnosis-Treatment-Blog-2-01-e1644394368357.png"
                            alt="HTML"
                        />
                        <Carousel.Caption>
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Link to="/signup">
                            <Button className='myCarousel-joinUs-btn' variant="primary">Join Us</Button>{' '}
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            style={{ height: "540px", width: "100%" }}
                            className="d-block w-100"
                            src=
                            "https://www.echelon.health/wp-content/uploads/2022/10/shutterstock_564859810-1-1024x494.jpg"
                            alt="Angular"
                        />
                        <Carousel.Caption>
                            <h5>Second slide label</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <Link to="/signup">
                            <Button className='myCarousel-joinUs-btn' variant="primary">Join Us</Button>{' '}
                            </Link>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </Container>
        </div>
        // <div style={{ display: "block", width: 700, padding: 30 }}>
        //     <h2 style={{ color: "green" }}>GeeksforGeeks</h2>
        //     <h2>React-Bootstrap Carousel Crossfade</h2>

        // </div>


    )
}
export default MyCarousel;