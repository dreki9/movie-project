const form = document.querySelector("#form");
const movieNameElement = document.querySelector("#movie-name");
const directorElement = document.querySelector("#director");
const movieBannerElement = document.querySelector("#movie-banner");
const movieListBody = document.querySelector(".movie-list");
const clear = document.querySelector("#clear-movies");
//ui object
const ui = new UI();
//storage object
const storage = new Storage();


eventListeners();

function eventListeners(){

    form.addEventListener("submit", addMovie);
    document.addEventListener("DOMContentLoaded", function(){
        let movies = storage.getMoviesFromStorage();
        ui.loadAllMovies(movies);
    });
    
    movieListBody.addEventListener("click", deleteMovie);
    clear.addEventListener("click", clearAllMovies);
}

function addMovie(e){
    const movieName = movieNameElement.value;
    const director = directorElement.value;
    const movieBanner = movieBannerElement.value;
    let movies = storage.getMoviesFromStorage();
    let bool = false;
    movies.forEach(function(movie){
        if(movie.movieName === movieNameElement.value){
            bool = true;
        }
    });

    if(movieName === "" || director === "" || movieBanner === "" ){
        ui.showAlert("Fill all inputs..", "danger");
    }
    else if(bool){
        ui.showAlert("You can not add the same movie to list...", "warning");
    }
    else{
        const newMovie = new Movie(movieName,director,movieBanner);
        ui.addMovieToUI(newMovie);
        storage.addMovieToStorage(newMovie);
        ui.showAlert("Movie successfully added..", "success");
    }

    ui.clearInputs(movieNameElement,directorElement,movieBannerElement);
    e.preventDefault();
}

function deleteMovie(e){
    if (e.target.id === "delete-movie"){
        ui.deleteMovieFromUI(e.target);
        storage.deleteMovieFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.showAlert("Movie removed...", "warning");
    }


}

function clearAllMovies(){
    
    ui.clearAllMoviesFromUI();
    storage.clearAllMoviesFromStorage();
}