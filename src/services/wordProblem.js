import forEach from 'lodash/forEach';
import difference from 'lodash/difference';

// remove all punctuation but periods
export const formatDocument = doc => {
  return doc.toLowerCase().replace(/[^\w\s?.]|_/g, "");
};

// formatted doc passed in should only have periods, remove them and split by space
export const getAllWords = formattedDocument => {
  return formattedDocument.replace(/[^\w\s]|_/g, "").split(' ');
};

// NOTE: also possibly need to remove any beginning whitespace
// Also need to account for returns in regex
export const getAllSentences = formattedDocument => {
  const sentences = formattedDocument.split('.');
  sentences.pop();
  return sentences;
};

export const getSentenceWords = sentences => {
  const splitSentences = [];
  sentences.forEach(sentence => splitSentences.push(sentence.split(' ')));
  return splitSentences;
};

export const getMostFrequent = items => {
  let results = {}, mostFrequentResults = [];
  // count number of times each word/phrase is used, if we encounter one
  // that isn't in results, give it a default value of 1
  items.forEach(item => !results[item] ? results[item] = 1 : results[item]++);

  // Go through the results and if the word occurs more than twice,
  // add the key(word/phrase) to the results array;
  forEach(results, (number, item) => {
    if (number >= 2) mostFrequentResults.push(item);
  });

  return mostFrequentResults;
};

// Break up sentences into smaller sentences at each occurance of the word
export const findThreeWordPhrases = (sentence, word, resultArray) => {
  if (!sentence.includes(word)) return;
  const firstWordIndex = sentence.indexOf(word);

  if (firstWordIndex !== -1) {
    const secondWord = sentence[firstWordIndex + 1];
    const thirdWord = sentence[firstWordIndex + 2];
    // A phrase is between 3 and 10 words long
    if (word && secondWord && thirdWord) {
      const phrase = [word, secondWord, thirdWord];
      resultArray.push(phrase.join(' '));
    }
  }

  const restOfSentence = sentence.slice(firstWordIndex + 1);
  if (restOfSentence.includes(word)) {
    return findThreeWordPhrases(restOfSentence, word, resultArray);
  } else {
    return resultArray;
  }
};

// Go through each of the most frequently seen words and find the next two words for each sentence
// for every word, break each sentence apart into sub sentences and make a total sentence array

export const findAllThreeWordPhrases = (sentenceArrays, mostCommonWords) => {
  let results = [];

  mostCommonWords.forEach(word => {
    sentenceArrays.forEach(sentence => {
      if (!sentence.includes(word)) return;
      findThreeWordPhrases(sentence, word, results);
    });
  });

  return results;
};

// Break up sentences into smaller sentences at each occurance of the word
export const findLargerPhrases = (sentence, phrase, resultArray) => {
  // console.log('phrase', phrase);
  // Reject if the sentence doesn't contain the entire phrase
  if (difference(phrase, sentence).length !== 0) return;
  // Get the last word in the phrase
  const lastWord = phrase[phrase.length - 1];
  const lastWordIndex = sentence.indexOf(lastWord);

  // Since the max length is 10, and we already have 3 word phrases, go through
  // a possible 7 words after the phrase occurance
  let count = 0, newPhrase = [];
  sentence.forEach((word, index) => {
    count ++;
    if (index > lastWordIndex && word && count <= 10) {
      newPhrase.push(word);
      const returnValue = phrase.concat(newPhrase).join(' ');
      resultArray.push(returnValue);
    }
  });
  const restOfSentence = sentence.slice(lastWordIndex + 1);

  if (difference(phrase, restOfSentence).length === 0) {
    return findLargerPhrases(restOfSentence, phrase, resultArray);
  } else {
    return resultArray;
  }
};

// Now that we have the most frequently occuring smallest phrases
// we can look in each sentence to find if there are any longer ones
// that these are a subset of. We would then eliminate the subset phrases
const findAllLargerPhrases = (smallestPhrases, sentences) => {
  const results = [];
  // Phrases should be very narrowed down by now
  smallestPhrases.forEach(phrase => {
    sentences.forEach(sentence => {
      const joinedSentence = sentence.join(' ');
      if (!joinedSentence.includes(phrase)) return;
      findLargerPhrases(sentence, phrase.split(' '), results);
    });
  });

  return results;
};

const eliminateSmallPhrases = (smallestPhrases, mostFrequentLongestPhrases) => {
  const results = [];
  // want  phrases that aren't in any of the larger ones
  smallestPhrases.forEach(smallPhrase => {
    let phraseCount = 0;
    mostFrequentLongestPhrases.forEach(phrase => {
      if (!phrase.includes(smallPhrase)) {
        phraseCount ++;
        if(phraseCount === mostFrequentLongestPhrases.length) results.push(smallPhrase);
      }

    });
  });
  return results;
};


// Final function to call all the others
export const findMostCommonPhrases = paragraph => {
  const formatted = formatDocument(paragraph);
  const words = getAllWords(formatted);
  const sentences = getAllSentences(formatted);
  const sentenceWordArrays = getSentenceWords(sentences);
  // Most frequent = occurring 2 or more times
  const mostFrequentWords = getMostFrequent(words);
  const allThreeWordPhrases = findAllThreeWordPhrases(sentenceWordArrays, mostFrequentWords);
  const mostFrequentThreeWordPhrases = getMostFrequent(allThreeWordPhrases);
 // Get all longer phrases, find common ones, then if they contain smaller ones, remove the smaller ones
  const allLargerPhrases = findAllLargerPhrases(mostFrequentThreeWordPhrases, sentenceWordArrays);
  const mostFrequentLargerPhrases = getMostFrequent(allLargerPhrases);

  const finalSmallPhrases = eliminateSmallPhrases(mostFrequentThreeWordPhrases, mostFrequentLargerPhrases);
  return finalSmallPhrases;
};
