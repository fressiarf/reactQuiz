import React, { useState, useEffect } from 'react'
import ServicePerfil from '../services/ServicePerfil'
import Swal from 'sweetalert2'
import '../style/perfil.css'
import { useNavigate } from 'react-router-dom'

function FormPerfil() {

    const [nombre, setNombre] = useState("")
    const [correo, setCorreo] = useState("")
    const [contra, setContra] = useState("")
    const [telefono, setTelefono] = useState("")

    // Estado para saber si estamos viendo o editando
    const [editando, setEditando] = useState(false)
    const navigate = useNavigate()

    useEffect(() => {
        obtenerDatos()
    }, [])

    function obtenerDatos() {
        const usuarioSesion = localStorage.getItem("usuarioLogueado")
        if (usuarioSesion) {
            const tempUsuario = JSON.parse(usuarioSesion)
            setNombre(tempUsuario.nombre || "")
            setCorreo(tempUsuario.correo || "")
            setTelefono(tempUsuario.telefono || "")
            setContra("")
        }
    }

    async function actualizarPerfil() {

        if (!nombre || !correo || !telefono) {
            Swal.fire({
                title: '¡error!',
                text: 'todos los campos deben estar llenos',
                icon: 'warning',
                confirmButtonText: 'Aceptar'
            });

        } else {
            console.log(nombre, correo, telefono);

            const usuarioSesion = JSON.parse(localStorage.getItem("usuarioLogueado"))
            const idUsuario = usuarioSesion.id

            const objActualizar = {
                nombre: nombre,
                correo: correo,
                telefono: telefono
            }

            if (contra) {
                objActualizar.contra = contra
            }

            const respuesta = await ServicePerfil.patchPerfil(objActualizar, idUsuario)

            if (respuesta) {
                // Actualizamos el usuario en el localStorage para mantener la sesion al dia
                const usuarioActualizado = { ...usuarioSesion, ...respuesta }
                localStorage.setItem("usuarioLogueado", JSON.stringify(usuarioActualizado))

                Swal.fire({
                    title: '¡Éxito!',
                    text: 'La operación se realizó correctamente',
                    icon: 'success',
                    confirmButtonText: 'Aceptar'
                })

                setEditando(false) // Volvemos al modo de vista
                obtenerDatos()
            }
        }
    }

    async function eliminarCuenta() {
        const resultado = await Swal.fire({
            title: '¿Estás seguro?',
            text: "Esta acción no se puede deshacer",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Sí, eliminar cuenta',
            cancelButtonText: 'Cancelar'
        });

        if (resultado.isConfirmed) {
            const usuarioSesion = JSON.parse(localStorage.getItem("usuarioLogueado"))
            const idUsuario = usuarioSesion.id

            const respuesta = await ServicePerfil.deletePerfil(idUsuario)

            if (respuesta) {
                localStorage.removeItem("usuarioLogueado")
                Swal.fire(
                    'Eliminado',
                    'Tu cuenta ha sido eliminada.',
                    'success'
                ).then(() => {
                    navigate('/')
                });
            }
        }
    }

    function habilitarEdicion() {
        setEditando(true)
    }

    function cancelarEdicion() {
        obtenerDatos() // Restaurar datos originales
        setEditando(false)
    }

    return (
        <div className="perfil-container">
            <div className="perfil-header">
                <h2>Mi Perfil</h2>
            </div>

            <div className="perfil-content">

                <h4>Nombre completo</h4>
                {editando ? (
                    <input
                        type="text"
                        value={nombre}
                        onChange={(evento) => setNombre(evento.target.value)}
                    />
                ) : (
                    <p className="info-value">{nombre}</p>
                )}

                <h4>Correo electrónico</h4>
                {editando ? (
                    <input
                        type="email"
                        value={correo}
                        disabled
                    />
                ) : (
                    <p className="info-value">{correo}</p>
                )}

                <h4>Teléfono</h4>
                {editando ? (
                    <input
                        type="text"
                        value={telefono}
                        onChange={(evento) => setTelefono(evento.target.value)}
                    />
                ) : (
                    <p className="info-value">{telefono || "No especificado"}</p>
                )}

                {editando && (
                    <>
                        <h4>Cambiar Contraseña (Opcional)</h4>
                        <input
                            type="password"
                            value={contra}
                            onChange={(evento) => setContra(evento.target.value)}
                            placeholder="Nueva contraseña"
                        />
                    </>
                )}

                <div className="actions">
                    {editando ? (
                        <>
                            <button onClick={actualizarPerfil}>Guardar Cambios</button>
                            <button className="btn-cancel" onClick={cancelarEdicion}>Cancelar</button>
                        </>
                    ) : (
                        <>
                            <button onClick={habilitarEdicion}>Editar Perfil</button>
                            <button onClick={eliminarCuenta}>Eliminar Cuenta</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default FormPerfil