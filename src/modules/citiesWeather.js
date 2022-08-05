/* eslint-disable no-undef */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import img from '../images/heart.png';

const apiKey = '54a6527497256dd9bae8275602a3260a';
const likesUrl = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/cuyuahQqhc46iVj8wwV2/likes';
let nolikes;
const parent = document.getElementById('main-content');

const getLikes = async (likesUrl) => {
  await fetch(likesUrl)
    .then((result) => result.json())
    .then((json) => {
      const itemLike = json.find((item) => item.item_id === id);
      document.getElementById('like').innerHTML = itemLike.likes;
    });
};

getLikes();

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
                            <div class="likes" id="likes"><span class="like" id="like"></span></div>`;
      container.append(titlediv);
      const list = document.createElement('ul');
      list.setAttribute('class', 'currentinfo');
      list.innerHTML += `   <li class="weatherinfo">Degree: ${temp}</li>
                            <li class="weatherinfo">Weather: ${description}</li> `;
      container.append(list);
      container.innerHTML += '<button type="button" class="bg-success btn">Comment</button>';
    });
  parent.append(container);
  const heartBtn = document.getElementById('likeimg');
  heartBtn.addEventListener('click', async (e) => {
    const noOfLikes = await fetch(likesUrl, {
      method: 'POST',
      body: JSON.stringify({
        item_id: Math.floor(Math.random(1) * 1000),
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then((response) => {
      getLikes(likesUrl);
      return response.json();
    })
      .catch((err) => err);
  });
};

export default otherCitiesWeather;