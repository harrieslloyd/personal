const url = 'https://api.nasa.gov/planetary/apod?api_key=A2PqnJVXsBkKFfUKUojEE1h6VaXpHlw2UKL8huIq';

fetch(url)
.then(function(data) {
    document.getElementById("img").src = data.url
    document.getElementById("text").innerHTML = data.explanation
  })
    .catch(function(error) {
    console.log(error);
  });