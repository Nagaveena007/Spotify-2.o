const cardsWrapper = document.querySelector("#cards-wrapper");

window.onload = () => {
loadCards();
loadArtistCards();
loadAlbumCards();
displayAlbumCards();
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
  cardsWrapper.innerHTML += `<div class="card col-12 col-sm-6 col-md-4 col-lg-2 px-2 py-2">
  <a href="album.html?id=${card.album.id}">
  <img class="card__image card-img" src="${card.album.cover_medium}" />
</a>
  <div class="card__body">
    <div class="card__meta">
      <p><strong>"${card.album.title}"</strong><br><span>NPO Radio2</span></p>
    </div>
  </div>
</div>`;
});