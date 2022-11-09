import React from "react";
import '../hojas-de-estilo/Arma.css'

function Arma(props){

    const esOperador = valor => {
        return isNaN (valor) && (valor !== '.') && (valor !== '=');
    };

    return (
        <button className={`arma-contenedor ${esOperador(props.children) ? 'armaoperador' : ''}`.trimEnd()}
                onClick={() => props.manejarClic(props.children)}>
                    {props.children}
        </button>
    );

}


export default Arma;