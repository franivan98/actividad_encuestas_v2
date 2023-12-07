import React from "react";
import { Link } from "react-router-dom";

const Menu= ({listaEncuestas}) =>{
    return(
        <nav>
            <ul>
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/encuesta/crear">CrearEncuesta</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Menu;