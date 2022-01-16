import React, { useEffect } from 'react';
import { fetchTournamentData, fetchMatchData, fetchTeamData, fetchGameData } from '../../ApiCalls/apiCalls';
import './App.css';
import { Header } from '../Header/Header';
import { MatchesContainer } from '../MatchesContainer/MatchesContainer';

function App() {
  useEffect(() => {
    //fetchMatchData();
    //fetchTeamData();
    //fetchGameData();
  }, [])

  return (
    <div className="App">
      <Header />
      <MatchesContainer />
    </div>
  );
}

export default App;
