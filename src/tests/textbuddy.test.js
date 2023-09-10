import test from 'ava'
import TextBuddy from '../TextBuddy/textbuddy.js'

/**
 * Test 1
 * Try invalid input values()
 */
test('Invalid values', t => {
  function tryInvalidValues (inputFunction) {
    try {
      inputFunction()
      t.fail() 
    } catch (error) {
      t.pass()
    }
  }

  tryInvalidValues(new TextBuddy())
  tryInvalidValues(new TextBuddy(null))
  tryInvalidValues(new TextBuddy([]))
  tryInvalidValues(new TextBuddy({}))
  tryInvalidValues(new TextBuddy(new String))
  tryInvalidValues(new TextBuddy(new Number))
  tryInvalidValues(new TextBuddy(new Error))
})

/**
 * Test 2
 * wordCount()
 */
test('Word count', t => {
    new TextBuddy('').wordCount() === 0 ? t.pass() : t.fail() 
    new TextBuddy('OneWord').wordCount() === 1 ? t.pass() : t.fail() 
    new TextBuddy('Two Words').wordCount() === 2 ? t.pass() : t.fail() 
    new TextBuddy('       Three Different Words').wordCount() === 3 ? t.pass() : t.fail() 
    new TextBuddy('!Two        Words_').wordCount() === 2 ? t.pass() : t.fail() 
    new TextBuddy('OneWord          ').wordCount() === 1 ? t.pass() : t.fail() 
    new TextBuddy('Five Words . , *').wordCount() === 5 ? t.pass() : t.fail() 
    new TextBuddy('Six Words six words SIX WORDS').wordCount() === 6 ? t.pass() : t.fail() 
    new TextBuddy('SEVEN SEVEN SEVEN SEVEN SEVEN SEVEN SEVEN').wordCount() === 7 ? t.pass() : t.fail() 
    //new TextBuddy('\n\n').getWordCount() === 0 ? t.pass() : t.fail() 
    //new TextBuddy('     ').getWordCount() === 0 ? t.pass() : t.fail() 
  })

/**
 * Test 3
 * getCharacterCount()
 */
test('Character count', t => {
  new TextBuddy('').characterCount() === 0 ? t.pass() : t.fail() 
  new TextBuddy(' ').characterCount() === 1 ? t.pass() : t.fail() 
  new TextBuddy('!').characterCount() === 1 ? t.pass() : t.fail() 
  new TextBuddy('Four').characterCount() === 4 ? t.pass() : t.fail() 
  new TextBuddy('Five ').characterCount() === 5 ? t.pass() : t.fail() 
})

/**
 * Test 4
 * characterCountExcludingSpaces()
 */
test('Character count exluding spaces', t => {
  new TextBuddy('').characterCountExcludingSpaces() === 0 ? t.pass() : t.fail() 
  new TextBuddy(' ').characterCountExcludingSpaces() === 0 ? t.pass() : t.fail() 
  new TextBuddy('!').characterCountExcludingSpaces() === 1 ? t.pass() : t.fail() 
  new TextBuddy('Four').characterCountExcludingSpaces() === 4 ? t.pass() : t.fail() 
  new TextBuddy('Five ').characterCountExcludingSpaces() === 4 ? t.pass() : t.fail() 
})

/**
 * Test 5
 * wordFrequency()
 */
test('Word frequency', t => {
  compare(new TextBuddy('').wordFrequency(), {}) ? t.pass() : t.fail() 
  compare(new TextBuddy(' ').wordFrequency(), {}) ? t.pass() : t.fail() 
  compare(new TextBuddy('One').wordFrequency(), {one: 1}) ? t.pass() : t.fail() 
  compare(new TextBuddy('Two two').wordFrequency(), {two: 2}) ? t.pass() : t.fail() 
  compare(new TextBuddy('One two two').wordFrequency(), {one: 1, two: 2}) ? t.pass() : t.fail() 

  function compare(objectOne, objectTwo) {
    return Object.entries(objectOne).toString() === Object.entries(objectTwo).toString()
  }
})

/**
 * Test 6
 * uniqueWordCount()
 */
test('Number of unique words', t => {
  new TextBuddy('').uniqueWordCount() === 0 ? t.pass() : t.fail() 
  new TextBuddy('One').uniqueWordCount() === 1 ? t.pass() : t.fail() 
  new TextBuddy('One one').uniqueWordCount() === 1 ? t.pass() : t.fail() 
  new TextBuddy('One Two Three Four Five').uniqueWordCount() === 5 ? t.pass() : t.fail() 
  new TextBuddy('One one two two three three').uniqueWordCount() === 3 ? t.pass() : t.fail() 
})

/**
 * Test 7
 * longestWord()
 */
test('Longest word', t => {
  new TextBuddy('').longestWord() === '' ? t.pass() : t.fail() 
  new TextBuddy(' ').longestWord() === '' ? t.pass() : t.fail() 
  new TextBuddy('One one').longestWord() === 'one' ? t.pass() : t.fail() 
  new TextBuddy('One Two Three Four Five').longestWord() === 'three' ? t.pass() : t.fail() 
  new TextBuddy('This is a long word: helicopter').longestWord() === 'helicopter' ? t.pass() : t.fail() 
})

/**
 * Test 8
 * averageWordLength()
 */
test('Average word length', t => {
  console.log('test1')
  new TextBuddy('').averageWordLength() === 0 ? t.pass() : t.fail() 
  console.log('test12')

  new TextBuddy(' ').averageWordLength() === 0 ? t.pass() : t.fail() 
  console.log('test3')

  new TextBuddy('Four four four four').averageWordLength() === 4 ? t.pass() : t.fail() 
  console.log('test4')

  new TextBuddy('The average is').averageWordLength() === 4 ? t.pass() : t.fail() 
})


