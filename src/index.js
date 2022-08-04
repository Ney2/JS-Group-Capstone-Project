// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import displayLocalWeather from './modules/displayData.js';
import otherCitiesWeather from './modules/citiesWeather.js';

const cities = ['Madrid', 'Addis Ababa', 'Delhi', 'Washington', 'London'];
const search = document.getElementById('searchIcon');
const apiKey = '54a6527497256dd9bae8275602a3260a';
const parent = document.getElementById('main-content');
window.addEventListener('load', () => {
  displayLocalWeather();
  cities.forEach((cityName) => {
    otherCitiesWeather(cityName);
  });

  const displayCityWeather = async (city) => {
    const container = document.createElement('div');
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    await fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const { temp } = data.main;
        const place = data.name;
        const { description, icon } = data.weather[0];
        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        // const fahrenheit = (temp * 9) / 5 + 32;

        container.setAttribute('id', 'city-weather');
        container.innerHTML = `<div id="icondiv"><img id="imgdesc" src=${iconUrl}><span class="info">
                             ${place}</span></div> `;
        const list = document.createElement('ul');
        list.setAttribute('class', 'currentinfo');
        list.innerHTML = `<li class="weatherinfo">Degree: ${temp}</li>
                            <li class="weatherinfo">Weather: ${description}</li> `;
        container.append(list);
      });
    parent.append(container);
  };
  search.addEventListener('click', (e) => {
    e.preventDefault();
    const cityName = document.getElementById('cityname').value;
    cities.push(cityName);
    displayCityWeather(cityName);
    document.getElementById('cityname').value = '';
  });
});
