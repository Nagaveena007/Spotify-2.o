const cardsWrapper = document.querySelector("#cards-wrapper");

window.onload = () => {
  loadCards();
  loadArtistCards();
};
let cards = [];
function loadCards() {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search/?q=queen")
    .then((response) => response.json())
    .then((_cards) => {
      cards = _cards.data;
      console.log(cards);
      displayCards();
    })
    .catch((error) => {
      console.log(error.message);
    });
}
function displayCards() {
  cards.forEach((card) => {
    cardsWrapper.innerHTML += `<div class="card col-sm-6 col-md-2 px-2 py-2">
    <a href="album.html">
    <img class="card__image " src="${card.album.cover_medium}" />
  </a>
    <div class="card__body">
      <div class="card__meta">
        <p><strong>"${card.album.title}"</strong><br><span>NPO Radio2</span></p>
      </div>
    </div>
  </div>`;
  });
}

function onclickAlbum() {
  // <a href="album.html"></a>;
}
/**artist */
function loadArtistCards() {
  fetch("https://striveschool-api.herokuapp.com/api/deezer/search/artist")
    .then((response) => response.json())
    .then((artist_info) => {
      artist = artist_info;
      console.log(artist);
      displayArtistCards();
    })
    .catch((error) => {
      console.log(error.message);
    });
}
function displayArtistCards() {
  artist.forEach((card) => {
    cardsWrapper.innerHTML += `<div class="card col-sm-6 col-md-2 px-2 py-2">
        <img class="card__image" src="${card.artist.picture_medium}" />
        <div class="card__body">
          <div class="card__meta">
            <p><strong>"${card.artist.title}"</strong><br><span>NPO Radio2</span></p>
          </div>
        </div>
      </div>`;
  });
}
