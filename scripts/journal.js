const makeJournalEntryComponent = (journalEntry) => {

    const journalEntryHTMLRepresentation = `<section>
        ${journalEntry.date} <br>
        ${journalEntry.concepts} <br>
        ${journalEntry.mood}<br>
        ${journalEntry.entry}
    
    </section>`

    return journalEntryHTMLRepresentation
}