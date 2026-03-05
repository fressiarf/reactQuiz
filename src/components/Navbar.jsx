import { useState } from 'react'
import { Nav } from 'react-bootstrap'
import logo from "../img/logo.png"
import "../style/nav.css"
import { Link, useNavigate } from 'react-router-dom'

function Navbar() {

  const navigate = useNavigate()
  const [userLogeado, setUserLogeado] = useState(JSON.parse(localStorage.getItem("usuarioLogueado"))
  )

  const cerrarSesion = () => {
    localStorage.removeItem("usuarioLogueado")
    setUserLogeado(null)
    navigate("/")
  }
  let contenidoNav
  if (userLogeado) {
    contenidoNav = (
      <>
        <Nav className="nav" activeKey="/home">

          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="/login">Iniciar Sesion</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
          <button onClick={cerrarSesion}>Cerrar sesión</button>
        </Nav>
      </>
    )
  } else {
    contenidoNav = (
      <>
        <Nav className="nav" activeKey="/home">
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/login">Iniciar Sesion</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">Link</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Disabled
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </>
    )
  }
  return (
    <div className="nav-container">
      <header className="nav-header">
        <div className="logo-container">
          <Link to="/home">
            <img src={logo} alt="logo" className='logo' />
          </Link>
          <h1 className="logoText">Red huellas Seguras</h1>
        </div>

        <nav className="nav-menu">
          <div className="nav-links">
            {contenidoNav}
          </div>
        </nav>

      </header>
    </div>
  )
}

export default Navbar
