const express = require('express');
const Swapi = require('./swapi');

const app = express();
const swapi = new Swapi();

app.get('/people/', async (req, res) => {
  swapi.url = '/people/';

  const people = await swapi.getPeople();

  res.status(200).send(people);
});

app.get('/person/:id', async (req, res) => {
  const personId = req.params.id;

  swapi.url = `/people/${personId}`;

  const person = await swapi.getPersonById();

  res.status(200).send(person);
});

app.listen(4000, () => console.log('App is listening on port 4000!'));
