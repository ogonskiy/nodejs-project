const fs = require('fs')

const getNotes = cb => fs.readFile('notes.txt', 'utf8', cb)

module.exports = { getNotes }
