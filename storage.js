class Storage {


    addMovieToStorage(newMovie){
        let movies = this.getMoviesFromStorage();

        movies.push(newMovie);

        localStorage.setItem("movies", JSON.stringify(movies));
    }
    getMoviesFromStorage(){
        let movies;

        if(localStorage.getItem("movies") === null){
            movies = [];
        }
        else{
            movies = JSON.parse(localStorage.getItem("movies"));

        }
        return movies;
    }
    deleteMovieFromStorage(movieName){
        let movies = this.getMoviesFromStorage();

        movies.forEach(function(movie,index){
            if(movie.movieName === movieName){
                movies.splice(index,1);
            }
        });

        localStorage.setItem("movies", JSON.stringify(movies));

    }

    clearAllMoviesFromStorage(){
        localStorage.removeItem("movies");

    }
}