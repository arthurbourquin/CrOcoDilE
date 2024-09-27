myPanel.grp.groupOne.ButtonFive.onClick = function() {
    if(ScriptUI.environment.keyboardState.shiftKey == 0 && ScriptUI.environment.keyboardState.metaKey == 0 && ScriptUI.environment.keyboardState.altKey == 0){
        ScaleBis();}else{ // click
        if(ScriptUI.environment.keyboardState.shiftKey == 0 && ScriptUI.environment.keyboardState.metaKey == 1 && ScriptUI.environment.keyboardState.altKey == 0){
        }else{ // cmd click
        if(ScriptUI.environment.keyboardState.shiftKey == 0  && ScriptUI.environment.keyboardState.metaKey == 0 && ScriptUI.environment.keyboardState.altKey == 1){
        }else{ // alt click
        if(ScriptUI.environment.keyboardState.shiftKey == 1 && ScriptUI.environment.keyboardState.metaKey == 0 && ScriptUI.environment.keyboardState.altKey == 0){
        }else{ // shift click
        if(ScriptUI.environment.keyboardState.shiftKey == 0 && ScriptUI.environment.keyboardState.metaKey == 1 && ScriptUI.environment.keyboardState.altKey == 1){
        }else{ // cmd alt click
        if(ScriptUI.environment.keyboardState.shiftKey == 1 && ScriptUI.environment.keyboardState.metaKey == 1 && ScriptUI.environment.keyboardState.altKey == 0){
        }else{  // cmd shift click
        if(ScriptUI.environment.keyboardState.shiftKey == 1 && ScriptUI.environment.keyboardState.metaKey == 0 && ScriptUI.environment.keyboardState.altKey == 1){
        }else{ // alt shift click
        if(ScriptUI.environment.keyboardState.shiftKey == 1 && ScriptUI.environment.keyboardState.metaKey == 1 && ScriptUI.environment.keyboardState.altKey == 1){
        ; // cmd alt shift click
        }}}}}}}}
    }