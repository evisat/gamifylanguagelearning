# Gamify Language Learning

Our goal is to create a children's game which helps to learn the [Amharic language](https://en.wikipedia.org/wiki/Amharic) as an open source project. This project was started at the [#swihack](https://swihack.ch) hackathon. The challenge description and background to this can be found at [our project page](https://db.schoolofdata.ch/project/54).

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

## Research notes

For a basic intro to the Amharic Alphabet, visit [Wikipedia](https://en.m.wikipedia.org/wiki/Ge%CA%BDez_script) and [WikiHow](https://m.wikihow.com/Write-in-Amharic).

### Things to consider

Design and technical aspects we are paying special attention to include:

- Target audience (age range of the audience, where in the world are we focusing on)
- Internet bandwidth, wide device and browser compatibility.
- Accessibility (Colours, Sounds, use of assistive technology)
- Ability to easily embed interactive product into online media.

### For comparison

We have looked into some existing language learning and children's games, to get a sense of the market and success criteria for such a project.

| Name                                                                       | What works                                                                                                                                                                             |                                                                                                                                    What it doesn't have |
| -------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------:|
| [Duolingo](https://www.duolingo.com/)                                      | Memorable/cute owl (you can collect outfits), Wide variety of languages, User can select points and unlock features, Different levels, Ability to share and have friends, Leaderboards | Interactive aspects/ Drag and Drop, Too complex for young children. ( Too many features), Drag and Drop, Not exposed to real voices/ real conversations |
| [Talking ABC...](https://apps.apple.com/us/app/talking-abc/id640478677)    | Unique clay models, each letter of the alphabet has a talking clay animal related to it. Simplistic design, but colourful and eye-catching.                                            |                                                   No touch/drag interactions with the actual letters. Not easy to create clay models for every alphabet |
| [Anton](https://anton.app/)                                                | Simple interface, Cute graphics, allows user to draw out the letters                                                                                                                   |                                                                                                                                                     ... |
| AmharicFidelTracing                                                        | Simple and easy to use, provides the ability to change icon                                                                                                                            |                                                                                                 Colours are not attractive, graphics are not accessible |
| [ABC Xenegugeli](https://www.rolandzoss.com/xenegugeli/txenegugeli_EN.htm) | Beautiful graphics, animations and sounds. Easy to use animated interface for drawing letters. Translated into several languages. Cross-media.                                                          |                                                                                                                            Linear game play. Expensive. Only younger players would be motivated to keep playing. |


# Dataset

We have started working on a spreadsheet, based on a [Wikipedia table](https://en.wikipedia.org/wiki/Amharic#Alphasyllabary), to map the letters and create a data model around the game's mechanisms. The version we are editing is currently here: https://ethercalc.org/=404fkrhfbv and in the GitHub `data` folder.

Here are some related data resources that we have looked at:

- [Old Newspapers](https://www.kaggle.com/alvations/old-newspapers/kernels) at Kaggle includes several in Amharic
- [A-Z Handwritten Alphabets](https://www.kaggle.com/sachinpatel21/az-handwritten-alphabets-in-csv-format) at Kaggle (see [example app](https://medium.com/@kuyu12/how-to-implement-my-ml-model-in-ios-app-fffa242b5463))
- [Ethiopia Data Portal](https://ethiopia.opendataforafrica.org/data/#topic=Ethiopia)
- [Amharic Keyboard](https://www.lexilogos.com/keyboard/amharic.htm)
- [ Wikimedia Common Strokes](https://commons.m.wikimedia.org/wiki/Commons:Stroke_Order_Project)
- [Refugee Phrasebook](https://refugeephrasebook.de/faq/)
- [OpenWords](https://opensource.com/life/16/9/openwords)

# Mockups

![](https://us-east-1.linodeobjects.com/dribdat/uploads/upload_7440782726578131205f113f6463cd02.jpg)

# Impressions

Starting the project off with trying to spell our names.

![](https://us-east-1.linodeobjects.com/dribdat/uploads/upload_c97387bcdd7d4336ac5ff98a875f5868.JPG)

T-1h: focus time

![](https://us-east-1.linodeobjects.com/dribdat/uploads/upload_1ee120397ec385454ecc4e12c981fe6e.JPG)

# Demo

[ **[DEMO SITE](https://evisat.github.io/gamifylanguagelearning/)** ]

We are currently using the [Paper.js](http://paperjs.org/) library to create animations and interactivity around the game concept. And we're creating a basic web site around it using [Tachyons](http://tachyons.io/) for a responsive layout.

# Pitch

Our process captured in a few tweets:

- Learning to write the old fashioned way
https://twitter.com/loleg/status/1230808396380635137/photo/1
- Fueling the fires of cultural debate on social media
https://twitter.com/s1mnhao3IfydQfp/status/1231169134165143556
- Connecting to volunteer programmers around the world
https://twitter.com/bk_conazole/status/1230867559597121540
- Hack hack hack hack hack...stop!
https://twitter.com/nigigebi/status/1230862935901245443
- Protype meets children
https://twitter.com/nigigebi/status/1231249541334212608

The challenge presentation along with some of the illustration and typography work that it comes with [can be seen on YouTube](https://youtu.be/eFQOhz3Cz8Q?t=3785), and our final [presentation is here](https://youtu.be/8-FmarNlxgA?t=2955).

If we end up making something reasonably playable, we would like to try to publish it somewhere like [itch.io](https://itch.io/search?q=language)

Things we would have liked to, but haven't (yet) ended up using include:

- Character recognition: [charec](https://github.com/fujimotos/charec), [@gugray](https://github.com/gugray/hanzi_lookup), [@adityajn105](https://github.com/adityajn105/Character-Recognition-webapp), [tensorflow.js](https://mnist.netlify.com/) ..
- Game frameworks: [Phaser](https://github.com/photonstorm/phaser3-examples), [Melon](lwww.melonjs.org), [Kontra](https://straker.github.io/kontra/) ..
- Reactive frontend: [Vue.js](https://madewithvuejs.com/games), [React](https://github.com/bberak/react-native-game-engine-handbook), ..

Please visit our [GitHub issues](https://github.com/evisat/gamifylanguagelearning/issues) if you would like to contribute.
