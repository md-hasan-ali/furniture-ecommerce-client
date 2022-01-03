import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import './navigation.css';

const Navigarion = () => {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">Furniture Ecommerce</Navbar.Brand>
                    <Nav className="se-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">About Us</Nav.Link>
                        <Nav.Link href="#pricing">All Products</Nav.Link>
                        <Nav.Link href="#pricing">Gallery</Nav.Link>
                        <Nav.Link href="#pricing">Contact Us</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigarion;