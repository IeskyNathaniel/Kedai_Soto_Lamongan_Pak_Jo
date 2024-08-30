import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Produk = (props) => {
  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
    });
  }, []);

  return (
    <Card
      style={{ width: '18rem', height: '28rem'}}
      data-aos='fade-up'
    >
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          {props.content}
        </Card.Text>
        <Button href='#footer' className='button btn-success'>Datang Segera</Button>
      </Card.Body>
    </Card>
  );
}

export default Produk;
