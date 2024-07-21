import natural from 'natural';

import {
  bike,
  cat,
  duck,
  forhead,
  seek,
  volga,
} from './words.js';

const tokenizer = new natural.OrthographyTokenizer({ language: 'ru' });

const stemmer = natural.PorterStemmerRu;

/**
 * @param {string[]} words - токенированное предложение
 * @param {string[]} targets - слова для проверки вхождения
 */
const hasOccurrences = (words, targets) => {
  const stemmedWords = targets.map(target => stemmer.stem(target));

  return words.some(word => stemmedWords.includes(stemmer.stem(word)));
};

export default message => {
  const words = tokenizer.tokenize(message);

  if (hasOccurrences(words, bike.words)) {
    return bike.quote;
  };

  if (hasOccurrences(words, cat.words)) {
    return cat.quote;
  };

  if (hasOccurrences(words, duck.words)) {
    return duck.quote;
  };

  if (hasOccurrences(words, forhead.words)) {
    return forhead.quote;
  };

  if (hasOccurrences(words, seek.words)) {
    return seek.quote;
  };

  if (hasOccurrences(words, volga.words)) {
    return volga.quote;
  };

  return '';
};
