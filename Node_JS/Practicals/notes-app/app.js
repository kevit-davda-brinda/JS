// const fs = require('fs')
// const add = require('./utils')
// const validator = require('validator')

// console.log(add(23,-22))

// console.log(notes())

// console.log(validator.isURL('uhfurhg.uvmogi'))
// console.log(validator.isEmail('uhfurhg.uvmogi@exxa.com'))
// console.log(chalk.rgb(0, 255, 0).bold.inverse('Success!'))


// fs.writeFileSync('notes.txt',"This file is created by Node JS!\n")
// fs.writeFileSync('notes.txt',"This file is changed by Me!\n")
// fs.appendFileSync('notes.txt',"This file is created by Node JS!\n")
// fs.appendFileSync('notes.txt',"This file is changed by Me!\n")

// const command = process.argv[2]

// console.log(process.argv)

// if (command === 'add') {
//     console.log('Adding note!')
// } else if (command === 'remove') {
//     console.log('Removing note!')
// }

const yargs = require('yargs');
const chalk = require('chalk');
const notes = require('./notes');


// Customize yargs version
yargs.version('1.1.0')

// Create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
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
        },
    },
    handler(argv) {
        notes.addNote(argv.title, argv.body)
    }
})

// Create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe: 'List your notes',

    handler(argv) {
        console.log(chalk.green('Listing out all notes:'))
        notes.listNotes();

    }
})

// Create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        console.log(chalk.green('Reading a note'))
        notes.readNotes(argv.title);
    }
})


yargs.parse()

// console.log(yargs.argv)