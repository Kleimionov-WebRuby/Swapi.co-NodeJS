const rp = require('request-promise');

const base_url = 'https://swapi.co/api';

class Swapi {
  constructor() {
    this.options = {
      method: 'GET',
      uri: '',
      json: true,
    };
  }
  set url(url) {
    this._url = base_url + url;
  }
  get url() {
    return this._url;
  }

  getDataFromServer(options, resolve, reject) {
    rp(options)
      .then(res => {
        resolve(res);
      })
      .catch(err => {
        reject(err);
      });
  }

  getPeople() {
    this.options.uri = this.url;
    const peoplePromise = new Promise((resolve, reject) => {
      this.getDataFromServer(this.options, resolve, reject);
    });

    return peoplePromise;
  }
}

module.exports = Swapi;
