import TextBuddy from './TextBuddy/textbuddy.js'

let text = '    This is a       text.'

let buddy = new TextBuddy(text)

console.log (buddy.getText())
console.log (buddy.getWordCount())
console.log (buddy.getFullAnalyzis())