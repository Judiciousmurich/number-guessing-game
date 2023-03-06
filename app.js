const gameButtons =document.querySelectorAll('.game-btn')
const gameTest=document.getElementsByClassName('Game-test')
const gameInput=document.getElementById('game-input')
const gameAlert=document.querySelector('.game-alert')
let secretNumber= Math.floor(Math.random()*300)
const soundErrorLow=document.getElementById("sound-error-low")
const soundErrorHigh=document.getElementById("sound-error-high")
const soundSuccess=document.getElementById("sound-success")

function checkUserGuess(){
    let userGuess = gameInput.value;
    if (userGuess === ""){
    
    gameTest[1].innerText="please provide a number.";
    }else if (secretNumber == userGuess){
        gameTest[1].innerText="you found the correct number, you have won."
        soundSuccess.play();
    }else if(parseInt (userGuess)>secretNumber){
        gameTest[1].innerText=`${userGuess} is too high.`
        soundErrorHigh.play();
    }else if(parseInt (userGuess)<secretNumber){
        gameTest[1].innerText=`${userGuess} is too low.`
        soundErrorLow.play();
    }
    gameInput.value="";
}

gameButtons[0].addEventListener('click' , function(){
    secretNumber= Math.floor(Math.random()*300)
    gameAlert.innerText="A new number has been generated.Bravo good luck"

})
gameButtons[1].addEventListener('click', checkUserGuess)

document.addEventListener('keydown', function(event){
    if (event.key === "Enter"){
        checkUserGuess()
    }
})