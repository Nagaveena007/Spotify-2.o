window.onload = () => {
    fetchAlbums()
}

const fetchAlbums = () => {
    fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=queen")
    .then(response => response.json())
    .then(data => {
        console.log(data.data)
        const displayAlbums = document.querySelector('.album-parent')
        displayAlbums.innerHTML = data.data.map((element) => 
        `
            <div class="card col-sm-6 col-md-2 px-2 py-2">
                <img class="card__image" src="${element.album.cover_small}" />
                <div id="${element.album.id}class="card__body">
                    <div class="card__meta">
                    <a href="./album.html?albumId=${element.album.id}" style="text-decoration: none;">
                        <p><strong>De${element.album.title}</strong><br><span>NPO Radio2</span></p>
                        </a>
                    </div>
                </div>
            </div>
        `
        ).join('')
    })
} 
