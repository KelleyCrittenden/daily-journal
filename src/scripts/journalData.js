let journalEntries = [] 

const getJournalEntries = () => {
    return fetch("http://localhost:3000/entries").then (
        (httpResponse) => {
            return httpResponse.json()

        }
    )
        .then(
            (arrayOfEntries) => {
            journalEntries = arrayOfEntries
            }
        )
}