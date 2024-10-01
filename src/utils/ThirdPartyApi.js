
class ApiMovie {
  constructor(URL_BASE, API_KEY) {
    this._url = URL_BASE;
    this._keyApi = API_KEY;
  }

  setToken(API_KEY) {
    this._keyApi = `Bearer ${API_KEY}`;
  }


 /*  getFindMovie(id) {
    console.log(id)
    const type = id ? 'search' : 'discover';
    const url = `${this._url}/${type}/movie?api_key=${this._keyApi}`;

    return fetch(url, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  } */

  getFindOne(id) {
    const type = id ? "search" : "discover";
    return fetch(`${this._url}/${type}/movie?query=${id}&api_key=${this._keyApi}`, {
      headers: {
        "Content-Type": "application/json",
      },
    }).then((response) => response.json());
  }

  getNowPlaying(page) {
    return fetch(
      `${this._url}/movie/now_playing?api_key=${this._keyApi}&page=${page}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => response.json());
  }

  getPopular(page) {
    return fetch(
      `${this._url}/movie/popular?api_key=${this._keyApi}&page=${page}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => response.json());
  }

  getTopRate(page) {
    return fetch(
      `${this._url}/movie/top_rate?api_key=${this._keyApi}&page=${page}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => response.json());
  }
  getUmcoming(page) {
    return fetch(
      `${this._url}/movie/upcoming?api_key=${this._keyApi}&page=${page}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((response) => response.json());
  }
}
const api = new ApiMovie(
  'https://api.themoviedb.org/3', '15560b6fce345cc726497d90bc5d685c'
);

export default api;
