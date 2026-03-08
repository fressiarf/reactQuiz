import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import '../style/formAdopcion.css';

function FormAdopcion() {
  const location = useLocation();
  const [nombreMascota, setNombreMascota] = useState('');

  useEffect(() => {
    // Si venimos de la tarjeta, recibimos el nombre de la mascota
    if (location.state && location.state.mascotaNombre) {
      setNombreMascota(location.state.mascotaNombre);
    }
  }, [location]);

  return (
    <div className="adopcion-wrapper">
      <div className="adopcion-container">
        <div className="adopcion-header">
          <h2>Formulario de Adopción</h2>
          {nombreMascota && (
            <p className="subtitle-form" style={{textAlign: 'center', color: '#4e73df', fontWeight: 'bold'}}>
              Estás solicitando adoptar a: {nombreMascota}
            </p>
          )}
        </div>
        <form className="adopcion-content">
          <label htmlFor="nombre">Tu Nombre</label>
          <input type="text" id="nombre" name="nombre" placeholder="Tu nombre completo" required />

          <label htmlFor="correo">Correo Electrónico</label>
          <input type="email" id="correo" name="correo" placeholder="ejemplo@correo.com" required />

          <label htmlFor="telefono">Teléfono</label>
          <input type="text" id="telefono" name="telefono" placeholder="Número de contacto" required />

          <label htmlFor="mascota-solicitada">Mascota seleccionada</label>
          <input 
            type="text" 
            id="mascota-solicitada" 
            value={nombreMascota} 
            readOnly 
            placeholder="No se ha seleccionado mascota"
            style={{backgroundColor: '#f8f9fc'}}
          />

          <label htmlFor="mensaje">¿Por qué quieres adoptar?</label>
          <textarea id="mensaje" name="mensaje" placeholder="Cuéntanos un poco sobre ti y el hogar que ofreces"></textarea>

          <button type="submit" className="btn-adopcion">Enviar solicitud para {nombreMascota || 'adoptar'}</button>
        </form>
      </div>
    </div>
  );
}

export default FormAdopcion;