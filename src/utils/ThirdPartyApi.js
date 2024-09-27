
class ApiMovie {
  constructor(URL_BASE, API_KEY) {
    this._url = URL_BASE;
    this._keyApi = API_KEY;
  }
  
  setToken(API_KEY) {
    this._keyApi = `Bearer ${API_KEY}`;
  }
 

  getNowPlaying() {
    return fetch(`${this._url}/now_playing?api_key=${this._keyApi}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  getPopular() {
    return fetch(`${this._url}/popular?api_key=${this._keyApi}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  getTopRate() {
    return fetch(`${this._url}/top_rate?api_key=${this._keyApi}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }
  getUmcoming() {
    return fetch(`${this._url}/upcoming?api_key=${this._keyApi}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }
}
const api = new ApiMovie(
  'https://api.themoviedb.org/3/movie', '15560b6fce345cc726497d90bc5d685c'
);

export default api;
