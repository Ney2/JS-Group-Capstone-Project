/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import img from '../images/heart.png';
import popUp from './commentPopup.js';

const apiKey = '54a6527497256dd9bae8275602a3260a';
const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cuyuahQqhc46iVj8wwV2/likes';
const parent = document.getElementById('main-content');
const btn = document.getElementsByClassName('btn');
const popInfo = document.querySelector('.popUp');
const header = document.querySelector('.searchContainer');
const main = document.querySelector('.main-content');
const footer = document.querySelector('.footerContainer');
let nolikes = 0;
const getLikes = async () => {
  await fetch(likesUrl)
    .then((result) => result.json())
    .then((data) => {
      nolikes = data.length;
    });
  return nolikes;
};
nolikes = getLikes();
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
                            <img src=${img} class="likeimg"  id="likeimg">
                            <div class="likes" id="likes"><span class="like" id="like">${nolikes} likes</span></div>`;
      container.append(titlediv);
      const list = document.createElement('ul');
      list.setAttribute('class', 'currentinfo');
      list.innerHTML += `   <li class="weatherinfo">Degree: ${temp}</li>
                            <li class="weatherinfo">Weather: ${description}</li> `;
      container.append(list);
      container.innerHTML += `<button type="button" id=${data.name} class="bg-success btn">Comment</button>`;
    });
  parent.append(container);
  const heartBtn = document.querySelector('.likeimg');
  heartBtn.addEventListener('click', async (e) => {
    e.stopPropagation();
    const response = await fetch(likesUrl, {
      method: 'POST',
      body: JSON.stringify({
        item_id: Math.floor(Math.random(1) * 1000),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
<<<<<<< HEAD
    }).then((response) => {
      getLikes(likesUrl);
      return response.json();
    })
      .catch((err) => err);
  })

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

=======
    });
    window.location.reload();
    return response.text();
  });
>>>>>>> e6fa367 (updated js code for recording likes and displaying likes)
};

export default otherCitiesWeather;