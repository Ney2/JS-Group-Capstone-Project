const countertests = (cityListArray) => {
  document.body.innerHTML = '<div id ="city"> </div>';
  const weather = document.getElementById('city');

  const cityList = document.createElement('li');
  const allcities = Array.from(document.querySelectorAll('#city li'));
  cityListArray.forEach((item) => {
    cityList.innerHTML = `${item.name} `;
    weather.appendChild(cityList);
    allcities.push(cityList);
  });
  return allcities;
};

const apiMock2 = (id, name) => {
  const cityListArray = [{
    id: '1',
    name: 'Madrid',
  }, {
    id: '2',
    name: 'Berlin',
  },
  ];
  const city = {
    id,
    name,
  };
  cityListArray.push(city);
  countertests(cityListArray);
  return cityListArray;
};

export { apiMock2, countertests };
