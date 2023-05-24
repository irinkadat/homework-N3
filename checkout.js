const main = document.querySelector('#main');

checkout()
function checkout() {
    const IMG_PATH = "https://image.tmdb.org/t/p/w1280/";
    const seat = JSON.parse(localStorage.getItem('seat'));
    const movie = JSON.parse(localStorage.getItem('movie'));
    const { title, overview, original_language, vote_average, poster_path } = movie;
    const uppercaseLanguage = original_language.toUpperCase(); // Convert to uppercase


main.innerHTML = `
<div class="ticket">
    <div class="header">
      <h1 class="movie-title">${title}</h1>
    </div>
    <div class="content">
      <div class="movie-details">
        <img class="movie-photo" src="${IMG_PATH+poster_path}" alt="Movie Photo">
        <p class="language">${uppercaseLanguage}</p>
        <p class="vote">${vote_average}</p>
        <p class="seat-number">Your Seat : ${seat}</p>
      </div>
    </div>
  </div>
`
}