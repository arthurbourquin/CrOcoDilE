// Demander les propriétés à l'utilisateur
function askUserInput() {
    // Create a new window
    var win = new Window("dialog", "User Input");

    var inputFieldSize = [50, 30];

    // seule et unique fenetre
    var dialogBox = win.add("group", undefined, "");
    dialogBox.orientation = "column";

    // largeur et hauteur de la compu principale
    var sizeParameterGroup = dialogBox.add("group", undefined, "");
    sizeParameterGroup.orientation = "row";
    var widthInputLabel = sizeParameterGroup.add("statictext", undefined, "Width");
    var widthInput = sizeParameterGroup.add("edittext", undefined, "1920");
    widthInput.preferredSize = inputFieldSize;
    var heightInputLabel = sizeParameterGroup.add("statictext", undefined, "Height");
    var heightInput = sizeParameterGroup.add("edittext", undefined, "1080");
    heightInput.preferredSize = inputFieldSize;

    // subdivision X et Y
    var gridParameterGroup = dialogBox.add("group", undefined, "");
    gridParameterGroup.orientation = "row";
    var gridXInputLabel = gridParameterGroup.add("statictext", undefined, "Subdivision X");
    var gridXInput = gridParameterGroup.add("edittext", undefined, "3");
    gridXInput.preferredSize = inputFieldSize;
    var gridYInputLabel = gridParameterGroup.add("statictext", undefined, "Subdivision y");
    var gridYInput = gridParameterGroup.add("edittext", undefined, "3");
    gridYInput.preferredSize = inputFieldSize;

    // les comp des notes et des pistes de la même taille
    var sizesTheSameGroup = dialogBox.add("group", undefined, "");
    sizesTheSameGroup.orientation = "row";
    sizesTheSameGroup.add("statictext", undefined, "Track comp sizes = note comp sizes");
    var isTrackSameInput = sizesTheSameGroup.add("checkbox", undefined, true);
    isTrackSameInput.value = true;
    isTrackSameInput.preferredSize = inputFieldSize;

    // timings
    var timingParametersGroup = dialogBox.add("group", undefined, "");
    timingParametersGroup.orientation = "row";
    timingParametersGroup.add("statictext", undefined, "Framerate");
    var Framerate = timingParametersGroup.add("edittext", undefined, "30");
    Framerate.preferredSize = inputFieldSize;
    timingParametersGroup.add("statictext", undefined, "Duration");
    var Duration = timingParametersGroup.add("edittext", undefined, "30000");
    Duration.preferredSize = inputFieldSize;
    timingParametersGroup.add("statictext", undefined, "Note Comp Start");
    var noteEarlyPlacement = timingParametersGroup.add("edittext", undefined, "0");
    noteEarlyPlacement.preferredSize = inputFieldSize;


    // Buttons
    var buttonGroup = win.add("group", undefined, "Buttons");
    buttonGroup.orientation = "row";
    var okButton = buttonGroup.add("button", undefined, "OK");
    var cancelButton = buttonGroup.add("button", undefined, "Cancel");

    cancelButton.onClick = function() {
        inputValues = null; // User canceled
        win.close();
    };

    win.center();
    win.show();

}

// Run the function
askUserInput();