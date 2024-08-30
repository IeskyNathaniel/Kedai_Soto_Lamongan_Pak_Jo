import { Col, Container, Row } from 'react-bootstrap';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Footer = () => {

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
    });
  }, []);

  return (
    <div className='footer'>
      <Container className='text-white'>
        <Row>
          <Col md={6}>
            <div className='map-container'>
              <iframe 
                className='map'
                style={{ border: '0', width: '100%', height: '35vh' }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3971.7801259162065!2d105.26201657428864!3d-5.450311954353484!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e40d939bcde49a9%3A0x99cee6d81fd0db3!2sKedai%20Makan%20Soto%20Lamongan%20Pak&#39;Jo!5e0!3m2!1sid!2sid!4v1724809743270!5m2!1sid!2sid"
              >
              </iframe>
            </div>
          </Col>
          <Col md={6}>
            <div className='text-box'>
              <h4 className='contact'>Contact Us</h4>
              <p className='foot'>Jl. Ikan Kakap No.44-45, RT.28/RW.LK.II, Pesawahan, Kec. Telukbetung Selatan, Kota Bandar Lampung, Lampung 35223</p>
              <br></br>
              <p className='foot'>Phone: 62-811-7920-921</p>
              <p className='foot'>Setiap Hari 07.30-18.00</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Footer;
