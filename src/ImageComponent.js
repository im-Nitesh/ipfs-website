// src/ImageComponent.js

import React from 'react';
import './ImageComponent.css';
import myImage from './my-image.jpg';

function ImageComponent() {
  return (
    <div className="image-container">
      <img src={myImage} alt="Description of the image" className="responsive-image" />
    </div>
  );
}

export default ImageComponent;
