[Go back to TextBuddy README](README.md)

# Test reports
Table of contents
- [Version 0.1.0, 2023-09-28](#version-010-2023-09-28)


## Version 0.1.0, 2023-09-28
**Summary:** All unit tests passed without errors ✅  

**Test** | Result
---|---
getText() | ✅
fullAnalyzis() | ✅
wordCount() | ✅
characterCount() | ✅
characterCountExcludingSpaces() | ✅
wordFrequency() | ✅
uniqueWordCount() | ✅
longestWord() | ✅
averageWordLength() | ✅
estimatedReadingTimeInMinutes() | ✅
wordFrequencyOfWord(word) | ✅
aiGetLanguage() | ✅

### getText()
**Input** | Expected output | Actual output | Result
---|---|---|---
'' | '' | '' | ✅
' ' | ' ' | ' ' | ✅
'Hello' | 'Hello' | 'Hello' | ✅
'Hello      world' | 'Hello      world' | 'Hello      world' | ✅

### getText()
**Input** | Expected output | Actual output | Result
---|---|---|---
'' | '' | '' | ✅
' ' | ' ' | ' ' | ✅
'Hello' | 'Hello' | 'Hello' | ✅
'Hello      world' | 'Hello      world' | 'Hello      world' | ✅


### fullAnalyzis()
**Input** | Expected output | Actual output | Result
---|---|---|---
'one two three' | {'Word count': 3, 'Character count': 13, 'Character count excluding spaces': 11, 'Word frequency': { one: 1, two: 1, three: 1 }, 'Unique word count': 3, 'Longest word': 'three', 'Average word length': 3.6666666666666665, 'Estimated reading time in minutes': 0.015} | {'Word count': 3, 'Character count': 13, 'Character count excluding spaces': 11, 'Word frequency': { one: 1, two: 1, three: 1 }, 'Unique word count': 3, 'Longest word': 'three', 'Average word length': 3.6666666666666665, 'Estimated reading time in minutes': 0.015} | ✅

### wordCount()
**Input** | Expected output | Actual output | Result
---|---|---|---
'' | 0 | 0 | ✅
'OneWord' | 1 | 1 | ✅
'Two Words' | 2 | 2 | ✅
'       Three Different Words' | 3 | 3 | ✅
'Two        Words_' | 2 | 2 | ✅
'OneWord          ' | 1 | 1 | ✅
'Five Words Five Words Five' | 5 | 5 | ✅
'Six Words six words SIX WORDS' | 6 | 6 | ✅
'SEVEN SEVEN SEVEN SEVEN SEVEN SEVEN SEVEN' | 7 | 7 | ✅

### characterCount()
**Input** | Expected output | Actual output | Result
---|---|---|---
'' | 0 | 0 | ✅
' ' | 1 | 1 | ✅
'!' | 1 | 1 | ✅
'Four' | 4 | 4 | ✅
'Five ' | 5 | 5 | ✅

### characterCountExcludingSpaces()
**Input** | Expected output | Actual output | Result
---|---|---|---
'' | 0 | 0 | ✅
' ' | 0 | 0 | ✅
'!' | 1 | 1 | ✅
'Four' | 4 | 4 | ✅
'Five ' | 4 | 4 | ✅

### wordFrequency()
**Input** | Expected output | Actual output | Result
---|---|---|---
'' | {} | {} | ✅
' ' | {} | {} | ✅
'One' | { one: 1 } | { one: 1 } | ✅
'Two two' | { two: 2 } | { two: 2 } | ✅
'One two two ' | { two: 2, one: 1 } | { two: 2, one: 1 } | ✅

### uniqueWordCount()
**Input** | Expected output | Actual output | Result
---|---|---|---
'' | 0 | 0 | ✅
'One' | 1 | 1 | ✅
'One one' | 1 | 1 | ✅
'One two three four five' | 5 | 5 | ✅
'One one two two three three ' | 3 | 3 | ✅

### longestWord()
**Input** | Expected output | Actual output | Result
---|---|---|---
'' | '' | '' | ✅
' ' | '' | '' | ✅
'One one' | one | one | ✅
'One two three four five' | three | three | ✅
'This is a long word: helicopter ' | helicopter | helicopter | ✅

### averageWordLength()
**Input** | Expected output | Actual output | Result
---|---|---|---
'' | 0 | 0 | ✅
' ' | 0 | 0 | ✅
'Four four four four' | 4 | 4 | ✅
'The average is' | 4 | 4 | ✅

### estimatedReadingTimeInMinutes()
**Input** | Expected output | Actual output | Result
---|---|---|---
'' | 0 | 0 | ✅
' ' | 0 | 0 | ✅
'One' | 0.005 | 0.005 | ✅
'happened creditcard tyan huf henrietta thomas rational dopod springhill woven foundational hometwat muzzle esse breakfast skilling updates polymerase newbie arrangement ihc xvii jar zithromax aix archivists crust powershot vivo dunwoody proposals annualized centrino touched rabble foals plank atty fielding violator gon thunderstorm unbundled rescues decipher fad concluded uploader carat gimp oyster flowering paid perle gof derrick faxpress techspot harmonics motogp gti urbanization thornton amphitheater heterosexual infect sounds escudo emptiness steelhead moda nonspecific malay turtleneck labelle followed smyth sight delicately foresee answer vijay faulkner pentium babysitter naughty handicapper sbs graf pissed rangers cancers consonants drama gothenburg imprinted commercially disgrace smashing conjure castles westgate compressor sions golan subscription transformers collaboration naruto generics arise compassion eager ivillage straight discounted grasses circumstances haney atherton montgomery cardboard classpath freezing degenerative proverb swedish webster obedience superior jewellery albanians trendnet motrin antcn fu fraught driver subways dragoon condemned tendered important nick irt touchstone spongebob draper clumps occupy moblog msb scrubbed roh scaffold quickly blakely flavour passports packer bermuda hypocritical gorillas oboe nrc inspectorate html happiest nakamura boardhost coleman they difficult pedersen cooper iota talking clan objections intercity canada hardcore sobbing deactivate me brow stamina quod competitor bmj pesca labtec mattress hookups landowners petitioner renee flop abrahams frighten' | 1 | 1 | ✅

### wordFrequencyOfWord(word)
**Input** | Expected output | Actual output | Result
---|---|---|---
'', 'One' | 0 | 0 | ✅
' ', 'One' | 0 | 0 | ✅
'One', 'One' | 1 | 1 | ✅
'Two two', 'One' | 0 | 0 | ✅
'One two two', 'Two' | 2 | 2 | ✅
'Three two two', 'Three' | 1 | 1 | ✅
'Three three two', 'Three' | 2 | 2 | ✅

### aiGetLanguage()
**Input** | Expected output | Actual output | Result
---|---|---|---
'The sun rises in the east and sets in the west.' | 'en' | 'en' | ✅
'Le soleil se lève à lest et se couche à louest.' | 'fr' | 'fr' | ✅
'Die Sonne geht im Osten auf und im Westen unter.' | 'de' | 'de' | ✅
'El sol sale por el este y se pone por el oeste' | 'es' | 'es' | ✅
'Il sole sorge a est e tramonta a ovest.' | 'it' | 'it' | ✅
'Solen stiger i öst och går ner i väst.' | 'sv' | 'sv' | ✅
'Zon gaat op in het oosten en gaat onder in het westen.' | 'nl' | 'nl' | ✅
'Solen står op i øst og går ned i vest.' | 'da' | 'da' | ✅
'Słońce wschodzi na wschodzie i zachodzi na zachodzie.' | 'pl' | 'pl' | ✅
'O sol nasce no leste e se põe no oeste.' | 'pt' | 'pt' | ✅