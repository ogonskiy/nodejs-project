const { getNotes } = require('./utils')

const printNotes = (err, notes) => {
  console.log(notes)
}

getNotes(printNotes)
