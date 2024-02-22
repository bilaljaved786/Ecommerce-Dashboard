import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import '../App.css';

function Header() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto nav_bar_wrapper">
                    <Link to={"/Register"}>Register</Link>
                    <Link to={"/Login"}>Login</Link>
                    <Link to={"/Add_product"}>Add product</Link>
                    <Link to={"/update_product"}>Update product</Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default Header;