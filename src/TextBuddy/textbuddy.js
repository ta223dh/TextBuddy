class TextBuddy {
    #text
    #wordCount

    constructor (text) {
        this.#text = text
        this.#wordCount = null
    }

    fullAnalyzis () {
        return {
            "Word count" : this.wordCount(),
            "Character count": this.characterCount(),
            "Character count excluding spaces": this.characterCountExcludingSpaces(),
            "Word frequency": this.wordFrequency(),
            "Unique word count": this.uniqueWordCount(),
            "Longest word": this.longestWord()
        }
    }

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
            if (this.#text.length === 0) {
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
     * Returns a json object with each uniqe word and frequency of the word.
     *
     * @returns {Object} A json object with each uniqe word and frequency of the word.
     */
    wordFrequency () {
        if(this.#text.trim().length === 0)
        return {}

        const spaces = /\s+/g // Regex
        const words = this.#text.trim().toLowerCase().replace(spaces, ' ').split(' ')

        let wordFrequency = {}

        words.forEach(word => {
            if (!wordFrequency[word]) {
                wordFrequency[word] = 1
            } else {
                wordFrequency[word] += 1
            }
        })
        return wordFrequency
    }

      /**
     * Returns number representing the number of unique words.
     *
     * @returns {number} The number of unique words that occur in the text.
     */
      uniqueWordCount() {
        const wordFrequency = this.wordFrequency(this.#text)
        return Object.keys(wordFrequency).length
    }

      /**
     * Returns the longest word as a string.
     *
     * @returns {string} The longest word that occur in the text.
     */
      longestWord() {
        const wordFrequency = this.wordFrequency(this.#text)
        let longestWord = ''

        for (let word in wordFrequency) {
            if (longestWord.length < word.length) {
                longestWord = word
            }
        }
        return longestWord
    }
}

export default TextBuddy