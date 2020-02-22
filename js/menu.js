var game = {
	COL_MAX: 		2,
	COL_SIZE:		50,
	ROW_SIZE:		30,
	TOPX:				10,
	TOPY:				10,

	backgroundImage: null,
	blueprintData: null,
	letterImage: null
}

paper.install(window);
window.onload = function() {
	paper.setup('myCanvas');

project.importSVG("assets/menu_bg.svg", {
	expandShapes: true, onLoad: function(t) {
		game.backgroundImage = t;
		t.fitBounds(view.bounds);
		t.sendToBack();
	}
});

project.importSVG("assets/menu_fg.svg", {
	onLoad: function(letters) {
		game.letterImage = letters;
		letters.fitBounds(view.bounds);
		letters.bringToFront();

		letters.children.forEach(function(t) {

			t.onMouseEnter = function(event) {
				t.fillColor = 'red';

				// console.log(t.name);
				game.letterHint.content = '!!!';
				game.blueprintData.forEach(function(x) {
					if (t.name.indexOf(x.path + '') > 0)
						game.letterHint.content = x.amharic + '\n\n' + x.phonetic;
				});
			}
			t.onMouseLeave = function(event) {
				t.fillColor = 'black';
			}
			t.onMouseDown = function(event) {
				location.href = 'game.html';
			}

		});
	}
});

Papa.parse("data/blueprint.csv", {
	download: true, header: true,
	complete: function(results) {
		game.blueprintData = results.data;
	}
});

function initGame() {

	game.letterHint = new PointText(
		new Point(100, 100)
	);
	game.letterHint.fillColor = 'black';
	game.letterHint.content = '';
	game.letterHint.scale(3.0);

	game.letterGroup = new Group();

	game.letterRef = {};
	let row = 0, col = 0;
	game.blueprintData.forEach(function(t) {
		var text = new PointText(
			new Point(
				game.TOPX + (col * game.COL_SIZE),
				game.TOPY + (row * game.ROW_SIZE)
			)
		);
		text.fillColor = 'transparent';
		text.content = t.amharic;
		game.letterRef[t.amharic] = t;
		game.letterGroup.addChild(text);
		if (col++ == game.COL_MAX + row % 2) {
			col = 0; row++;
		}
	}); //- forEach

	game.letterGroup.fitBounds(view.bounds);
	// letterGroup.position = view.center;
	// letterGroup.scale(3.0);

	//
	// paper.onMouseMove = function(event) {
	// 	console.log(event.point);
	// 	game.letterImage.children.forEach(function(path) {
	// 		if (path.contains(event.point)) {
	// 			path.fillColor = 'red';
	// 		}
	// 	});
	// }
	//
	// function onMouseDown(event) {
	// 	location.href = 'game.html';
	// }

} // -initGame



function checkGameLoaded() {
	if (
		game.backgroundImage != null &&
		game.blueprintData != null &&
		game.letterImage != null
	)
		return initGame();
	setTimeout(checkGameLoaded, 200);
}
setTimeout(checkGameLoaded, 200);



}; // -window.onload
