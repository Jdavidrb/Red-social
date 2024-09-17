import React from 'react';
import CustomInput from '../../components/CustomInput'; // Ajusta la ruta según tu estructura de proyecto
import './Create.css'; // Importa el archivo CSS

function Create() {
  return (
    <div className='Create'>
      <div className='title-description'> 
        <h1>Create Page</h1>
        <p>Projects are collaborative spaces for you and your team to work together. You can create a project for anything you like, from an event to a topic you're interested in. You can make it public or private, and you can invite anyone to join your project.</p>
      </div>
      <form>
        <div className='input-group'>
          <CustomInput 
            type='text' 
            width='400px' 
            height='60px' 
            placeholder='Project Name' 
            isTextarea={true}
          />
        </div>
        <div className='input-group'>
          <CustomInput 
            type='text' 
            width='400px' 
            height='100px' 
            placeholder='Description' 
            isTextarea={true}
          />
        </div>
        <button className='add-image-button'>Agregar Imagen</button>
      </form>
    </div>
  );
}

export default Create;