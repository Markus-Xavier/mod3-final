import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import './MatchesContainer.css';
import { MatchCard } from "../MatchCard/MatchCard";
import { fetchMatchData, getSeriesData, getTournamentData } from "../../ApiCalls/apiCalls";

export function MatchesContainer ({ favoriteTeam }) {
  const { pathname } = useLocation();
  const [matchData, setMatchData] = useState(null);
  const [dog, setDog] = useState(null);

  useEffect(() => {
    console.log('dog');
    const seriesData = getSeriesData();
    seriesData
      .then(data => determinePath(data[0]))
      .catch(error => console.log(error));
  }, []);

  useEffect(() => {
    console.log('dog boy')
    setDog(matchCards())
  }, [matchData])

  const determinePath = (seriesData) => {
    //from series data I wanna get the tournament IDs
    const tournamentIds = getDataIds(seriesData.tournaments).join(', ');
    const tournamentData = getTournamentData(tournamentIds)

    switch (pathname) {
      case '/match-history':
        tournamentData
          .then(getPastMatchData)
          .then(pastMatchData => combineData(pastMatchData))
          .then(combinedData => combinedData.sort(dateSort))
          .then(sortedCombinedData => {
            const matchIds = getDataIds(sortedCombinedData).join(', ');
            fetchMatchData(matchIds)
              .then(filterByFavoriteTeam)
              .then(setMatchData)

          })
          .catch(error => console.log(error));
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

  const filterByFavoriteTeam = (matches) => {
    return matches.filter(match => {
      if (match.opponents[0].opponent.id === favoriteTeam || match.opponents[1].opponent.id === favoriteTeam) {
        return true;
      } else {
        return false;
      }
    })
  }

  const getPastMatchData = (tournaments) => {
    const filteredPastTournaments = filterDataByDates(tournaments);
    return filteredPastTournaments.map(tournament => filterDataByDates(tournament.matches));
  }

  const combineData = (data) => {
    return data.reduce((prev, data) => {
      if(!prev.length) {
        return [...data]
      }  else {
        return [...prev, ...data];
      }
    }, []);
  }

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
      {dog}
    </section>
  )
}