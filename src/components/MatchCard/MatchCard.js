import React from "react";
import './MatchCard.css';

export function MatchCard ({ teams, winner_id, id, favoriteTeam }) {
  return (
    <article className='match-container'>
      <div className='match-content-container'>
        <h1>{teams[0].opponent.acronym}</h1>
        <img className='team-logo' src={teams[0].opponent.image_url} alt='Team Logo' />
        <div>vs</div>
        <img className='team-logo' src={teams[1].opponent.image_url} alt='Team Logo' />
        <h1>{teams[1].opponent.acronym}</h1>
      </div>
    </article>
  )
}