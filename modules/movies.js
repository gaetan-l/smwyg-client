const moviesDiv = document.getElementById("movies");
const genres = new Map();

import { getMovieGenres } from "./api.js";
import { getPopularMovies } from "./api.js";
import { config } from "./config.js";

export async function renderMovies() {
    const genresResult = await getMovieGenres();
    console.log("genresResult: ");
    console.log(genresResult);
    genresResult.forEach((genre) => genres.set(genre.id, genre.name));
    console.log("genres: ");
    console.log(genres);

    const movies = await getPopularMovies();
    console.log("movies: ");
    console.log(movies);
    moviesDiv.innerHTML = movies?.map(movie => renderSingleMovie(movie)).join("");
}

function renderSingleMovie(movie) {
    console.log("movie?.genre_ids");
    console.log(movie?.genre_ids);
    console.log("genres.get('27')");
    console.log(genres.get('27'));
    let genresString = movie?.genre_ids.map(genreId => genres.get(genreId).toLowerCase()).join(" ");
    return (
        `
        <div class="movie ${genresString} col-4 col-lg-3 col-xl-2 p-1">
            <img src="${config.image_base_url + movie?.poster_path}" class="img-fluid" >
        </div>
        `
    );
}