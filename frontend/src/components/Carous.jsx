import Carousel from 'react-bootstrap/Carousel';
function Carous() {
  return (
    <Carousel data-bs-theme="dark" className='w-100'>
      <Carousel.Item>
        <img
        style={{height:"400px",width:"400px"}}
          className="d-block w-100"
          src="https://pharmaphorum.com/sites/default/files/styles/x_large/public/2024-01/heart3.jpg?itok=W4xbGkm_"
          alt="First slide"
        />
        <Carousel.Caption>
          <h5>First slide label</h5>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         style={{height:"400px",width:"400px"}}
          className="d-block w-100"
          src="https://www.valleyhealth.com/sites/default/files/inline-images/CCM%20Therapy%20Device%20%26%20Lead%20Placement%20Graphic_0.gif"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5>Second slide label</h5>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
         style={{height:"400px",width:"400px"}}
          className="d-block w-100"
          src="https://images.hindustantimes.com/rf/image_size_640x362/HT/p1/2015/02/24/Incoming/Pictures/1320076_Wallpaper2.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5>Third slide label</h5>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    //saish
  );
}
export default Carous;