import React from "react";
import './MatchesContainer.css';
import { MatchCard } from "../MatchCard/MatchCard";

export function MatchesContainer ({ favoriteTeam, matchData }) {

  let matches = (<p>No match data...</p>); 
  
  if(matchData.length) {
    matches = matchData.map(match => {
      return <MatchCard key={match.id} teams={match.opponents} winner_id={match.winner_id} id={match.id} favoriteTeam={favoriteTeam}/>
    });
  }

  return (
    <section className='matches-container'>
      {matches}
    </section>
  )
}