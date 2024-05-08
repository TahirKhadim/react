import React from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

const Header = () => {

    
    const cartProducts = useSelector(state => state.cart.carts);
   
    const navigate = useNavigate();

    const logoutHandler = () => {
        localStorage.removeItem("Mytoken");
        handleLogout(); // Update the authentication state
        navigate('/login'); // Redirect to the login page
    };

    return (
        <Navbar bg='light' expand='sm'>
            <Container>
                <NavLink to='/' className='navbar-brand'>
                    <img src="/vite.svg" alt="Logo" className='me-2' /> 
                    Logo
                </NavLink>
                <Navbar.Toggle aria-controls='mynav' />
                <Navbar.Collapse id='mynav'>
                    <Nav className='me-auto fw-bold'>
                        <NavLink to='/' className='nav-link'>Home</NavLink>
                        <NavLink to='/productlist' className='nav-link'>Products</NavLink>
                        <NavLink to='/categories' className='nav-link'>Categories</NavLink>
                        <NavLink to='/read' className='nav-link'>Read Operation</NavLink>
                    </Nav>
                    <Nav>
                    <NavLink to='/cart' className='nav-link'>Cart <sup>{cartProducts.length}</sup></NavLink>
                    </Nav>
                </Navbar.Collapse>  
            </Container>
        </Navbar>
    );
};

export default Header;
