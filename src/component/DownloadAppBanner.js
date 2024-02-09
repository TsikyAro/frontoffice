import React, { useState, useEffect } from 'react';
import '../assets/DownloadBanner.css';

const DownloadAppBanner = () => {
  const [visible, setVisible] = useState(true);

  // Function to hide the banner after a certain period
  const hideBanner = () => {
    setTimeout(() => {
      setVisible(false);
    },  5000); // Hide after  5 seconds
  };

  useEffect(() => {
    hideBanner();
  }, []);

  return (
    <div className={`download-app-banner ${visible ? '' : 'hide'}`}>
      Téléchargez notre application pour une expérience optimale !{' '}
      <a href="/download-app">Télécharger maintenant</a>
    </div>
  );
};

export default DownloadAppBanner;
