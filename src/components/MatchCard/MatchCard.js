import React from "react";
import './MatchCard.css';

export function MatchCard ({ teams, isWin, id}) {
  const winStyling = (isWin ? 'victory-background' : 'defeat-background') + ' match-container';

  return (
    <article className={winStyling}>
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