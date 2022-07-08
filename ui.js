class UI {
    constructor(){

    }

    addMovieToUI = function(newMovie){
        const movieList = document.querySelector("#movies");

        movieList.innerHTML += `
        <tr>             
            <td><img src = "${newMovie.movieBanner}" class= "img-fluid img-thumbnail"></td> 
            <td>${newMovie.movieName}</td> 
            <td>${newMovie.director}</td>
            <td>
                <a href = "#" id = "delete-movie" class = "btn btn-warning">Delete Movie</a>
            </td>

        </tr>  
        `
    }

    clearInputs(element1, element2, element3) {
        element1.value = "";
        element2.value = "";
        element3.value = "";
    }

    showAlert(message, type){
        const formBody = document.querySelector("#form");
        //alert div
        const div = document.createElement("div");

        div.className = `alert alert-${type} mt-2`;
        div.textContent = message;

        formBody.appendChild(div);

        setTimeout(function(){
            div.remove();
        },2000);
    }

    loadAllMovies(movies){
        const movieList = document.querySelector("#movies");

        movies.forEach(function(movie){

            movieList.innerHTML += `
            <tr>             
                <td><img src = "${movie.movieBanner}" class= "img-fluid img-thumbnail"></td> 
                <td>${movie.movieName}</td> 
                <td>${movie.director}</td>
                <td>
                    <a href = "#" id = "delete-movie" class = "btn btn-warning">Delete Movie</a>
                </td>

            </tr>  
            
            
            `;
        });


    }

    deleteMovieFromUI(element){
        element.parentElement.parentElement.remove();
    }
    clearAllMoviesFromUI(){
        const movieList = document.querySelector("#movies");
        
        while(movieList.firstElementChild !== null){
            movieList.firstElementChild.remove();
        }
    }
}