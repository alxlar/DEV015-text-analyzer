const analyzer = {  
  getWordCount: (text) => {
    const words = text.trim().split(" ");
    return words.length;    
  },
  getCharacterCount: (text) => {
    return text.length;
  },
  getCharacterCountExcludingSpaces: (text) => {
    const noSpacesText = text.replace(/\s/g, '');
    return noSpacesText.replace(/\W/g, '').length;
  },
  getAverageWordLength: (text) => {    
    const words = text.split(' ');
    const totalLength = words.reduce((sum, word) => sum + word.length, 0);
    return Math.round((totalLength / words.length) * 100) / 100;
  },
  getNumberCount: (text) => {
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    if (numbers !== null) {
      return numbers.length;
    } else {
      return 0;
    }
  },
  getNumberSum: (text) => {
    const numbers = text.match(/\b\d+(\.\d+)?\b/g);
    if (numbers === null) {
      return 0;
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
      if (numbers[i] >= '0' && numbers[i] <= '9') {
        sum += parseFloat(numbers[i], 10);
      }
    }
    return sum;
  },
};

export default analyzer;
