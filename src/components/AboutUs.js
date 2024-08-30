import { Col, Container, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';

const About = () => {
    return (
        <div className='about'>
            <Container className='text-white d-flex justify-content-center align-items-center'>
                <Row>
                    <Col md={6}>
                        <div className='image-container'>
                            <img className='foto img-fluid' src={require('../assets/background/toko.jpg')} alt='toko' />
                        </div>
                        <div className='introButton mt-4 text-center'>
                          <Button variant="danger" className='mangan text-white' href='#makanan'>MANGAN</Button>
                      </div>
                    </Col>
                    <Col md={6}>
                        <div className='text-container text-start'>
                            <p>
                                Didirikan pada 13 Juli 2023, SOTO LAMONGAN PAK JO hadir untuk membawa keaslian dan kelezatan cita rasa tradisional Indonesia ke meja Anda. Kami berkomitmen untuk menyajikan makanan yang 100% dibuat dengan tangan sendiri, menghadirkan rasa otentik yang khas dan sulit dilupakan. Berlokasi di Teluk Betung, Bandarlampung, kedai kami menjadi tempat berkumpul bagi semua usia yang mencari kehangatan dalam setiap suapan.
                            </p>
                            <p>
                                Dengan fokus pada kualitas dan keunikan rasa, kami terus berproses untuk mempersembahkan yang terbaik bagi para pelanggan setia. Setiap hidangan yang kami sajikan bukan hanya sekedar makanan, tetapi juga sebuah cerita dan pengalaman yang ingin kami bagikan kepada dunia. Kami percaya bahwa rasa yang tertanam di lidah adalah rasa yang selalu ingin kembali dicari. Mari bergabung dengan kami dalam perjalanan rasa yang penuh keajaiban dan kelezatan!
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default About;
