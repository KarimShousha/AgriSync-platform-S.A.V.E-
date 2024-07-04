import React from 'react';
import './css/loading.css';
import loadingImage from '../images/loading.png'

const LoadingScreen = ({ imageUrl }) => {
  return (
    <div className="loading-screen">
      <div className="loader">
        <img src={loadingImage} alt="Loading" className="rotating-image" />
      </div>
    </div>
  );
}

export default LoadingScreen;