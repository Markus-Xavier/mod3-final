import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { fetchTournamentData, fetchMatchData, fetchTeamData, fetchGameData, getSeriesData } from '../../ApiCalls/apiCalls';
import './App.css';
import { Header } from '../Header/Header';
import { MatchesContainer } from '../MatchesContainer/MatchesContainer';

export default function App() {
  const [favoriteTeam, setFavoriteTeam] = useState(null);

  useEffect(() => {
    //fetchMatchData();
    //fetchTeamData();
    //fetchGameData();
    //fetchTournamentData();
    //getSeriesData();
  }, [])

  return (
    <main className="App">
      <Header />
      <Routes>
        <Route path='/match-history' element={
          <MatchesContainer />
        }/>
        <Route path='/upcoming' element={
          <MatchesContainer />
        }/>
      </Routes>
    </main>
  );
}