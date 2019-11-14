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

  getPersonById() {
    this.options.uri = this.url;
    const personPromise = new Promise((resolve, reject) => {
      this.getDataFromServer(this.options, resolve, reject);
    });

    return personPromise;
  }

  getPersonByName() {
    this.options.uri = this.url;
    const personPromise = new Promise((resolve, reject) => {
      this.getDataFromServer(this.options, resolve, reject);
    });

    return personPromise;
  }

  getPlanets() {
    this.options.uri = this.url;
    const planetsPromise = new Promise((resolve, reject) => {
      this.getDataFromServer(this.options, resolve, reject);
    });

    return planetsPromise;
  }

  getPlanetById() {
    this.options.uri = this.url;
    const planetPromise = new Promise((resolve, reject) => {
      this.getDataFromServer(this.options, resolve, reject);
    });

    return planetPromise;
  }
}

module.exports = Swapi;
