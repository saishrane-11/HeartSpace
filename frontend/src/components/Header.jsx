import IMAGES from '../image/Images'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Outlet, Link } from "react-router-dom";
// style={{height:'80px'}}
function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed z-10  w-100 " style={{height:'80px'}}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={IMAGES.heARTspace_Logo} height={60} width={100} alt="" srcSet="" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className='p-2' style={{backgroundColor:"#F8F9FA"}}>
          <Nav className="me-auto">
            {/* //Here is the code */}
            <Nav.Link as={Link} style={{ width: "100px" }} to="/">
              <img src={IMAGES.home_icon} height={20} width={20} alt="" srcSet="" />
              <b>Home</b>
            </Nav.Link>
            <Nav.Link as={Link} style={{ width: "100px" }} to="/signup">
              <img src={IMAGES.about_us_or_info_sign} height={20} width={20} alt="" srcSet="" />
              <b>About</b>
            </Nav.Link>
            <Nav.Link as={Link} style={{ width: "100px" }} to="/signup">
              <img src={IMAGES.connect_communityforum_icon} height={20} width={20} alt="" srcSet="" /><b>Connecting</b>
            </Nav.Link>
            <Nav.Link as={Link} style={{ width: "100px" }} to="/signup">
              <img src={IMAGES.create_icon} height={20} width={20} alt="" srcSet="" />
              <b>Create</b>
            </Nav.Link>
            <Nav.Link as={Link} style={{ width: "100px" }} to="/signup">
              <img src={IMAGES.grow_icon} height={20} width={20} alt="" srcSet="" />
              <b>Grow</b>
            </Nav.Link>
            <Nav.Link as={Link} style={{ width: "100px" }} to="/signup">
              <img src={IMAGES.MySpace_UserIcon} height={20} width={20} alt="" srcSet="" />
              <b>MySpace</b>
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Header;