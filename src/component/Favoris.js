import React, { useState } from 'react';
import '../assets/Favoris.css'; 

const FavoriteIcon = ({id}) => {
    const [isSelected, setIsSelected] = useState(false);

    const toggleFavorite = () => {
      setIsSelected(!isSelected);
      console.log(`${isSelected ? 'Removing' : 'Adding'} ${id}`);
    };

  return (
      <div id={{id}} data-descr="add to favorites"  className={`icon-heart ${isSelected ? 'selected' : ''}`} onClick={toggleFavorite}>
        <span>&#10084;</span>
      </div>
  );
};

export default FavoriteIcon;
