import img from '../images/heart.png';
import popUp from './commentPopup.js';

const apiKey = '54a6527497256dd9bae8275602a3260a';
const parent = document.getElementById('main-content');
const btn = document.getElementsByClassName('btn');
const popInfo = document.querySelector('.popUp');
const header = document.querySelector('.searchContainer');
const main = document.querySelector('.main-content');
const footer = document.querySelector('.footerContainer');

const otherCitiesWeather = async (city) => {
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
      container.innerHTML = `<div id="icondiv"><img id="imgdesc" src=${iconUrl}></div>`;
      const titlediv = document.createElement('div');
      titlediv.setAttribute('class', 'likediv');
      titlediv.innerHTML = `<span class="info">  ${place}</span>;
                            <img src=${img} class="likeimg" id="likeimg"> `;
      container.append(titlediv);
      const list = document.createElement('ul');
      list.setAttribute('class', 'currentinfo');
      list.innerHTML += `   <li class="weatherinfo">Degree: ${temp}</li>
                            <li class="weatherinfo">Weather: ${description}</li> `;
      container.append(list);
      container.innerHTML += `<button type="button" id=${data.name} class="bg-success btn">Comment</button>`;
    });
  parent.append(container);

  for (let i = 0; i < btn.length; i += 1) {
    btn[i].addEventListener('click', (e) => {
      e.preventDefault();
      const id = btn[i].getAttribute('id');
      popUp(id);
      header.classList.add('hidden');
      main.classList.add('hidden');
      footer.classList.add('hidden');
      popInfo.classList.remove('hidden');
    });
  }
};

export default otherCitiesWeather;