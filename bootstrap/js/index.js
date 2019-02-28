// Custom JS here


//this function will make the cat picture spin
const myElement = document.querySelector('#kitty');
myElement.addEventListener('mouseover', function(){
    TweenMax.to("#catPic", 1, {rotation:360});
})

