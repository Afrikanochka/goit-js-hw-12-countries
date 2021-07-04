export default fetchCountries;

function fetchCountries(query) {
  const BASE_URL = 'https://restcountries.eu/rest/v2/name';
  return fetch(`${BASE_URL}/${query}`).then(response => {
    if (response.ok) return response.json();
    throw new Error();
  });
}
