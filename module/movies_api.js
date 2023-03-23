export default class MovieAPI {
    static baseURL = 'https://api.tvmaze.com/';
  
    static getMovies = () => fetch(`
    ${this.baseURL}/shows?page=1
    `, {
      method: 'GET',
      mode: 'no-cors',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    }).then(async (response) => {
      if (response.status === 200) {
        const data = await response.json();
        return data.slice(0,20);
      }
      return null;
    });
  }