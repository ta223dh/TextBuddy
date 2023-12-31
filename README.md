## ⚠️ Warning
This is a new module under active development. It is adviced to wait until version 1.0.0 before using this package in a production enviromment.

See [Known issues](#known-issues) for more information.

## TextBuddy
**TextBuddy** is a JavaScript module for text analyzis. TextBuddy can assist you with a wide range of tasks - from simple character and word count to chatbot integration with OpenAi's API.  

It was created and is maintained by a student at Linnaeus University in Sweden as part of an assignment in the course "Introduction to software quality".

Once the module reaches version 1.0.0, it will be suitable for use by any project that needs a simple, dependency-free, and modern module for analyzing text.

**Table of contents**
- [Example usage](#example-usage)
- [TextBuddy web application](#example-project-implementation)
- [Getting started](#getting-started-)
- [Dependencies](#dependencies)
- [Features and documentation](#features-and-documentation)
- [Known issues](#known-issues)
- [Version history](#version-history)
- [Test reports](#test-reports)
- [Do you want to contribute to the project?](#do-you-want-to-contribute-to-the-project?)

## Example usage
```javascript
const text = new TextBuddy('This is a text in English. It consists of eleven words.')
const wordCount = text.wordCount() // Output: 11

text.setOpenAiApiKey('your-api-key')

try {  
    const language = await text.aiGetLanguage() // Output: en  
} catch (error) {
      console.log(error.message)
}
```

## TextBuddy web application

The TextBuddy javascript module is the engine driving a TextBuddy web application where users can get instant insights about their text.

The TextBuddy web application and TextBuddy javascript module are both part of a student project, but are completely stand alone projects.

The TextBuddy web application is an product implementation of the TextBuddy javascript module. The javascript module by itself does not have any frontend, and can be used in any type of project.

The web application can be seen as one example of what the javascript module is capable of.

**TextBuddy web application**: https://textbuddy.aihonen.se  
**Repository for web application**: https://github.com/ta223dh/TextBuddy-Application 

## Getting started 
**Using the module**:
- Installation: `npm i textbuddy`

**Developing the module**:
- `git clone` the project repo to your local folder
- `cd TextBuddy` to navigage into the folder
- `npm install` to install eslint for code standard and ava for unit tests
- `code .` to open the project in your code editor
- Unit tests: `npm run test`
- Check lint issues: `npm run lint`
- Automatically fix lint issues (if possible): `npm run lint:fix`

**Component code**: _src/TextBuddy/textbuddy.js_  

**Unit tests**: _src/tests/textbuddy.test.js_
- Set your API key in Test11 to test the Ai features.

## Dependencies
**Basic features**:
- TextBuddy is created from the ground up without any dependency on external libraries. The code is all written in modern javascript.

**Chatbot integration**:
- Provide your own API key, and TextBuddy will be able to utilize OpenAi's API for chat completion. This will require a network call to OpenAi's servers. For costs, limitations, and privacy policy, refer to your OpenAI license agreement.

https://platform.openai.com/account/api-keys

## Features and documentation
**Basic**
- [getText()](module_documentation.md#getText)
- [fullAnalyzis()](module_documentation.md#fullAnalyzis)
- [wordCount()](module_documentation.md#wordCount)
- [characterCount()](module_documentation.md#characterCount)
- [characterCountExcludingSpaces()](module_documentation.md#characterCountExcludingSpaces)
- [wordFrequency()](module_documentation.md#wordFrequency)
- [uniqueWordCount()](module_documentation.md#uniqueWordCount)
- [longestWord()](module_documentation.md#longestWord)
- [averageWordLength()](module_documentation.md#averageWordLength)
- [estimatedReadingTimeInMinutes()](module_documentation.md#estimatedReadingTimeInMinutes)
- [wordFrequencyOfWord(word)](module_documentation.md#wordfrequencyofwordword)

**Ai**
- [setOpenAiApiKey(key)](module_documentation.md#setopenaiapikeykey)
- [aiGetLanguage()](module_documentation.md#aiGetLanguage)
- [aiAnswerQuestion(question)](module_documentation.md#aiAnswerQuestionquestion)

## Known issues

**TextBuddy**
- Handle special characters [TB-1](https://github.com/ta223dh/TextBuddy/issues/1)
- The word counter should not count line breaks and tabs as words. [TB-2](https://github.com/ta223dh/TextBuddy/issues/2)

## Version history
See [version history](https://github.com/ta223dh/TextBuddy/releases/)

## Test reports
See [test reports](testrapport.md)

## Do you want to contribute to the project?
Create an issue on github to report a bug or suggest a new feature. Make a Pull request to contribute new code. Check the issue list to see if there already is an existing issue before creating a new one.

**Bug report**:
- Explain the steps to reproduce, actual behaviour and expected behaviour
- Module version (for example TextBuddy 0.0.12)
- Environment (for example Nodejs 18.18.0 LTS or Firefox 118.0).

**Feature request**:
- Explain the feature, expected input and output, and why it is needed.

**Pull requests**:  

For code contributions, the following requirements must be fullfilled:  

- Feature or bug has been described in an existing issue
- Code is documented with JSDoc
- Code is using modern javascript syntax (ECMAScript 6 and later)
- No dependencies on third party modules
- Unit tests are added for the new feature
- Unit tests (new and old) run with 0 failures
- Linting runs with 0 warnings

A code review will then be conducted by the repository owner before merging.