/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import _ from 'lodash';
import './style.css';
import displayLocalWeather from './modules/displayData.js';
import otherCitiesWeather from './modules/citiesWeather.js';

const cities = ['Madrid', 'Addis Ababa', 'Delhi', 'Washington', 'London'];
const search = document.getElementById('searchIcon');
const apiKey = '54a6527497256dd9bae8275602a3260a';
const parent = document.getElementById('container');
const likeimage = document.getElementById('likeimg');
window.addEventListener('load', () => {
  displayLocalWeather();
  cities.forEach((cityName) => {
    otherCitiesWeather(cityName);
  });
  const displayCityWeather = async (city) => {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    await fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        const { temp } = data.main;
        const place = data.name;
        const { description, icon } = data.weather[0];
        const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
        // const fahrenheit = (temp * 9) / 5 + 32;
        const container = document.createElement('div');
        container.classList.add('modal ');
        container.setAttribute('id', 'myModal');
        container.setAttribute('role', 'dialog');
        container.innerHTML = `<div class="modal-dialog">
        <div class="modal-content">
            <div class="modal-header" style="padding:35px 50px;">
                <span class="info">${place}</span>
                <button type="button" class="close" data-dismiss="modal">&times;</button>
             </div>
             <div class="modal-body" style="padding:40px 50px;">
                     <div id="icondiv"><img id="imgdesc" src=${iconUrl}>
                      </div>
                    <ul class="currentinfo>
                        <li class="weatherinfo">Degree: ${temp}</li>
                        <li class="weatherinfo">Weather: ${description}</li>
                    </ul>
             </div>
        </div>
    </div>`;
      });
  };

  likeimage.addEventListener('click', () => {
    alert('liked');
  });
});
