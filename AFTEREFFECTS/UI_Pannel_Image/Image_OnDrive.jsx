var StairsUp = '/z/ARTHUR/TTT/Ae_Scripts/_Images/StairsUp.png';

var mainWindow = new Window("palette", "Image Testing", undefined);
mainWindow.orientation = "column";

var imageGroup = mainWindow.add("group", undefined, "imageGroup");
imageGroup.orientation = "row"
var logoImage = imageGroup.add("image", undefined, StairsUp);

var groupTwo = mainWindow.add("group", undefined, groupTwo);
groupTwo.orientation = "row";
var closeButton = groupTwo.add("button", undefined, "Close");

mainWindow.center();
mainWindow.show();

logoImage.addEventListener('click', imageClick, false);

function imageClick() {
    alert("Logo Click!");
    }

closeButton.onClick = function() {
        mainWindow.hide();
    }