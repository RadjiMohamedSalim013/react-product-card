import React from 'react';
import produit from '../product';

const Image = () => {
  return (
    <img 
      src={produit.image} 
      alt={produit.nom} 
      style={{ width: '100%', height: 'auto' }} 
    />
  );
};

export default Image;
