import test from 'ava'
import TextBuddy from '../TextBuddy/textbuddy.js'

/**
 * Test 0
 * fullAnalyzis()
 */
test('Full analyzis', t => {
  const expectedResult = {
    'Word count': 3,
    'Character count': 13,
    'Character count excluding spaces': 11,
    'Word frequency': { one: 1, two: 1, three: 1 },
    'Unique word count': 3,
    'Longest word': 'three',
    'Average word length': 3.6666666666666665,
    'Estimated reading time in minutes': 0.015
  }
  compare(new TextBuddy('one two three').fullAnalyzis(), expectedResult) ? t.pass() : t.fail()
})

/**
 * Test 1
 * getText()
 */
test('Get text', t => {
  new TextBuddy('').getText() === '' ? t.pass() : t.fail()
  new TextBuddy(' ').getText() === ' ' ? t.pass() : t.fail()
  new TextBuddy('Hello').getText() === 'Hello' ? t.pass() : t.fail()
  new TextBuddy('Hello      world').getText() === 'Hello      world' ? t.pass() : t.fail()
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
  new TextBuddy('Five Words Five Words Five').wordCount() === 5 ? t.pass() : t.fail()
  new TextBuddy('Six Words six words SIX WORDS').wordCount() === 6 ? t.pass() : t.fail()
  new TextBuddy('SEVEN SEVEN SEVEN SEVEN SEVEN SEVEN SEVEN').wordCount() === 7 ? t.pass() : t.fail()
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
  compare(new TextBuddy('One').wordFrequency(), { one: 1 }) ? t.pass() : t.fail()
  compare(new TextBuddy('Two two').wordFrequency(), { two: 2 }) ? t.pass() : t.fail()
  compare(new TextBuddy('One two two').wordFrequency(), { two: 2, one: 1 }) ? t.pass() : t.fail()
})

/**
 * Helper method for comparing the content of objects.
 *
 * @param {object} objectOne - The first object.
 * @param {object} objectTwo - The second object.
 * @returns { boolean } - A boolean indicating if the objects contains the same keys and values.
 */
function compare (objectOne, objectTwo) {
  return Object.entries(objectOne).toString() === Object.entries(objectTwo).toString()
}

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
  new TextBuddy('').averageWordLength() === 0 ? t.pass() : t.fail()
  new TextBuddy(' ').averageWordLength() === 0 ? t.pass() : t.fail()
  new TextBuddy('Four four four four').averageWordLength() === 4 ? t.pass() : t.fail()
  new TextBuddy('The average is').averageWordLength() === 4 ? t.pass() : t.fail()
})

/**
 * Test 9
 * estimatedReadingTimeInMinutes()
 */
test('Estimated reading time in minutes', t => {
  new TextBuddy('').estimatedReadingTimeInMinutes() === 0 ? t.pass() : t.fail()
  new TextBuddy(' ').estimatedReadingTimeInMinutes() === 0 ? t.pass() : t.fail()
  new TextBuddy('One').estimatedReadingTimeInMinutes() === 0.005 ? t.pass() : t.fail()
  new TextBuddy('happened creditcard tyan huf henrietta thomas rational dopod springhill woven foundational hometwat muzzle esse breakfast skilling updates polymerase newbie arrangement ihc xvii jar zithromax aix archivists crust powershot vivo dunwoody proposals annualized centrino touched rabble foals plank atty fielding violator gon thunderstorm unbundled rescues decipher fad concluded uploader carat gimp oyster flowering paid perle gof derrick faxpress techspot harmonics motogp gti urbanization thornton amphitheater heterosexual infect sounds escudo emptiness steelhead moda nonspecific malay turtleneck labelle followed smyth sight delicately foresee answer vijay faulkner pentium babysitter naughty handicapper sbs graf pissed rangers cancers consonants drama gothenburg imprinted commercially disgrace smashing conjure castles westgate compressor sions golan subscription transformers collaboration naruto generics arise compassion eager ivillage straight discounted grasses circumstances haney atherton montgomery cardboard classpath freezing degenerative proverb swedish webster obedience superior jewellery albanians trendnet motrin antcn fu fraught driver subways dragoon condemned tendered important nick irt touchstone spongebob draper clumps occupy moblog msb scrubbed roh scaffold quickly blakely flavour passports packer bermuda hypocritical gorillas oboe nrc inspectorate html happiest nakamura boardhost coleman they difficult pedersen cooper iota talking clan objections intercity canada hardcore sobbing deactivate me brow stamina quod competitor bmj pesca labtec mattress hookups landowners petitioner renee flop abrahams frighten').estimatedReadingTimeInMinutes() === 1 ? t.pass() : t.fail()
})

/**
 * Test 10
 * wordFrequencyOfWord()
 */
test('Word frequency of word', t => {
  new TextBuddy('').wordFrequencyOfWord('One') === 0 ? t.pass() : t.fail()
  new TextBuddy(' ').wordFrequencyOfWord('One') === 0 ? t.pass() : t.fail()
  new TextBuddy('One').wordFrequencyOfWord('One') === 1 ? t.pass() : t.fail()
  new TextBuddy('Two two').wordFrequencyOfWord('One') === 0 ? t.pass() : t.fail()
  new TextBuddy('One two two').wordFrequencyOfWord('Two') === 2 ? t.pass() : t.fail()
  new TextBuddy('Three two two').wordFrequencyOfWord('Three') === 1 ? t.pass() : t.fail()
  new TextBuddy('Three three two').wordFrequencyOfWord('Three') === 2 ? t.pass() : t.fail()
})

/**
 * Test 11
 * aiGetLanguage()
 */
test('aiGetLanguage', async t => {
  const OPENAI_API_KEY = null
  const sentences = [
    'The sun rises in the east and sets in the west.',
    'Le soleil se lève à lest et se couche à louest.',
    'Die Sonne geht im Osten auf und im Westen unter.',
    'El sol sale por el este y se pone por el oeste.',
    'Il sole sorge a est e tramonta a ovest.',
    'Solen stiger i öst och går ner i väst.',
    'Zon gaat op in het oosten en gaat onder in het westen.',
    'Solen står op i øst og går ned i vest.',
    'Słońce wschodzi na wschodzie i zachodzi na zachodzie.',
    'O sol nasce no leste e se põe no oeste.'
  ]
  const answers = ['en', 'fr', 'de', 'es', 'it', 'sv', 'nl', 'da', 'pl', 'pt']

  for (let i = 0; i < sentences.length; i++) {
    try {
      const buddy = new TextBuddy(sentences[i])
      buddy.setOpenAiApiKey(OPENAI_API_KEY)
      const answer = await buddy.aiGetLanguage()
      const trimmedAndLowerCaseAnswer = answer.trim().toLowerCase()
      if (trimmedAndLowerCaseAnswer === answers[i]) {
        t.pass()
      } else {
        t.fail(answer + ' expected: ' + answers[i])
      }
    } catch (error) {
      t.fail(error.message)
    }
  }
})
