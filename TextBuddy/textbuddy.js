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
            this.#wordCount = this.#text.trim().replace(/\s+/g, ' ').split(' ').length
        }
        return this.#wordCount
    }
}

export default TextBuddy