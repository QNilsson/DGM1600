import { films } from "c:/Users/quinn/DGM1600/QuinnsPortfolio/assets/films.js"
import { starships } from "c:/Users/quinn/DGM1600/QuinnsPortfolio/assets/starships.js"

console.log(films)

let filmList = document.querySelector("#film-list")

films.forEach((film) => {
    let listItem = document.createElement('li')
    listItem.textContent = film.title
    filmList.appendChild(listItem)
    console.log(film.title)
})

let filmShip = document.querySelector("#film-people")

let limitedStarship = starships.slice(0, 7)

limitedStarship.forEach((starship) => {
    let listItem = document.createElement('li')
    listItem.textContent = starship.name
    filmShip.appendChild(listItem)
    console.log(starship.name)

})


let openingCrawl = document.querySelector('#film-crawl')
let listItem = document.createElement('li')
listItem.textContent = films[0].opening_crawl
openingCrawl.appendChild(listItem)
console.log(films.opening_crawl)