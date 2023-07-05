import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink, useLocation, useNavigate, useParams } from 'react-router-dom';

const TopNavbar = () => {

    const { pathname } = useLocation();
    const params = useParams();
    // console.log(pathname);

    const navigate = useNavigate();

    return (
        <Navbar bg="dark" variant="dark" className='topNavbar'>
            <Container>
                <Navbar.Brand>Shopper's Stop</Navbar.Brand>
                <NavLink
                    to='/'
                    className={(isActive) => isActive.isActive ? 'activeClassName navLink' : 'navLink'}
                >Home</NavLink>

                <NavLink
                    to='/AboutUs'
                    className={(isActive) => isActive.isActive ? 'activeClassName navLink' : 'navLink'}
                >About Us</NavLink>

                <NavLink
                    to='/Product'
                    className={(isActive) => isActive.isActive ? 'activeClassName navLink' : 'navLink'}
                >Product</NavLink>

                <Link
                    to={'/Users'}
                    // className={"/Users" === pathname ? 'activeClassName navLink' : 'navLink'}
                    className={["/Users"].includes(pathname) ? 'activeClassName navLink' : 'navLink'}
                >Users</Link>

                <Link
                    to={'/Blog'}
                    className={["/Blog", `/ViewBlog/${params.id}`].includes(pathname) ? 'activeClassName navLink' : 'navLink'}
                >Blog</Link>

                <span
                    onClick={() => navigate("/Contact")}
                    className={["/Contact"].includes(pathname) ? 'activeClassName navLink' : 'navLink'}
                >Contact</span>
            </Container>
        </Navbar>
    )
}

export default TopNavbar;






// className = { ["/Users"].includes(pathname) ? 'activeClassName navLink' : 'navLink' }