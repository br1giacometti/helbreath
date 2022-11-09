import React from "react";
import lbmCodingLogo from '../imagenes/background.jpg';
import '../App.css';


const Logo = (props) => (
    <div className='lbmcoding-logo-contenedor'>
        <img 
            src={lbmCodingLogo}
            className='lbmcoding-logo'
            alt='Logo de LBMCoding'
        />
        {props.imgLogo}

    </div>

);


export default Logo;