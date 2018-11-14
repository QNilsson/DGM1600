//senator stuff

import { senatorData } from './assets/senators.js'


const senators = senatorData.results[0].members

const republicans = senators.filter(senator => senator.party == "R")

const democrats = senators.filter(senator => senator.party == "D")

const females = senators.filter(senator => senator.gender == "F")
console.log(`There are ${females.length} female senators`)

const males = senators.filter(senator => senator.gender == "M")
console.log(`There are ${males.length} male senators`)

const loyalRepublican = republicans.reduce((acc, senator)=> senator.votes_with_party_pct > 0 ? senator : acc, 0)
console.log(`The most loyal republican is ${loyalRepublican.first_name} ${loyalRepublican.last_name} 
who is great and is from ${loyalRepublican.state}`)

//making senator pics grid
const senWithPics = senators.map(senator => {
    senator.imgURL = `https://www.govtrack.us/data/photos/${senator.govtrack_id}-200px.jpeg`
    if(senator.govtrack_id ==='412743'){
        senator.imgURL = `https://localhost:5500/assets/cindy.jpg`}
    return senator
})

console.log(senWithPics)
let pictureDiv = document.querySelector('.container')

//displaying senator pictures and captions
senWithPics.forEach(senator => {

let senatorPic = document.createElement('img')
let senatorFig = document.createElement('figure')
let senatorCap = document.createElement('figcaption')
senatorCap.textContent = `${senator.first_name} ${senator.last_name}`
senatorPic.src = senator.imgURL
senatorFig.appendChild(senatorPic)
senatorFig.appendChild(senatorCap)
pictureDiv.appendChild(senatorFig)

})
