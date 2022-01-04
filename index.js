var randomImages = [
  './images/dice1.png',
  './images/dice2.png',
  './images/dice3.png',
  './images/dice4.png',
  './images/dice5.png',
  './images/dice6.png',
];
console.log(randomImages);
// random numbers for two players
var randomNumber1 = Math.floor(Math.random() * 6);
var randomNumber2 = Math.floor(Math.random() * 6);

// random images based on the random numbers
document
  .querySelector('.img1')
  .setAttribute('src', randomImages[randomNumber1]);
document
  .querySelector('.img2')
  .setAttribute('src', randomImages[randomNumber2]);

// select heading
var heading = document.querySelector('.container h1');

//change text content on headings
if (randomNumber1 > randomNumber2) {
  heading.textContent = 'Ajit Wins';
} else if (randomNumber1 < randomNumber2) {
  heading.textContent = 'Preety Wins';
} else {
  heading.textContent = 'Draw';
}
