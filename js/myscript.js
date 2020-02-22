var strokes = [{
    outline: "outline1",
    guideline: "stroke1",
    startArrow: "startArrow1",
    endArrow: "endArrow1",
    otherArrows: ["arrow1_1"]
}, {
    outline: "outline2",
    guideline: "stroke2",
    startArrow: "startArrow2",
    endArrow: "endArrow2"
}]


// Imported SVG Groups have their applyMatrix flag turned off by
// default. This is required for SVG importing to work correctly. Turn
// it on now, so we don't have to deal with nested coordinate spaces.
var words = project.importSVG(document.getElementById('svg'));
window.project = project
words.visible = true; // Turn off the effect of display:none;
window.words = words
words.position = view.center
var outline = words.children.level1.children.level2.children.level3.children.outline
words.children.level1.children.level2.children.level3.children.arrow4.rotate(180)

var theBigRectangle = Path.Rectangle(0, 0, 1000, 1000)
theBigRectangle.position = view.center
theBigRectangle.fillColor = "blue"

var backgroundLayer = new Layer()
backgroundLayer.activate()
var backgroundRectangle = Path.Rectangle(0,0,900,900)
backgroundRectangle.position = view.center
// backgroundRectangle.fillColor = "#3B3F46"
backgroundRectangle.fillColor = new Color(59,63,70,0.25)
words.copyTo(backgroundLayer)
backgroundLayer.remove()

var outlineLayer = new Layer()
outlineLayer.activate()
var result = theBigRectangle.subtract(outline)
theBigRectangle.visible = false
outline.visible = false
result.fillColor = "white"
result.visible = false
var newResult = result.copyTo(outlineLayer)
window.newResult = newResult
newResult.visible = true
outlineLayer.remove()

var startPosition = words.children.level1.children.level2.children.level3.children.line1.segments[0].point;

var drawingLayer = new Layer()
drawingLayer.activate()

var path = new Path({
	strokeColor: '#000',
	strokeWidth: 120,
	strokeCap: 'round'
});

var isMouseDown = false;

path.add(startPosition);
drawingLayer.remove()
project.layers.push(backgroundLayer)
project.layers.push(drawingLayer)
project.layers.push(outlineLayer)
drawingLayer.activate()

function onMouseMove(event) {
    if (isMouseDown == true) {
        path.add(event.point);
        path.smooth({ type: 'continuous' });
    }
}

function onMouseDown(event) {
    isMouseDown = true;    
}

function onMouseUp(event) {
    isMouseDown = false;
}
