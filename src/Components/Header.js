import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import '../App.css';

function Header() {

    let user = JSON.parse(localStorage.getItem("login"));
    let navigate = useNavigate();

    const logoutUserHandle = () => {
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
                                <Link to={"/Get_All_products"}>Get All product</Link>

                            </>
                            :
                            <>
                                <Link to={"/Register"}>Register</Link>
                                {
                                    localStorage.getItem("Register") ? <Link to={"/Login"}>Login</Link> : null
                                }
                            </>
                    }
                </Nav>
                {
                    localStorage.getItem("login") ?
                        <Nav>
                            <NavDropdown title={user.username}>
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