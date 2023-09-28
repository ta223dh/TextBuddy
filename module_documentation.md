# TexBuddy module documentation

## wordCount () 
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
const wordCount = text.wordCount
console.log(wordCount)
```

OutPut
```javascript
2
```

## characterCount ()
## characterCountExcludingSpaces ()
## wordFrequency ()
## uniqueWordCount ()
## longestWord ()
## averageWordLength ()
## esimatedReadingTimeInMinutes ()
## wordFrequencyOfWord (word)

## Ai
## setOpenAiApiKey (key)
## aiGetLanguage ()