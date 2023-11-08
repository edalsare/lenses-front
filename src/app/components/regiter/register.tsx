'use client'
import { useState } from 'react';

const Register = () =>{
    const [color, setColor] = useState('white');

    const changeColor = () => {
      setColor('#'+Math.floor(Math.random()*16777215).toString(16));
    };
  
    return (
      <div style={{ backgroundColor: color, height: '100vh', width: '100%' }} onKeyDown={changeColor}  tabIndex={0}>
        <p>Presiona cualquier tecla para cambiar el color de fondo.</p>
      </div>
    );
}
export default Register; 