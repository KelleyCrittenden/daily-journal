const outputJournalEntries= () => {

    for (const journalObject of journalEntries) {

        let journalHTML = makeJournalEntryComponent(journalObject) 

        const journalArticleElement = document.querySelector(".entryLog")

        journalArticleElement.innerHTML += journalHTML
   }
}

