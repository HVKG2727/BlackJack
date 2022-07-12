// let firstCard = getRandomCard()
// let secondCard = getRandomCard()
let player = {
    name: "kanna",
    chips:  250
}

let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ""

let messageEl = document.getElementById("message-el")

let sumEl = document.getElementById("sum-el")

let cardsEl = document.querySelector("#cards-el")

let playerEl = document.getElementById("player-el")
playerEl.textContent = player.name + ": $" + player.chips

// let player = {
//     name: "per",
//     chips: 145
// }


// let playerEl = document.getElementById("player-el")
// playerEl.textContent = player.name + ": $" + player.chips
// console.log(messageEl)

function getRandomCard() {

    let randomNumber = Math.floor(Math.random()*13) + 1
    if (randomNumber > 10){
        return 10
    } 
    else if(randomNumber === 1){
        return 11
    }
    else {
        return randomNumber
    }
   
}
  

function startGame() {
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards = [firstCard, secondCard]
    sum = firstCard + secondCard
    renderGame()
}

function renderGame() {
    
    cardsEl.textContent = "cards: " 

    for( let i = 0; i < cards.length; i++){
        cardsEl.textContent += cards[i] + " "
    }

    sumEl.textContent = "sum: "+ sum
    if (sum<=20){
        message = "do you want to draw a new card .?😎"
    }
    else if (sum === 21){
        message = "wohoo! you've got Blackjack!! 😉"
        hasBlackJack = true
    }
    else{
        message = "you are out of the game!!!!😒😒"
        isAlive = false
    }
    messageEl.textContent = message;
    // console.log(message)
    // document.write(message)
}

function newCard() {

    if (isAlive === true && hasBlackJack === false){
        let card = getRandomCard()

     sum += card
     cards.push(card)
     renderGame()
    }
   
     
}
