let hasBlackJack = false
let isAlive = true
const messageEl = document.getElementById("message-el");
const sumEl = document.querySelector("#sum-el")
const cardsEl = document.querySelector("#cards-el")
const newCardButton = document.querySelector('#new-card-button')
let cards = []
let message = null

function generateCard () {
    const card = Math.floor(Math.random() * 10) + 2
    return card
}

function sumArray (arr) {
    let sum = 0
    arr.map(item => { sum+= item})
    return sum
}

function initGame() {
    message = "Want to play a round?"
    cards = []
    newCardButton.disabled = false
    cards.push(generateCard())
    cards.push(generateCard())
}

function renderGame() {
    let textContent = "Cards: "
    cards.map(item => textContent += " " + item)
    cardsEl.textContent = textContent
    const sum = sumArray(cards)
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
        isAlive = false
        newCardButton.disabled = true
    } else {
        message = "You're out of the game! 😭"
        isAlive = false
        newCardButton.disabled = true
    }
    messageEl.textContent = message;
}

function startGame() {
    initGame()
    renderGame()
}

function newCard() {
    cards.push(generateCard())
    renderGame()
}
