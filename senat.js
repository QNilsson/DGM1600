//senator stuff

//importing
import { senatorData } from './assets/senators.js'

//using arrays
const senators = senatorData.results[0].members

//array manipulation to get specific info from the array
//also displays use of arrow functions
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
    //conditional statement
    if(senator.govtrack_id ==='412743'){
        senator.imgURL = `assets/cindy.jpg`}
    return senator
})

console.log(senWithPics)
let pictureDiv = document.querySelector('.container')

//displaying senator pictures and captions
//looping through the array of senators who have pics and displaying them with a caption
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
