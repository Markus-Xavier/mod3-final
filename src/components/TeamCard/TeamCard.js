import React from "react";
import './TeamCard.css';

export function TeamCard({acronym, name, id, image_url, changeFavoriteTeam}) {
  const handleOnClick = () => {
    changeFavoriteTeam(id);
  };

  return (
    <li key={id} onClick={handleOnClick} className='hover-animation'>
      <img className='team-logo-card' src={image_url} alt={`${name} Logo`} />
      <div className='team-acronym'>{acronym}</div>
      <div>{name}</div>
    </li>
  )
}