import IMAGES from '../../image/Images'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Dropdown from 'react-bootstrap/Dropdown';

import { Outlet, Link } from "react-router-dom";

function AfterLoginMyHeader() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary fixed z-10  w-100 " style={{ height: '80px' }}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={IMAGES.heARTspace_Logo} height={60} width={100} alt="" srcSet="" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='p-2' style={{ backgroundColor: "#F8F9FA" }}>
                    <Nav className="me-auto">
                        {/* //Here is the code */}
                        <Nav.Link as={Link} style={{ width: "100px" }} to="/afterLogin">
                            <img src={IMAGES.home_icon} height={20} width={20} alt="" srcSet="" />
                            <b>Home</b>
                        </Nav.Link>
                        <Nav.Link as={Link} style={{ width: "100px" }} to="/about">
                            <img src={IMAGES.about_us_or_info_sign} height={20} width={20} alt="" srcSet="" />
                            <b>About</b>
                        </Nav.Link>
                        <Nav.Link as={Link} style={{ width: "100px" }} to="/connecting">
                            <img src={IMAGES.connect_communityforum_icon} height={20} width={20} alt="" srcSet="" /><b>Connecting</b>
                        </Nav.Link>
                        <Nav.Link as={Link} style={{ width: "100px" }} to="/create">
                            <img src={IMAGES.create_icon} height={20} width={20} alt="" srcSet="" />
                            <b>Create</b>
                        </Nav.Link>
                        <Nav.Link as={Link} style={{ width: "100px" }} to="/grow">
                            <img src={IMAGES.grow_icon} height={20} width={20} alt="" srcSet="" />
                            <b>Grow</b>
                        </Nav.Link>
                        <Nav.Link as={Link} className='' style={{ width: "100px" }} to="/myspace">
                            <img src={IMAGES.MySpace_UserIcon} height={20} width={20} alt="" srcSet="" />
                            <b>MySpace</b>
                            <Dropdown className=' border-none '  >
                                <Dropdown.Toggle className='bg-red-600 ' style={{backgroundColor:"transparent",color:"gray",border:"none"}} variant="success" id="dropdown-basic">

                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Link to="/">
                                    <Dropdown.Item href="#/action-1">LogOut</Dropdown.Item>
                                    </Link>
                                   
                                 
                                </Dropdown.Menu>
                            </Dropdown>
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default AfterLoginMyHeader;