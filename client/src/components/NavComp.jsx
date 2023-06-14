import { Link, NavLink } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavComp = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/" className="text-3xl">
          BankingSystem
        </Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={NavLink} to="/viewCustomers">
            ViewAllCustomers
          </Nav.Link>
          <Nav.Link as={NavLink} to="/transaction-history">
            Transaction History
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavComp;
