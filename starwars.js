import { films } from './assets/films.js'

import { people } from './assets/people.js'

import { vehicles } from './assets/vehicles.js'

import { starships } from './assets/starships.js'

import { planets } from './assets/planets.js'

import { species } from './assets/species.js';

//star wars api stuff
//listing some films
let listFilms = document.querySelector('.listFilms');

//let filmListItem = document.createElement('li');

//using arrays and looping
//this will create a list of the star wars films
films.forEach((film) => {
    let listItem = document.createElement('li');
    listItem.textContent = film.title;
    listFilms.appendChild(listItem);

})

//using arrays, slicing, and looping
//this will create a list of only 20 of the many star wars characters
let limitedPeople = people.slice(0, 20);
let listChars = document.querySelector('.listChars');

limitedPeople.forEach((person) => {
    let listItem = document.createElement('li');
    listItem.textContent = person.name;
    listChars.appendChild(listItem);
})

//using arrays, slicing and looping
//this will create a list of only 25 of the many star wars vehicles
let limitedVehs = vehicles.slice(0, 25);
let listVehicles = document.querySelector('.listVehicles');

limitedVehs.forEach((veh) => {
    let listItem = document.createElement('li');
    listItem.textContent = veh.name;
    listVehicles.appendChild(listItem);

})

//listing some starships
//using let
let limitedShips = starships.slice(0, 21);
let listStarships = document.querySelector('.listStarShips');

limitedShips.forEach((ship) => {
    let listItem = document.createElement('li');
    listItem.textContent = ship.name;
    listStarships.appendChild(listItem);
})

//info about planets
let limitedPlanets = planets.slice(0, 78);
let listPlanets = document.querySelector('.listPlanets');

limitedPlanets.forEach((planet) => {
    let listItem = document.createElement('li');
    listItem.textContent = planet.name;
    listPlanets.appendChild(listItem);
})

//listing charactres with blonde hair
//using the filter method to filter through an array
//using const
const blondes = people.filter(person => person.hair_color == "blond")

let listBlondes = document.querySelector('.listBlondes');


blondes.forEach((blonde) => {
    let listItem = document.createElement('li');
    listItem.textContent = blonde.name;
    listBlondes.appendChild(listItem);
})

//listing some species
const mammals = species.filter(species => species.classification == "mammal")

let listMammals = document.querySelector('.listMammals');
mammals.forEach((mammal) => {
    let listItem = document.createElement('li');
    listItem.textContent = mammal.name;
    listMammals.appendChild(listItem);
})

//listing the film crawls
let openingCrawl = document.querySelector('#film-crawl')
let listItem = document.createElement('li')
listItem.textContent = films[0].opening_crawl
openingCrawl.appendChild(listItem)

//number of droids
const droids = people.filter(person => person.gender == "n/a")
let listDroids = document.querySelector('.listDroids')
droids.forEach((droid)=>{
    let listItem = document.createElement('li');
    listItem.textContent = droid.name;
    listDroids.appendChild(listItem);
})


