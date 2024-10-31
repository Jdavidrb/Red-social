import React, { useState } from 'react';
import CustomInput from '../../components/CustomInput'; // Ajusta la ruta según tu estructura de proyecto
import './Create.css'; // Importa el archivo CSS

function Create() {
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

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
            height='10px' 
            placeholder='Project Name' 
            isTextarea={true}
          />
        </div>
        <div className='input-group'>
          <CustomInput 
            type='text' 
            width='400px' 
            height='140px' 
            placeholder='Description' 
            isTextarea={true}
          />
        </div>

        {/* Input para la cantidad de colaboradores */}
        <div className='input-group'>
          <CustomInput 
            type='number' 
            width='400px' 
            height='10px' 
            placeholder='Number of Collaborators' 
          />
        </div>

        {/* Texto descriptivo y selector de archivo */}
        <p className="image-upload-text">Project image:</p>
        <input
          type="file"
          id="image-upload"
          className="image-upload-input"
          accept="image/*"
          onChange={handleImageChange}
        />

        {/* Vista previa de la imagen */}
        {imagePreview && (
          <div className="image-preview">
            <img src={imagePreview} alt="Vista previa de la imagen" />
          </div>
        )}

        {/* Botón de Crear Proyecto */}
        <button type="submit" className="create-project-button">
          Create Project
        </button>
      </form>
    </div>
  );
}

export default Create;
