import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBarComponent() {

    return (
        <Navbar expand="lg" className="bg-dark-subtle">
            <Container>
                <Navbar.Brand>Bookflix</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/livros">Livros</Nav.Link>
                    </Nav>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/filmes">Filmes</Nav.Link>
                    </Nav>
                    <Nav className="d-flex">
                        <a href="/login" className="btn btn-secondary mr-12">Login</a>
                    </Nav>
                    <Nav className="d-flex">
                        <a href="/cadastro" className="btn btn-body-secondary">Cadastro</a>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBarComponent;
