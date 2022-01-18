import React from "react";
import './TeamsContainer.css';
import { TeamCard } from "../TeamCard/TeamCard";

export function Teams({ allTeams }) {
  console.log(allTeams);
  const groupARef = ['C9', '100', 'TSM', 'FLY', 'GG'];
  const groupBRef = ['CLG', 'TL', 'EG', 'IMT', 'DIG'];

  const buildGroupCards = () => {
    if (!allTeams) {
      return (
        <div>No team data</div>
      ) 
    }

    allTeams.reduce((teamGroups, team) => {
      if(groupARef.includes(team.acronym)) {
        return <TeamCard acronym={team.acronym}/>
      }
    }, {groupA: [], groupB: []})
  }

  return (
    <section className='teams-content-container'>
      {buildGroupCards()}
    </section>
  )
}