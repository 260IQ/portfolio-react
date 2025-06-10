import React from 'react';

const skills = ['Trabajo en equipo', 'Comunicación', 'Responsabilidad', 'Pensamiento crítico'];

const SoftSkills = () => {
  return (
    <ul>
      {skills.map((skill, index) => (
        <li key={index}>{skill}</li>
      ))}
    </ul>
  );
};

export default SoftSkills;