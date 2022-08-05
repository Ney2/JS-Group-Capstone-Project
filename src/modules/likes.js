/* eslint-disable linebreak-style */
/* eslint-disable no-alert */
/* eslint-disable no-unused-vars */
const addLike = (id) => {
  fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/IRmcCRWo9KSYZTxv7MqM/likes', {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify({
      item_id: id,
    }),
  })
    .then((response) => response.text())
    .then((json) => json);
};

export default addLike;