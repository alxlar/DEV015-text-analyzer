import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar los métodos del objeto `analyzer`

const indicators = document.querySelectorAll('.indicators');

const wordCount = indicators[0];
const averageWordLength = indicators[1];
const characterCount = indicators[2];
const characterCountExcludingSpaces = indicators[3];
const numberCount = indicators[4];
const numberSum = indicators[5];

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
  wordCount.textContent = 'Cantidad de palabras';
  averageWordLength.textContent = 'Promedio longitud';
  characterCount.textContent = 'Cantidad de caracteres';
  characterCountExcludingSpaces.textContent = 'Carateres sin espacios';
  numberCount.textContent = 'Cantidad de números';
  numberSum.textContent = 'Suma de números';
}
