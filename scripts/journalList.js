const journalEntriesLog = () => {

    for (const journalObject of journalEntries) {

        const journalHTML = makeJournalEntryComponent(journalObject) 

        const journalArticleElement = document.querySelector(".entry")

        journalArticleElement.innerHTML += journalHTML
   }
}
