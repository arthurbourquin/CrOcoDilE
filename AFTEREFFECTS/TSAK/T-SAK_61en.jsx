{
    function myScript(thisObj){
        function myScript_buildUI(thisObj){
            var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Tohm Swiss Army Knife", undefined, {resizeable:true, closeButton: false});

        res = "group{orientation:'column',\
                groupA: Group{orientation:'row',\
                    ButtonOne: Button{text:'|'},\
                    ButtonTwo: Button{text:'+'},\
                    ButtonThree: Button{text:'-'},\
                    ButtonFour: Button{text:'sBis'},\
                    ButtonFive: Button{text:'sx sy'},\
                    ButtonSix: Button{text:'sss'},\
                    ButtonSeven: Button{text:'X s'},\
            },\
                groupB: Group{orientation:'row',\
                    ButtonOne: Button{text:'||'},\
                    ButtonTwo: Button{text:'='},\
                    ButtonThree: Button{text:'⊞'},\
                    ButtonFour: Button{text:'α'},\
                    ButtonFive: Button{text:'TLS'},\
                    ButtonSix: Button{text:'X α'},\
                    ButtonSeven: Button{text:'R α'},\
            },\
                groupC: Group{orientation:'row',\
                    ButtonOne: Button{text:'||'},\
                    ButtonTwo: Button{text:'='},\
                    ButtonThree: Button{text:'⊞'},\
                    ButtonFour: Button{text:'α'},\
                    ButtonFive: Button{text:'TLS'},\
                    ButtonSix: Button{text:'X α'},\
                    ButtonSeven: Button{text:'R α'},\
            },\
                groupB: Group{orientation:'row',\
                    ButtonOne: Button{text:'||'},\
                    ButtonTwo: Button{text:'='},\
                    ButtonThree: Button{text:'⊞'},\
                    ButtonFour: Button{text:'α'},\
                    ButtonFive: Button{text:'TLS'},\
                    ButtonSix: Button{text:'X α'},\
                    ButtonSeven: Button{text:'R α'},\
            },\
            }";

        myPanel.grp = myPanel.add(res);

        var ButtonSize = [25,25];

        myPanel.grp.groupA.ButtonOne.size = ButtonSize;
        myPanel.grp.groupA.ButtonTwo.size = ButtonSize;
        myPanel.grp.groupA.ButtonThree.size = ButtonSize;
        myPanel.grp.groupA.ButtonFour.size = ButtonSize;
        myPanel.grp.groupA.ButtonFive.size = ButtonSize;
        myPanel.grp.groupA.ButtonSix.size = ButtonSize;
        myPanel.grp.groupA.ButtonSeven.size = ButtonSize;

        myPanel.grp.groupB.ButtonOne.size = ButtonSize;
        myPanel.grp.groupB.ButtonTwo.size = ButtonSize;
        myPanel.grp.groupB.ButtonThree.size = ButtonSize;
        myPanel.grp.groupB.ButtonFour.size = ButtonSize;
        myPanel.grp.groupB.ButtonFive.size = ButtonSize;
        myPanel.grp.groupB.ButtonSix.size = ButtonSize;
        myPanel.grp.groupB.ButtonSeven.size = ButtonSize;

        myPanel.grp.groupC.ButtonOne.size = ButtonSize;
        myPanel.grp.groupC.ButtonTwo.size = ButtonSize;
        myPanel.grp.groupC.ButtonThree.size = ButtonSize;
        myPanel.grp.groupC.ButtonFour.size = ButtonSize;
        myPanel.grp.groupC.ButtonFive.size = ButtonSize;
        myPanel.grp.groupC.ButtonSix.size = ButtonSize;
        myPanel.grp.groupC.ButtonSeven.size = ButtonSize;

        myPanel.grp.groupD.ButtonOne.size = ButtonSize;
        myPanel.grp.groupD.ButtonTwo.size = ButtonSize;
        myPanel.grp.groupD.ButtonThree.size = ButtonSize;
        myPanel.grp.groupD.ButtonFour.size = ButtonSize;
        myPanel.grp.groupD.ButtonFive.size = ButtonSize;
        myPanel.grp.groupD.ButtonSix.size = ButtonSize;
        myPanel.grp.groupD.ButtonSeven.size = ButtonSize;

        myPanel.grp.spacing = 1;
        myPanel.grp.groupA.spacing = 1;
        myPanel.grp.groupB.spacing = 1;
        myPanel.grp.groupC.spacing = 1;
        myPanel.grp.groupD.spacing = 1;

        myPanel.grp.groupA.ButtonOne.onClick = function() {
            if(ScriptUI.environment.keyboardState.shiftKey == 0 && ScriptUI.environment.keyboardState.altKey == 0){
                AlignAtLayer();}else{ // click
                if(ScriptUI.environment.keyboardState.shiftKey == 1 && ScriptUI.environment.keyboardState.altKey == 0){
                AlignAtTime();}else{ // cmd click
                if(ScriptUI.environment.keyboardState.shiftKey == 0  && ScriptUI.environment.keyboardState.altKey == 1){
                AlignAtZero();} // alt click
                }}
            }

        myPanel.grp.groupA.ButtonTwo.onClick = function() {
            if(ScriptUI.environment.keyboardState.shiftKey == 0 && ScriptUI.environment.keyboardState.altKey == 0){
                AddFrame();}else{ // click
                if(ScriptUI.environment.keyboardState.shiftKey == 1 && ScriptUI.environment.keyboardState.altKey == 0){
                Add10Frames();} // shift click
                }
            }

        myPanel.grp.groupA.ButtonThree.onClick = function() {
            if(ScriptUI.environment.keyboardState.shiftKey == 0 && ScriptUI.environment.keyboardState.altKey == 0){
                SubFrame();}else{ // click
                if(ScriptUI.environment.keyboardState.shiftKey == 1 && ScriptUI.environment.keyboardState.altKey == 0){
                Sub10Frames();} // shift click
                }
            }

        myPanel.grp.groupA.ButtonFour.onClick = function() {
            ScaleBis(); // click
        }

        myPanel.grp.groupA.ButtonFive.onClick = function() {
            if(ScriptUI.environment.keyboardState.shiftKey == 0 && ScriptUI.environment.keyboardState.altKey == 0){
                ScaleSplit();}else{ // click
                if(ScriptUI.environment.keyboardState.shiftKey == 0 && ScriptUI.environment.keyboardState.altKey == 1){
                ScaleSplit3D()} // cmd click
                }
            }

        myPanel.grp.groupA.ButtonSix.onClick = function() {
                UniSize(); // click
            }

        myPanel.grp.groupA.ButtonSeven.onClick = function() {
                RemoveScaleExp(); // click
            }

        myPanel.grp.groupB.ButtonOne.onClick = function() {
                SplitScreen(); // click
            }

        myPanel.grp.groupB.ButtonTwo.onClick = function() {
                SplitScreen(); // click
            }

        myPanel.grp.groupB.ButtonThree.onClick = function() {
                Grid(); // click
            }

        myPanel.grp.groupB.ButtonFour.onClick = function() {
            if(ScriptUI.environment.keyboardState.shiftKey == 0 && ScriptUI.environment.keyboardState.altKey == 0){
                BlackToAlpha();}else{ // click
                if(ScriptUI.environment.keyboardState.shiftKey == 0 && ScriptUI.environment.keyboardState.altKey == 1){
                WhiteToAlpha();} // alt click
                }
            }

        myPanel.grp.groupB.ButtonFive.onClick = function() {
                CurvesHLS(); // click
            }

        myPanel.grp.groupB.ButtonSix.onClick = function() {
                NoAlpha(); // click
            }

        myPanel.grp.groupB.ButtonSeven.onClick = function() {
                AlphaRamp(); // click
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

function AlignAtZero() {
    app.beginUndoGroup("undoString");

    NbL = app.project.activeItem.numLayers;
    CT = app.project.activeItem.time;

    for(i=1;i<=NbL;i++){
        if(app.project.activeItem.layer(i).selected == 1) {
        app.project.activeItem.layer(i).startTime =
        0 ;}
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

    if(ScriptUI.environment.keyboardState.shiftKey != 0){

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

function SplitScreen(){

    app.beginUndoGroup("undoString");

    CW = app.project.activeItem.width;
    CH = app.project.activeItem.height;
    CT = app.project.activeItem.time;
    CD = app.project.activeItem.duration;
    LayerA = app.project.activeItem.selectedLayers[0];
    LayerB = app.project.activeItem.selectedLayers[1];
    layerAn = app.project.activeItem.selectedLayers[0].name; // Si on ne nomme pas les 2 premiers calques sélectionnés, il prends ensuite les Mattes parce qu'ils sont sélectionnés dans le process
    layerBn = app.project.activeItem.selectedLayers[1].name;

    if(app.project.activeItem.selectedLayers.length != 2 || LayerA.name == LayerB.name ){
        prompt("Error: Select 2 layer, layers must have different names")
    }else{

    if(ScriptUI.environment.keyboardState.shiftKey == 0){
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

    NbSL = app.project.activeItem.selectedLayers.length;

    for(i=1;i<=NbSL;i++){
        app.project.activeItem.selectedLayers[i-1].Effects.addProperty("ADBE Slider Control");
        app.project.activeItem.selectedLayers[i-1].effect.property("ADBE Slider Control").name = "Scale Bis";
        app.project.activeItem.selectedLayers[i-1].effect.property("Scale Bis")(1).setValue(100);
        app.project.activeItem.selectedLayers[i-1].property("Scale").expression ='[value[0]*effect("Scale Bis")("Slider")/100,value[1]*effect("Scale Bis")("Slider")/100]';
    }
    app.endUndoGroup()
}

function ScaleSplit(){
    app.beginUndoGroup("undoString");
    
    NbSL = app.project.activeItem.selectedLayers.length;
    
    for(i=1;i<=NbSL;i++){
        app.project.activeItem.selectedLayers[i-1].Effects.addProperty("ADBE Slider Control");
        app.project.activeItem.selectedLayers[i-1].effect.property("ADBE Slider Control").name = "Scale X";
        app.project.activeItem.selectedLayers[i-1].effect.property("Scale X")(1).setValue(100);
        app.project.activeItem.selectedLayers[i-1].effect.property("Scale X").duplicate().name = "Scale Y";
        app.project.activeItem.selectedLayers[i-1].property("Scale").expression ='[value[0]*effect("Scale X")("Slider")/100,value[1]*effect("Scale Y")("Slider")/100]';
    }

    app.endUndoGroup()
}

function ScaleSplit3D(){
    app.beginUndoGroup("undoString");
    
    NbSL = app.project.activeItem.selectedLayers.length;
    
    for(i=1;i<=NbSL;i++){
        app.project.activeItem.selectedLayers[i-1].Effects.addProperty("ADBE Slider Control");
        app.project.activeItem.selectedLayers[i-1].effect.property("ADBE Slider Control").name = "Scale X";
        app.project.activeItem.selectedLayers[i-1].effect.property("Scale X")(1).setValue(100);
        app.project.activeItem.selectedLayers[i-1].effect.property("Scale X").duplicate().name = "Scale Y";
        app.project.activeItem.selectedLayers[i-1].effect.property("Scale X").duplicate().name = "Scale Z";
        app.project.activeItem.selectedLayers[i-1].property("Scale").expression ='[value[0]*effect("Scale X")("Slider")/100,value[1]*effect("Scale Y")("Slider")/100,value[2]*effect("Scale Z")("Slider")/100]';
    }

    app.endUndoGroup()
}

function UniSize(){

    app.beginUndoGroup("undoString");

    NbSL = app.project.activeItem.selectedLayers.length;

    for(i=1;i<=NbSL;i++){
        app.project.activeItem.selectedLayers[i-1].property("Scale").expression =
            't=(width+height)/(thisComp.width+thisComp.height);[value[0]/t,value[1]/t]'            
    }
    app.endUndoGroup()
}

function RemoveScaleExp(){ // n'ôte que les expressions (pas réussi à trouver un moyen d'ôter les effets)
    app.beginUndoGroup("undoString");

    NbSL = app.project.activeItem.selectedLayers.length;

    for(i=1;i<=NbSL;i++){
        app.project.activeItem.selectedLayers[i-1].property("Scale").expression = "";
    }
    app.endUndoGroup()
}

function WhiteToAlpha(){
    app.beginUndoGroup("undoString");

    NbSL = app.project.activeItem.selectedLayers.length;
    SL = app.project.activeItem.selectedLayers;
    L1 = app.project.activeItem.layer(1);
    
        for(i=0;i<=NbSL;i++){
            app.project.activeItem.selectedLayers[i].Effects.addProperty("ADBE Shift Channels").name = "ADBE Shift Channels (TSAK)";
            app.project.activeItem.selectedLayers[i].property("Effects").property("ADBE Shift Channels (TSAK)").property("Alpha =").setValue(7);
            app.project.activeItem.selectedLayers[i].Effects.addProperty("ADBE Remove Color Matting").name = "ADBE Remove Color Matting (TSAK)";
            app.project.activeItem.selectedLayers[i].Effects.addProperty("ADBE Fill").name = "ADBE Fill (TSAK)";
            app.project.activeItem.selectedLayers[i].property("Effects").property("ADBE Fill (TSAK)").property("Color").setValue([1,1,1]);
        }
    
    app.endUndoGroup()
}

function BlackToAlpha(){
    app.beginUndoGroup("undoString");

    NbSL = app.project.activeItem.selectedLayers.length;
    SL = app.project.activeItem.selectedLayers;
    L1 = app.project.activeItem.layer(1);
    
        for(i=0;i<=NbSL;i++){
            app.project.activeItem.selectedLayers[i].Effects.addProperty("ADBE Invert").name = "ADBE Invert (TSAK)";
            app.project.activeItem.selectedLayers[i].Effects.addProperty("ADBE Shift Channels").name = "ADBE Shift Channels (TSAK)";
            app.project.activeItem.selectedLayers[i].property("Effects").property("ADBE Shift Channels (TSAK)").property("Alpha =").setValue(7);
            app.project.activeItem.selectedLayers[i].Effects.addProperty("ADBE Remove Color Matting").name = "ADBE Remove Color Matting (TSAK)";
            app.project.activeItem.selectedLayers[i].Effects.addProperty("ADBE Fill").name = "ADBE Fill (TSAK)";
            app.project.activeItem.selectedLayers[i].property("Effects").property("ADBE Fill (TSAK)").property("Color").setValue([0,0,0]);
        }
    
    app.endUndoGroup()
}

function CurvesHLS(){
    app.beginUndoGroup("undoString");

    NbSL = app.project.activeItem.selectedLayers.length;
    SL = app.project.activeItem.selectedLayers;
    L1 = app.project.activeItem.layer(1);
    
        for(i=0;i<=NbSL;i++){
            app.project.activeItem.selectedLayers[i].Effects.addProperty("ADBE Channel Combiner").name = "ADBE Channel Combiner A (TSAK)";
            app.project.activeItem.selectedLayers[i].Effects.addProperty("ADBE CurvesCustom").name = "Curves HLS (TSAK)";
            app.project.activeItem.selectedLayers[i].property("Effects").property("Curves HLS (TSAK)").property("Channel:").setValue(3);
            app.project.activeItem.selectedLayers[i].Effects.addProperty("ADBE Channel Combiner").name = "ADBE Channel Combiner B (TSAK)";
            app.project.activeItem.selectedLayers[i].property("Effects").property("ADBE Channel Combiner B (TSAK)").property("From").setValue(2);
        }
    
    app.endUndoGroup()
}

function NoAlpha(){
    app.beginUndoGroup("undoString");

    NbSL = app.project.activeItem.selectedLayers.length;
    SL = app.project.activeItem.selectedLayers;
    L1 = app.project.activeItem.layer(1);
    
        for(i=0;i<=NbSL;i++){
            app.project.activeItem.selectedLayers[i].Effects.addProperty("ADBE Pro Levels2").name = "ADBE Pro Levels2 (TSAK)";
            app.project.activeItem.selectedLayers[i].property("Effects").property("ADBE Pro Levels2 (TSAK)").property("Alpha Output Black").setValue(1);
        }
    
    app.endUndoGroup()
}

function AlphaRamp(){
    app.beginUndoGroup("undoString");

    NbSL = app.project.activeItem.selectedLayers.length;
    
        for(i=0;i<=NbSL;i++){
            app.project.activeItem.selectedLayers[i].Effects.addProperty("ADBE Ramp").name = "ADBE Ramp (TSAK)";
            app.project.activeItem.selectedLayers[i].property("Effects").property("ADBE Ramp (TSAK)").property(1).setValue([SL[i].width*.25,SL[i].height*.25]);
            app.project.activeItem.selectedLayers[i].property("Effects").property("ADBE Ramp (TSAK)").property(3).setValue([SL[i].width,SL[i].height]);
            app.project.activeItem.selectedLayers[i].property("Effects").property("ADBE Ramp (TSAK)").property(5).setValue(2);
            app.project.activeItem.selectedLayers[i].Effects.addProperty("ADBE Invert").name = "ADBE Invert (TSAK)";
            app.project.activeItem.selectedLayers[i].Effects.addProperty("ADBE Shift Channels").name = "ADBE Shift Channels (TSAK)";
            app.project.activeItem.selectedLayers[i].property("Effects").property("ADBE Shift Channels (TSAK)").property(1).setValue(5);
            app.project.activeItem.selectedLayers[i].Effects.addProperty("ADBE Fill").name = "ADBE Fill (TSAK)";
            app.project.activeItem.selectedLayers[i].property("Effects").property("ADBE Fill (TSAK)").property(3).setValue([1,0.7,0.2]);
        }
    
    app.endUndoGroup()
}
