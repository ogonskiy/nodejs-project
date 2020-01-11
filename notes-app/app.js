const yargs = require('yargs')

const printNotes = (err, notes) => {
  console.log(notes)
}

yargs.command({
  command: 'add',
  describe: 'adding something',
  handler: () => console.log('something was added!')
})

console.log(yargs.argv)
