const apiKey = process.env.REACT_APP_API_KEY;
const baseUrl = 'https://api.codetabs.com/v1/proxy?quest=' + 'https://api.pandascore.co/lol/';

const eatConsoleError = (error) => {
  throw error;
}

const checkIfOk = (response) => {
  if (response.ok) {
    return response.json()
  }
  throw new Error('Something went wrong...')
}

export const getTournamentData = () => {
  return fetch(`${baseUrl}tournaments?token=${apiKey}&filter[name]=Group A, Group B, Playoffs&filter[tier]=&filter[serie_id]=4260`)
    .then(checkIfOk)
    .catch(eatConsoleError)
}

export const getFavoriteTeamMatchHistory = (favoriteTeam) => {
  return fetch(`${baseUrl}matches?token=${apiKey}&filter[opponent_id]=${favoriteTeam}&filter[serie_id]=4260&filter[status]=finished`)
    .then(checkIfOk)
    .catch(eatConsoleError)
}

export const getFavoriteTeam = (favoriteTeamId) => {
  return fetch(`${baseUrl}teams?token=${apiKey}&filter[id]=${favoriteTeamId}`)
    .then(checkIfOk)
    .catch(eatConsoleError)
}

export const brokenApiCall = () => {
  return fetch(`${baseUrl}teams`)
    .then(checkIfOk)
    .catch(eatConsoleError)
}
