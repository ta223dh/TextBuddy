/**
 *
 */
class TextBuddy {
  #text
  #openAiApiKey

  /**
   * The class constructor.
   *
   * @param {string} text - The text to analyze.
   */
  constructor (text) {
    this.#text = text
  }

  /**
   * Get the text of this instance of TextBuddy.
   *
   * @returns {string} - The text.
   */
  getText () {
    return this.#text
  }

  /**
   * Returns an object containing all basic analyzis available in the module.
   *
   * @returns {object} - One object with all the basic text analyzis.
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
      'Estimated reading time in minutes': this.estimatedReadingTimeInMinutes()
    }
  }

  /**
   * Returns the word count.
   *
   * @returns {number} The number of words in the text.
   */
  wordCount () {
    let wordCount = null
    if (this.#text.trim().length === 0) {
      wordCount = 0
    } else {
      const spaces = /\s+/g // Regex
      wordCount = this.#text.trim().replace(spaces, ' ').split(' ').length
    }
    return wordCount
  }

  /**
   * Returns the character count.
   *
   * @returns {number} The number of characters in the text.
   */
  characterCount () {
    return this.#text.length
  }

  /**
   * Returns the character count excluding spaces.
   *
   * @returns {number} The number of characters (excluding spaces) in the text.
   */
  characterCountExcludingSpaces () {
    return this.#text.replaceAll(' ', '').length
  }

  /**
   * Returns a JSON object with each uniqe word and frequency of the word sorted with the most frequent word first.
   *
   * @returns {object} A JSON object with each uniqe word and frequency of the word sorted by desc freq.
   */
  wordFrequency () {
    const wordFrequency = {}

    if (this.#text.trim().length === 0) {
      return wordFrequency
    }
    const spaces = /\s+/g // Regex
    const words = this.#text.trim().toLowerCase().replace(spaces, ' ').split(' ')

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

    return sortedWordFrequency
  }

  /**
   * Returns number representing the number of unique words.
   *
   * @returns {number} The number of unique words that occur in the text.
   */
  uniqueWordCount () {
    const wordFrequency = this.wordFrequency(this.#text)

    return Object.keys(wordFrequency).length
  }

  /**
   * Returns the longest word as a string.
   *
   * @returns {string} The longest word that occur in the text.
   */
  longestWord () {
    let longestWord = ''
    const wordFrequency = this.wordFrequency(this.#text)

    for (const word in wordFrequency) {
      if (longestWord.length < word.length) {
        longestWord = word
      }
    }

    return longestWord
  }

  /**
   * Returns the average word length as a number.
   *
   * @returns {string} The average length of all the words that occur in the text.
   */
  averageWordLength () {
    let averageWordLength = 0
    if (this.#text.trim().length === 0) {
      return averageWordLength
    }

    const wordFrequency = this.wordFrequency(this.#text)
    let numberOfWords = 0
    let combinedLength = 0

    for (const [key, value] of Object.entries(wordFrequency)) {
      combinedLength += key.length * value
      numberOfWords += value
    }
    averageWordLength = combinedLength / numberOfWords

    return averageWordLength
  }

  /**
   * Returns the estimated reading time in minutes as a number.
   *
   * @returns {number} The estimated reading time in minutes.
   */
  estimatedReadingTimeInMinutes () {
    /* Assumed 200 words per minute average speed */
    return this.wordCount() / 200
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

  /**
   * Set an API Key to use the Ai methods.
   *
   * @param {string} openAiApiKey - The OpenAi API Key to use for Ai features.
   */
  setOpenAiApiKey (openAiApiKey) {
    this.#openAiApiKey = openAiApiKey
  }

  /**
   * Analyze and a return the language of the text in the ISO 639-1 format.
   *
   * @returns {Promise<string>} A promise that resolves to a string containing the  language in ISO 639-1 format (for example 'en' for English).
   * @throws {Error} - Response error
   * @throws {Error} - Connection error
   */
  async aiGetLanguage () {
    const systemInstructions = 'You are TextBuddy, an Ai-Text-Analyzer. Provide your best analyzis of the text according to instructions.'
    const userInstructions = `Analyze the text below and return the language of the text. Your response should only consist of two letter to describe the language according to standard ISO 639-1, in lower case letters. You should not include any other characters or words in your response. your response should be strictly limited to two characters. If you are unable to decide the language, repond with 'Unknown language.'. Text to analyze: ${this.#text}`
    return await this.#postChatCompletion(systemInstructions, userInstructions)
  }

  /**
   * Ask a question about the text and get an answer in string form.
   *
   * @param {string} question - The question.
   * @returns {Promise<string>} A promise that resolves to a string containing the Ai-generated answer to the question.
   * @throws {Error} - Response error
   * @throws {Error} - Connection error
   */
  async aiAnswerQuestion (question) {
    const systemInstructions = `You are TextBuddy, an Ai-Text-Analyzer. Provide your best answer to any future questions regarding the text provided. This is the text:
    ${this.#text}`
    const userInstructions = `${question}`

    try {
      return await this.#postChatCompletion(systemInstructions, userInstructions)
    } catch (error) {
      throw new Error(error.message)
    }
  }

  /**
   * Make a Chat completion Post to OpenAi's API.
   *
   * @param {string} systemInstructions - The system instructions.
   * @param {string} userInstructions - The system instructions.
   * @returns {Promise<string>} A promise that resolves to a string containing the Ai-generated answer to the question.
   * @throws {Error} - Response error
   * @throws {Error} - Connection error
   */
  async #postChatCompletion (systemInstructions, userInstructions) {
    if (!this.#openAiApiKey) {
      throw new Error('Must set API key to use Ai features.')
    }
    const url = 'https://api.openai.com/v1/chat/completions'
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${this.#openAiApiKey}`
      },
      body: JSON.stringify({
        model: 'gpt-3.5-turbo',
        messages: [{
          role: 'system',
          content: systemInstructions
        }, {
          role: 'user',
          content: userInstructions
        }]
      })
    }
    try {
      const response = await fetch(url, options)
      if (!response.ok) {
        const json = await response.json()
        throw new Error(json.error.message)
      }
      const data = await response.json()
      const answer = data.choices[0].message.content
      return answer
    } catch (error) {
      throw new Error(error.message)
    }
  }
}

export default TextBuddy
