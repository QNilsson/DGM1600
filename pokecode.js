import { pokemon } from './pokemon.js'

//import { newPoke } from './newPoke.js'

//pokemon stuff/////////////////////////


console.log(pokemon)

const pokeContainer = document.querySelector('#container')


//create cards from the pokemon
const cardCreator = (poke =>{

    let card = document.createElement('div')
    card.className = "card"
    card.addEventListener('click', function() {
        card.classList.toggle('is-flipped')
    })


let frontCard = document.createElement('figure')
frontCard.className = ("card_face card_face--front")
console.log(`${poke.ename}`)

let cap = document.createElement('figcaption')
let img = document.createElement('img')

img.src = `pokeImages/${poke.id}${poke.ename}.png`
cap.textContent = poke.ename
frontCard.appendChild(cap)
frontCard.appendChild(img)

//card back
let cardBack = document.createElement('figure')
cardBack.className = "card_face card_face--back"
let capt = document.createElement('figcaption')
let imag = document.createElement('img')

//imag.src = "pokeImages/Logo-Pokemon.png"
capt.textContent = poke.ename

let attack = document.createElement('p')
let defense = document.createElement('p')
let speed = document.createElement('p')

attack.textContent = `Attack: ${poke.attack}`
defense.textContent = `Defense: ${poke.defense}`
speed.textContent = `Speed: ${poke.speed}`

cardBack.appendChild(imag)
cardBack.appendChild(capt)
cardBack.appendChild(attack)
cardBack.appendChild(defense)
cardBack.appendChild(speed)

card.appendChild(frontCard)
card.appendChild(cardBack)
pokeContainer.appendChild(card)
console.log(poke.ename)
})


//user can create own card
//needed info for new card
let newCard = {
    "ename": "Raichu",
    "id": "026",
    "attack": "50",
    "defense": "45",
    "speed": "75"
}

//create a clikc event to create the new card
let create = document.querySelector('#create')
create.addEventListener('click', () =>{
    return cardCreator(newCard)
})
//give it a class name 
let createCard = document.createElement('div')
createCard.className = "card"
createCard.addEventListener('click', () =>{
    //make it visible on screen
    pokeContainer.appendChild(newCard)
}
)

//user can make new card//////////////////////////////////////////////////////
//pokemon.forEach(element => cardCreator(element))
