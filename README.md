# Gamify Language Learning

Our goal is to create a children's game which helps to learn the [Amharic language](https://en.wikipedia.org/wiki/Amharic) as an open source project. This project was started at the [#swihack](https://swihack.ch) hackathon. See the original challenge description and our working hackpad at: https://db.schoolofdata.ch/project/54

## Tech notes

We are running this code just using a local web server, i.e.:

```
$ npm i
$ python -m http.server
```

Sample commands to be used while playing with it in the browser

```
setInterval(() => {words.children.level1.children.level2.children.level3.children.arrow2.rotate(45)}, 400)
15
words.children.level1.children.level2.children.level3.children.arrow1.visible = false
false
```

## To do

1. Dragging/Drawing the chain inside the letter cutout
