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

    // Parse JSON data using eval()
    return eval("(" + jsonString + ")");
}

// Main function to create compositions
function createCompositionsFromJSON() {
    // Load JSON data from user-selected file
    var jsonData = loadJSONFile();
    if (!jsonData || !jsonData.compositions) {
        alert("Invalid JSON format or missing compositions data.");
        return;
    }

    // Iterate over each composition and create it in After Effects
    for (var i = 0; i < jsonData.compositions.length; i++) {
        var compData = jsonData.compositions[i];
        
        // Set composition parameters
        var compName = compData.name || "Untitled_Comp";
        var compWidth = compData.width || 1920;
        var compHeight = compData.height || 1080;
        var compDuration = compData.duration || 10;
        var compFrameRate = compData.frameRate || 24;

        // Create composition
        var newComp = app.project.items.addComp(compName, compWidth, compHeight, 1, compDuration, compFrameRate);
        newComp.openInViewer();
    }
}

// Run the script within the After Effects app context
app.beginUndoGroup("Create Compositions from JSON");
createCompositionsFromJSON();
app.endUndoGroup();
