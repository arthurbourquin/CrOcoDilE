    {
    function myScript(thisObj){
        function myScript_buildUI(thisObj){
            var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Dockable Script", undefined, {resizeable:true, closeButton: false});

        res = "group{orientation:'row',\
            groupOne: Group{orientation:'row',\
            AlignButton: Button{text:'/'},\
            },\
            groupTwo: Group{orientation:'row',\
            AddFrameButton: Button{text:'⊞'},\
            },\
            groupThree: Group{orientation:'row',\
            SubFrameButton: Button{text:'Ss'},\
            },\
            groupFour: Group{orientation:'row',\
            AddSecButton: Button{text:'0'},\
            },\
            groupFive: Group{orientation:'row',\
            AddSecButton: Button{text:'0'},\
            },\
            groupSix: Group{orientation:'row',\
            ScaleBisButton: Button{text:'0'},\
            },\
            }";

        myPanel.grp = myPanel.add(res);

        //Defaults
        ButtonSize = [25, 25];
        myPanel.grp.groupOne.AlignButton.size = ButtonSize;
        myPanel.grp.groupTwo.AddFrameButton.size = ButtonSize;
        myPanel.grp.groupThree.SubFrameButton.size = ButtonSize;
        myPanel.grp.groupFour.AddSecButton.size = ButtonSize;
        myPanel.grp.groupFive.AddSecButton.size = ButtonSize;
        myPanel.grp.groupSix.ScaleBisButton.size = ButtonSize;
        myPanel.grp.spacing = 1;
        

        myPanel.grp.groupOne.AlignButton.onClick = function() {
            if(ScriptUI.environment.keyboardState.shiftKey == 0 && ScriptUI.environment.keyboardState.metaKey == 0 && ScriptUI.environment.keyboardState.altKey == 0){
                AddFrame();}else{ // click
                if(ScriptUI.environment.keyboardState.shiftKey == 0 && ScriptUI.environment.keyboardState.metaKey == 1 && ScriptUI.environment.keyboardState.altKey == 0){
                AlignAtTime('Meta')}else{ // cmd click
                if(ScriptUI.environment.keyboardState.shiftKey == 0  && ScriptUI.environment.keyboardState.metaKey == 0 && ScriptUI.environment.keyboardState.altKey == 1){
                SubFrame('Alt')}else{ // alt click
                if(ScriptUI.environment.keyboardState.shiftKey == 1 && ScriptUI.environment.keyboardState.metaKey == 0 && ScriptUI.environment.keyboardState.altKey == 0){
                Add10Frames('Shift')}else{ // shift click
                if(ScriptUI.environment.keyboardState.shiftKey == 0 && ScriptUI.environment.keyboardState.metaKey == 1 && ScriptUI.environment.keyboardState.altKey == 1){
                AlignAtLayer('meta + Alt')}else{ // cmd alt click
                if(ScriptUI.environment.keyboardState.shiftKey == 1 && ScriptUI.environment.keyboardState.metaKey == 1 && ScriptUI.environment.keyboardState.altKey == 0){
                prompt('Shift + Meta')}else{  // cmd shift click
                if(ScriptUI.environment.keyboardState.shiftKey == 1 && ScriptUI.environment.keyboardState.metaKey == 0 && ScriptUI.environment.keyboardState.altKey == 1){
                Sub10Frames('Shift + Alt')}else{ // alt shift click
                if(ScriptUI.environment.keyboardState.shiftKey == 1 && ScriptUI.environment.keyboardState.metaKey == 1 && ScriptUI.environment.keyboardState.altKey == 1){
                prompt('Shift + Meta + Alt') // cmd alt shift click
                }}}}}}}}
            }

        myPanel.grp.groupTwo.AddFrameButton.onClick = function() {
            if(ScriptUI.environment.keyboardState.shiftKey == 0 && ScriptUI.environment.keyboardState.metaKey == 0 && ScriptUI.environment.keyboardState.altKey == 0){
                Grid();}else{ // click
                if(ScriptUI.environment.keyboardState.shiftKey == 0 && ScriptUI.environment.keyboardState.metaKey == 1 && ScriptUI.environment.keyboardState.altKey == 0){
                SplitScreen('Meta')}else{ // cmd click
                if(ScriptUI.environment.keyboardState.shiftKey == 0  && ScriptUI.environment.keyboardState.metaKey == 0 && ScriptUI.environment.keyboardState.altKey == 1){
                prompt('Alt')}else{ // alt click
                if(ScriptUI.environment.keyboardState.shiftKey == 1 && ScriptUI.environment.keyboardState.metaKey == 0 && ScriptUI.environment.keyboardState.altKey == 0){
                Grid('Shift')}else{ // shift click
                if(ScriptUI.environment.keyboardState.shiftKey == 0 && ScriptUI.environment.keyboardState.metaKey == 1 && ScriptUI.environment.keyboardState.altKey == 1){
                SplitScreen('meta + Alt')}else{ // cmd alt click
                if(ScriptUI.environment.keyboardState.shiftKey == 1 && ScriptUI.environment.keyboardState.metaKey == 1 && ScriptUI.environment.keyboardState.altKey == 0){
                prompt('Shift + Meta')}else{  // cmd shift click
                if(ScriptUI.environment.keyboardState.shiftKey == 1 && ScriptUI.environment.keyboardState.metaKey == 0 && ScriptUI.environment.keyboardState.altKey == 1){
                prompt('Shift + Alt')}else{ // alt shift click
                if(ScriptUI.environment.keyboardState.shiftKey == 1 && ScriptUI.environment.keyboardState.metaKey == 1 && ScriptUI.environment.keyboardState.altKey == 1){
                prompt('Shift + Meta + Alt') // cmd alt shift click
                }}}}}}}}
        }
                

        myPanel.layout.layout(true);

        return myPanel;
    }
   
   
      var myScriptPal = myScript_buildUI(thisObj);

      if (myScriptPal != null && myScriptPal instanceof Window){
         myScriptPal.center();
         myScriptPal.show();
      }

   }
   myScript(this);
}


