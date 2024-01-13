import React from 'react';
import platillo from './home/img/foto2.png'
import wave from './home/img/wave.png'
import imagen1 from './home/img/hamburguesa.jpg';
import imagen2 from './home/img/platillo.jpg';
import imagen3 from './home/img/logo.jpg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import PlatillosHome from './platillosHome';
import Productos2 from './producto2';
import MansorryLayoud from './mansorryLayoud';
import Pinterest from './pinteres'
const Home = () => {
  
  return (
   <>
   <section className='home'>
      <di className='container flex'>
         <di className='left '>
            <h1>BROCHETA DE CAMARON
            </h1>
            <div className='socialIcon'>
               <i className='fab fa-facebook-f facebook'></i>
               <i className='fab fa-instagram instagram'></i>
               <i className='fab fa-twitter twitter'></i>
            </div><br/>
            <p>¡Disfruta de estas brochetas de camarón a la parrilla con la frescura y el sabor tropical de la salsa de mango y aguacate! Puedes decorar con hojas de cilantro adicionales y rodajas de limón para dar un toque final.</p>
            <button className='btn btn-warning espacio'>ORDENAR</button><button className='btn btn-outline-warning'>Registrarse</button>
         </di>
         <div className='rigth'>
            <div className='img'>
                  <img src={platillo}/>
            </div>
         </div>
      </di>
   </section>
   <PlatillosHome/>
   <Pinterest/>
   </>
  );
};

export default Home;
