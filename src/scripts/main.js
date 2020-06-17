
import { getJournalEntries } from "./journalData.js"
import outputJournalEntries from "./journalList.js"

getJournalEntries().then(
    () => {
        outputJournalEntries()
    }    
)

