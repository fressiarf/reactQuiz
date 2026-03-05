import { useState } from 'react'
import { Link } from 'react-router-dom'

function Nav() {

 const [cerrar, setCerrar] = useState("Cerrar Sesion")
 const navigate = useNavigate()

  return (
    <div>
        <nav>
            <Link to = "/">Home</Link>
            <Link to = "/login">Inicio de sesion</Link>
            <Link to = "/soporte">Soporte</Link>
            <button value={cerrar} onChange={(evento) => setCerrar(evento.target.value)}>Cerrar Sesion</button>
        </nav>
       
    </div>
  )
}

export default Nav
