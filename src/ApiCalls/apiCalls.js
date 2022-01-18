const apiKey = process.env.REACT_APP_API_KEY;
const teamAcronyms = 'GG, TSM, FLY, EG, IMT, TL, 100, CLG, DIG, C9';

// export const fetchTeamData = () => {
//   return fetch(`https://api.pandascore.co/lol/teams?filter[location]=US, GB, NL&token=${apiKey}&filter[acronym]=${teamAcronyms}`)
//     .then(response => response.json())
//     .then(data => data)
//     .catch(error => console.log(error))
// }

// export const getTournamentData = (tournamentIds) => {
//   return fetch(`https://api.pandascore.co/lol/tournaments?filter[id]=${tournamentIds}&token=${apiKey}`)
//     .then(response => response.json())
//     .then(data => data)
//     .catch(error => console.log(error))
// }

// export const fetchMatchData = (ids) => {
//   return fetch(`https://api.pandascore.co/lol/matches/past?filter[id]=${ids}&token=${apiKey}`)
//   .then(response => response.json())
//   .then(data => data)
//   .catch(error => console.log(error));
// }

// export const fetchGameData = () => {
//   fetch(`https://api.pandascore.co/lol/matches/past?token=${apiKey}`)
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.log(error));
// }

// export const getSeriesData = () => {
//   return fetch(`https://api.pandascore.co/lol/series?token=${apiKey}&filter[tier]=a`)
//     .then(response => response.json())
//     .then(data => data)
//     .catch(error => console.log(error));
// }

export const getTournamentData = () => {
  return fetch(`https://api.pandascore.co/lol/tournaments?token=${apiKey}&filter[name]=Group A, Group B, Playoffs&filter[tier]=&filter[serie_id]=4260`)
    .then(response => response.json())
    .then(data => data.reverse())
    .catch(error => console.log(error));
}

export const getFavoriteTeamMatchHistory = (favoriteTeam) => {
  return fetch(`https://api.pandascore.co/lol/matches?token=${apiKey}&filter[opponent_id]=${favoriteTeam}&filter[serie_id]=4260&filter[status]=finished`)
    .then(response => response.json())
    .then(data => data)
    .catch(error => console.log(error));
}

//match id: 548760

//game id: 229700