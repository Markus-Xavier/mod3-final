import React from "react";
import './TeamsContainer.css';
import { TeamCard } from "../TeamCard/TeamCard";

export function Teams({ allTeams }) {
  console.log(allTeams);
  const groupARef = ['C9', '100', 'TSM', 'FLY', 'GG'];
  const groupBRef = ['CLG', 'TL', 'EG', 'IMT', 'DIG'];

  // const buildGroupCards = () => {
  //   if (!allTeams) {
  //     return (
  //       <div>No team data</div>
  //     ) 
  //   }

  //   console.log(allTeams.reduce((teamGroups, team) => {
  //     if(groupARef.includes(team.acronym)) {
  //       console.log(teamGroups.groupA)
  //     }
  //   }, {groupA: [], groupB: []}))
  // }

  let groupCards = (<div>No team data</div>);

  if (allTeams) {
        allTeams.reduce((teamGroups, team) => {
      if(groupARef.includes(team.acronym)) {
        teamGroups.groupA.push(<TeamCard acronym={team.acronym}/>)
      } else {
        teamGroups.groupB.push(<TeamCard acronym={team.acronym}/>)
      } 
      return teamGroups;
    }, {groupA: [], groupB: []})
  }

  return (
    <section className='teams-content-container'>
      {groupCards}
      <div>
        <h1>Group A</h1>
        {groupCards.groupA}
      </div>
      <div>
        <h1>Group B</h1>
        {groupCards.groupB}
      </div>
    </section>
  )
}