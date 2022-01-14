const apiKey = process.env.REACT_APP_API_KEY;

export const fetchData = () => {
  fetch(`https://api.pandascore.co/lol/teams?filter[location]=US&token=${apiKey}`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
}