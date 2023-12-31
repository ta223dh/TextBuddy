[Go back to TextBuddy README](README.md)

# TextBuddy module documentation

**Table of contents**  

Basic
- [getText()](#getText)
- [fullAnalyzis()](#fullAnalyzis)
- [wordCount()](#wordCount)
- [characterCount()](#characterCount)
- [characterCountExcludingSpaces()](#characterCountExcludingSpaces)
- [wordFrequency()](#wordFrequency)
- [uniqueWordCount()](#uniqueWordCount)
- [longestWord()](#longestWord)
- [averageWordLength()](#averageWordLength)
- [estimatedReadingTimeInMinutes()](#estimatedReadingTimeInMinutes)
- [wordFrequencyOfWord()](#wordfrequencyofwordword)

Ai
- [setOpenAiApiKey(key)](#setopenaiapikeykey)
- [aiGetLanguage()](#aiGetLanguage)
- [aiAnswerQuestion(question)](#aiAnswerQuestion)


## getText() 
JSDoc
```javascript
 /**
   * Get the text of this instance of TextBuddy.
   *
   * @returns {string} - The text.
   */
```
Example
```javascript
const text = new TextBuddy('Two words.')
console.log(text.getText())
```

Output
```javascript
Two words.
```

## fullAnalyzis() 
JSDoc
```javascript
/**
   * Returns an object containing all basic analysis available in the module.
   *
   * @returns {object} - One object with all the basic text analysis.
   */
```
Example
```javascript
const text = new TextBuddy('one two three')
const fullAnalysis = text.fullAnalyzis()
console.log(fullAnalysis)
```

Output
```javascript
{
  'Word count': 3,
  'Character count': 13,
  'Character count excluding spaces': 11,
  'Word frequency': { one: 1, two: 1, three: 1 },
  'Unique word count': 3,
  'Longest word':'three',
  'Average word length': 3.6666666666666665,
  'Estimated reading time in minutes': 0.015
}
```

## wordCount() 
JSDoc
```javascript
  /**
   * Returns the word count.
   *
   * @returns {number} The number of words in the text.
   */
```
Example
```javascript
const text = new TextBuddy('Two words.')
const wordCount = text.wordCount()
console.log(wordCount)
```

Output
```javascript
2
```

## characterCount()
JSDoc
```javascript
 /**
   * Returns the character count.
   *
   * @returns {number} The number of characters in the text.
   */
```
Example
```javascript
const text = new TextBuddy('Four')
const count = text.characterCount()
console.log(count)
```

Output
```javascript
4
```

## characterCountExcludingSpaces()
JSDoc
```javascript
/**
   * Returns the character count excluding spaces.
   *
   * @returns {number} The number of characters (excluding spaces) in the text.
   */
```
Example
```javascript
const text = new TextBuddy('Four four')
const count = text.characterCountExcludingSpaces()
console.log(count)
```

Output
```javascript
8
```

## wordFrequency()
JSDoc
```javascript
 /**
   * Returns a JSON object with each uniqe word and frequency of the word sorted with the most frequent word first.
   *
   * @returns {object} A JSON object with each uniqe word and frequency of the word sorted by desc freq.
   */
  ```
Example
```javascript
const text = new TextBuddy('One one two')
const freq = text.wordFrequency()
console.log(freq)
```

Output
```javascript
{
    one: 2,
    two: 1
}
```

## uniqueWordCount()
JSDoc
```javascript
 /**
   * Returns number representing the number of unique words.
   *
   * @returns {number} The number of unique words that occur in the text.
   */
  ```
Example
```javascript
const text = new TextBuddy('One one two')
const count = text.uniqueWordCount()
console.log(count)
```

Output
```javascript
2
```
## longestWord()
JSDoc
```javascript
 /**
   * Returns the longest word as a string.
   *
   * @returns {string} The longest word that occur in the text.
   */
  ```
Example
```javascript
const text = new TextBuddy('short loooooong')
const word = text.longestWord()
console.log(word)
```

Output
```javascript
loooooong
```
## averageWordLength()
JSDoc
```javascript
 /**
   * Returns the average word length as a number.
   *
   * @returns {string} The average length of all the words that occur in the text.
   */
  ```
Example
```javascript
const text = new TextBuddy('four four four')
const length = text.averageWordLength()
console.log(length)
```

Output
```javascript
4
```
## estimatedReadingTimeInMinutes()
JSDoc
```javascript
 /**
   * Returns the estimated reading time in minutes as a number.
   *
   * @returns {number} The estimated reading time in minutes.
   */
  ```
Example
```javascript
const text = new TextBuddy('One')
const minutes = text.estimatedReadingTimeInMinutes()
console.log(minutes)
```

Output
```javascript
0.005
```
## wordFrequencyOfWord(word)
JSDoc
```javascript
/**
   * Returns the frequency of a word.
   *
   * @param {string} word - The word to count.
   * @returns {number} The frequency on the word.
   */
  ```
Example
```javascript
const text = new TextBuddy('One two three')
const freq = text.wordFrequencyOfWord('One')
console.log(freq)
```

Output
```javascript
1
```
## setOpenAiApiKey(key)
JSDoc
```javascript
/**
   * Set an API Key to use the Ai methods.
   *
   * @param {string} openAiApiKey - The OpenAi API Key to use for Ai features.
   */
  ```
Example
```javascript
const text = new TextBuddy('One two three')
text.setOpenAiApiKey('my-api-key')
```  

## aiGetLanguage()
JSDoc
```javascript
  /**
   * Analyse and return the language of the text in the ISO 639-1 format.
   *
   * @returns {string} The language in ISO 639-1 format (for example 'en' for English).
   * @throws {Error} - Error
   */
  ```
Example
```javascript
const text = new TextBuddy('The sun rises in the east and sets in the west.')
text.setOpenAiApiKey('my-api-key')
const language = text.aiGetLanguage()
console.log(language)
```

Output
```javascript
en
```

## aiAnswerQuestion(question)
JSDoc
```javascript
 /**
   * Ask a question about the text and get an answer in string form.
   *
   * @param {string} question - The question.
   * @returns {Promise<string>} A promise that resolves to a string containing the Ai-generated answer to the question.
   * @throws {Error} - Error
   */
  ```
Example
```javascript
const text = new TextBuddy('Kalmar is the capital of Sweden.')
text.setOpenAiApiKey('my-api-key')
const answer = text.aiAnswerQuetion('What is the capital of Sweden?')
console.log(answer)
```

Output
```javascript
'The capital of Sweden is Kalmar.'
// Note: The answer generated by Ai changes from time to time.
```
