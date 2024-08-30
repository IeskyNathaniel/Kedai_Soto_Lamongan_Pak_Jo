import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import "./style/landingPage.css";
import Intro from './components/Intro';
import About from './components/AboutUs';
import Produk from './components/Produk';
import { Button, Col, Container, Row } from 'react-bootstrap';
import ScrollButton from './components/ScrollButton';
import Footer from './components/Footer';
import { useSelector, useDispatch } from 'react-redux';
import { showAll, showFood, showDrinks, selectCategory } from './productSlice';

function App() {
  const dispatch = useDispatch();
  const category = useSelector(selectCategory);

  return (
    <div>
      <div className='bg'>
        <NavigationBar />
        <Intro />
      </div>
      <div className='bg'>
        <Container id='about'>
          <About />
        </Container>
      </div>
      <div className='produk' id='makanan'>
        <br></br>
        <Container className='pilihan' min-width='100vw'>
          <Row>
            <Col>
              <Button variant='success' className='text-white' onClick={() => dispatch(showAll())}>Semua</Button>
            </Col>
            <Col>
              <Button variant='success' className='text-white' onClick={() => dispatch(showFood())}>Makanan</Button>
            </Col>
            <Col>
              <Button variant='success' className='text-white' onClick={() => dispatch(showDrinks())}>Minuman</Button>
            </Col>
          </Row>
        </Container>
        <Container>
          <br></br>
          <Row className="d-flex justify-content-between">
            {category === 'all' && (
              <>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Produk title="Soto Lamongan" content="Soto ayam dengan kuah yang kaya rasa dan harum rempah beserta bubuk koya racikan tangan yang otentik." img={require('../src/assets/makanan/soto.png')} />
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Produk title="Nasi Uduk" content="Nasi Uduk dengan berbagai rempah yang harum dan sambal yang khas disajikan dengan lauk pauk lezat untuk pengalaman makan yang memanjakan lidah." img={require('../src/assets/makanan/uduk.png')} />
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Produk title="Semur Sapi" content="Daging sapi empuk dalam kuah kental yang manis dan gurih, dipadukan dengan rempah-rempah pilihan untuk rasa yang menggugah selera." img={require('../src/assets/makanan/semur.png')} />
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Produk title="Tahu Tempe" content="Kombinasi sempurna antara tahu lembut dan tempe kenyal, disajikan dengan bumbu sederhana yang memikat dan penuh cita rasa." img={require('../src/assets/makanan/tahu_tempe.png')} />
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Produk title="Teh Oolong" content="Teh premium dengan rasa yang seimbang antara floral dan sedikit berkaramel, memberikan pengalaman minum teh yang menyegarkan dan elegan." img={require('../src/assets/makanan/oolong.png')} />
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Produk title="Teh Bunga Telang" content="Minuman herbal dengan dari bunga telang yang memukau dan rasa lembut, kaya antioksidan untuk menyegarkan dan menenangkan." img={require('../src/assets/makanan/teh_telang.png')} />
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Produk title="Es Nata De Coco" content="Es segar dengan nata de coco kenyal dan jelly Wongcoco, memberikan sensasi rasa dan tekstur yang unik dan menyenangkan." img={require('../src/assets/makanan/nata.png')} />
                </Col>
              </>
            )}
            {category === 'food' && (
              <>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Produk title="Soto Lamongan" content="Soto ayam dengan kuah yang kaya rasa dan harum rempah beserta bubuk koya racikan tangan yang otentik." img={require('../src/assets/makanan/soto.png')} />
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Produk title="Nasi Uduk" content="Nasi Uduk dengan berbagai rempah yang harum dan sambal yang khas disajikan dengan lauk pauk lezat untuk pengalaman makan yang memanjakan lidah." img={require('../src/assets/makanan/uduk.png')} />
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Produk title="Semur Sapi" content="Daging sapi empuk dalam kuah kental yang manis dan gurih, dipadukan dengan rempah-rempah pilihan untuk rasa yang menggugah selera." img={require('../src/assets/makanan/semur.png')} />
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Produk title="Tahu Tempe" content="Kombinasi sempurna antara tahu lembut dan tempe kenyal, disajikan dengan bumbu sederhana yang memikat dan penuh cita rasa." img={require('../src/assets/makanan/tahu_tempe.png')} />
                </Col>
              </>
            )}
            {category === 'drinks' && (
              <>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Produk title="Teh Oolong" content="Teh premium dengan rasa yang seimbang antara floral dan sedikit berkaramel, memberikan pengalaman minum teh yang menyegarkan dan elegan." img={require('../src/assets/makanan/oolong.png')} />
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Produk title="Teh Bunga Telang" content="Minuman herbal dengan dari bunga telang yang memukau dan rasa lembut, kaya antioksidan untuk menyegarkan dan menenangkan." img={require('../src/assets/makanan/teh_telang.png')} />
                </Col>
                <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
                  <Produk title="Es Nata De Coco" content="Es segar dengan nata de coco kenyal dan jelly Wongcoco, memberikan sensasi rasa dan tekstur yang unik dan menyenangkan." img={require('../src/assets/makanan/nata.png')} />
                </Col>
              </>
            )}
          </Row>
        </Container>
      </div>
      <div id='footer'>
        <Footer />
      </div>
      <ScrollButton />
    </div>
  );
}

export default App;