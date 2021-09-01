# Notes CLI App
* A NodeJS CLI App which takes Notes  
*   Add note -> Requires user to enter Title and Body of the note and adds the note to our databse (json file)
*   Remove note -> Requires user to enter the Title of the note they want to remove and removes that note
*   List notes ->Lists the title of all the notes present
*   Read note -> Requires user to enter the title of the note they want to read and displays the body of that note on the terminal


## How to run

To get started:

* install all project dependencies with ` npm install `

  Notable dependencies:
```js
    "chalk": "^4.1.2",
    
    "lodash": "^4.17.21",
    
    "yargs": "^17.1.1"
```

## How to use it

* To use the app simply run it from the command line. Pass the `help` option to see the commands available:
```
> node NotesApp.js --help
```
![Screen Shot for help command]!([Uploading Help.JPG…])


```
> node app.js add --title "Study" --body "Learn NodeJS"
```
![Screen Shot for add command](docs/Screen_add.png?raw=true)

```
> node app.js list
```
![Screen Shot for list command](docs/Screen_list.png?raw=true)


