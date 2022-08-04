const apiKey = '54a6527497256dd9bae8275602a3260a';
const displayData = async () => {
  let lat;
  let lon;
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lon = position.coords.longitude;
      lat = position.coords.latitude;
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          const { temp } = data.main;
          const place = data.name;
          const { description, icon } = data.weather[0];
          const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;
          const fahrenheit = (temp * 9) / 5 + 32;
          const container = document.getElementById('weather-card');
          container.innerHTML = `<div><img id="imgdesc" src=${iconUrl}></div> `;
          const titlediv = document.createElement('div');
          titlediv.setAttribute('class', 'desc');
          const desc = document.createElement('span');
          desc.setAttribute('class', 'info');
          desc.innerHTML = place;
          titlediv.append(desc);
          const imglike = document.createElement('img');
          imglike.setAttribute('class', 'hearticon');
          titlediv.append(imglike);
          container.append(titlediv);
          const weatherdiv = document.createElement('div');
          weatherdiv.setAttribute('class', 'weatherdata');
          const list = document.createElement('ul');
          list.innerHTML = `<li class="weatherinfo">Degree: ${temp}</li>
                            <li class="weatherinfo">Fahrenheit: ${fahrenheit}</li>
                            <li class="weatherinfo">Weather: ${description}</li>
                           
                            
                            
          `;
          weatherdiv.append(list);
          const button1 = document.createElement('button');
          button1.setAttribute('id', 'comments');
          weatherdiv.append(button1);
          container.append(weatherdiv);
        });
    });
  }
};

export default displayData;