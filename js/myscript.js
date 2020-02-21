// Imported SVG Groups have their applyMatrix flag turned off by
// default. This is required for SVG importing to work correctly. Turn
// it on now, so we don't have to deal with nested coordinate spaces.
var words = project.importSVG(document.getElementById('svg'));
words.visible = true; // Turn off the effect of display:none;
window.words = words
words.fillColor = null;
words.strokeColor = 'black';
var yesGroup = words.children.yes;

var noGroup = words.children.no;
// Resize the words to fit snugly inside the view:
words.fitBounds(view.bounds);
words.scale(0.8);

// yesGroup.position = view.center;
// noGroup.position = [-900, -900];

// function onMouseMove(event) {
//     noGroup.position = event.point;
//     for (var i = 0; i < yesGroup.children.length; i++) {
//         for (var j = 0; j < noGroup.children.length; j++) {
//             showIntersections(noGroup.children[j], yesGroup.children[i])
//         }
//     }
// }

// function showIntersections(path1, path2) {
//     var intersections = path1.getIntersections(path2);
//     for (var i = 0; i < intersections.length; i++) {
//         new Path.Circle({
//             center: intersections[i].point,
//             radius: 5,
//             fillColor: '#009dec'
//         }).removeOnMove();
//     }
// }