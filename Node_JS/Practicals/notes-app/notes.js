const fs = require('fs')
const chalk = require('chalk')

//get note
const getNotes = () => {
    return "Your  notes..."
}

//adding a note
const addNote = (title, body) => {
    const notes = loadNote()

    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
        notes.push({
            'title': title,
            'body': body
        })

        console.log(chalk.green("Note Added Successfully!"))

        saveNote(notes)
    }
    else {
        console.log(chalk.red("Title already taken!"))
    }
}

//sving note
const saveNote = (notes) => {
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json', dataJSON)
}

//loading note
const loadNote = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()

        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

//removing notes
const removeNote = (title) => {
    const notes = loadNote();

    const keepingNotes = notes.filter((note) => note.title !== title)

    // console.log(notes.length);
    if (keepingNotes.length === notes.length) {
        console.log(chalk.red('No notes found!'))
    } else {
        saveNote(keepingNotes)
        console.log(chalk.green('Note Removed!'))

    }
}

const listNotes = () => {
    const notes = loadNote();

    notes.forEach(note => {
        console.log(note.title)
    });
}

//reading notes
const readNotes = (title) => {
    const notes = loadNote();

    const note = notes.find((note) => note.title === title)

    if (note) {
        return console.log(`title = ${note.title},\nbody = ${note.body}`)
    } else {
        return console.log(chalk.red('error'))
    }

}


//exporting methods to app.js
module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNotes,
};