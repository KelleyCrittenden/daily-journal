const makeJournalEntryComponent = (journalEntry) => {

    let journalEntryHTMLRepresentation = `<section>
        ${journalEntry.date} <br>
        ${journalEntry.concepts} <br>
        ${journalEntry.mood}<br>
        ${journalEntry.entry} <br>
    
    </section>`

    return journalEntryHTMLRepresentation
}

