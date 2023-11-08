const moviesDiv = document.getElementById("movies");
const genres = new Map();

import { getPopularMovies } from "./api.js";
import { config } from "./config.js";

export async function renderMovies() {
    const movies = await getPopularMovies();
    console.log("movies: ");
    console.log(movies);
    moviesDiv.innerHTML = movies?.map(movie => renderSingleMovie(movie)).join("");
}

function renderSingleMovie(movie) {
    let genresString = movie?.genres.join(" ").toLowerCase();
    return (
        `
        <div class="movie ${genresString} col-4 col-lg-3 col-xl-2 p-1">
            <img src="${config.image_base_url + movie?.pictureUri}" class="img-fluid" >
        </div>
        `
    );
}