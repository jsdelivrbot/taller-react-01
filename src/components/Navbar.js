import React from 'react';

const espanol = ['Inicio','Nosotros','Contacto'];

const Navbar = () => {
  const list = espanol.map((elemento, index) => 
  <a key={index}>{elemento}</a>)
  return (
    <nav className="navbar">
      {list}
    </nav>
  );

}

export default Navbar