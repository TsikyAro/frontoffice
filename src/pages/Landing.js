import React, { useEffect } from 'react';
import '../assets/Landing.css';

const Landing = () => {
  useEffect(() => {
    const menuToggle = document.querySelector('.toggle');
    const showcase = document.querySelector('.showcase');

    const handleToggleClick = () => {
      menuToggle.classList.toggle('active');
      showcase.classList.toggle('active');
    };

    menuToggle.addEventListener('click', handleToggleClick);

    return () => {
      menuToggle.removeEventListener('click', handleToggleClick);
    };
  }, []);

  return (
    <div>
    <section className="showcase" style={{ backgroundImage: 'url("../assets/img/landing.jpg")' }}>
        <header>
        <h2 class="logo">Occasion'Auto</h2>
        <div class="toggle"></div>
        </header>
        <div class="overlay"></div>
        <div class="text">
        <h2>Conduisez votre histoire, </h2> 
        <h3>explorez vos horizons</h3>
        <p>Des voitures d'occasion exceptionnelles, une expérience d'achat inégalée.</p>
        <a href="/home">Explore</a>
        </div>
        
    </section>
      <div class="menu">
          <ul>
          <li><a href="/home">Home</a></li>
          <li><a href="/formulaire">Voir les Anonces</a></li>
          </ul>
      </div>
    </div>
  );
};

export default Landing;
