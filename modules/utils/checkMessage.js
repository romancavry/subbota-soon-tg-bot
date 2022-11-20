import checkArrayIncludesAnyOfAnother from './checkArrayIncludesAnyOfAnother.js';

import seekWords from '../contants/seekWords.js';
import speciesWords from '../contants/speciesWords.js';
import catWords from '../contants/catWords.js';
import volgaWords from '../contants/volgaWords.js';

export default message => {
  const anySeekWordInMessage = checkArrayIncludesAnyOfAnother({
    main: seekWords,
    sub: message,
  });

  const anySpeciesWordInMessage = checkArrayIncludesAnyOfAnother({
    main: speciesWords,
    sub: message,
  });

  const anyCatWordInMessage = checkArrayIncludesAnyOfAnother({
    main: catWords,
    sub: message,
  });

  const anyVolgaWordInMessage = checkArrayIncludesAnyOfAnother({
    main: volgaWords,
    sub: message,
  });

  return {
    anySeekWordInMessage,
    anySpeciesWordInMessage,
    anyCatWordInMessage,
    anyVolgaWordInMessage,
  }
};
