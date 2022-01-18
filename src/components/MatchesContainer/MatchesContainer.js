import React from "react";
import PropTypes from 'prop-types';
import './MatchesContainer.css';
import { MatchCard } from "../MatchCard/MatchCard";

export function MatchesContainer ({ favoriteTeam, matchData }) {
  const sortTeams = (a) => {
    if (a.opponent && a.opponent.id === favoriteTeam) {
      return -1;
    }
    return 1;
  };

  let matches = (<p>Waiting for match data...</p>); 
  
  if(matchData.length) {
    matches = matchData.map(match => {
      const isWin = match.winner_id === favoriteTeam;
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
MatchesContainer.propTypes = {
  favoriteTeam: PropTypes.number,
  matchData: PropTypes.array
}
