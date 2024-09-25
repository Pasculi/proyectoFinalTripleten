import { API_KEY, URL_BASE} from './constants'

class ApiMovie {
  constructor(URL_BASE, API_KEY) {
    this._url = URL_BASE;
    this._token = API_KEY;
  }

  setToken(API_KEY) {
    this._token = `Bearer ${API_KEY}`;
  }
  //Mostrar el detalle de una movie

  getDiscover({ search, setMovies }) {
    const type = search ? "search" : "top_rated";
    return fetch(`${URL_BASE}/movie/${type}?api_key=${API_KEY}`)
      .then((response) => response.json())
      .then((data) => {
        const allMovie = data.results;
        setMovies(allMovie);
        console.log(allMovie);
      });
  }
  getPopular() {
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}");
  }

}
const api = new ApiMovie(`${URL_BASE}, ${API_KEY}`)



export default api;