import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import PagAdmin from "../pages/PagAdmin";
import CrudUsuarios from "../pages/CrudUsuarios";
import FormSesion from "../components/FormSesion";

const Routing =()=> {

    return(
        <Router>
            <Routes>
                 <Route path="/" element={<CrudUsuarios />} />
                <Route path="/registro" element={<CrudUsuarios/>}/>
                 <Route path="/admin" element={<PagAdmin/>}/>
                 <Route path="/login" element={<FormSesion/>}/>
            </Routes>
        </Router>

    )

}

export default Routing