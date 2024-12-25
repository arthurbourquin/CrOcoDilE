(function exportCompsAndLayers() {
    var outputFile = File.saveDialog("Save exported composition data", "*.jsx");
    if (!outputFile) {
        return; // User cancelled the save dialog
    }

    function writeFile(file, content) {
        file.encoding = "UTF-8";
        file.open("w");
        file.write(content);
        file.close();
    }

    function escapeFilePath(path) {
        // Escape backslashes in the file path
        return path.replace(/\\/g, "\\\\");
    }

    function findProjectItemByName(name) {
        for (var i = 1; i <= app.project.numItems; i++) {
            if (app.project.item(i).name === name) {
                return app.project.item(i);
            }
        }
        return null; // Return null if no match is found
    }

    function collectFootageItems() {
        var project = app.project;
        var footageData = [];

        for (var i = 1; i <= project.numItems; i++) {
            var item = project.item(i);
            if (item instanceof FootageItem && item.file) { // Check if it's footage with a file
                footageData.push({
                    name: item.name,
                    path: escapeFilePath(item.file.fsName) // Escape backslashes for paths
                });
            }
        }
        return footageData;
    }

    function collectCompsAndLayers() {
        var project = app.project;
        var compsData = [];

        for (var i = 1; i <= project.numItems; i++) {
            var item = project.item(i);
            if (item instanceof CompItem) {
                var compData = {
                    name: item.name,
                    width: item.width,
                    height: item.height,
                    duration: item.duration,
                    frameRate: item.frameRate,
                    layers: []
                };

                for (var j = 1; j <= item.numLayers; j++) {
                    var layer = item.layer(j);
                    var layerData = {
                        name: layer.name,
                        type: layer.matchName, // MatchName helps identify the type of layer
                        startTime: layer.startTime,
                        inPoint: layer.inPoint,
                        outPoint: layer.outPoint,
                        transform: {
                            position: layer.property("Transform").property("Position").value,
                            scale: layer.property("Transform").property("Scale").value,
                            rotation: layer.property("Transform").property("Rotation").value,
                            opacity: layer.property("Transform").property("Opacity").value
                        },
                        sourceName: layer.source ? layer.source.name : null // Reference the footage or comp source
                    };
                    compData.layers.push(layerData);
                }

                compsData.push(compData);
            }
        }
        return compsData;
    }

    function generateScript(footageData, compsData) {
        var script = "// Auto-generated script to recreate compositions and footage\n";
        script += "app.beginUndoGroup(\"Recreate Project\");\n\n";

        // Add footage items
        script += "// Add footage\n";
        for (var i = 0; i < footageData.length; i++) {
            var footage = footageData[i];
            script += "var footage" + i + " = app.project.importFile(new ImportOptions(File(\"" + footage.path + "\")));\n";
            script += "footage" + i + ".name = \"" + footage.name + "\";\n";
        }
        script += "\n";

        // Add compositions and layers
        script += "// Add compositions\n";
        for (var i = 0; i < compsData.length; i++) {
            var comp = compsData[i];
            script += "var comp" + i + " = app.project.items.addComp(\"" + comp.name + "\", " + comp.width + ", " + comp.height + ", 1, " + comp.duration + ", " + comp.frameRate + ");\n";

            for (var j = 0; j < comp.layers.length; j++) {
                var layer = comp.layers[j];
                if (layer.sourceName) {
                    // Link to existing footage or comp
                    script += "var sourceLayer = (function findLayerByName() {\n";
                    script += "    for (var k = 1; k <= app.project.numItems; k++) {\n";
                    script += "        if (app.project.item(k).name === \"" + layer.sourceName + "\") {\n";
                    script += "            return app.project.item(k);\n";
                    script += "        }\n";
                    script += "    }\n";
                    script += "    return null;\n";
                    script += "})();\n";
                    script += "if (sourceLayer) {\n";
                    script += "    var layer" + j + " = comp" + i + ".layers.add(sourceLayer);\n";
                    script += "} else {\n";
                    script += "    var layer" + j + " = comp" + i + ".layers.addNull(); // Placeholder if source not found\n";
                    script += "}\n";
                } else {
                    // Create a null layer as placeholder
                    script += "var layer" + j + " = comp" + i + ".layers.addNull();\n";
                }

                script += "layer" + j + ".name = \"" + layer.name + "\";\n";
                script += "layer" + j + ".startTime = " + layer.startTime + ";\n";
                script += "layer" + j + ".inPoint = " + layer.inPoint + ";\n";
                script += "layer" + j + ".outPoint = " + layer.outPoint + ";\n";

                script += "layer" + j + ".property(\"Transform\").property(\"Position\").setValue([" + layer.transform.position.join(", ") + "]);\n";
                script += "layer" + j + ".property(\"Transform\").property(\"Scale\").setValue([" + layer.transform.scale.join(", ") + "]);\n";
                script += "layer" + j + ".property(\"Transform\").property(\"Rotation\").setValue(" + layer.transform.rotation + ");\n";
                script += "layer" + j + ".property(\"Transform\").property(\"Opacity\").setValue(" + layer.transform.opacity + ");\n";
            }

            script += "\n";
        }

        script += "app.endUndoGroup();\n";
        return script;
    }

    app.beginUndoGroup("Export Compositions and Layers with Footage");

    var footageData = collectFootageItems();
    var compsData = collectCompsAndLayers();
    var jsxContent = generateScript(footageData, compsData);

    writeFile(outputFile, jsxContent);

    app.endUndoGroup();

    alert("Export complete! Script saved to " + outputFile.fsName);
})();
