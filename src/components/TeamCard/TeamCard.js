import React from "react";
import './TeamCard.css';

export function TeamCard({acronym, name, id, image_url, changeFavoriteTeam}) {
  const handleOnClick = () => {
    changeFavoriteTeam(id);
  };

  return (
    <li key={id} onClick={handleOnClick}>
      <img className='team-logo' src={image_url} alt={`${name} Logo`} />
      <div>{acronym}</div>
      <div>{name}</div>
    </li>
  )
}