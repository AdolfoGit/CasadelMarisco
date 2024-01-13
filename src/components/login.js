import React , { useState}from 'react'
import './css/login.css'
import logo from './home/img/platillo.jpg'
import { Link } from 'react-router-dom'

import imagen from './home/img/platillo.jpg'

export default function Login() {
  const [nombre, setNombre] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (event) => {
      event.preventDefault();

      console.log('Formulario enviado:', { nombre, email, password });
    };
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  return (
    <div className="registro-form-container">
    <div className="registro-image-container">
      <img src={imagen} alt="Registro" className="registro-image" />
    </div>
    <div className="registro-form">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nombre">Correo electrónico :</label>
        <input
          type="email"
          id="nombre"
          name="nombre"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          required
        />
    
        <label htmlFor="email">Contraseña :</label>
        <input
          type="password"
          id="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <br/>
        <div className='juntos'>
          <p>¿No tienes Cuenta? </p><Link to='/registrar'>  Registrase</Link>
        </div>
        <button  className='btn btn-warning' type="submit">Entrar</button><br/>
        <center><Link>¿Olvidaste tu contraseña?</Link></center>
      </form>
    </div>
  </div>
    
  )
}
