import {renderMovies} from './modules/movies.js';

function App() {
    renderMovies();

    document.getElementById('filter-input').addEventListener('input', function(e) {
        const filter = this.value.toLowerCase().trim();
        for (let el of document.querySelectorAll('.movie')) {
            const visible = filter == "" || el.className.includes(filter);
            el.style.display = visible ? '' : 'none';
        }
    });
}

App();