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
    let totalLength = 0;
    for (let i = 0; i < words.length; i++) {
      totalLength += words[i].length;
    }

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
      sum += parseFloat(numbers[i], 10);
    }
    return sum;
  },
};

export default analyzer;
