import React from 'react'

function FormAdopcion() {
  return (
    <div>
        <div className="adopcion-container">
            <div className="adopcion-header">
                <h2>Formulario de Adopción</h2>
            </div>
            <div className="adopcion-content">
             
                        <label htmlFor="nombre">Nombre</label>
                        <input type="text" id="nombre" name="nombre" />
            
                        <label htmlFor="correo">Correo</label>
                        <input type="email" id="correo" name="correo" />
            
                        <label htmlFor="telefono">Teléfono</label>
                        <input type="text" id="telefono" name="telefono" />
            
                        <label htmlFor="direccion">Dirección</label>
                        <input type="text" id="direccion" name="direccion" />
                   
                        <label htmlFor="mascota">Mascota</label>
                        <select id="mascota" name="mascota">
                            <option value="">Seleccione una mascota</option>
                            <option value="perro">Perro</option>
                            <option value="gato">Gato</option>
                        </select>
                
                        <label htmlFor="mensaje">Mensaje</label>
                        <textarea id="mensaje" name="mensaje"></textarea>
                    </div>
                    <button type="submit">Enviar</button>
               
            </div>
        </div>
  )
}

export default FormAdopcion