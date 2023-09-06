class TextBuddy {
    #text
    #wordCount
    constructor (text) {
        this.#text = text
        this.#wordCount = null
    }

    getText () {
        return this.#text
    }
    getWordCount () {
        if (!this.#wordCount) {
            const spaces = /\s+/g // Regex
            this.#wordCount = this.#text.trim().replace(spaces, ' ').split(' ').length
        }
        return this.#wordCount
    }
}

export default TextBuddy