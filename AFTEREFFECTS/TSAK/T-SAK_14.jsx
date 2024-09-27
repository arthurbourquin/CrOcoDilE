    {
    function myScript(thisObj){
        function myScript_buildUI(thisObj){
            var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Dockable Script", undefined, {resizeable:true, closeButton: false});

        res = "group{orientation:'row',\
            groupOne: Group{orientation:'row',\
            AlignButton: Button{text:'|'},\
            },\
            groupTwo: Group{orientation:'row',\
            AddFrameButton: Button{text:'+'},\
            },\
            groupThree: Group{orientation:'row',\
            SubFrameButton: Button{text:'-'},\
            },\
            groupFour: Group{orientation:'row',\
            AddSecButton: Button{text:'⊞'},\
            },\
            groupFive: Group{orientation:'row',\
            AddSecButton: Button{text:'◫ ⊟'},\
            },\
            groupSix: Group{orientation:'row',\
            ScaleBisButton: Button{text:'Ss'},\
            },\
            groupSeven: Group{orientation:'row',\
            TestButton: Button{text:'t'},\
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
        myPanel.grp.groupSeven.TestButton.size = ButtonSize;
        myPanel.grp.spacing = 1;
        

        myPanel.grp.groupOne.AlignButton.onClick = function() {
            Align();
            }

        myPanel.grp.groupTwo.AddFrameButton.onClick = function() {
            AddFrame();
            }
         
        myPanel.grp.groupThree.SubFrameButton.onClick = function() {
            SubFrame();
            }

        myPanel.grp.groupFour.AddSecButton.onClick = function() {
            Grid();
            }
             
        myPanel.grp.groupFive.AddSecButton.onClick = function() {
            SplitScreen();
            }
            
        myPanel.grp.groupSix.ScaleBisButton.onClick = function() {
            ScaleBis();
            }

        myPanel.grp.groupSeven.TestButton.onClick = function() {
            Test();
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

// click =         aligne sur le curseur
// shift + click = aligne sur le premier calque
function Align() {
    app.beginUndoGroup("undoString");

    NbL = app.project.activeItem.numLayers;

    if (ScriptUI.environment.keyboardState.altKey == 0){
        for(i=1;i<=NbL;i++){
            if(app.project.activeItem.layer(i).selected == 1) {
            app.project.activeItem.layer(i).startTime =
            app.project.activeItem.time - (app.project.activeItem.layer(i).inPoint - app.project.activeItem.layer(i).startTime) ;}
            }
    }else{
        for(i=1;i<=NbL;i++){
            if(app.project.activeItem.layer(i).selected == 1) {
            app.project.activeItem.layer(i).startTime =
            app.project.activeItem.selectedLayers[0].inPoint - (app.project.activeItem.layer(i).inPoint - app.project.activeItem.layer(i).startTime) ;}
        }
    }

    app.endUndoGroup();
}

// click =         add frame
// shift + click = add 10 frames
function AddFrame(){
    app.beginUndoGroup("undoString");

    NbSL = app.project.activeItem.selectedLayers.length.toFixed(0);

    if (ScriptUI.environment.keyboardState.shiftKey == 0){
        for(i=1;i<=NbSL;i++){
            app.project.activeItem.selectedLayers[i-1].startTime =
            app.project.activeItem.selectedLayers[i-1].startTime + (i-1)*app.project.activeItem.frameDuration;
            }
        }else{
        for(i=1;i<=NbSL;i++){
            app.project.activeItem.selectedLayers[i-1].startTime =
            app.project.activeItem.selectedLayers[i-1].startTime + (i-1)*app.project.activeItem.frameDuration*10;
        }
    }

    app.endUndoGroup();
}

// click =         subtract frame
// shift + click = subtract 10 frames
function SubFrame(){
    app.beginUndoGroup("undoString");

    NbSL = app.project.activeItem.selectedLayers.length.toFixed(0);

    if (ScriptUI.environment.keyboardState.shiftKey == 0){
        for(i=1;i<=NbSL;i++){
            app.project.activeItem.selectedLayers[i-1].startTime =
            app.project.activeItem.selectedLayers[i-1].startTime - (i-1)*app.project.activeItem.frameDuration;
            }
        }else{
        for(i=1;i<=NbSL;i++){
            app.project.activeItem.selectedLayers[i-1].startTime =
            app.project.activeItem.selectedLayers[i-1].startTime - (i-1)*app.project.activeItem.frameDuration*10;
        }
    }

    app.endUndoGroup();
}

// click =         met tous les calques sur une grille carrée
// shift + click = met tous les calques sur une grille carrée et règle leur échelle
function Grid(){
    app.beginUndoGroup("undoString");

    NbSL = app.project.activeItem.selectedLayers.length;
    SmallestBiggerSquare = Math.pow(Math.floor(Math.pow(NbSL,0.5)+0.9999),2) // trouve le carré plus grand le plus petit (ex 6 calques donne 9 calques 3x3)
    c = Math.pow(SmallestBiggerSquare,0.5); // nombre de calques par côté
    CW = app.project.activeItem.width;
    CH = app.project.activeItem.height;
    
    // S'il n'y a pas de clés il faut utiliser setValue(), s'il y a des clés il faut utiliser setValueAtTime()

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

    if (ScriptUI.environment.keyboardState.shiftKey != 0){

        if(app.project.activeItem.selectedLayers[0].position.numKeys == 0){
            for(ii=1;ii<=NbSL;ii++){

                var s = 0;
        
                if(app.project.activeItem.selectedLayers[ii-1].width/app.project.activeItem.selectedLayers[ii-1].height > CW/CH){
                    s = ((CW/r)/app.project.activeItem.selectedLayers[ii-1].width)*100;
                }else{
                    s = ((CH/r)/app.project.activeItem.selectedLayers[ii-1].height)*100;
                }

                app.project.activeItem.selectedLayers[ii-1].scale.setValue([s,s])
            }

        }else{

            for(ii=1;ii<=NbSL;ii++){
        
                var s = 0;
        
                if(app.project.activeItem.selectedLayers[ii-1].width/app.project.activeItem.selectedLayers[ii-1].height > CW/CH){
                    s = ((CW/r)/app.project.activeItem.selectedLayers[ii-1].width)*100;
                }else{
                    s = ((CH/r)/app.project.activeItem.selectedLayers[ii-1].height)*100;
                }

                app.project.activeItem.selectedLayers[ii-1].scale.setValueAtTime(app.project.activeItem.time,[s,s])
            }
        }
    }

    app.endUndoGroup();
}

// click =         split screen horizontal
// shift + click = split screen vertical
function SplitScreen(){
    app.beginUndoGroup("undoString");

    CW = app.project.activeItem.width;
    CH = app.project.activeItem.height;
    CD = app.project.activeItem.duration;

    if (ScriptUI.environment.keyboardState.shiftKey == 0){
        PosA = [CW/2,CH/4];
        PosB = [CW/2,CH*3/4];
        ScaleC = [100,50];
    }else{
        PosA = [CW/4,CH/2];
        PosB = [CW*3/4,CH/2];
        ScaleC = [50,100];
    }

    if(app.project.activeItem.selectedLayers.length != 2){
        prompt("select 2 layers to make it works")
    }else{
    
    IndexA = app.project.activeItem.selectedLayers[0].name; 
    IndexB = app.project.activeItem.selectedLayers[1].name;
    
    app.project.activeItem.layers.addSolid([0,0,0],"TSAK matte", CW, CH, 1,CD);
    app.project.activeItem.layer("TSAK matte").position.setValue(PosA);
    app.project.activeItem.layer("TSAK matte").scale.setValue(ScaleC);    
    app.project.activeItem.layer("TSAK matte").name = "Matte Top";
    app.project.activeItem.layer("Matte Top").enabled = false;
    app.project.activeItem.layer("Matte Top").shy = true;
    app.project.activeItem.layer("Matte Top").duplicate().name = "Matte Bottom";
    app.project.activeItem.layer("Matte Bottom").position.setValue(PosB);
    app.project.activeItem.layer("Matte Top").moveBefore(app.project.activeItem.layer(IndexA));
    app.project.activeItem.layer("Matte Bottom").moveBefore(app.project.activeItem.layer(IndexB));
    
    app.project.activeItem.layer(IndexA).trackMatteType = TrackMatteType.ALPHA;
    app.project.activeItem.layer(IndexB).trackMatteType = TrackMatteType.ALPHA;
    app.project.activeItem.layer(IndexA).position.setValue(PosA);
    app.project.activeItem.layer(IndexB).position.setValue(PosB);
    
    }
    
    app.endUndoGroup();
}

// click =         ajoute un curseur pour l'échelle afin d'animer et ajuster la taille séparément
// shift + click = ajoute une expression sur l'échelle de sorte que les éléments à une même échelle aient une taille similaire
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