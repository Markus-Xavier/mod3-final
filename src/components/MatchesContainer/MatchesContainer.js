import React from "react";
import './MatchesContainer.css';
import { MatchCard } from "../MatchCard/MatchCard";

export function MatchesContainer ({ favoriteTeam, matchData }) {
  const sortTeams = (a) => {
    console.log(a, favoriteTeam)
    if (a.opponent.id.toString() === favoriteTeam) {
      return -1;
    }
    return 1;
  };

  let matches = (<p>No match data...</p>); 
  
  if(matchData.length) {
    matches = matchData.map(match => {
      const isWin = match.winner_id.toString() === favoriteTeam;
      const sortedOpponents = match.opponents.sort(sortTeams);
      return <MatchCard key={match.id} teams={sortedOpponents} isWin={isWin} id={match.id}/>
    });
  }

  return (
    <section className='matches-container'>
      {matches}
    </section>
  )
}