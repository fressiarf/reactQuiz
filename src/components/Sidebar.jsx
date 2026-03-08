import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import '../style/sidebar.css';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import logo from '../img/logo2.png';

/**
 * Componente Sidebar Premium
 * Proporciona una navegación vertical elegante con estados activos y efectos visuales.
 */
function Sidebar() {
  const location = useLocation();

  return (
    <aside className="sidebar-container">
      <div className="sidebar-header">
       <Link to="/home"> <img src={logo} alt="logo" className='logo' /></Link>
        <h5>Menú Principal</h5>
      </div>
      
      <Nav className="flex-column sidebar-nav">
        <Nav.Link 
          as={Link} 
          to="/home" 
          className={`sidebar-link ${location.pathname === '/' || location.pathname === '/' ? 'active' : ''}`}
        >
          <span>Inicio</span>
        </Nav.Link>

        <Nav.Link 
          as={Link} 
          to="/adopcion" 
          className={`sidebar-link ${location.pathname === '/adopcion' ? 'active' : ''}`}
        >
          <span>Adopciones</span>
        </Nav.Link>

        <Nav.Link 
          as={Link} 
          to="/perfil" 
          className={`sidebar-link ${location.pathname === '/perfil' ? 'active' : ''}`}
        >
          <span>Mi Perfil</span>
        </Nav.Link>

        <div className="sidebar-divider"></div>

        <Nav.Link 
          as={Link} 
          to="/admin" 
          className={`sidebar-link ${location.pathname === '/admin' ? 'active' : ''}`}
        >
          <span>Administración</span>
        </Nav.Link>

        <Nav.Link 
          as={Link} 
          to="/registro" 
          className={`sidebar-link ${location.pathname === '/registro' ? 'active' : ''}`}
        >
          <span>Registrar Usuario</span>
        </Nav.Link>

        <div className="sidebar-divider"></div>

        <Nav.Link className="sidebar-link disabled">
          <span>Ajustes</span>
        </Nav.Link>
      </Nav>
    </aside>
  );
}

export default Sidebar;