// Imported SVG Groups have their applyMatrix flag turned off by
// default. This is required for SVG importing to work correctly. Turn
// it on now, so we don't have to deal with nested coordinate spaces.
var words = project.importSVG(document.getElementById('svg'));
window.project = project
words.visible = true; // Turn off the effect of display:none;
window.words = words
words.position = view.center
var outline = words.children.level1.children.level2.children.level3.children.outline

var theBigRectangle = Path.Rectangle(0, 0, 1000, 1000)
theBigRectangle.position = view.center
theBigRectangle.fillColor = "blue"

var outlineLayer = new Layer()
outlineLayer.activate()
var result = theBigRectangle.subtract(outline)
theBigRectangle.visible = false
outline.visible = false
result.fillColor = "yellow"
result.visible = false
var newResult = result.copyTo(outlineLayer)
window.newResult = newResult
newResult.visible = true
outlineLayer.remove()

var startPosition = words.children.level1.children.level2.children.level3.children.line1.segments[0].point;

var drawingLayer = new Layer()
drawingLayer.activate()

var path = new Path({
	strokeColor: '#E4141B',
	strokeWidth: 100,
	strokeCap: 'round'
});

var isMouseDown = false;

path.strokeColor = '#e08285';
path.add(startPosition);
drawingLayer.remove()
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
