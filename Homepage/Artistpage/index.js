
const displayData = (data) => {
    const artistName = document.getElementById('header-head') 
    artistName.innerText = data.name
}
const fetchAlbums = (query) => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/search?q=${query}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
    .catch((err) => console.log(err))

}

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