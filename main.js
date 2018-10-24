import { films } from './assets/films.js'

import { people } from './assets/people.js'


//listing some films
let listFilms = document.querySelector(".listFilms");
//let filmListItem = document.createElement('li');


films.forEach((film) => {
    let listItem = document.createElement('li');
    listItem.textContent = film.title;
    listFilms.appendChild(listItem);
    console.log(film.title);
})

//listing some people

let limitedPeople = people.slice(0,4); //limited people is the array
let listChars = document.querySelector(".listChars");
//let charListItem = document.createElement('li');


    
    limitedPeople.forEach((person) => {
    let listItem = document.createElement('li');
    listItem.textContent = person.name;
    listChars.appendChild(listItem);    
})


