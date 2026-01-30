import miImagen from './assets/logo.png';
import iconoFacebook from './assets/facebook.png';
import iconoInstagram from './assets/instagram.png';
import iconoYoutube from './assets/youtube.png';

import './encabezado.css';


function Encabezado(){
    return (
        <div className='encabezado'>
            <Logotipo/>
            <Menu/>
            <Redes/>
        </div>
    )
}

function Logotipo(){
    return(
        <div className='logo'>
            <img src={miImagen} alt="logotipo" />
        </div>
    )
}

function Menu(){
    return(
        <div className='menu'>
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Productos</li>
                <li>Contacto</li>
                <li>Sucursales</li>
            </ul>
        </div>
    )
}

function Redes(){
    return(
        <div className='redes'>
            <ul>
                <li><img src={iconoFacebook} alt="Facebook" /></li>
                <li><img src={iconoInstagram} alt="Instagram" /></li>
                <li><img src={iconoYoutube} alt="YouTube" /></li>
            </ul>
        </div>
    )
}


export default Encabezado