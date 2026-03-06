import React from 'react'
import logo from "../img/logo.png"
import { Navigate } from 'react-router-dom'

function InfoMain() {
    function name(params) {
        Navigate("/adopcion")
    }
  return (
    <div className="info-main-container">
        <main className="hero-section">
            <div className="hero-text">
                <h1>¿Estás listo para adoptar?</h1>
                <h2>Comienza tu búsqueda aquí</h2>
                <button className="btn-formulario">Click aqui</button>
            </div>
            
            <div className="hero-logo">
                <img src={logo} alt="logo" className="small-logo" />
            </div>
        </main>

        <section className="historia-section">
            <h1>Nuestra historia</h1>
            <p>Red Huellas Seguras es una plataforma dedicada a la protección y bienestar animal. 
                Nacimos con la misión de conectar perros y gatos en busca de un hogar con personas que deseen 
                brindarles amor y cuidados. A través de nuestra plataforma, facilitamos el proceso de adopción, 
                ofreciendo un espacio seguro y confiable para que cada animal encuentre su familia ideal. 
                Creemos en el poder transformador de la adopción y trabajamos cada día para hacer una diferencia 
                en la vida de muchos animales.</p>
        </section>
    </div>
  )
}

export default InfoMain