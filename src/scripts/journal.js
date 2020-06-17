const makeJournalEntryComponent = (journalEntry) => {

    const journalEntryHTMLRepresentation = `<section>
        Date: ${journalEntry.date} <br>
        Concepts Covered: ${journalEntry.concepts} <br>
        Mood: ${journalEntry.mood}<br>
        Entry: ${journalEntry.entry} <br> <br>
    
    </section>`

    return journalEntryHTMLRepresentation
}

export default makeJournalEntryComponent