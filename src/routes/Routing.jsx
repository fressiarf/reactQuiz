import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "../pages/Home";
import PagAdmin from "../pages/PagAdmin";
import CrudUsuarios from "../pages/CrudUsuarios";
import InicioSesion from "../pages/InicioSesion"
import PerfilUsuario from "../pages/PerfilUsuario"
import PagAdopcion from "../pages/PagAdopcion"
import PagFormAdopcion from "../pages/PagFormAdopcion"

const Routing =()=> {

    return(
        <Router>
            <Routes>
                 <Route path="/" element={<Home />} />
                 <Route path="/home" element={<Home/>}/>
                <Route path="/registro" element={<CrudUsuarios/>}/>
                 <Route path="/admin" element={<PagAdmin/>}/>
                 <Route path="/login" element={<InicioSesion/>}/>
                 <Route path="/perfil" element={<PerfilUsuario/>}/>
                 <Route path="/adopcion" element={<PagAdopcion/>}/>
                 <Route path="/formulario-adopcion" element={<PagFormAdopcion/>}/>
            </Routes>
        </Router>

    )

}

export default Routing