function AddFrame(){
    app.beginUndoGroup("undoString");

    NbSL = app.project.activeItem.selectedLayers.length.toFixed(0);

    for(i=1;i<=NbSL;i++){
        app.project.activeItem.selectedLayers[i-1].startTime =
        app.project.activeItem.selectedLayers[i-1].startTime + (i-1)*app.project.activeItem.frameDuration;

    }

    app.endUndoGroup();
}

function SubFrame(){
    app.beginUndoGroup("undoString");

    NbSL = app.project.activeItem.selectedLayers.length.toFixed(0);

    for(i=1;i<=NbSL;i++){
        app.project.activeItem.selectedLayers[i-1].startTime =
        app.project.activeItem.selectedLayers[i-1].startTime - (i-1)*app.project.activeItem.frameDuration;
    }

    app.endUndoGroup();
}

function Add10Frames(){
    app.beginUndoGroup("undoString");

    NbSL = app.project.activeItem.selectedLayers.length.toFixed(0);

    for(i=1;i<=NbSL;i++){
        app.project.activeItem.selectedLayers[i-1].startTime =
        app.project.activeItem.selectedLayers[i-1].startTime + (i-1)*app.project.activeItem.frameDuration*10;
    }

    app.endUndoGroup();
}

function Sub10Frames(){
    app.beginUndoGroup("undoString");

    NbSL = app.project.activeItem.selectedLayers.length.toFixed(0);

    for(i=1;i<=NbSL;i++){
        app.project.activeItem.selectedLayers[i-1].startTime =
        app.project.activeItem.selectedLayers[i-1].startTime - (i-1)*app.project.activeItem.frameDuration*10;
    }

    app.endUndoGroup();
}

function AlignAtTime() {
    app.beginUndoGroup("undoString");

    NbL = app.project.activeItem.numLayers;
    CT = app.project.activeItem.time;

    for(i=1;i<=NbL;i++){
        if(app.project.activeItem.layer(i).selected == 1) {
        app.project.activeItem.layer(i).startTime =
        CT - (app.project.activeItem.layer(i).inPoint - app.project.activeItem.layer(i).startTime) ;}
    }

    app.endUndoGroup();
}

