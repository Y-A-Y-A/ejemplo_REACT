import ImagenMaomao from './assets/Maomao.webp';
import ImagenLihua from './assets/Lihua.webp';
import ImagenLishu from './assets/Lishu.webp';
import './cuerpo.css';


function Cuerpo(){
    return (
        <div id="rectangulo">
            <div className="cuadro1">
                <img src={ImagenMaomao} alt="Maomao" />
                <h2 >MaoMao</h2>
                <p>Maomao ( Maomao )猫 猫マオマオ es la protagonista de la serie "Diarios del Boticario" . Es una miembro ilegítima del Clan La, criada en el barrio rojo . Un día, unos bandidos la secuestraron y la vendieron, y de repente se encontró como sirvienta en el Palacio Imperial de Li , donde usó su sentido práctico, su aguda deducción y su profundo conocimiento de las hierbas y las enfermedades para resolver los misteriosos problemas de las Cortes Interior y Exterior</p>
            </div>
           <div className="cuadro2">
                <img src={ImagenLihua} alt="Lihua" />
                <h2 >Lihua</h2>
                <p>Lihua ( Rifa )梨花リファ es un personaje recurrente en la serie Diarios del Boticario. Como una de las consortes favoritas del Emperador , este le otorgó el título de "Consorte Sabia" ("Consorte Digna" en la traducción de Square Enix) y le dio el Pabellón de Cristal para vivir allí. Es la madre del Segundo Príncipe.</p>
            </div>
            <div className="cuadro3">
                <img src={ImagenLishu} alt="lishu" />
                <h2 >Lishu</h2>
                <p>Lishu (里樹, Riishu ) es un personaje secundario de Los Diarios del Boticario . Es miembro del Clan U y sirvió como la Consorte Virtuosa del Pabellón Diamante durante muchos años hasta su destierro en la Aldea del Ciruelo Rojo , donde se convirtió en viajera.</p>
            </div>
        </div>
    )
}

export default Cuerpo
