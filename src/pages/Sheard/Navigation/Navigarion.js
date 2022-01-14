// Import Necessary file 
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../contexts/AuthProvider/useAuth';
import './navigation.css';

// Navigation Function component 
const Navigarion = () => {
    const { user, logout } = useAuth();
    return (
        <div>
            <Navbar className='' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><span className='text-style'>Furniture</span> STOR</Navbar.Brand>
                    <Nav className="se-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
                        <Nav.Link as={Link} to="/allProducts">All Products</Nav.Link>
                        <Nav.Link as={Link} to="/contact">Contact Us</Nav.Link>
                        {
                            user?.email ?
                                <>
                                    <Nav.Link onClick={logout} className='logout'>LogOut</Nav.Link>
                                    <img className='profile-image' src={user?.photoURL} alt="" />
                                    <h4 className='text-white ms-1'>{user?.displayName}</h4>
                                </> :


                                <Nav.Link className='login' as={Link} to="/login">LogIn</Nav.Link>


                        }

                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Navigarion;