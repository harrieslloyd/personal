function fetchUrl() {
  const url = 'https://api.nasa.gov/planetary/apod?api_key=A2PqnJVXsBkKFfUKUojEE1h6VaXpHlw2UKL8huIq';
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      document.getElementById("img").src = data.url;
      document.getElementById("text").innerHTML = data.explanation;
    })
    .catch(function (error) {
      console.log(error);
    });
}

function getLinkAndDownload() {
  const url = 'https://api.nasa.gov/planetary/apod?api_key=A2PqnJVXsBkKFfUKUojEE1h6VaXpHlw2UKL8huIq';
  fetch(url)
    .then((resp) => resp.json())
    .then(function (data) {
      download(data.url)
    })
    .catch(function (error) {
      console.log(error);
    });
}

function download(url) {
  const a = document.createElement('a')
  a.href = url
  a.download = 'nasa'
  a.click()
  document.body.removeChild(a)
}

window.transitionToPage = function (href) {
  document.querySelector('body').style.opacity = 0
  setTimeout(function () {
    window.location.href = href
  }, 500)
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}







let pages = [
  'nasa.html',
  //'b2b10.html',
  //'snake.html'
]

window.transitionToRandomPage = function () {
  document.querySelector('body').style.opacity = 0
  let href = pages[getRandomInt(pages.length)]
  setTimeout(function () {
    window.location.href = href
  }, 500)
}

document.addEventListener('DOMContentLoaded', function (event) {
  document.querySelector('body').style.opacity = 1
})

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function clickRefresh() {
  document.getElementById('text').innerHTML = "--"
  document.getElementById('img').src = "/assets/placeholder.png"
  await sleep(500)
  fetchUrl()
}

