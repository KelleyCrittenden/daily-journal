import makeJournalEntryComponent from "./journal.js"
import { journalEntries } from "./journalData.js"

const outputJournalEntries= () => {

    for (const journalObject of journalEntries) {

        let journalHTML = makeJournalEntryComponent(journalObject) 

        const journalArticleElement = document.querySelector(".entryLog")

        journalArticleElement.innerHTML += journalHTML
   }
   return outputJournalEntries
}

export default outputJournalEntries