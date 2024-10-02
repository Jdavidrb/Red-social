import React from 'react';
import './Label.css'; // Importa el archivo CSS

const Label = ({ text, width, height }) => {
  return (
    <div className="label" style={{ width: width, height: height }}>
      {text}
    </div>
  );
};

export default Label;