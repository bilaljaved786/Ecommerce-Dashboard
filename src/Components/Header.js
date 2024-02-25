import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../App.css';

function Header() {

    // parse the stringfied user data
    let user = JSON.parse(localStorage.getItem("login"));
    let navigate = useNavigate();

    // logout handler
    function logoutUserHandle() {
        localStorage.clear();
        navigate("/Register");
    }

    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand onClick={() => navigate("/Home")}>Navbar</Navbar.Brand>
                <Nav className="me-auto nav_bar_wrapper">
                    {
                        localStorage.getItem("login") ?
                            <>
                                <Link to={"/Add_product"}>Add product</Link>
                                <Link to={"/update_product"}>Update product</Link>
                            </>
                            :
                            <>
                                <Link to={"/Register"}>Register</Link>
                                {
                                    localStorage.getItem("Register")? <Link to={"/Login"}>Login</Link>: null
                                }
                            </>
                    }
                </Nav>
                {
                    // if login then show the login user otherwise null
                    localStorage.getItem("login") ?
                        <Nav>
                            <NavDropdown title={user.First}>
                                <NavDropdown.Item>Profile</NavDropdown.Item>
                                <NavDropdown.Item onClick={logoutUserHandle}>Logout</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        : null
                }
            </Container>
        </Navbar>
    )
}

export default Header;