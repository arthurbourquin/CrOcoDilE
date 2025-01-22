// Load the JSON data from a file
function loadJSONFile(filePath) {
    var file = new File(filePath);
    if (!file.exists) {
        alert("JSON file not found!");
        return null;
    }
    file.open("r");
    var jsonString = file.read();
    file.close();
    
    // Attempt to parse JSON data
    try {
        return JSON.parse(jsonString);
    } catch (e) {
        // Fallback to eval() in case of parsing issues
        alert("Error parsing JSON. Attempting fallback...");
        return eval("(" + jsonString + ")");
    }
}

// Main function to create compositions
function createCompositionsFromJSON() {
    // Set the JSON file path (update this path to where you saved compositions.json)
    var jsonFilePath = "basic-json.json";
    
    // Load JSON data
    var jsonData = loadJSONFile(jsonFilePath);
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
