import { refs } from './refs.js';
import fetchCountries from './fetchCountries.js';
import countryTpl from '../tpl/countryCard.hbs';
import countryTplList from '../tpl/countryList';

import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { alert } from '@pnotify/core';

const debounce = require('lodash.debounce');

refs.input.addEventListener('input', debounce(onInputSearch, 500));

function onInputSearch(e) {
  resetInputSearch();

  if (refs.input.value !== '') {
    fetchCountries(refs.input.value).then(renderCountry).catch(console.error);
  }
}

function resetInputSearch() {
  refs.country.innerHTML = '';
}
function countryMarkup(tpl, countries) {
  refs.country.insertAdjacentHTML('beforeend', tpl(countries));
}

function renderCountry(countries) {
  if (countries.length === 1) {
    countryMarkup(countryTpl, countries);
    console.log(countries);
  } else if (countries.length <= 10) {
    countryMarkup(countryTplList, countries);
  }
  if (countries.length > 10) {
    alert({
      type: 'error',
      text: 'Too many matches found. Please enter a more specific query!',
    });
  }
}
