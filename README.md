# Notes CLI App
* A NodeJS CLI App which takes Notes  
  *  Add note -> Requires user to enter Title and Body of the note and adds the note to our databse (json file)
  *  Remove note -> Requires user to enter the Title of the note they want to remove and removes that note
  *  List notes ->Lists the title of all the notes present
  *  Read note -> Requires user to enter the title of the note they want to read and displays the body of that note on the terminal


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
![Help](https://user-images.githubusercontent.com/51323586/131673892-9dd11af8-c776-4ee3-ab83-5755b4e56845.JPG)

* To add a note
```
> node app.js add --title="My title" --body="MY body"
```
![adding notes](https://user-images.githubusercontent.com/51323586/131674079-30f40f74-95a9-4f2d-995d-f07cbe98f02f.JPG)

* After adding notes our NoteData.json file will look like this

![NotesData-json-file](https://user-images.githubusercontent.com/51323586/131674359-1bbd9d50-f13d-4988-94b1-aa3a668a90a8.JPG)

```
> node app.js list
```
![Screen Shot for list command](docs/Screen_list.png?raw=true)


