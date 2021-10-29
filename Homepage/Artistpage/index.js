window.onload = () => {
    fetchArtist()
}

const query = new URLSearchParams(document.location.search).get("artistId")
console.log
const fetchArtist = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/artist/${query}`)
    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })
}