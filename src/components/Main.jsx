import React from 'react';
import Estudios from './Estudios';
import SoftSkills from './SoftSkills';

const Main = () => {
  return (
    <main>
      <section>
        <p>Soy Francisco, estudiante de Programación en la Facultad Regional Tucumán...</p>
      </section>

      <section id="estudios">
        <h2>Estudios</h2>
        <Estudios />
      </section>

      <section id="softskills">
        <h2>Soft Skills</h2>
        <SoftSkills />
      </section>

      {/* Más secciones: Proyectos, Experiencia, etc. */}
    </main>
  );
};

export default Main;