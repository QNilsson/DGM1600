import { pokemon } from './pokemon.js'

//pokemon stuff/////////////////////////


console.log(pokemon)

const pokeContainer = document.querySelector('#container')

pokemon.forEach(poke =>{

    //create a div element called 'card'
    let card = document.createElement('div')
    //this is how you will refer to it in css
    card.className = "card"
    //add a function to the card
    card.addEventListener('click', function(){
        //when clikced, the card will flip
        card.classList.toggle('is-flipped')
    })

    //make the front side of the card
    //figure will contain the card image and info
    let frontSideCard = document.createElement('figure')
    //refer to it for css
    frontSideCard.className = "card_face card_face--front"
    //this info will retrieve the picture
    console.log(`${poke.id}${poke.ename}.png`)

    //create a caption for the pokemon image
    let cap = document.createElement('figcaption')
    //create an image
    let img = document.createElement('img')

    //refer to the source of the image using the id and name
    img.src = `pokeImages/${poke.id}${poke.ename}.png`
    //make the text content for the caption the pokemon name
    cap.textContent = poke.ename
    //use the appendChild so it will actually show up on screen
    frontSideCard.appendChild(cap)
    frontSideCard.appendChild(img)
    //now the caption and image will be visible

    //back side info
    let backSideCard = document.createElement('figure')
    //refer to it for css
    backSideCard.className = "card_face card_face--back"
    //this will be fore pokemon logo if you want it
    let capt = document.createElement('figcaption')
    //let imag = document.createElement('img')

    //for the background pic
    //imag.src = "images/PokemonLogo.png"
    //put the pokemon name
    capt.textContent = poke.ename
    //make it visible on screen;
    backSideCard.appendChild(capt)
    //backSideCard.appendChild(imag)

    card.appendChild(frontSideCard)
    card.appendChild(backSideCard)
       

})


//for the user to add his own card
const newCard = () => {
    //front of card
    const makeCard = document.createElement('figure')
    let caption = document.createElement('figcaption')
    img.src = document.getElementById("pokeImage")
    console.log(pokeImage)
    console.log(pokeName)
    cap.textContent = document.getElementById("pokeName")
    makeCard.appendChild(caption)
    makeCard.appendChild(img)
    newCard.appendChild(makeCard)
    pokeContainer.push(newCard)

    //back of card

}