const yargs = require('yargs')

const printNotes = (err, notes) => {
  console.log(notes)
}

yargs.command({
  command: 'add',
  describe: 'adding something',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler(argv) {
    console.log('Title:', argv.title)
    console.log('Body:', argv.body)
  }
})

yargs.parse()
