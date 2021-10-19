function fetchUrl() {
  const url = 'https://api.nasa.gov/planetary/apod?api_key=A2PqnJVXsBkKFfUKUojEE1h6VaXpHlw2UKL8huIq';
  fetch(url)
  .then((resp) => resp.json())
  .then(function(data) {
    document.getElementById("img").src = data.url
    document.getElementById("text").innerHTML = data.explanation
  })
  .catch(function(error) {
    console.log(error);
  });
}

window.transitionToPage = function(href) {
    document.querySelector('body').style.opacity = 0
    setTimeout(function() { 
        window.location.href = href
    }, 500)
}

document.addEventListener('DOMContentLoaded', function(event) {
    document.querySelector('body').style.opacity = 1
})


