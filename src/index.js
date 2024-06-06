import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar los métodos del objeto `analyzer`

//conts wordCount = document.querySelector('[data-testid="word-count"]')
const wordCount = document.querySelector('[data-testid="word-count"]');
const averageWordLength = document.querySelector('[data-testid="word-length-average"]');
const characterCount = document.querySelector('[data-testid="character-count"]');
const characterCountExcludingSpaces = document.querySelector('[data-testid="character-no-spaces-count"]');
const numberCount = document.querySelector('[data-testid="number-count"]');
const numberSum = document.querySelector('[data-testid="number-sum"]'); 


const textarea = document.querySelector('textarea[name="user-input"]');

textarea.addEventListener('input', () => {
  const text = textarea.value;
  const getWordCount = analyzer.getWordCount(text);
  wordCount.textContent = 'Cantidad de palabras: ' + getWordCount;

  const getCharacterCount = analyzer.getCharacterCount(text);
  characterCount.textContent = 'Cantidad de caracteres: ' + getCharacterCount;

  const getCharacterCountExcludingSpaces = analyzer.getCharacterCountExcludingSpaces(text);
  characterCountExcludingSpaces.textContent = 'Carateres sin espacios: ' + getCharacterCountExcludingSpaces;

  const getAverageWordLength = analyzer.getAverageWordLength(text);
  console.log('longitud: ' + getAverageWordLength);
  averageWordLength.textContent = 'Promedio longitud: ' + getAverageWordLength;

  const getNumberCount = analyzer.getNumberCount(text);
  numberCount.textContent = 'Cantidad de números: ' + getNumberCount;

  const getNumberSum = analyzer.getNumberSum(text);
  numberSum.textContent = 'Suma de números: ' + getNumberSum;
});

const button = document.getElementById('reset-button');
button.addEventListener('click', resetButton);

function resetButton() {
  textarea.value = '';
  wordCount.textContent = 'Cantidad de palabras:';
  averageWordLength.textContent = 'Promedio longitud:';
  characterCount.textContent = 'Cantidad de caracteres:';
  characterCountExcludingSpaces.textContent = 'Carateres sin espacios:';
  numberCount.textContent = 'Cantidad de números:';
  numberSum.textContent = 'Suma de números:';
}
