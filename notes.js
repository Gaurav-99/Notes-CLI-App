const fs = require('fs');
const chalk = require('chalk');

//This Method will return all the note data present in NotesData.json file
let presentNotes = () => {
  try {
    let notedata = fs.readFileSync('NotesData.json');
    return JSON.parse(notedata);
  } catch(e) {
    return [];
  }
};

//Below Method will Overwrite NotesData.json file with passed data
let writeNote = (notedata) => {
  fs.writeFileSync('NotesData.json', JSON.stringify(notedata));
};


//createNode() method inserts a new node into NotesData file
let createNote = (title, body) => {

  let note = {
    title,
    body
  };

  let notedata = presentNotes();
  let duplicateNote = notedata.filter((note) => note.title === title);

  if (duplicateNote.length === 0) {
    notedata.push(note);
    writeNote(notedata);
    console.log(chalk.bgGreen.black(' New Note Created! '));
  } else {
    console.log(chalk.bgRed.black(' Note Title already taken! '));
  }
};

//Removes the note from NoteData file is present 
let removeNote = (title) => {

  let notedata = presentNotes();
  let requiredNote = '';
  for (let i of notedata) {
    if (i.title === title){
      requiredNote = i;
      break;
    }
  }

  if (requiredNote.length === 0) {
    console.log(chalk.bgRed.black(' Note title Not found! '));
  } else {
     console.log(chalk.bgGreen.black(' Note Removed! '));
  }

  writeNote(requiredNote);
};

//Lists the titles of all notes present
let listAllNotes = () => {

  let notesdata = presentNotes();

  if (notesdata.length == 0) {
    console.log(chalk.bgRed.black('No Notes present, Please Add note First! '));
  } else {
      console.log(chalk.bgBlue.black('---- All Notes titles ----'));
      for (let i of notesdata) {
        console.log( chalk.bgWhite.black(' ',i.title, ' '));
      }
       
  }
};

//Prints the asked Note to console if present
let readNote = (title) => {

  let notesdata = presentNotes();

  let foundNote = '';
  for (let i of notesdata) {
    if (i.title === title){
      foundNote = i;
      break;
    }
  }

  if (foundNote.length === 0) {
    console.log(chalk.bgRed.black(' Note Not found! '));
  } else {
      console.log(chalk.bgBlue.black('---- Note Found! ----'));
      console.log(chalk.bgYellow.black(` Title: ${foundNote.title} `));
      console.log(chalk.bgWhite.black(` Body: ${foundNote.body} `));
  }

};

module.exports = {
  createNote,
  presentNotes,
  writeNote,
  listAllNotes,
  removeNote,
  readNote
};