// After Effects script to read JSON file and create compositions
function main() {
    // Prompt the user to select the JSON file
    var filePath = File.openDialog("Select the JSON file", "*.json");
    
    // If the user cancels the file selection, exit the script
    if (!filePath) {
        alert("No file selected. Script canceled.");
        return;
    }

    // Read and parse JSON data
    if (!filePath.exists) {
        alert("JSON file not found.");
        return;
    }

    filePath.open("r");
    var jsonData;
    try {
        jsonData = JSON.parse(filePath.read());
    } catch (e) {
        alert("Failed to parse JSON file. Please check the file format.");
        filePath.close();
        return;
    }
    filePath.close();

    // Save the active composition
    var activeComp = app.project.activeItem;
    if (!(activeComp instanceof CompItem)) {
        alert("Please select a composition.");
        return;
    }

    // Settings for the created compositions
    var compWidth = 256;
    var compHeight = 256;
    var compDuration = 3; // 3 seconds

    app.beginUndoGroup("Create and Arrange Compositions");

    // Create compositions and place in the active comp
    jsonData.forEach(function(dataObj) {
        // Create a new composition for each JSON object
        var newComp = app.project.items.addComp(
            dataObj.name, 
            compWidth, 
            compHeight, 
            1, 
            compDuration, 
            activeComp.frameRate
        );

        // Add each occurrence to the active composition
        dataObj.occurrences.forEach(function(timecode) {
            var layer = activeComp.layers.add(newComp);
            layer.startTime = timecode;
        });
    });

    app.endUndoGroup();
    alert("Compositions created and added to active comp at specified timecodes.");
}

// Run the main function
main();
