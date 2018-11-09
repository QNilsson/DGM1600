import { pokemon } from './pokemon.js'

console.log(pokemon)

const pokeContainer = document.querySelector('#container')

pokemon.forEach(poke =>{

    //card.className = "this is your class in css"
    //let card = document.createElement('div') this will create your div

    //create const backFig and const frontFig

    //then do a foreach loop and put the front and back together into a card

    //pokeContainer.appendChild(card) will allow the cards to show
    //do card.appendChild(frontFig(poke)) and back one as well

    console.log(`${poke.id}${poke.ename}.png`)
    let fig = document.createElement('figure')
    let img = document.createElement('img')
    let cap = document.createElement('figcaption')
    cap.textContent = poke.ename
    img.src = `img/${poke.id}${poke.ename}.png`
    fig.appendChild(img)
    fig.appendChild(cap)
    pokeContainer.appendChild(fig)
    fig.addEventListener( 'mouseover', function(){
        fig.classList.toggle('is-flipped');
    })

})

