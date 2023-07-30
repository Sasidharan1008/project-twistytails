import React ,{useState,useEffect} from 'react';
import Styles from "./NavBar.module.css";
import Wrap from './Wrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {IoPaw} from 'react-icons/io5';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


function NavBar() {
  const [scroll, setScroll] = useState(false);

  const scrollfun = () => {
    if (window.scrollY > 10) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollfun);

    return () => {
      window.removeEventListener('scroll', scrollfun);
    };
  }, []);
  

  return (
    <>
    <Wrap />
        <Navbar expand="lg"  className={scroll ? Styles.bg_body_tertiary_s : Styles.bg_body_tertiary}>
            <Container className={Styles.container}>
                <IoPaw color='#00bd56' size='2rem'/>
                <Navbar.Brand >Twisty Tails</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className={Styles.collapse} id="basic-navbar-nav">
                <Nav className={Styles.nav_list}>
                    <Nav.Link to="/project-twistytails/" ><Link className={Styles.nav_link} to="/">Home</Link></Nav.Link>
                    <Nav.Link href='#form' className={Styles.nav_link} >ADOPTION FORM</Nav.Link>
                    <Nav.Link  ><Link className={Styles.nav_link} to="/daycare">Day Care</Link></Nav.Link>
                    <Nav.Link href="#gallery" className={Styles.nav_link} >GALLERY</Nav.Link>
                    <Nav.Link href="#volunteer" className={Styles.nav_link} >VOLUNTEER</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        
    </>
  );
}

export default NavBar