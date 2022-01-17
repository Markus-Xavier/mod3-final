import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './MatchesContainer.css';
import { MatchCard } from "../MatchCard/MatchCard";
import { getSeriesData } from "../../ApiCalls/apiCalls";

export function MatchesContainer () {
  const { pathname } = useLocation();
  const [series, setSeries] = useState(null);

  useEffect(() => {
    const seriesData = getSeriesData();
    seriesData.then(data => determinePath(data[0]))
    
  }, []);

  const determinePath = (seriesData) => {
    console.log(seriesData);
    //from series data I wanna get the tournament IDs
    console.log(getTournamentIds(seriesData));
    switch (pathname) {
      case '/match-history':
        console.log('match-history');
        //match history logic
        break;
      case '/upcoming':
        console.log('upcoming');
        //upcoming logic
        break;
      default:
        break;
    }
  }

  const getTournamentIds = (series) => {
    const tournaments = series.tournaments
    const tournamentIds = tournaments.map(tournament => tournament.id);
    return tournamentIds
  }





  return (
    <section className='matches-container'>
      
    </section>
  )
}