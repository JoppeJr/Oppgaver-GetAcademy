function addMovie() {
    model.movies.push(model.movieInputs);
    showAddMovies();
}

function deleteMovie(index) {
    model.movies.splice(index, 1);
    showMovies();
}