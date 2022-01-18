import React from "react";
import PropTypes from 'prop-types';
import './Header.css';
import { Link } from "react-router-dom";
import lcs from '../../assets/images/LCS_1.png';

export function Header ({favoriteTeamData}) {
  let favoriteTeamImg = (<div>No Favorite Team Selected...</div>);

  if (favoriteTeamData && favoriteTeamData.length) {
    favoriteTeamImg = (
      <img className='fav-team-img' src={favoriteTeamData[0].image_url} alt={`${favoriteTeamData.name} Logo`}/>
    )
  }

  return (
    <header className='header-container'>
      <img className='site-logo' src={lcs}/>
      <ul className='links-container'>
        <Link to='/'>
          <li className='link-button'>Teams</li>
        </Link>
        <Link to='/match-history'>
          <li className='link-button'>Match History</li>
        </Link>
      </ul>
      {favoriteTeamImg}
    </header>
  )
}

Header.propTypes = {
  favoriteTeamData: PropTypes.array
}