var StairsUpImage = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x10\x00\x00\x00\x10\b\x06\x00\x00\x00\x1F\u00F3\u00FFa\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x06\u0096iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.1-c000 79.9ccc4de, 2022/03/14-11:26:19        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmp:CreatorTool=\"Adobe Photoshop 23.3 (Windows)\" xmp:CreateDate=\"2022-08-24T08:39:46+02:00\" xmp:MetadataDate=\"2022-08-24T09:22:52+02:00\" xmp:ModifyDate=\"2022-08-24T09:22:52+02:00\" dc:format=\"image/png\" xmpMM:InstanceID=\"xmp.iid:86cf9f53-02d3-3c4c-8d8e-c1276991fd81\" xmpMM:DocumentID=\"adobe:docid:photoshop:078dbd9d-8f02-7e44-b959-8c4cb6c981e0\" xmpMM:OriginalDocumentID=\"xmp.did:1766c47f-2373-c846-876a-572cdd0381bb\" photoshop:ColorMode=\"3\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:1766c47f-2373-c846-876a-572cdd0381bb\" stEvt:when=\"2022-08-24T08:39:46+02:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.3 (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:bb3efee2-d967-2f4d-87d9-bd4d26fdbad1\" stEvt:when=\"2022-08-24T09:18:52+02:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.3 (Windows)\" stEvt:changed=\"/\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:86cf9f53-02d3-3c4c-8d8e-c1276991fd81\" stEvt:when=\"2022-08-24T09:22:52+02:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.3 (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>\u00F7\u00F6|\u00B1\x00\x00\x00FIDAT8\u008Dc\u00FC\u00FF\u00FF?\x03%\u0080\u0085Hu8ma\u00A2\u00C8\u00FAAa\x00Qa\u00C0\u00C8\u00C8\u00C8\u0088S\x0EG,\x10\x1D5\x03\x1F\x06\u00D4\x0FDhx\u00E1\f4\f\u00F5\u00D0@$;=\x0F|\x18P-\x10\u0089\x0E4t\x00\x00&\u0088\f#\u0096\x01\"\u009B\x00\x00\x00\x00IEND\u00AEB`\u0082";




