//this function will change the font color of 'love'
const changeColor = document.querySelector("#clickMe")
changeColor.addEventListener('click', function(){
    TweenLite.to("#love", 1, {css:{color:"#ff0000"}, ease:Back.easeOut});    
})

