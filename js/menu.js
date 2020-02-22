var COL_MAX = 2;
var COL_SIZE = 50;
var ROW_SIZE = 30;
var TOPX = 10, TOPY = 10;

paper.install(window);
window.onload = function() {
	paper.setup('myCanvas');

var background = project.importSVG("assets/menu_bg.svg", {
	expandShapes: true, onLoad: function(t) {
		t.fitBounds(view.bounds);
		t.sendToBack();
	}
});

var letterGroup = new Group();

Papa.parse("data/blueprint.csv", {
	download: true, header: true,
	complete: function(results) {
		console.log(results);
		let row = 0, col = 0;
		results.data.forEach(function(t) {
			var text = new PointText(
				new Point(
					TOPX + (col * COL_SIZE),
					TOPY + (row * ROW_SIZE)
				)
			);
			text.fillColor = 'black';
			text.content = t.amharic;
			letterGroup.addChild(text);

			if (col++ == COL_MAX + row % 2) {
				col = 0; row++;
			}
		}); //- forEach

		letterGroup.fitBounds(view.bounds);
		// letterGroup.position = view.center;
		// letterGroup.scale(3.0);
	}
});



// Adapted from the following Processing example:
// http://processing.org/learning/topics/follow3.html

// The amount of points in the path:
var points = 25;

// The distance between the points:
var length = 35;

var path = new Path({
	strokeColor: '#E4141B',
	strokeWidth: 20,
	strokeCap: 'round'
});

var start = view.center / [10, 1];
for (var i = 0; i < points; i++)
	path.add(start + new Point(i * length, 0));

function onMouseMove(event) {
	path.firstSegment.point = event.point;
	for (var i = 0; i < points - 1; i++) {
		var segment = path.segments[i];
		var nextSegment = segment.next;
		var vector = segment.point - nextSegment.point;
		vector.length = length;
		nextSegment.point = segment.point - vector;
	}
	path.smooth({ type: 'continuous' });
}

function onMouseDown(event) {
	path.fullySelected = true;
	path.strokeColor = '#e08285';
}

function onMouseUp(event) {
	path.fullySelected = false;
	path.strokeColor = '#e4141b';
}


}; // -window.onload
