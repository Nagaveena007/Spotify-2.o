const albumsWrapper = document.querySelector("#albums-wrapper");

window.onload = () => {
  const id = window.location.search; // in reality you hvae to grab it from the url...
  loadAlbumCards(id);
  displayAlbumCards();
};

const albums = [];
function loadAlbumCards(id) {
  fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${id}`)
    .then((response) => response.json())
    .then((album_info) => {
      albums = album_info;
      console.log(albums);
      displayArtistCards();
    })
    .catch((error) => {
      console.log(error.message);
    });
}
function displayAlbumCards() {
  albums.forEach((card) => {
    albumsWrapper.innerHTML += `
        <div class="col-lg-2 col-sm-6 mt-2">
        <img src="${card.album.cover_big}" height="180px" alt="">
      </div>
      <div class="col-lg-10 col-sm-6 align-self-end">
        <div>
            <small>"${card.album.type}"</small>
        </div>
        <div>
           <h2> "${card.album.title}"</h2>
        </div>
        <div class="">
          <p> <small> <strong>
          <img src="${card.album.cover_small}" height="22px" alt="" style="border-radius: 2rem;">
           "${card.artist.name}" . </strong>2018<strong> . </strong>22 songs<strong>, </strong> ${card.artist.duration}</small></p>
        </div>
      </div>`;
  });
}
//window.location.search;
