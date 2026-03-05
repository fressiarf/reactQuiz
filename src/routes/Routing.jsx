import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from "../components/Home";
import PagAdmin from "../pages/PagAdmin";
import CrudUsuarios from "../pages/CrudUsuarios";
import InicioSesion from "../pages/InicioSesion"

const Routing =()=> {

    return(
        <Router>
            <Routes>
                 <Route path="/" element={<Home />} />
                 <Route path="/home" element={<Home/>}/>
                <Route path="/registro" element={<CrudUsuarios/>}/>
                 <Route path="/admin" element={<PagAdmin/>}/>
                 <Route path="/login" element={<InicioSesion/>}/>
            </Routes>
        </Router>

    )

}

export default Routing