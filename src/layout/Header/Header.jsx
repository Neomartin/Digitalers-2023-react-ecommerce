import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { LINKS } from "../../links";

const Header = () => {
  const isAdmin = false;
  const user = null;


  function logout() {
    //limpio el localstorage y redirecciono al home
  }
  return (
    <header>
        <Navbar expand="md" className="bg-primary" 
        data-bs-theme="dark"
        >
            <Container>
                <Navbar.Brand href="/">LOGO</Navbar.Brand>
                <Nav >
                    {
                      LINKS.map((link, idx) => (
                          (link.admin && isAdmin || !link.admin) &&
                          <NavLink  key={idx} 
                                    to={link.path} 
                                    className={({isActive}) => isActive ? 'active' : null }>
                            {link.viewValue}
                          </NavLink>
                      ))
                    }

                    { user ? (
                      <>
                          <NavLink onClick={logout()}>
                           Logout
                            </NavLink>
                            <img src="" alt="user-img" />
                      </>)
                          : <NavLink to="login">Login</NavLink> }

                      
                      {/* <NavLink to="contact" >Contact</NavLink>
                      <NavLink to="register" className={({isActive}) => isActive ? 'active' : null }>Registro</NavLink>
                      <NavLink to="admin-product" className={({isActive}) => isActive ? 'active' : null }>Admin Product</NavLink> */}
                </Nav>


            </Container>


        </Navbar>
    </header>
  )
}

export default Header