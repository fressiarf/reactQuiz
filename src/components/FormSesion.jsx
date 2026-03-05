import React, { useState } from 'react'
import Swal from 'sweetalert2'
import ServiceUsuario from '../services/ServiceUsuario'
import "../style/login.css"
import { useNavigate } from "react-router-dom"

function FormSesion() {

  const [contraLogin, setContraLogin] = useState("")
  const [correoLogin, setCorreoLogin] = useState("")
  const navigate = useNavigate()


  async function loginUsuario() {

    if (!contraLogin || !correoLogin) {
      Swal.fire({
        title: '¡error!',
        text: 'todos los campos deben estar llenos',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
      });
      return;
    } else {
      console.log(correoLogin, contraLogin);
      const datosUsuario = await ServiceUsuario.getUsuarios()
      const usuarioRegistrado = datosUsuario.find(usuario => usuario.correo === correoLogin)
      if (!usuarioRegistrado) {
        Swal.fire({
          title: "Error",
          text: "Este correo no está registrado",
          icon: "error",
          confirmButtonText: "OK"
        });
      } else {
        const credencialesValidas = datosUsuario.find(usuario => usuario.correo === correoLogin && usuario.contra === contraLogin)
        if (!credencialesValidas) {
          {
            Swal.fire({
              title: "Error",
              text: "Credenciales incorrectas",
              icon: "error",
              confirmButtonText: "OK"
            });
          }

        } else {

          localStorage.setItem("usuarioLogueado", JSON.stringify(credencialesValidas));
          Swal.fire({
            title: "inicio exitoso",
            text: "credenciales correctas",
            icon: "success",
            confirmButtonText: "OK"
          }).then(() => {
            navigate('/admin')
          })
        }
      }
    }
  }

  function regirigirAdmin() {
    navigate('/registro')

  }

 

  return (
    <div className='formLogin'>
      <h2>Inicio de Sesion</h2>

      <h4>Correo</h4>
      <input type="email" value={correoLogin} onChange={(evento) => setCorreoLogin(evento.target.value)} />
      <h4 >Contraseña</h4>
      <input type="password" value={contraLogin} onChange={(evento) => setContraLogin(evento.target.value)} />
      <div>

        <button onClick={loginUsuario}>Iniciar sesion</button>
        <button onClick={regirigirAdmin}>¿No tienes una cuenta?</button>
      </div>

     
    </div>
  )
}


export default FormSesion
