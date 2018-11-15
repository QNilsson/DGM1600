import { pokemon } from './pokemon.js'

import { newPoke } from './newPoke.js'

//pokemon stuff/////////////////////////


console.log(pokemon)

const pokeContainer = document.querySelector('#container')

//create cards from the pokemon
const makeCard = (poke) =>{
    //create a div element called card
    let card = document.createElement('div')
    //to refer to in css
    card.className = "card"
    //add an event for when card is flipped
    card.addEventListener('click', function(){
        card.classList.toggle('is-flipped')
    })

//make the front side of the card
let frontFace = document.createElement('figure')
//refer to css 
frontFace.className = "card_face card_face--front"
console.log(`${poke.id}${poke.ename}.png`)

//create an element for the card caption
let cap = document.createElement('figcaption')
//create an element for the image
let img = document.createElement('img')

//image will come from pokeImages folder
img.src = `pokeImages/${poke.id}${poke.ename}.png`
//caption will be the pokemons name
cap.textContent = poke.ename
//appenchild will make caption and image visible on front of card
frontFace.appendChild(cap)
frontFace.appendChild(img)

//back of card

let backFace = document.createElement('figure')
backFace.className = "card_face card_face--back"
let capt = document.createElement('figcaption')
let imag = document.createElement('img')

imag.src="pokeImages/Logo-Pokemon.png"
capt.textContent = poke.ename

let attack = document.createElement('p')
let defense = document.createElement('p')

attack.textContent = `Attack: ${poke.base.Attack}`
defense.textContent = `Defense: ${poke.base.Defense}`

backFace.appendChild(imag)
backFace.appendChild(capt)
backFace.appendChild(attack)
backFace.appendChild(defense)


card.appendChild(frontFace)
card.appendChild(backFace)
pokeContainer.appendChild(card)

}

//user can make new card
pokemon.forEach(element => makeCard(element))

let newCard = {
     
    "ename": "Meowth" ,
    "id": "052",
     "base":{
        "Attack": 70, 
        "Defense": 60

     } 
}

let create = document.querySelector('#create')
create.addEventListener('click', ()=>{
    return newCard(newCard)
})

let createCard = document.createElement('div')
createCard.className = "card"
createCard.addEventListener('click', ()=>{
    console.log("gotta catch em all!")
})