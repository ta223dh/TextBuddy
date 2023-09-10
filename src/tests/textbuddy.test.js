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
 * Test 3
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
 * Test 4
 * wordFrequency()
 */
test('Word requency', t => {
  compare(new TextBuddy('One').wordFrequency(), {one: 1}) ? t.pass() : t.fail() 
  compare(new TextBuddy('Two two').wordFrequency(), {two: 2}) ? t.pass() : t.fail() 
  compare(new TextBuddy('One two two').wordFrequency(), {one: 1, two: 2}) ? t.pass() : t.fail() 

  function compare(objectOne, objectTwo) {
    return Object.entries(objectOne).toString() === Object.entries(objectTwo).toString()
  }
})



