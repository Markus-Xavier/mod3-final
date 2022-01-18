import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { getTournamentData } from '../../ApiCalls/apiCalls';
import './App.css';
import { Header } from '../Header/Header';
import { MatchesContainer } from '../MatchesContainer/MatchesContainer';
import { TeamsContainer } from '../TeamsContainer/TeamsContainer';

export default function App() {
  const [favoriteTeam, setFavoriteTeam] = useState(387);
  const [tournamentData, setTournamentData] = useState(null);

  useEffect(() => {
    getTournamentData()
      .then(setTournamentData);
  }, []);

  const changeFavoriteTeam = (id) => {
    setFavoriteTeam(id);
  }

  return (
    <main className="App">
      <Header />
      <Routes>
      <Route path='/' element={
        <TeamsContainer tournamentData={tournamentData} changeFavoriteTeam={changeFavoriteTeam} />
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