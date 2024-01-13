import React from 'react'
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight'
import platillo from '../components/home/img/cotel.jpg'
import platillo2 from '../components/home/img/hamburguesa.jpg'
import platillo3 from '../components/home/img/bebida.jpg'

import Rating from 'react-rating-stars-component';
import { useState } from 'react'
export default function PlatillosHome() {

    const [rating, setRating] = useState(0);

    const handleRatingChange = (newRating) => {
        console.log(`Calificación: ${newRating}`);
        // Aquí puedes manejar la lógica para almacenar la calificación en tu aplicación
        setRating(newRating);
    };

  return (
    <>
        <section className='blog services'>
            <div className='container topMarign'>
                <div className='heading'>
                <h1>MEJORES PLATILLOS</h1>
                    <h3>Son los post de facebook de los platillos mas solicitados en nuestro restaurante, son una delicia culinaria</h3>
                </div>
                <div className='contain grid topMarign'>
                    
                    <di className='box'>
                        <di className='img'>
                            <img src={platillo}/>
                        </di>
                        <div className='text'>
                            <div className='seleccion'>
                                <span>$76</span>
                                <Rating
                               count={5}
                               value={5}  // Establecer el valor predeterminado en 5 estrellas
                               onChange={handleRatingChange}
                               size={24}
                               activeColor='#FFD700'  // Amarillo
                               isHalf={false}  // Desactivar medias estrellas
                               edit={false} 
                                />
                            </div>
                            <h2>Hamburguesa de camaron con papas fritas</h2>
                            <a href=''> Leer Mas<KeyboardDoubleArrowRightIcon className='icon'/></a>
                        </div>
                    </di>
                    <di className='box'>
                        <di className='img2'>
                            <img src={platillo2}/>
                        </di>
                        <div className='text'>
                             <div className='seleccion'>
                                <span>$97</span>
                                <Rating
                                 count={5}
                                 value={5}  // Establecer el valor predeterminado en 5 estrellas
                                 onChange={handleRatingChange}
                                 size={24}
                                 activeColor='#FFD700'  // Amarillo
                                 isHalf={false}  // Desactivar medias estrellas
                                 edit={false} 
                                />
                            </div>
                            <h2>Cotel de camarones con una salsa especial</h2>
                            <a href=''> Leer Mas<KeyboardDoubleArrowRightIcon className='icon'/></a>
                        </div>
                    </di>
                      
                    <di className='box'>
                        <di className='img'>
                            <img src={platillo3}/>
                        </di>
                        <div className='text'>
                            <div className='seleccion'>
                                <span>$169</span>
                                <Rating
                                 count={5}
                                 value={5}  // Establecer el valor predeterminado en 5 estrellas
                                 onChange={handleRatingChange}
                                 size={24}
                                 activeColor='#FFD700'  // Amarillo
                                 isHalf={false}  // Desactivar medias estrellas
                                 edit={false} 
                                />
                            </div>
                            <h2>Langosta ahumada en una cama de lechuga</h2>
                            <a href=''> Leer Mas<KeyboardDoubleArrowRightIcon className='icon'/></a>
                        </div>
                    </di>
                      
                      
                </div>
            </div>
        </section>
    </>
  )
}
