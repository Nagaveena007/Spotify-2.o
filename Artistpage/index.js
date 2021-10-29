window.onload () => {

}
let id = 
const searchData = () => {
    .fetch("https://striveschool-api.herokuapp.com/api/deezer/artist/412")
    .then(response => response.json())
    .then(body => {
            console.log(body.photos)
            const displayImgContainer = document.querySelector('.displayImgContainer')
            displaySuccessMessage(body.photos.length)
            displayImgContainer.innerHTML = body.photos.map((photo) =>
            `
            <div class="col-12 col-md-4">
                <div class="card">
                    <img src=${photo.src.small} class="card-img-top pexel-img img-fluid" alt="...">
                    <div class="card-body">
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <div class="d-flex justify-content-between">
                            <button class="hideBtn btn btn-danger">Hide</button>
                            
                            <p class="text-muted">${photo.id}</p>
                        </div>
                    </div>
                </div>
            </div>
            `
            ).join('')
            
        })
    .then(hideCards)
    .catch(error => displayErrorMessage(error))
}