{
    function myScript(thisObj){
        function myScript_buildUI(thisObj){
            var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Tohm Swiss Army Knife", undefined, {resizeable:true, closeButton: true});

        res = "group{orientation:'column',\
                groupA: Group{orientation:'row',\
                    ButtonOne: Button{text:'+'},\
                    ButtonTwo: Button{text:'-'},\
                    ButtonThree: Button{text:'⥫'},\
                    ButtonFour: Button{text:'|<'},\
                    ButtonFive: Button{text:'Ῐ'},\
            },\
                groupB: Group{orientation:'row',\
                    ButtonOne: Button{text:'Split H'},\
                    ButtonTwo: Button{text:'Split V'},\
                    ButtonThree: Button{text:'⊞'},\
                    ButtonFour: Button{text:''},\
            },\
                groupC: Group{orientation:'row',\
                    ButtonOne: Button{text:'S  Bis'},\
                    ButtonTwo: Button{text:'S  Split'},\
                    ButtonThree: Button{text:'S  Uni'},\
                    ButtonFour: Button{text:'kill exp'},\
            },\
                groupD: Group{orientation:'row',\
                    ButtonOne: Button{text:'Luma'},\
                    ButtonTwo: Button{text:'HLS Curves'},\
                    ButtonThree: Button{text:'Alpha Ramp'},\
                    ButtonFour: Button{text:''},\
            },\
            }";

        myPanel.grp = myPanel.add(res);

        var ButtonHeight = 25;

        myPanel.grp.groupA.ButtonOne.size = [50,ButtonHeight];
        myPanel.grp.groupA.ButtonTwo.size = [50,ButtonHeight];
        myPanel.grp.groupA.ButtonThree.size = [50,ButtonHeight];
        myPanel.grp.groupA.ButtonFour.size = [50,ButtonHeight];
        myPanel.grp.groupA.ButtonFive.size = [50,ButtonHeight];

        myPanel.grp.groupB.ButtonOne.size = [67,ButtonHeight];
        myPanel.grp.groupB.ButtonTwo.size = [67,ButtonHeight];
        myPanel.grp.groupB.ButtonThree.size = [67,ButtonHeight];
        myPanel.grp.groupB.ButtonFour.size = [0,ButtonHeight];

        myPanel.grp.groupC.ButtonOne.size = [50,ButtonHeight];
        myPanel.grp.groupC.ButtonTwo.size = [50,ButtonHeight];
        myPanel.grp.groupC.ButtonThree.size = [50,ButtonHeight];
        myPanel.grp.groupC.ButtonFour.size = [50,ButtonHeight];

        myPanel.grp.groupD.ButtonOne.size = [50,ButtonHeight];
        myPanel.grp.groupD.ButtonTwo.size = [75,ButtonHeight];
        myPanel.grp.groupD.ButtonThree.size = [75,ButtonHeight];
        myPanel.grp.groupD.ButtonFour.size = [0,ButtonHeight];

        myPanel.grp.spacing = 1;
        myPanel.grp.groupA.spacing = 1;
        myPanel.grp.groupB.spacing = 1;
        myPanel.grp.groupC.spacing = 1;
        myPanel.grp.groupD.spacing = 1;



        myPanel.grp.groupA.ButtonOne.onClick = function() {
            if(ScriptUI.environment.keyboardState.shiftKey == 0 && ScriptUI.environment.keyboardState.altKey == 0){
                AddFrame();}else{
                if(ScriptUI.environment.keyboardState.shiftKey == 1 && ScriptUI.environment.keyboardState.altKey == 0){
                Add10Frames();}
            }
        }

        myPanel.grp.groupA.ButtonTwo.onClick = function() {
            if(ScriptUI.environment.keyboardState.shiftKey == 0 && ScriptUI.environment.keyboardState.altKey == 0){
                SubFrame();}else{
                if(ScriptUI.environment.keyboardState.shiftKey == 1 && ScriptUI.environment.keyboardState.altKey == 0){
                Sub10Frames();}
                }
            }

        myPanel.grp.groupA.ButtonThree.onClick = function() {
            if(ScriptUI.environment.keyboardState.shiftKey == 0 && ScriptUI.environment.keyboardState.altKey == 0){
                AlignAtTime();}
            }

        myPanel.grp.groupA.ButtonFour.onClick = function() {
            if(ScriptUI.environment.keyboardState.shiftKey == 0 && ScriptUI.environment.keyboardState.altKey == 0){
                AlignAtZero();}else{
                if(ScriptUI.environment.keyboardState.shiftKey == 1 && ScriptUI.environment.keyboardState.altKey == 0){
                AlignAtLayer();}
                }
            }



        myPanel.grp.groupB.ButtonOne.onClick = function() {
                SplitScreenH(); // click
            }

        myPanel.grp.groupB.ButtonTwo.onClick = function() {
                SplitScreenV(); // click
            }

        myPanel.grp.groupB.ButtonThree.onClick = function() {
                Grid(); // click
            }



        myPanel.grp.groupC.ButtonOne.onClick = function() {
            ScaleBis(); // click
        }

        myPanel.grp.groupC.ButtonTwo.onClick = function() {
            if(ScriptUI.environment.keyboardState.shiftKey == 0 && ScriptUI.environment.keyboardState.altKey == 0){
                ScaleSplit();}else{
                if(ScriptUI.environment.keyboardState.shiftKey == 1 && ScriptUI.environment.keyboardState.altKey == 0){
                ScaleSplit3D();}
                }
            }

        myPanel.grp.groupC.ButtonThree.onClick = function() {
            UniSize(); // click
        }

        myPanel.grp.groupC.ButtonFour.onClick = function() {
            RemoveScaleExp(); // click
        }



        myPanel.grp.groupD.ButtonOne.onClick = function() {
            if(ScriptUI.environment.keyboardState.shiftKey == 0 && ScriptUI.environment.keyboardState.altKey == 0){
                WhiteToAlpha();}else{
                if(ScriptUI.environment.keyboardState.shiftKey == 1 && ScriptUI.environment.keyboardState.altKey == 0){
                BlackToAlpha();}
                }
            }

        myPanel.grp.groupD.ButtonTwo.onClick = function() {
            CurvesHLS(); // click
        }

        myPanel.grp.groupD.ButtonThree.onClick = function() {
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

    if(ScriptUI.environment.keyboardState.shiftKey != 1){

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

function SplitScreenH(){

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

    PosA = [CW/2,CH/4];
    PosB = [CW/2,CH*3/4];
    ScaleM = [100,50];
    LayerAScale = [100*CW/LayerA.width,100*CW/LayerA.width];
    LayerBScale = [100*CW/LayerB.width,100*CW/LayerB.width];

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

function SplitScreenV(){

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

    PosA = [CW/4,CH/2];
    PosB = [CW*3/4,CH/2];
    ScaleM = [50,100];
    LayerAScale = [100*CH/LayerA.height,100*CH/LayerA.height];
    LayerBScale = [100*CH/LayerB.height,100*CH/LayerB.height];

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
            //app.project.activeItem.selectedLayers[i].Effects.addProperty("ADBE Remove Color Matting").name = "ADBE Remove Color Matting (TSAK)";
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
            //app.project.activeItem.selectedLayers[i].Effects.addProperty("ADBE Remove Color Matting").name = "ADBE Remove Color Matting (TSAK)";
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
