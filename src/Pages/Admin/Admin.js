import React, { useState } from 'react';
import { Button,Offcanvas,Container, Navbar,Nav,NavDropdown } from 'react-bootstrap';
import { Link, useRouteMatch } from 'react-router-dom';
import { NavLink, Route, Switch } from 'react-router-dom';
import Welcome from '../Admin/Welcome/Welcome'
import ProductChart from '../Admin/ProductsChart/ProductsChart'
import useAuth from '../../Hooks/useAuth';
import ManageProducts from './ManageProducts/ManageProducts';
import AdminRoute from './AdminRoute/AdminRoute';
import Users from './Users/Users';
import Message from './Message/Message';

const Admin = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    let { path, url } = useRouteMatch();
    const {logOut,admin,messages} = useAuth()
    return (
        <div>
            <Navbar className='border-bottom border-3 mb-3' expand="lg">
                <Container>
                    <Navbar.Brand onClick={handleShow} href="#home"><i className="fas fa-bars"></i></Navbar.Brand>
                    <Navbar.Brand className='fs-2' href="#home">Jhalkati-2022</Navbar.Brand>
                    <Navbar.Brand as={Link} className='' to="/home">Home</Navbar.Brand>
                </Container>
            </Navbar>
            <div>
                {/* off canvas start  */}
                <Offcanvas show={show} onHide={handleClose}>
                    <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Side bar</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <div className='p-3'>
                            {
                                !admin ? <div><NavLink style={{textDecoration:'none'}} className="py-2" to={`${url}`}><i className="me-3 fs-5 fas fa-clipboard"></i>Dashboard</NavLink><br/><br/></div> : <div>
                                    <NavLink style={{textDecoration:'none'}} className="py-2" to={`${url}/manageProduct`}><i className="me-3 fs-5 fas fa-cart-plus"></i>Stock Product</NavLink><br/><br/>
                                    <NavLink style={{textDecoration:'none'}} className="py-2" to={`${url}/users`}><i class="me-3 fs-5 fas fa-users"></i>All users</NavLink><br/><br/>
                                    <NavLink style={{textDecoration:'none'}} className="py-2" to={`${url}/message`}><i className="me-3 fs-5 fas fa-envelope"></i>Messages</NavLink><br/><br/>
                                </div>
                            }
                            <NavLink style={{textDecoration:'none'}} className="py-2" to={`${url}/chart`}><i className="me-3 fs-5 fas fa-clipboard-list"></i>Table</NavLink><br/><br/>
                            <Button className='rounded-pill bg-transparent text-primary' onClick={logOut}>Log out</Button>
                        </div>
                    </Offcanvas.Body>
                </Offcanvas>
                {/* off canvas end  */}
                <Switch>

                    <Route exact path={path}>
                        <Welcome/>
                    </Route>

                    <Route exact path={`${path}/chart`}>
                        <ProductChart/>
                    </Route>

                    <AdminRoute exact path={`${path}/manageProduct`}>
                        <ManageProducts/>
                    </AdminRoute>

                    <AdminRoute exact path={`${path}/users`}>
                        <Users/>
                    </AdminRoute>

                    <AdminRoute exact path={`${path}/message`}>
                        <Message/>
                    </AdminRoute>

                </Switch>
            </div>
        </div>
    );
};

export default Admin;