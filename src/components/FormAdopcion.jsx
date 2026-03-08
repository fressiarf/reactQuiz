import React from 'react'
import '../style/formAdopcion.css'

function FormAdopcion() {
  return (
    <div className="adopcion-wrapper">
      <div className="adopcion-container">
        <div className="adopcion-header">
          <h2>Formulario de Adopción</h2>
        </div>
        <form className="adopcion-content">
          <label htmlFor="nombre">Nombre</label>
          <input type="text" id="nombre" name="nombre" placeholder="Tu nombre completo" />

          <label htmlFor="correo">Correo</label>
          <input type="email" id="correo" name="correo" placeholder="ejemplo@correo.com" />

          <label htmlFor="telefono">Teléfono</label>
          <input type="text" id="telefono" name="telefono" placeholder="Número de contacto" />

          <label htmlFor="direccion">Dirección</label>
          <input type="text" id="direccion" name="direccion" placeholder="Calle, número, ciudad" />

          <label htmlFor="mascota">Mascota</label>
          <select id="mascota" name="mascota">
            <option value="">Seleccione una mascota</option>
            <option value="perro">Perro</option>
            <option value="gato">Gato</option>
          </select>

          <label htmlFor="mensaje">¿Por qué quieres adoptar?</label>
          <textarea id="mensaje" name="mensaje" placeholder="Cuéntanos un poco sobre ti y el hogar que ofreces"></textarea>

          <button type="submit" className="btn-adopcion">Enviar Solicitud</button>
        </form>
      </div>
    </div>
  )
}

export default FormAdopcion