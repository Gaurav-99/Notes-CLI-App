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

* To list all Notes title
```
> node app.js list
```
![List-command](https://user-images.githubusercontent.com/51323586/131674894-d4427078-aeb6-4415-981c-cd973f59e67f.JPG)

* To read a note
```
> node app.js read --title="Programming Languages"
```
![Read-command](https://user-images.githubusercontent.com/51323586/131675242-02fffccb-9e07-4e24-97f6-4139106dda15.JPG)

* To remove a note
```
> node app.js remove --title="Programming Languages"
```
![remove-command](https://user-images.githubusercontent.com/51323586/131675966-13fb1717-8d05-44a6-b2f1-afb17e155454.JPG)

* To remove a note
```
> node app.js remove --title="Programming Languages"
```

 * After removing a note
![NotesData-json-file-2JPG](https://user-images.githubusercontent.com/51323586/131676410-c3d67c24-6ea6-401e-afd9-e873b338152c.JPG)

Eroors
* Unrecognized Command ERROR
![command-error](https://user-images.githubusercontent.com/51323586/131676607-8bc99596-3107-4a2f-95a2-c493e4d84bc2.JPG)

* Title alread taken ERROR
![Note-title-alreadyTakenError](https://user-images.githubusercontent.com/51323586/131676728-010198d1-8ce0-40c8-b4d8-d6954156e1eb.JPG)

* Remove non existing note ERROR
![remove-command-error](https://user-images.githubusercontent.com/51323586/131676778-db46f474-3412-438c-a1e0-dd937e763bcd.JPG)

