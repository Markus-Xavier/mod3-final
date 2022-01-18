import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './MatchesContainer.css';
import { MatchCard } from "../MatchCard/MatchCard";
import { fetchMatchData, getSeriesData, getTournamentData } from "../../ApiCalls/apiCalls";

export function MatchesContainer ({ favoriteTeam }) {
  const { pathname } = useLocation();
  const [matchData, setMatchData] = useState(null);


  useEffect(() => {
    console.log('dog');

  }, []);

  useEffect(() => {

  }, [matchData])

  const determinePath = (seriesData) => {

    switch (pathname) {
      case '/match-history':

        break;
      case '/upcoming':
        console.log('upcoming');
        //upcoming logic
        break;

      default:
        break;
    }
  }

  const getDataIds = (dataSet) => {
    const dataSetIds = dataSet.map(data=> data.id);
    return dataSetIds
  }

  const dateCompare = (date1, date2) => {
    //returns true if date 2 is later otherwise returns false
    return date2 > date1;
  }

  const dateSort = (a, b) => {
    return new Date(a.begin_at) - new Date(b.begin_at);
  }

  const filterDataByDates = (dataSet) => {
    return dataSet.filter(data => {
      const tournamentDate = new Date(data.begin_at);
      return !dateCompare(Date.now(), tournamentDate);
    });
  }

  // const filterByFavoriteTeam = (matches) => {
  //   return matches.filter(match => {
  //     if (match.opponents[0].opponent.id === favoriteTeam || match.opponents[1].opponent.id === favoriteTeam) {
  //       return true;
  //     } else {
  //       return false;
  //     }
  //   })
  // }

  const matchCards = () => {
    if(matchData) {
      return matchData.map(data => {
        return (
          <MatchCard teams={data.opponents} winner_id={data.winner_id} key={data.id} favoriteTeam={favoriteTeam}/>
        )
      })
    }
  }

  return (
    <section className='matches-container'>
      
    </section>
  )
}