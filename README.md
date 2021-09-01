# Notes CLI App
* A NodeJS CLI App which takes Notes  


## How to run

To get started:

* install all project dependencies with `npm install`

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
![Screen Shot for help command](demo/Help.png?raw=true)

```
> node app.js add --help
```
![Screen Shot for add help command](docs/Screen_add_help.png?raw=true)

```
> node app.js read --help
```
![Screen Shot for read help command](docs/Screen_read_help.png?raw=true)

```
> node app.js remove --help
```
![Screen Shot for remove help command](docs/Screen_remove_help.png?raw=true)

```
> node app.js add --title "Study" --body "Learn NodeJS"
```
![Screen Shot for add command](docs/Screen_add.png?raw=true)

```
> node app.js list
```
![Screen Shot for list command](docs/Screen_list.png?raw=true)


