const apiKey = process.env.REACT_APP_API_KEY;

export const getTournamentData = () => {
  return fetch(`https://api.pandascore.co/lol/tournaments?token=${apiKey}&filter[name]=Group A, Group B, Playoffs&filter[tier]=&filter[serie_id]=4260`)
    .then(response => response.json())
    .then(data => data.reverse())
    .catch(error => console.log(error));
}

export const getFavoriteTeamMatchHistory = (favoriteTeam) => {
  return fetch(`https://api.pandascore.co/lol/matches?token=${apiKey}&filter[opponent_id]=${favoriteTeam}&filter[serie_id]=4260&filter[status]=finished`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      return data;
    } )
    .catch(error => console.log(error));
}

export const getFavoriteTeam = (favoriteTeamId) => {
  return fetch(`https://api.pandascore.co/lol/teams?token=${apiKey}&filter[id]=${favoriteTeamId}`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error));
}
