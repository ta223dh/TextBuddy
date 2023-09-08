class TextBuddy {
    #text
    #wordCount
    #friendly
    constructor (text, friendly = false) {
        this.#text = text
        this.#friendly = friendly
        this.#wordCount = null
        this.#greeting()
    }

    getFullAnalyzis () {
        return {
            wordCount: this.getWordCount(),
            characterCount: this.#text.length
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
    getWordCount () {
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

    #greeting() {
        if(this.#friendly)
        console.log('Hi there, Buddy! Thanks for constructing me. I have a feeling that this is the beginning of a fantastic new friendship. 🤓')
    }
}

export default TextBuddy