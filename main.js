
let openingCrawl = document.querySelector("#openingCrawl")
fetch('https://swapi.co/api/films/1')
.then(function(response){
    return response.json();
})
.then(function(myJson){
    console.log(myJson.opening_crawl);
});
