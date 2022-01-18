import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { fetchTournamentData, fetchMatchData, fetchTeamData, fetchGameData, getSeriesData, getTournamentTeamData } from '../../ApiCalls/apiCalls';
import './App.css';
import { Header } from '../Header/Header';
import { MatchesContainer } from '../MatchesContainer/MatchesContainer';
import { Teams } from '../TeamsContainer/TeamsContainer';

export default function App() {
  const [favoriteTeam, setFavoriteTeam] = useState(387);
  const [allTeams, setAllTeams] = useState(null);

  useEffect(() => {
    getTournamentTeamData();
    fetchTeamData()
      .then(setAllTeams)
  }, [])

  return (
    <main className="App">
      <Header />
      <Routes>
      <Route path='/' element={
        <Teams allTeams={allTeams}/>
      }/>
        <Route path='/match-history' element={
          <MatchesContainer favoriteTeam={favoriteTeam}/>
        }/>
        <Route path='/upcoming' element={
          <MatchesContainer />
        }/>
      </Routes>
    </main>
  );
}