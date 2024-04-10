import { Container, Row, Col } from 'react-bootstrap';
import IMAGES from '../image/Images';

function Infographic() {
    return (
        <Container className="mt-20">
            <Row>
                <Col sm={6}>
                    <div className="bg-gray-200 py-8 px-4  md:px-0">
                        <div className="max-w-2xl mx-auto">
                            <div className="text-center">
                                <h2 className="text-3xl font-bold text-gray-800 mb-4">What is Art Therapy?</h2>
                            </div>
                            <p className="text-lg text-gray-700 leading-relaxed">
                                Art therapy is a form of psychotherapy that utilizes the creative process of making art
                                to improve and enhance the physical, mental, and emotional well-being of individuals.
                                Through various artistic techniques and mediums, individuals can express and explore
                                their thoughts, feelings, and experiences in a safe and supportive environment.
                            </p>
                        </div>
                        <br />
                        <img style={{width:"100%",height:"100%"}}  src={IMAGES.infograhphic1} alt="Right Content" className="img-fluid" />
                    </div>
                </Col>
                <Col sm={6}>
                    <div className="right-content" style={{height:"100%"}}>
                        <img style={{height:"100%"}}  src={IMAGES.infograhphic2} alt="Right Content" className="img-fluid" />
                    </div>
                </Col>
            </Row>
        </Container>
    )
}
export default Infographic;