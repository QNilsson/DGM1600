import { films } from './assets/films.js'

import { people } from './assets/people.js'

import { vehicles} from './assets/vehicles.js'


//star wars api stuff
//listing some films
let listFilms = document.querySelector('.listFilms');
//let filmListItem = document.createElement('li');


films.forEach((film) => {
    let listItem = document.createElement('li');
    listItem.textContent = film.title;
    listFilms.appendChild(listItem);
    console.log(film.title);
})

//listing some people

let limitedPeople = people.slice(0,20); //limited people is the array
let listChars = document.querySelector('.listChars');
   
    limitedPeople.forEach((person) => {
    let listItem = document.createElement('li');
    listItem.textContent = person.name;
    listChars.appendChild(listItem);    
})

//listing some starships
let limitedShips = vehicles.slice(0,4);
let listVehicles = document.querySelector('.listVehicles');

limitedShips.forEach((ship) =>{
    let listItem = document.createElement('li');
    listItem.textContent = ship.name;
    listVehicles.appendChild(listItem);

})