function AlignAtLayer() {
    app.beginUndoGroup("undoString");

    NbL = app.project.activeItem.numLayers;
    CT = app.project.activeItem.time;

    for(i=1;i<=NbL;i++){
        if(app.project.activeItem.layer(i).selected == 1) {
        app.project.activeItem.layer(i).startTime =
        app.project.activeItem.selectedLayers[0].inPoint - (app.project.activeItem.layer(i).inPoint - app.project.activeItem.layer(i).startTime) ;}
    }

    app.endUndoGroup();
}

function Grid(){
    app.beginUndoGroup("undoString");

    NbSL = app.project.activeItem.selectedLayers.length;
    SmallestBiggerSquare = Math.pow(Math.floor(Math.pow(NbSL,0.5)+0.9999),2);
    c = Math.pow(SmallestBiggerSquare,0.5);
    CW = app.project.activeItem.width;
    CH = app.project.activeItem.height;

    for(i=1;i<=NbSL;i++){
        if(app.project.activeItem.selectedLayers[i-1].position.numKeys == 0){
            app.project.activeItem.selectedLayers[i-1].position.setValue([
            (CW/c)*(i - c * (Math.floor((i-1)/c))) - CW/(2*c),
            (CH/c) * (Math.floor((i-1)/c)) + CH/(2*c)])
        }else{
            app.project.activeItem.selectedLayers[i-1].position.setValueAtTime(app.project.activeItem.time,[
            (CW/c)*(i - c * (Math.floor((i-1)/c))) - CW/(2*c),
            (CH/c) * (Math.floor((i-1)/c)) + CH/(2*c)])
        }
    }

    if(ScriptUI.environment.keyboardState.shiftKey == 0){

        for(i=1;i<=NbSL;i++){

            if(app.project.activeItem.selectedLayers[i-1].width/app.project.activeItem.selectedLayers[i-1].height >= CW/CH){
                s = ((CW/c)/app.project.activeItem.selectedLayers[i-1].width)*100;
            }else{
                s = ((CH/c)/app.project.activeItem.selectedLayers[i-1].height)*100;
            }

            if(app.project.activeItem.selectedLayers[i-1].scale.numKeys == 0){
                app.project.activeItem.selectedLayers[i-1].scale.setValue([s,s]);
            }else{
                app.project.activeItem.selectedLayers[i-1].scale.setValueAtTime(app.project.activeItem.time,[s,s]);
            }
        }
    }

    app.endUndoGroup();
}

function GridNoScale(){
    app.beginUndoGroup("undoString");

    NbSL = app.project.activeItem.selectedLayers.length;
    SmallestBiggerSquare = Math.pow(Math.floor(Math.pow(NbSL,0.5)+0.9999),2);
    c = Math.pow(SmallestBiggerSquare,0.5);
    CW = app.project.activeItem.width;
    CH = app.project.activeItem.height;
    

    if(app.project.activeItem.selectedLayers[0].position.numKeys == 0){

        for(i=1;i<=NbSL;i++){
            app.project.activeItem.selectedLayers[i-1].position.setValue([
                (CW/c)*(i - c * (Math.floor((i-1)/c))) - CW/(2*c),
                (CH/c) * (Math.floor((i-1)/c)) + CH/(2*c)])
        }
    }else{
        for(i=1;i<=NbSL;i++){
            app.project.activeItem.selectedLayers[i-1].position.setValueAtTime(app.project.activeItem.time,[
                (CW/c)*(i - c * (Math.floor((i-1)/c))) - CW/(2*c),
                (CH/c) * (Math.floor((i-1)/c)) + CH/(2*c)])
        }
    }

    app.endUndoGroup();
}

