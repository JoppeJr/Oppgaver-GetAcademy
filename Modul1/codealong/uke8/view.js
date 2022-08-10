function view() {
    let html = '';

    html += /*html*/ `
    <button onclick="changePage('movies')">vis Filmer</button>
    <button onclick="changePage('addmovies')">legg til Filmer</button> 
    <button onclick="changePage('songs')">vis Sanger</button>
    <div>${model.showView}</div>
    `;

    document.getElementById('app').innerHTML = html;
}

function changePage(page) {
    model.currentPage = page;
    updateView()
}

function updateView() {
    if (model.currentPage == 'movies') showMovies();
    if (model.currentPage == 'addmovies') showAddMovies();
    if (model.currentPage == 'songs') showSongs();
}

function showAddMovies() {
    let html = `Tittel: <input type="text" oninput="model.movieInputs.title = this.value"></br>
    Year: <input type="text" oninput="model.movieInputs.year = this.value"></br>
    Duration: <input type="text" oninput="model.movieInputs.duration = this.value"></br>
    <button onclick="addMovie()">legg til</button>`
    model.showView = html;
    view();
}

function showMovies() {
    let html = 'Filmer'
    for (let i = 0; i < model.movies.length; i++) {
        html += `<div> title: ${model.movies[i].title}</div><button onclick="deleteMovie()">fjern film</button>`
    }
    model.showView = html;
    view();
}

function showSongs() {
    let html = 'Sanger'
    for (let i = 0; i < model.songs.length; i++) {
        html += `<div> title: ${model.songs[i].title}</div>`
    }
    model.showView = html;
    view();
}