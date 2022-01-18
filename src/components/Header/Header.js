import React from "react";
import './Header.css';
import historyImg from '../../assets/images/history.svg'
import { Link } from "react-router-dom";

export function Header ({favoriteTeamData}) {
  let favoriteTeamImg = (<div>No Favorite Team Selected...</div>);
  console.log(favoriteTeamData)

  if (favoriteTeamData.length) {
    favoriteTeamImg = (
      <img className='fav-team-img' src={favoriteTeamData[0].image_url} alt={`${favoriteTeamData.name} Logo`}/>
    )
  }

  return (
    <header className='header-container'>
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