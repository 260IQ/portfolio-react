import React from 'react';
import '../styles/App.css';
import yoese from '../img/yoese.jpg';

const Header = () => {
  return (
    <header id="inicio">
       <img src={yoese} alt="Foto personal" className="foto" />
      <h1>Francisco Palacios</h1>
      <h4>"lo que la gente considera defectos son en realidad talentos a los que aun 
        no han encontrado un uso adecuado"</h4>
    </header>
  );
};

export default Header;