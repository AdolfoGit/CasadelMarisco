import React, { useState } from 'react';
import './css/registro.css'
import imagen from './home/img/platillo.jpg'
const Registrar = () => {
    const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');
    const [apellidoM, setApellidoMa] = useState('');
    const [telefono, setTelefono] = useState('');
    const [apellido, setApellido] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();

      console.log('Formulario enviado:', { nombre, email, password });
    };
  
    return (
      <div className="registro-form-container">
        <div className="registro-image-container">
          <img src={imagen} alt="Registro" className="registro-image" />
        </div>
        <div className="registro-form">
          <h1>Registro</h1>
          <form >
            <label htmlFor="nombre">Nombre :</label>
            <input
              type="text"
          
             
              required
            />
             <label htmlFor="nombre">Apellido Paterno:</label>
            <input
              type="text"
           
             
              required
            />
  
            <label htmlFor="nombre">Apellido Materno:</label>
            <input
              type="text"
           
            
              required
            />
  
            <label htmlFor="email">Correo electrónico:</label>
            <input
              type="email"
            />
             <label htmlFor="email">Telefono:</label>
            <input
              type="num"
           
            />
  
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
            
          
              required
            />
             <label htmlFor="password">Repetir Contraseña:</label>
            <input
              type="password"
            
             
              required
            />
            <br/>
            <button type="submit">Registrarse</button>
          </form>
        </div>
      </div>
    );
  };
export default Registrar;
