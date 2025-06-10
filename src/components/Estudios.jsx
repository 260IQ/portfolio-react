import React from 'react';

const dataEstudios = [
  { id: 1, titulo: "Tecnicatura en Programación", institucion: "UTN FRT", año: "2024 - Presente" },
  { id: 2, titulo: "Curso de React", institucion: "Coderhouse", año: "2024" }
];

const Estudios = () => {
  return (
    <ul>
      {dataEstudios.map(estudio => (
        <li key={estudio.id}>
          <strong>{estudio.titulo}</strong> - {estudio.institucion} ({estudio.año})
        </li>
      ))}
    </ul>
  );
};

export default Estudios;