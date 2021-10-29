window.onload = () => {
    fetchAlbum()
}

const query = new URLSearchParams(document.location.search).get("albumId")
console.log(query)


const fetchAlbum = () => {
    fetch(`https://striveschool-api.herokuapp.com/api/deezer/album/${query}`, 
    {
        method:"GET"
    })
    .then((response) => response.json())
    .then(data => {
        console.log(data)
        const coverParent = document.querySelector('.album-parent')
        const album =
        `
        <div class="col-lg-2 col-sm-6 mt-2">
            <img src="${data.cover_big}" height="180px" alt="">
          </div>
          <div class="col-lg-10 col-sm-6 align-self-end">
            <div>
                <small>${data.type}</small>
            </div>
            <div>
               <h2>${data.artist.name}</h2>
            </div>
            <div class="">
              <p> <small> <strong>
              <img src="${data.cover_small}" height="22px" alt="" style="border-radius: 2rem;">
              <a href="./Artistpage/artist.html">${data.artist.name}</a>. 
              </strong>2018<strong> . </strong>${data.tracks.data.length}songs<strong>, </strong> 1hr 19 min</small></p>
            </div>
          </div>
        
        ` 
        coverParent.innerHTML = album
        tracksParent = document.querySelector('.tracks-container')
        tracksParent.innerHTML = data.tracks.data.map(track => 
            `
            <div class="col-5">
                <div class="mb-3 ml-3 pb-4">1 <span class="ml-4"><strong>${track.title}</strong><br><span
                class="singer-name">$${track.artist.name}</span></span></div>
            </div>
            <div class="col-5">

            </div>
            <div class="col-2">
                <div class="mb-3 ml-3 pb-5">${track.duration}</div>
            </div>

            `
            ).join('')
    })
    .catch((err) => console.log(err))
}