import React from 'react';
import { Container, Row, Col, Card, Carousel } from 'react-bootstrap';
import IMAGES from '../image/Images';

const Feature = () => {
    return (
        <section className="featured-section mt-10 py-5 ">
            <Container>
                <h2 className="text-center mb-4">Artist's of the Month</h2>



                <Carousel style={{ backcoldisplay: "flex", alignItems: "center", justifyContent: "center" }} interval={null} className="h-100">
                    <Carousel.Item>
                        <Row style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                            <Col md={6} lg={8} style={{ backgroundColor: "gainsboro", display: "flex", alignItems: "center", justifyContent: "center" }} className="w-50 p-4">
                                <img
                                    
                                    className="d-block w-100 h-100 imgSize"
                                    src="https://media.istockphoto.com/id/940475680/photo/close-up-portrait-of-cheerful-brunet-young-man-in-jeans-shirt-crossing-hands-and-look-at.jpg?s=612x612&w=0&k=20&c=FFduZf0U7qxwIfkrzAPHXgxK2LoZf86i74rFtex6cLw="
                                    alt="John Doe 1"
                                />
                            </Col>
                            <Col md={6} lg={4} style={{ display: "flex", alignItems: "center", justifyContent: "center" }} className="">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>John Doe</Card.Title>
                                        <Card.Text>
                                            John Doe is an amazing artist known for his vibrant paintings and unique style.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a libero nec libero
                                            blandit sollicitudin eu vel elit.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>

                    </Carousel.Item>

                    <Carousel.Item>
                        <Row style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                            <Col md={6} lg={8} style={{ backgroundColor: "gainsboro", display: "flex", alignItems: "center", justifyContent: "center" }} className="w-50 p-4">
                                <img
                                    className="d-block w-100 h-100 imgSize"
                                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxyk1KvtTPYUGJRkzCIdyFElXwrJjNVmyRwQ70SwCPUWjVACXFWi06DzmETU38mByOpqQ&usqp=CAU"
                                    alt="John Doe 1"
                                />
                            </Col>
                            <Col md={6} lg={4} style={{ display: "flex", alignItems: "center", justifyContent: "center" }} className="">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>John Doe</Card.Title>
                                        <Card.Text>
                                            John Doe is an amazing artist known for his vibrant paintings and unique style.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a libero nec libero
                                            blandit sollicitudin eu vel elit.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>

                    </Carousel.Item>

                    <Carousel.Item>
                        <Row style={{ display: "flex", alignItems: "center", justifyContent: "space-around" }}>
                            <Col md={6} lg={8} style={{ backgroundColor: "gainsboro", display: "flex", alignItems: "center", justifyContent: "center" }} className="w-50 p-4">
                                <img
                                    className="d-block w-100 h-100 imgSize"
                                    src="https://media.istockphoto.com/id/1542566108/photo/young-businessman-smiling-at-camera.jpg?s=612x612&w=0&k=20&c=cDoT9LelcDARm3sxck6UWICgsWjOXtUgXg2Bwdq7XNU="
                                    alt="John Doe 1"
                                />
                            </Col>
                            <Col md={6} lg={4} style={{ display: "flex", alignItems: "center", justifyContent: "center" }} className="">
                                <Card>
                                    <Card.Body>
                                        <Card.Title>John Doe</Card.Title>
                                        <Card.Text>
                                            John Doe is an amazing artist known for his vibrant paintings and unique style.
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a libero nec libero
                                            blandit sollicitudin eu vel elit.
                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>

                        </Row>

                    </Carousel.Item>




                </Carousel>

                {/* Repeat the above structure for other artists */}

            </Container>
        </section >
    );
};

export default Feature;
