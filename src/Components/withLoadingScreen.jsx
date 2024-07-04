import React, { useState, useEffect } from 'react';
import LoadingScreen from './loading';

const withLoadingScreen = (WrappedComponent) => {
  return (props) => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const timer = setTimeout(() => setLoading(false), 2000); // Simulate loading delay

      return () => clearTimeout(timer);
    }, []);

    if (loading) {
      return <LoadingScreen />;
    }

    return <WrappedComponent {...props} />;
  };
};

export default withLoadingScreen;
