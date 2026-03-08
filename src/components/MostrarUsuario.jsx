import React, { useEffect, useState } from 'react'
import ServiceUsuario from '../services/ServiceUsuario'
import Swal from 'sweetalert2'
import "../style/paginaAdmin.css"

function MostrarUsuario() {
  const [usuarios, setUsuarios] = useState([])

  // Función para cargar los usuarios desde el servidor
  const cargarUsuarios = async () => {
    const dataUsuarios = await ServiceUsuario.getUsuarios()
    setUsuarios(dataUsuarios)
  }

  useEffect(() => {
    cargarUsuarios()
  }, [])

  // Función para eliminar un usuario
  const eliminarUsuario = async (id, nombre) => {
    Swal.fire({
      title: '¿Eliminar usuario?',
      text: `Estás a punto de eliminar a ${nombre}. Esta acción no se puede deshacer.`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e74c3c',
      cancelButtonColor: '#4e73df',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (result.isConfirmed) {
        const respuesta = await ServiceUsuario.deleteUsuarios(id)
        if (respuesta) {
          Swal.fire('¡Eliminado!', 'El usuario ha sido borrado.', 'success')
          cargarUsuarios() // Recargamos la lista
        }
      }
    })
  }

  // --- Procesamiento y Construcción de la Vista (Cero lógica en el JSX) ---
  const usuariosMapeados = usuarios.map((usuario) => {
    // Sacamos todo el "funcionamiento" a constantes simples
    const idUnico = usuario.id;
    const nombreUsuario = usuario.nombre;
    const correoUsuario = usuario.correo;
    const foto = usuario.fotoPerfil || "https://img.freepik.com/vector-premium/icono-perfil-usuario-estilo-plano-ilustracion-vector-avatar-miembro-sobre-fondo-aislado-concepto-negocio-signo-permiso-usuario_157943-15752.jpg";
    
    // Lógica de roles
    const esAdmin = usuario.rol === 'Admin';
    const claseBadgeRol = esAdmin ? 'user-role-badge role-admin' : 'user-role-badge role-user';
    const textoRol = usuario.rol || 'Usuario';
    
    // Otros datos
    const textoTelefono = usuario.telefono || 'Sin registrar';
    const funcionBorrar = () => eliminarUsuario(usuario.id, usuario.nombre);

    return (
      <div key={idUnico} className="user-card">
        <div className="user-header">
          <img src={foto} alt={nombreUsuario} className="user-avatar" />
          <div className="user-info">
            <h3>{nombreUsuario}</h3>
            <span className={claseBadgeRol}>{textoRol}</span>
          </div>
        </div>
        <div className="user-body">
          <p><strong>Email:</strong> {correoUsuario}</p>
          <p><strong>Teléfono:</strong> {textoTelefono}</p>
          <p className="user-password-hint"><strong>Clave:</strong> ••••••••</p>
        </div>
        <div className="user-actions">
          <button className="btn-edit-admin">Editar</button>
          <button className="btn-delete-admin" onClick={funcionBorrar}>
            Eliminar
          </button>
        </div>
      </div>
    );
  });

  const layoutVacio = <p className="no-users">No hay usuarios registrados actualmente.</p>;
  const contenidoGrid = usuarios.length > 0 ? usuariosMapeados : layoutVacio;

  const componenteFinal = (
    <div className="users-container">
      <h2 className="admin-title">Panel de Administración de Usuarios</h2>
      <div className="user-grid">
        {contenidoGrid}
      </div>
    </div>
  );

  return componenteFinal;
}

export default MostrarUsuario