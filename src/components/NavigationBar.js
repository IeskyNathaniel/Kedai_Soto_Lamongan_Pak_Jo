import React, { useState, useEffect } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

const NavigationBar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar className={`navbar ${scrolled ? 'scrolled' : ''}`} fixed="top" variant="light">
      <Container>
      <Navbar.Brand href='/'><p className='text-nav'>SOTO LAMONGAN PAK JO</p></Navbar.Brand>
      <Nav>
        <Nav.Link href='#about'><p className='text-nav'>About Us</p></Nav.Link>
        <Nav.Link href='#makanan'><p className='text-nav'>Product</p></Nav.Link>
      </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
