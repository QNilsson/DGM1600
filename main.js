import {films} from '/assets/films.js'
import {people} from '/assets/people.js'
import {starships} from 'assets/starships.js'
import {planets} from 'assets/planets.js'
import {species} from 'assets/species.js'
import {vehicles} from 'assets/vehicles.js'

let filmList = document.querySelector("#film-list");

films.forEach((film) => {
    let listItem = document.createElement('li');
    listItem.textContent = film.opening_crawl;
    filmList.appendChild(listItem);
    console.log(film.title);
})
    


//console.log(films[2]);

/*let openingCrawl = document.querySelector("#openingCrawl")
fetch('https://swapi.co/api/films/1')
.then(function(response){
    return response.json();
})
.then(function(myJson){
    console.log(myJson.opening_crawl);
});*/
