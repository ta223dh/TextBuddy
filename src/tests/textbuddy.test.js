import test from 'ava'
import TextBuddy from '../TextBuddy/textbuddy.js'

/**
 * Test 1
 * Try invalid input values()
 */

test('tryInvalidValues', t => {
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
 * getWordCount()
 */

test('getWordCount', t => {
    new TextBuddy('').getWordCount() === 0 ? t.pass() : t.fail() 
    new TextBuddy('OneWord').getWordCount() === 1 ? t.pass() : t.fail() 
    new TextBuddy('Two Words').getWordCount() === 2 ? t.pass() : t.fail() 
    new TextBuddy('       Three Different Words').getWordCount() === 3 ? t.pass() : t.fail() 
    new TextBuddy('!Two        Words_').getWordCount() === 2 ? t.pass() : t.fail() 
    new TextBuddy('OneWord          ').getWordCount() === 1 ? t.pass() : t.fail() 
    new TextBuddy('Five Words . , *').getWordCount() === 5 ? t.pass() : t.fail() 
    new TextBuddy('Six Words six words SIX WORDS').getWordCount() === 6 ? t.pass() : t.fail() 
    new TextBuddy('SEVEN SEVEN SEVEN SEVEN SEVEN SEVEN SEVEN').getWordCount() === 6 ? t.pass() : t.fail() 
  })


 
