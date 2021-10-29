window.onload = () => {
    fetchAlbum()
}

const query = new URLSearchParams(document.location.search).get("albumId")
console.log(query)
let tracks = []

const fetchAlbum = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${query}`, 
    {
        method:"GET"
    })
    .then((response) => response.json())
    .then(data => {
        console.log(data)
        tracks = data.tracks
    })
    .then(dislplayTracks)
    .catch((err) => console.log(err))
}
const dislplayTracks = () => {
    const tracksContainer = document.querySelector('.tracks-container')
    tracksContainer.innerHTML = tracks.data.map((element) => {
        `
        <div class="col-5">
            <div class="mb-3 ml-3 pb-4">1 <span class="ml-4"><strong>${element.title}</strong><br><span class="singer-name">${element.artist.name}</span></span></div>
            <div class="col-5"></div>
            <div class="col-2">
            <div class="mb-3 ml-3 pb-5">${element.duration}</div>
        </div>
        `
    })
}