import miImagen from './assets/logo.png';
function Encabezado(){
    return (
        <div>
            <Logotipo/>
            <Menu/>
        </div>
    )
}

function Logotipo(){
    return(
        <div>
            <img src={miImagen} alt="logotipo" />
        </div>
    )
}

function Menu(){
    return(
        <div>
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
        <div>
            <ul>
                <li>Facebook</li>
                <li>Whatsapp</li>
                <li>Instagram</li>
                <li>Youtube</li>
            </ul>
        </div>
    )
}


export default Encabezado