import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";


const NavBar = () => {
    return(
        <div>
            <Navbar bg="primary" variant="dark" className="mt-4 mb-4 rounded">
                <Container>
                    <Navbar.Brand href='/'>Waiter App</Navbar.Brand>
                    <Nav className="ms-auto">
                        <Nav.Link as={NavLink} to='/'>Home</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;