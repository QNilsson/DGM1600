import { pokemon } from './pokemon.js'

//import { newPoke } from './newPoke.js'

//pokemon stuff/////////////////////////


console.log(pokemon)

const pokeContainer = document.querySelector('#container')

const cardCreator = (poke) =>{
//create a div for the card
let card = document.createElement('div')
card.className = "card"
//create a figure element for the front side of the card
let frontCard = document.createElement('figure')
frontCard.className = "card_face card_face--front"
//this will put each pokemon image on the front side
let img = document.createElement('img')//individual poke images
//crate a figure for the back side of the card
let backCard = document.createElement('figure')
backCard.className = "card_face card_face--back"
//make elements for the pokemon name and attributes
let cap = document.createElement('figcaption')
let base = document.createElement('p')

//elements for the poke attributes
let baseAtk = document.createElement('p')
let baseDef = document.createElement('p')
let baseSpeed = document.createElement('p')
//will make the card flip
card.addEventListener('click', function(){
    card.classList.toggle('is-flipped');
});

//add the text from the pokemon data
baseAtk.textContent = `${poke.ename} has an attack of (${poke.base["Attack"]})`
baseDef.textContent = `${poke.ename} has a defense of (${poke.base["Defense"]})`
baseSpeed.textContent = `${poke.ename} has a speed of (${poke.base["Speed"]})`
cap.textContent = `${poke.ename}`
img.src = `pokeImages/${poke.id}${poke.ename}.png`

//make visible on screen
frontCard.appendChild(img)
frontCard.appendChild(cap)
backCard.appendChild(cap)
backCard.appendChild(base)
backCard.appendChild(baseAtk)
backCard.appendChild(baseDef)
backCard.appendChild(baseSpeed)
card.appendChild(frontCard)
card.appendChild(backCard)
pokeContainer.appendChild(card)

};

///////new cards
pokemon.forEach(element => cardCreator(element))

let newCard = {
    "ename": "Raichu",
    "id": "026",
    "attack": "45",
    "defense": "23",
    "speed": "75"    
}


//dude idk how this is gona work





