import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getTournamentData, getFavoriteTeamMatchHistory  } from '../../ApiCalls/apiCalls';
import './App.css';
import { Header } from '../Header/Header';
import { MatchesContainer } from '../MatchesContainer/MatchesContainer';
import { TeamsContainer } from '../TeamsContainer/TeamsContainer';

export default function App() {
  const [favoriteTeam, setFavoriteTeam] = useState(-1);
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
    }
  }, [favoriteTeam]);

  const changeFavoriteTeam = (id) => {
    setFavoriteTeam(id.toString());
    localStorage.setItem('favoriteTeam', id);
  };

  return (
    <main className="App">
      <Header />
      <Routes>
      <Route path='/' element={
        <TeamsContainer tournamentData={tournamentData} changeFavoriteTeam={changeFavoriteTeam} />
      }/>
        <Route path='/match-history' element={
          <MatchesContainer matchData={favoriteTeamMatchData} favoriteTeam={favoriteTeam}/>
        }/>
        <Route path='/upcoming' element={
          <MatchesContainer />
        }/>
      </Routes>
    </main>
  );
}