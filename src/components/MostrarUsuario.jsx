import React, { useEffect } from 'react'
import { useState } from 'react'
import ServiceProducts from '../services/ServiceUsuario'
import "../style/paginaAdmin.css"


function MostrarUsuario() {

  const [usuarios, setUsuario] = useState([])
  

  useEffect(() => {

    async function cargarUsuario() {

      const dataUsuarios = await ServiceProducts.getUsuarios()

      setUsuario(dataUsuarios)
    }
    cargarUsuario()
  }, [])

  return (
    <div>

      {usuarios.map((usuario) =>

        <div key={usuario.id}>

          <p>{usuario.nombre}</p>
          <p>{usuario.contra}</p>
          <p>{usuario.correo}</p>
          <input type="text" />
          <button>Editar</button>
          <button>Eliminar</button>
        </div>

      )}

    </div>
  )
}

export default MostrarUsuario