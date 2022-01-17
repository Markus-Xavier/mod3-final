import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './MatchesContainer.css';
import { MatchCard } from "../MatchCard/MatchCard";
import { getSeriesData, getTournamentData } from "../../ApiCalls/apiCalls";

export function MatchesContainer () {
  const { pathname } = useLocation();
  const [matchData, setMatchData] = useState(null);

  useEffect(() => {
    const seriesData = getSeriesData();
    seriesData.then(data => determinePath(data[0]))
    
  }, []);

  const determinePath = (seriesData) => {
    //from series data I wanna get the tournament IDs
    const tournamentIds = getTournamentIds(seriesData).join(', ');
    const tournamentData = getTournamentData(tournamentIds)

    switch (pathname) {
      case '/match-history':
        console.log('match-history');
        //match history logic
        tournamentData
          .then(getPastMatchData)
          .then(pastMatchData => setMatchData(pastMatchData));
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

  const dateCompare = (date1, date2) => {
    //returns true if date 2 is later otherwise returns false
    return date2 > date1;
  }

  const filterDataByDates = (dataSet) => {
    return dataSet.filter(data => {
      const tournamentDate = new Date(data.begin_at);
      return !dateCompare(Date.now(), tournamentDate);
    });
  }

  const getPastMatchData = (tournaments) => {
    const filteredPastTournaments = filterDataByDates(tournaments);
    return filteredPastTournaments.map(tournament => filterDataByDates(tournament.matches));
  }

  return (
    <section className='matches-container'>
      
    </section>
  )
}