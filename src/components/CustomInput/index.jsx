import React from 'react';
import './CustomInput.css'; // Importa el archivo CSS

function CustomInput({ type, width, height, placeholder, isTextarea }) {
  if (isTextarea) {
    return (
      <textarea
        style={{ width: width, height: height }}
        placeholder={placeholder}
        className='custom-input'
      />
    );
  }
  return (
    <input
      type={type}
      style={{ width: width, height: height }}
      placeholder={placeholder}
      className='custom-input'
    />
  );
}

export default CustomInput;