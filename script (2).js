
const envelope = document.getElementById('envelope');
const flap = envelope.querySelector('.flap');
const letter = envelope.querySelector('.letter');
const popup = document.getElementById('popup');
const overlay = document.getElementById('overlay');
const openButton = document.getElementById('open');
const resetButton = document.getElementById('reset');

// Open envelope
openButton.addEventListener('click', () => {
  envelope.classList.add('open');
  envelope.classList.remove('closed');
});

// Letter pop-up animation
letter.addEventListener('click', () => {
  popup.classList.add('open');
  overlay.classList.add('open');
});

// Close popup and reset letter
overlay.addEventListener('click', () => {
  popup.classList.remove('open');
  overlay.classList.remove('open');
});

// Reset envelope
resetButton.addEventListener('click', () => {
  envelope.classList.remove('open');
  popup.classList.remove('open');
  overlay.classList.remove('open');
});
