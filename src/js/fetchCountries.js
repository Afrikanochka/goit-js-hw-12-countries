export default fetchCountries;

const BASE_URL = 'https://restcountries.eu/rest/v2/name';

function fetchCountries(query) {
  return fetch(`${BASE_URL}/${query}`).then(response => {
    if (response.ok) return response.json();
    throw new Error();
  });
}
