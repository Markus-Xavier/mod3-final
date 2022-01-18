import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { getTournamentData, getFavoriteTeamMatchHistory, getFavoriteTeam  } from '../../ApiCalls/apiCalls';
import './App.css';
import { Header } from '../Header/Header';
import { MatchesContainer } from '../MatchesContainer/MatchesContainer';
import { TeamsContainer } from '../TeamsContainer/TeamsContainer';

export default function App() {
  const [favoriteTeam, setFavoriteTeam] = useState(-1);
  const [favoriteTeamData, setFavoriteTeamData] = useState([]);
  const [tournamentData, setTournamentData] = useState([]);
  const [favoriteTeamMatchData, setFavoriteTeamMatchData] = useState([]);

  useEffect(() => {
    const teamId = localStorage.getItem('favoriteTeam');
    if (teamId) {
      setFavoriteTeam(teamId)
    }

    getTournamentData()
      .then(setTournamentData);
  }, []);

  useEffect(() => {
    if (favoriteTeam) {
      getFavoriteTeamMatchHistory(favoriteTeam)
        .then(setFavoriteTeamMatchData);

      getFavoriteTeam(favoriteTeam)
        .then(data => data)
        .then(setFavoriteTeamData);
    }
  }, [favoriteTeam]);

  const changeFavoriteTeam = (id) => {
    setFavoriteTeam(id.toString());
    localStorage.setItem('favoriteTeam', id);
  };

  return (
    <main className="App">
      <Header favoriteTeamData={favoriteTeamData}/>
      <Routes>
      <Route path='/' element={
        <>
          <h2 className='location-name'><span className='vl'/>Teams</h2>
          <TeamsContainer tournamentData={tournamentData} changeFavoriteTeam={changeFavoriteTeam} />
        </>
      }/>
        <Route path='/match-history' element={
          <>
            <h2 className='location-name'><span className='vl'/>Match History</h2>
            <MatchesContainer matchData={favoriteTeamMatchData} favoriteTeam={favoriteTeam}/>
          </>
        }/>
        <Route path='/upcoming' element={
          <MatchesContainer />
        }/>
        <Route path='*' element={
          <div>You've Wandered Too Far Into the Jungle... 404 Page Not Found</div>
        } />
      </Routes>
    </main>
  );
}