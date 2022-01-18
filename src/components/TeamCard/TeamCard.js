import React from "react";
import PropTypes from 'prop-types';
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
TeamCard.propTypes = {
  acronym: PropTypes.string,
  changeFavoriteTeam: PropTypes.func,
  id: PropTypes.number,
  image_url: PropTypes.string,
  name: PropTypes.string
}
