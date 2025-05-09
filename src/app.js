import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = ['\u2665', '\u2660', '\u2663', '\u2666']; // Unicode for Hearts, Spades, Clubs, Diamonds
const values = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

function generateRandomCard() {
    const randomSuit = suits[Math.floor(Math.random() * suits.length)];
    const randomValue = values[Math.floor(Math.random() * values.length)];
    
    return { value: randomValue, suit: randomSuit };
}

document.addEventListener('DOMContentLoaded', function() {
    const cardElement = document.getElementById('random-card');
    const cardValueElement = cardElement.querySelector('.card-value');
    const cardSuitElement = cardElement.querySelector('.card-suit');

    const randomCard = generateRandomCard();
    cardValueElement.textContent = randomCard.value;
    cardSuitElement.textContent = randomCard.suit;
});