// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import displayLocalWeather from './modules/displayData.js';
import otherCitiesWeather from './modules/citiesWeather.js';

const cities = ['Madrid', 'Addis Ababa', 'Delhi', 'Washington', 'London'];

window.addEventListener('load', () => {
  displayLocalWeather();
  cities.forEach((cityName) => {
    otherCitiesWeather(cityName);
  });
});
