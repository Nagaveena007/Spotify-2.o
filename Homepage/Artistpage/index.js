


window.onload = () => {
    fetchArtist()
}
const query = new URLSearchParams(document.location.search).get("artistId")
const fetchArtist = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${query}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        displayData(data)
        fetchAlbums(data.name)
    })
    .catch((err) => console.log(err))

}
const displayData = (data) => {
    const artistName = document.getElementById('header-head') 
    artistName.innerText = data.name
}
const fetchAlbums = (query) => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
        console.log(data.data)
        const albumContainer = document.querySelector('.albums-container')
        albumContainer.innerHTML = data.data.map(element => {
            `
            <div class="card img-fluid" style="width: 18rem; background-image: url(${element.album.cover_small}); object-fit: cover;">
                <div class="card-body">
                <h5 class="card-title">${element.title}</h5>
                <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
                <p class="card-text">${element.artist.name}</p>
                </div>
            </div>

            `
        }).join('')
    })
    .catch((err) => console.log(err))

}