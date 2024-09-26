import { API_KEY, URL_BASE } from "./constants";

class ApiMovie {
  constructor(URL_BASE, API_KEY) {
    this._url = URL_BASE;
    this._token = API_KEY;
  }

  setToken(API_KEY) {
    this._token = `Bearer ${API_KEY}`;
  }
  

  getMovies(categoria) {
    console.log(categoria)
    return `${URL_BASE}${categoria}?api_key=${API_KEY}`;
  }
}
const api = new ApiMovie(`${URL_BASE}, ${API_KEY}`);

export default api;
