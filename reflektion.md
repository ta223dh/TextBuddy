## Kap 2 - Namngivning

Namn och förklaring | Reflektion och regler från Clean Code
---|---
TextBuddy() - Klassnamn | Modulen heter 'TextBuddy'. Detta går emot regeln **Don't be cute**, då ett mer beskrivande namn skulle kunna vara t.ex. TextAnalyzer. Den ursprungliga tanken var att modulen skulle vara något likt Clippy (Microsoft Word's 'sidekick'), en digital assistent. Under projektets gång så ändrades detta till att bli en 'tråkig' modul, men namnet behölls ändå eftersom att det kan vara bra ur marknadsförningssynpunkt.
averageWordLength() -  Metodnamn för att få genomsnittlig ordlängd | Detta går emot regel för **Method names** som säger att metoder ska använda sig av verb. Ett bättre metodnamn vore då getAverageWordLength()
wordFrequency() -  Metod som returnerar ett objekt innehållandes antalet förekomster av alla ord i form av key/value par | Detta stämmer överens med regeln **Avoid Encodings** eftersom att hela metodnamnet skrivs ut. Ett sämre namn hade varit wFreq().
wordCount() -  Metodnamn för en funktion som returnerar antalet ord i texten. | **Pick one word per concept**: Ordet 'count' återkommer i många metodnamn. Olika synonymer som 'numberOf' eller liknande hade kunnat användas för olika metoder, men det är bättre att vara konsekvent i namngivningen. 
estimatedReadingTimeInMinutes() - Metod som returnerar estimerad lästid. | **Add Meaningful Context**: Detta metodnamn är långt, men det kommunicerar att returvärdet är ett estimat, och att värdet är i enheten minuter, och att det är lästiden. Allt är mycket viktig information och därför är det befogat med ett längre metodnamn.


### Reflektion
Det är svårt att argumentera emot reglerna som tas upp i exemplena ovan. Jag upplever också att det är svårt att applicera reglerna. Jag tror att det krävs erfarenhet och att det är något av ett hantverk. Möjligtvis kan det jämföras med att vi får lära oss skrivregler i skolan, men det är ändå svårt att bli en författare. Som författaren är inne på i boken, så är läsbarheten viktig.

 När jag överblickar min kod, så 'känns' vissa variabel eller klassnamn  bättre, och andra 'känns' sämre, men vid närmare undersökning så är det för att något är inkonsekvent, för att något inte följer namngivning enligt regeln verb eller substanstiv, eller för att orden inte har tillräckligt med kontext eller kräver mental mappning genom förkortningar. Det stämmer bra överens med boken.

## Kap 3 - Funktioner

Metodnamn och länk eller kod | antal rader ( ej ws ) | Reflektion
---|---|---
postChatCompletion (systemInstructions, userInstructions) - textbuddy.js | 32 |**Do one thing**: Denna metod innehåller flera steg. Den gör felhantering, den konfigurerar en header, den definierar en body, den gör ett nätverksanrop och den packar upp resultatet. Alla dessa ansvarsområden skulle kunna brytas ut i till mindre metoder. (Se även reglerna "Extract Try/Catch Blocks och "Error Handling Is One Thing").
wordFrequency() - textbuddy.js | 22 |**Small**: Denna metod upplevs som lång och svår att ta sig igenom. **Do one thing**: Denna metod formaterar strängen till en array av ord, går igenom strängen och sparar antalet förekomster av ordet som ett key/value par i ett objekt, och slutligen listar den orden efter förekomst. Detta områden kan brytas ut till mindre funktioner.
averageWordLength() - textbuddy.js | 14 | **Verbs and Keywords**: Enligt denna regel så ska metodnamn innehålla ett verb. Ett bättre namn skulle alltså vara getAverageWordLength() eller calculateAverageWordLength().
longestWord() - textbuddy.js | 12 | **Use descriptive names**: Denna funktion är mycket tydlig med sitt syfte att returnerar det längsta ordet.
wordCount() - textbuddy.js | 9 | **Small**: Denna metod börjar bli tillräckligt kort för att det ska vara enkelt att förstå metoden. **Have no side effects**: Metoden "cachar" sig själv i en privat variabel, men förutom det så påverkas inget i systemet, vilket är positivt.


### Reflektion
En kort reflektion av innehållet i kapitel 3 kan tänkas vara: Metoder ska vara så tydliga som möjligt, så korta som möjligt, och göra så lite som möjligt. Hjälpmedel kan vara att tänka på namngivning och abstraktionsnivå. Namngivning ska vara så tydlig som möjligt och bör innehålla verb, och en metod bör inte blanda funktionalitet på olika abstraktionsnivåer. Ett exempel på abstraktionsnivå kan vara att skicka en fråga till en AI och att göra ett nätverksanrop Dessa bör bara separerade där frågan tillslut leder till ett nätverksanrop.

## Erfarenheter från din egen kodkvalitet

Enhetstester var till stor hjälp under utvecklingen. Det gjorde att det gick snabbt att testa om en metod klarade av olika invärden, och det var till stor hjälp vid ändringar i koden, t.ex. vid en refactor. Att publicera modulen först och sedan implementera en testapp för att köra manuella tester var långsamt i jämförelse. Jag är övertygad om att jag har sparat tid på att skriva enhets-tester för detta projekt. Tidigare så har det tagit emot att göra tester, både manuella och automatiska, då känslan var att det "tog" för mycket tid från huvudsysslan - att skriva kod. Jag har nu bytt tankesätt; att skriva enhetstester hjälper mig att koda _snabbare_.

När jag ser tillbaka på koden, så är det små och korta metoder som är enkla att sätta sig in och förstå, precis som det nämns i boken om att metoder ska vara så korta som möjligt.

Det var svårt att namnge metoder. Jag försökte följa en konsekvent, beskrivande namngivning, och lyckades i vissa fall som t.ex med att konsekvent använda 'count', men misslyckades i andra avsenden som att metodnamn ska använda sig av verb, t.ex. inledas med 'get'.

Namgivning som jag är mer nöjd med är t.ex. getText, wordCount(), characterCount(), CharacterCountExcludingSpaces(), longestWord(), estimatedReadingTimeInMinutes(). Gemensamt för dessa är att de är tydliga. Längden på namnen kan dock variera, så ett långt namn kan vara tydligare och bättre än ett kort. Jag undvek förkortningar.

En betydande del av projektet var att skapa README-filen. Denna fil fungerar som en introduktion till projektet, och en guide för nya användare och utvecklare. Vid ett tillfälle hade jag en animerad gif längst upp i readme-filen som visade ett Live Demo. Detta kom jag dock fram till att det var missvisande, då besökare skulle få uppfattningen att min modul är en web-komponent och har en front-end. Gif-filen flyttades istället till  repot för Live-demot, och det finns nu istället ett kod-exempel högt upp i modulens readme. Detta tror jag är tydligare för nya besökare.

Testrapporter och dokumentationen av metoderna skrevs manuellt, och det blev ett antal slarvfel under skrivandet. Att hitta ett met automatiskt sätt att generera dessa, skulle både spara tid och höja kvaliten. Det tar jag med mig som något att vidareutveckla i framtida projekt.
