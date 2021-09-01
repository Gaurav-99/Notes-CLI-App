const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');
const _ = require('lodash');

const notes = require('./notes.js');

yargs.command({
        command: 'add',
        description: 'Add a new note',
        builder: {
            title: {
              describe: "title of new note",
              demandOption: true,
              type: 'string',
              alias: 't'
            },
            body: {
                description: "body of new note",
                demandOption: true,
                type: 'string',
              alias: 'b'
            }
        },
})
yargs.command({
      command: "remove",
      description: "Remove a note",
      builder: {
          title:{
            describe:"Title of note to be removed",
            demandOption: true,
            type: 'string',
              alias: 't'
          }
      },
})
yargs.command({
      command: "read",
      description: "Read a note",
      builder: {
          title:{
            describe:"Title of node to be read",
            demandOption: true,
            type: 'string',
              alias: 't'
          
          }
      },
})
yargs.command({
      command: "list",
      description: "List all the notes",
})


yargs.parse();

const argv = yargs.argv;
const command = argv._[0];

if (command === 'add') {
  
  notes.createNote(argv.title, argv.body);

} else if (command === 'remove') {
  
  notes.removeNote(argv.title);

} else if (command == 'list') {

    notes.listAllNotes();

} else if (command == 'read') {

    notes.readNote(argv.title);

} else {
  console.log(chalk.bgRed.black(' ** Command not reconized! '));
  //console.log();
}

