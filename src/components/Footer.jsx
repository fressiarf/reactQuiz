import React from 'react'
import '../style/footer.css'
import logo2 from "../img/logo2.png"

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-logo">
          <img src={logo2} alt="Logo" />
          <p>Red Huellas Seguras</p>
        </div>
        <div className="footer-links">
          <a href="#">Inicio</a>
          <a href="#">Sobre Nosotros</a>
          <a href="#">Contacto</a>
        </div>
        <div className="footer-social">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">Twitter</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer