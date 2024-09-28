import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../components/Logo.jsx';

function Header() {
    return(
        <>
            <Navbar data-bs-theme="light" expand="lg" className="bg-body-tertiary">
                <Container>
                    <Logo />
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className="nav-items">Início</Nav.Link>
                        <Nav.Link href="#link" className='nav-items'>Quem Somos</Nav.Link>
                        <NavDropdown title="Conteúdos" id="basic-nav-dropdown" className='nav-items'>
                        <NavDropdown.Item href="#action/3.1" className='nav-items'>Playlist Brasil</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2" className='nav-items'>Playlist Rock</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3" className='nav-items'>Playist Eletronica</NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item href="#action/3.4" className='nav-items'>Notícias</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header;