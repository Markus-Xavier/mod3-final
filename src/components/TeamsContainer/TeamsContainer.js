import React from "react";
import './TeamsContainer.css';
import { TeamCard } from "../TeamCard/TeamCard";

export function TeamsContainer({ tournamentData, changeFavoriteTeam }) {
  let groupCards = (<p>No team data...</p>);

  if (tournamentData.length) {
    groupCards = tournamentData.map(tournament => {
      if (!tournament.teams.length) {
        return null;
      }

      const header = (<h2>{tournament.name}</h2>);
      const teamCards = tournament.teams.map(team => {
        return <TeamCard key={team.id} changeFavoriteTeam={changeFavoriteTeam} acronym={team.acronym} name={team.name} id={team.id} image_url={team.image_url}/>
      });

      return (
        <section key={tournament.slug} className='teams-container'>
          {header}
          <ul className='teams-content'>
            {teamCards}
          </ul>
        </section>
      )
    });
  }

  return (
    <section className='teams-content-container'>
      {groupCards}
    </section>
  )
}