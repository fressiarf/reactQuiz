import React, { useState } from 'react'
import Swal from 'sweetalert2'
import ServiceUsuario from '../services/ServiceUsuario'
import "../style/register.css"
import { useNavigate  } from "react-router-dom"

function FormRegistro() {

 const navigate = useNavigate();

    const [nombreCompleto, setNombreUsuario] = useState("")
    const [contraUsuario, setContraUsuario] = useState("")
    const [correoUsuario, setCorreoUsuario] = useState("")

    async function registroUsuario() {

        if (!nombreCompleto || !contraUsuario || !correoUsuario) {
            Swal.fire({
                title: '¡error!',
                text: 'todos los campos deben estar llenos',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            }); 
            return;

        } else { console.log(nombreCompleto, contraUsuario, correoUsuario); }
        let usuarioAlmacenado = {}

        const datoGuardar = await ServiceUsuario.getUsuarios()

        if (datoGuardar.length  === 0) {
            const objUsuario = {
            nombre: nombreCompleto,
            contra: contraUsuario,
            correo: correoUsuario,
            rol: "Admin"
        }
            usuarioAlmacenado = await ServiceUsuario.postUsuarios(objUsuario)
            
        } else {
            const objUsuario = {
            nombre: nombreCompleto,
            contra: contraUsuario,
            correo: correoUsuario,
            rol: "usuario"

        }
            usuarioAlmacenado = await ServiceUsuario.postUsuarios(objUsuario)
        }
        if (usuarioAlmacenado) {
            Swal.fire({
                title: '¡Éxito!',
                text: 'La operación se realizó correctamente',
                icon: 'success',
                confirmButtonText: 'Aceptar'
            }) .then(() => {
        navigate('/login') 
    })
             
        }

        setNombreUsuario("")
        setContraUsuario("")
        setCorreoUsuario("")
    }

     function irInicioSesion () {
     navigate('/login')
  }
    return (
        <div className='formRegistro'>

            <h2>Registro</h2>

            <h4>Nombre completo</h4>
            <input type="text" value={nombreCompleto} onChange={(evento) => setNombreUsuario(evento.target.value)} />
            <h4>Correo</h4>
            <input type="email" value={correoUsuario} onChange={(evento) => setCorreoUsuario(evento.target.value)} />
            <h4 >Contraseña</h4>
            <input type="password" value={contraUsuario} onChange={(evento) => setContraUsuario(evento.target.value)} />
            <div>
                <button onClick={registroUsuario}>Registrarse</button>
                <button onClick={irInicioSesion}>¿Ya tienes una cuenta?</button>
            </div>
            



            <div>
                
                {/* esto es para redirigir a otra pestaña */}
                {/*   <Link target='_blank' to="/market">Ir al market</Link> */}

            </div>

        </div>



    )
}

export default FormRegistro