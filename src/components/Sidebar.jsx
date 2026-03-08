import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import '../style/sidebar.css';
import logo from '../img/logo2.png';

/**
 * Componente Sidebar Premium
 * Refactorizado para separar lógica de renderizado.
 */
function Sidebar() {
  // --- LÓGICA Y ESTADO (ANTES DEL RETURN) ---
  const location = useLocation();

  // Definición de los items del menú para una gestión centralizada
  const menuItems = [
    { path: '/home', label: 'Inicio', isHome: true },
    { path: '/adopcion', label: 'Adopciones' },
    { path: '/perfil', label: 'Mi Perfil' },
    { isDivider: true },
    { path: '/admin', label: 'Administración' },
    { path: '/registro', label: 'Registrar Usuario' },
    { isDivider: true },
    { label: 'Ajustes', disabled: true }
  ];

  // Función para determinar si una ruta está activa
  const checkActive = (path, isHome) => {
    if (isHome && (location.pathname === '/' || location.pathname === '/home')) return 'active';
    return location.pathname === path ? 'active' : '';
  };

  // Mapeo de los links antes del renderizado final
  const navigationLinks = menuItems.map((item, index) => {
    if (item.isDivider) {
      return <div key={`divider-${index}`} className="sidebar-divider"></div>;
    }

    if (item.disabled) {
      return (
        <Nav.Link key={`link-${index}`} className="sidebar-link disabled">
          <span>{item.label}</span>
        </Nav.Link>
      );
    }

    return (
      <Nav.Link 
        key={item.path}
        as={Link} 
        to={item.path} 
        className={`sidebar-link ${checkActive(item.path, item.isHome)}`}
      >
        <span>{item.label}</span>
      </Nav.Link>
    );
  });

  // --- ESTRUCTURA (RETURN) ---
  return (
    <aside className="sidebar-container">
      <div className="sidebar-header">
        <Link to="/home">
          <img src={logo} alt="logo" className='logo' />
        </Link>
        <h5>Menú Principal</h5>
      </div>
      
      <Nav className="flex-column sidebar-nav">
        {navigationLinks}
      </Nav>
    </aside>
  );
}

export default Sidebar;