function SplitScreen(){
    app.beginUndoGroup("undoString");

    if(app.project.activeItem.selectedLayers.length != 2){
        prompt("select 2 layers to make it works")
    }else{

    CW = app.project.activeItem.width;
    CH = app.project.activeItem.height;
    CT = app.project.activeItem.time;
    CD = app.project.activeItem.duration;
    LayerA = app.project.activeItem.selectedLayers[0];
    LayerB = app.project.activeItem.selectedLayers[1];
    layerAn = app.project.activeItem.selectedLayers[0].name; // Si on ne nomme pas les 2 premiers calques sélectionnés, il prends ensuite les Mattes parce qu'ils sont sélectionnés dans le process
    layerBn = app.project.activeItem.selectedLayers[1].name;

    if(ScriptUI.environment.keyboardState.altKey == 0){
        PosA = [CW/2,CH/4];
        PosB = [CW/2,CH*3/4];
        ScaleM = [100,50];
        LayerAScale = [100*CW/LayerA.width,100*CW/LayerA.width];
        LayerBScale = [100*CW/LayerB.width,100*CW/LayerB.width];

    }else{
        PosA = [CW/4,CH/2];
        PosB = [CW*3/4,CH/2];
        ScaleM = [50,100];
        LayerAScale = [100*CH/LayerA.height,100*CH/LayerA.height];
        LayerBScale = [100*CH/LayerB.height,100*CH/LayerB.height];
    }    

    app.project.activeItem.layers.addSolid([0,0,0],"TSAK matte", CW, CH, 1,CD);
    app.project.activeItem.layer("TSAK matte").name = "Matte Top";
    app.project.activeItem.layer("Matte Top").position.setValue(PosA);
    app.project.activeItem.layer("Matte Top").scale.setValue(ScaleM);    
    app.project.activeItem.layer("Matte Top").enabled = false;
    app.project.activeItem.layer("Matte Top").shy = true;
    app.project.activeItem.layer("Matte Top").duplicate().name = "Matte Bottom";
    app.project.activeItem.layer("Matte Bottom").position.setValue(PosB);
    app.project.activeItem.layer("Matte Top").moveBefore(app.project.activeItem.layer(layerAn));
    app.project.activeItem.layer("Matte Bottom").moveBefore(app.project.activeItem.layer(layerBn));
    
    app.project.activeItem.layer(layerAn).trackMatteType = TrackMatteType.ALPHA;
    app.project.activeItem.layer(layerBn).trackMatteType = TrackMatteType.ALPHA;

    if(app.project.activeItem.layer(layerAn).position.numKeys == 0){
    app.project.activeItem.layer(layerAn).position.setValue(PosA)}else{
    app.project.activeItem.layer(layerAn).position.setValueAtTime(CT, PosA)}

    if(app.project.activeItem.layer(layerAn).scale.numKeys == 0){
    app.project.activeItem.layer(layerAn).scale.setValue(LayerAScale)}else{
    app.project.activeItem.layer(layerAn).scale.setValueAtTime(CT, LayerAScale)}

    if(app.project.activeItem.layer(layerBn).position.numKeys == 0){
    app.project.activeItem.layer(layerBn).position.setValue(PosB)}else{
    app.project.activeItem.layer(layerBn).position.setValueAtTime(CT, PosB)}
    
    if(app.project.activeItem.layer(layerBn).scale.numKeys == 0){
    app.project.activeItem.layer(layerBn).scale.setValue(LayerBScale)}else{
    app.project.activeItem.layer(layerBn).scale.setValueAtTime(CT, LayerBScale)}

    app.endUndoGroup();
    }
}

function ScaleBis(){
    app.beginUndoGroup("undoString");

    if (ScriptUI.environment.keyboardState.shiftKey == 0){

        NbSL = app.project.activeItem.selectedLayers.length;

        for(i=1;i<=NbSL;i++){
            app.project.activeItem.selectedLayers[i-1].Effects.addProperty("Paramètre glissière");
            app.project.activeItem.selectedLayers[i-1].effect.property("Paramètre glissière").name = "TSAK ScaleBis";
            app.project.activeItem.selectedLayers[i-1].effect.property("ScaleBis")(1).setValue(100);
            app.project.activeItem.selectedLayers[i-1].property("Scale").expression ='[value[0]*effect("ScaleBis")("Curseur")/100,value[1]*effect("ScaleBis")("Curseur")/100]';
        }
    }else{

        NbSL = app.project.activeItem.selectedLayers.length;   
        
        for(i=1;i<=NbSL;i++){
            app.project.activeItem.selectedLayers[i-1].scale.expression =
                't=(width+height)/(thisComp.width+thisComp.height);[value[0]/t,value[1]/t]'            
        }
    }


    app.endUndoGroup()
}