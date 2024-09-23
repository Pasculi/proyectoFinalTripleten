import { API_KEY, URL_BASE, URL_IMAGE } from './constants'

class ApiMovie {
  constructor(URL_BASE, API_KEY) {
    this._url = URL_BASE;
    this._token = API_KEY;
  }
  setToken(API_KEY) {
    this._token = `Bearer ${API_KEY}`;
  }

  getDiscover() {
    return fetch(`${this._url}/discover?api_key=${this._token}`);
  }
}
const api = new ApiMovie(`${URL_BASE}, ${API_KEY}`)


export default api;