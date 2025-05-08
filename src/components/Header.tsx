import { Navbar, Container,Nav } from "react-bootstrap";
import '../components/css/Header.css'
export function Header() {
  return (
    <Navbar bg="primary" expand="lg" variant="dark">
      <Container fluid>
        <Navbar.Brand href="/">
          <img src="/img/PetFinderLogo.png" width="80" height={80}></img>
        </Navbar.Brand>
        <Nav className='d-flex justify-conntent-center w-100'>
            <h1 className="text-center text-white">Help them find their new fur-homes</h1>
        </Nav>
      </Container>
    </Navbar>
  );
}
