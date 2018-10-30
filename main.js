import { films } from './assets/films.js'

import { people } from './assets/people.js'

import { senatorData } from './assets/senators.js'


//senator stuff
const senators = senatorData.results[0].members

const republicans = senators.filter(senator => senator.party == "R")

const democrats = senators.filter(senator => senator.party == "D")

const females = senators.filter(senator => senator.gender == "F")

const males = senators.filter(senator => senator.gender == "M")

const loyalRepublican = republicans.reduce((acc, senator)=> senator.votes_with_party_pct > 0) ? senator : acc, 0)



console.log(`The most loyal republican is ${loyalRepublican.first_name} ${loyalRepublican.last_name} 
who is great and is from ${loyalRepublican.state}`)



//star wars api stuff
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


