import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const Header = () => {
  const {logOut,user} = useAuth()
    return (
        <Navbar className='custom border-bottom border-3' collapseOnSelect expand="lg" bg="custom" variant="light">
          <Container>
          <Navbar.Brand className='text-light'>Company Name</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mx-auto">
              <Nav.Link className='text-light' as={Link} to="/home">Home</Nav.Link>
              {
                user?.email && <Nav.Link className='text-light' as={Link} to='/admin'>Admin</Nav.Link>
              }
              <Nav.Link className='text-light' as={Link} to='/login'>Login</Nav.Link>
            </Nav>
            <Nav>
              {user?.email ? <Button onClick={logOut} className='btn btn-danger'>Logout</Button> : <Link to="/login"><Button className='ms-2 btn btn-success'>Login</Button></Link>}
            </Nav>
          </Navbar.Collapse>
          </Container>
        </Navbar>
    );
};

export default Header;