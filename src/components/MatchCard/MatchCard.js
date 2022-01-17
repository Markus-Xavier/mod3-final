import React from "react";
import './MatchCard.css';

export function MatchCard ({ teams, winner_id }) {
  return (
    <article className='match-container'>
      <h1>{teams[0].opponent.acronym}</h1>
    </article>
  )
}