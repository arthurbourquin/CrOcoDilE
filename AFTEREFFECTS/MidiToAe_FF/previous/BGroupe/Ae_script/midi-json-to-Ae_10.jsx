// Load the JSON data from a file using eval()
function loadJSONFile() {
    // Prompt the user to select the JSON file
    var file = File.openDialog("Select the JSON file", "*.json");
    if (!file) {
        alert("No file selected!");
        return null;
    }
    file.open("r");
    var jsonString = file.read();
    file.close();

    // Ensure the JSON string is formatted correctly for eval() by wrapping it in parentheses
    return eval('(' + jsonString + ')');
}

// Main function to create compositions
function createCompositionsFromJSON() {
    // Load the JSON data
    var jsonData = loadJSONFile();
    if (!jsonData) {
        alert("Failed to load JSON data!");
        return;
    }

    // Create the main MIDI comp
    var MIDI = app.project.items.addComp("MIDI", 1024, 1024, 1, 100, 30);

    for (var i = 0; i < jsonData.length; i++) {
        // Create a comp for each item in jsonData
        var currentComp = app.project.items.addComp(jsonData[i].name, 256, 256, 1, 3, 30);

        for (var j = 0; j < jsonData[i].occurences.length; j++) {
            // Add currentComp as a layer to MIDI and set its start time
            var layer = MIDI.layers.add(currentComp);
            layer.startTime = jsonData[i].occurences[j];
        }
    }
}

// Run the script within the After Effects app context
app.beginUndoGroup("Create Compositions from JSON");
createCompositionsFromJSON();
app.endUndoGroup();
