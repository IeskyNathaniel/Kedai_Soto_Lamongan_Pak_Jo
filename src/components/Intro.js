import { Col, Container, Row } from 'react-bootstrap';

const Intro = () => {
    return (
        <div className='intro'>
          <Container className='text-white d-flex justify-content-center align-items-center '>
            <Row>
              <Col md={6}>
              <div className='image-container'>
                  <img className='foto img-fluid' src={require('../assets/background/stiker.png')} alt='toko' />
              </div>
              </Col>
              <Col md={6}>
              <br></br><br></br>
              <div className='text-container text-end'>
                <p className='title'>Tempat di mana cita rasa autentik dan kehangatan tradisi bersatu dalam setiap sajian. Dari makanan yang khas, setiap hidangan kami dibuat dengan cinta dan dedikasi untuk memberikan pengalaman kuliner yang tak terlupakan.
                </p>
                  </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Intro;