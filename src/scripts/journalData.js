
let journalEntries = [] 

const getJournalEntries = () => {
    return fetch("http://localhost:8088/entries").then (
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

export {journalEntries, getJournalEntries};