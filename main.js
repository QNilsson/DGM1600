import {films} from '/assets/films.js'
import {people} from '/assets/people.js'
import {starships} from '/assets/starships.js'
import {planets} from '/assets/planets.js'
import {species} from '/assets/species.js'
import {vehicles} from '/assets/vehicles.js'

//listing some films
let filmList = document.querySelector("#film-list");

films.forEach((film) => {
    let listItem = document.createElement('li');
    listItem.textContent = film.opening_crawl;
    filmList.appendChild(listItem);
    console.log(film.title);
})

//listing some people
let peopleList = document.querySelector("#people-list");

let limitedPeople = people.slice(0,4); //limited people is the array
    
    people.forEach((person) => {
    let listItem = document.createElement('li');
    listItem.textContent = person.name;
    peopleList.appendChild(listItem);    
})


