/**
 *
 */
class TextBuddy {
  #text
  #wordCount
  #characterCount
  #characterCountExcludingSpaces
  #wordFrequency
  #uniqueWordCount
  #longestWord
  #averageWordLength
  #esimatedReadingTimeInMinutes

  /**
   *
   * @param text
   */
  constructor (text) {
    this.#text = text
    this.#wordCount = null
  }

  /**
   *
   */
  fullAnalyzis () {
    return {
      'Word count': this.wordCount(),
      'Character count': this.characterCount(),
      'Character count excluding spaces': this.characterCountExcludingSpaces(),
      'Word frequency': this.wordFrequency(),
      'Unique word count': this.uniqueWordCount(),
      'Longest word': this.longestWord(),
      'Average word length': this.averageWordLength(),
      'Estimated reading time in minutes': this.esimatedReadingTimeInMinutes()
    }
  }

  /**
   *
   */
  getText () {
    return this.#text
  }

  /**
   * Returns the word count.
   *
   * @returns {number} The number of words in the text.
   */
  wordCount () {
    if (!this.#wordCount) {
      if (this.#text.trim().length === 0) {
        this.#wordCount = 0
      } else {
        const spaces = /\s+/g // Regex
        this.#wordCount = this.#text.trim().replace(spaces, ' ').split(' ').length
      }
    }
    return this.#wordCount
  }

  /**
   * Returns the character count.
   *
   * @returns {number} The number of characters in the text.
   */
  characterCount () {
    if (!this.#characterCount) {
      this.#characterCount = this.#text.length
    }
    return this.#characterCount
  }

  /**
   * Returns the character count excluding spaces.
   *
   * @returns {number} The number of characters (excluding spaces) in the text.
   */
  characterCountExcludingSpaces () {
    if (!this.#characterCountExcludingSpaces) {
      this.#characterCountExcludingSpaces = this.#text.replaceAll(' ', '').length
    }
    return this.#characterCountExcludingSpaces
  }

  /**
   * Returns a json object with each uniqe word and frequency of the word sorted with the most frequent word first.
   *
   * @returns {object} A json object with each uniqe word and frequency of the word sorted by desc freq.
   */
  wordFrequency () {
    if (!this.#wordFrequency) {
      if (this.#text.trim().length === 0) { return {} }

      const spaces = /\s+/g // Regex
      const words = this.#text.trim().toLowerCase().replace(spaces, ' ').split(' ')

      const wordFrequency = {}

      words.forEach(word => {
        if (!wordFrequency[word]) {
          wordFrequency[word] = 1
        } else {
          wordFrequency[word] += 1
        }
      })

      const array = Object.entries(wordFrequency)
      const sortedArray = array.sort((a, b) => b[1] - a[1])
      const sortedWordFrequency = Object.fromEntries(sortedArray)

      this.#wordFrequency = sortedWordFrequency
    }
    return this.#wordFrequency
  }

  /**
   * Returns number representing the number of unique words.
   *
   * @returns {number} The number of unique words that occur in the text.
   */
  uniqueWordCount () {
    if (!this.#uniqueWordCount) {
      const wordFrequency = this.wordFrequency(this.#text)
      this.#uniqueWordCount = Object.keys(wordFrequency).length
    }
    return this.#uniqueWordCount
  }

  /**
   * Returns the longest word as a string.
   *
   * @returns {string} The longest word that occur in the text.
   */
  longestWord () {
    if (!this.#longestWord) {
      const wordFrequency = this.wordFrequency(this.#text)
      let longestWord = ''

      for (const word in wordFrequency) {
        if (longestWord.length < word.length) {
          longestWord = word
        }
      }
      this.#longestWord = longestWord
    }

    return this.#longestWord
  }

  /**
   * Returns the average word length as a number.
   *
   * @returns {string} The average length of all the words that occur in the text.
   */
  averageWordLength () {
    if (!this.#averageWordLength) {
      if (this.#text.trim().length === 0) { return 0 }

      const wordFrequency = this.wordFrequency(this.#text)
      let numberOfWords = 0
      let combinedLength = 0

      for (const [key, value] of Object.entries(wordFrequency)) {
        combinedLength += key.length * value
        numberOfWords += value
      }
      this.#averageWordLength = combinedLength / numberOfWords
    }

    return this.#averageWordLength
  }

  /**
   * Returns the estimated reading time in minutes as a number.
   *
   * @returns {number} The estimated reading time in minutes.
   */
  esimatedReadingTimeInMinutes () {
    if (!this.#esimatedReadingTimeInMinutes) {
    /* Assumed 200 words per minute average speed */
      this.#esimatedReadingTimeInMinutes = this.wordCount() / 200
    }
    return this.#esimatedReadingTimeInMinutes
  }

  /**
   * Returns the frequency of a word.
   *
   * @param {string} word - The word to count.
   * @returns {number} The frequency on the word.
   */
  wordFrequencyOfWord (word) {
    const wordFrequency = this.wordFrequency(this.#text)
    const wordFrequencyOfWord = wordFrequency[word.toLowerCase()]

    if (wordFrequencyOfWord !== null && typeof wordFrequencyOfWord === 'number') {
      return wordFrequencyOfWord
    }
    return 0
  }
}

export default TextBuddy
