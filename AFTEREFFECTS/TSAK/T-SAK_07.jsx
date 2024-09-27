    {
   function myScript(thisObj){
      function myScript_buildUI(thisObj){
         var myPanel = (thisObj instanceof Panel) ? thisObj : new Window("palette", "Dockable Script", undefined, {resizeable:true, closeButton: false});

         res = "group{orientation:'row',\
               groupOne: Group{orientation:'row',\
               AlignButton: Button{text:'|'},\
               },\
               groupTwo: Group{orientation:'row',\
               AddFrameButton: Button{text:'+f'},\
               },\
               groupThree: Group{orientation:'row',\
               SubFrameButton: Button{text:'-f'},\
               },\
               groupFour: Group{orientation:'row',\
               AddSecButton: Button{text:'G'},\
               },\
               groupFive: Group{orientation:'row',\
               AddSecButton: Button{text:':'},\
               },\
               }";

         myPanel.grp = myPanel.add(res);

         //Defaults
         myPanel.grp.groupOne.AlignButton.size = [20, 20];    
         myPanel.grp.groupTwo.AddFrameButton.size = [20, 20];
         myPanel.grp.groupThree.SubFrameButton.size = [20, 20];
         myPanel.grp.groupFour.AddSecButton.size = [20, 20];
         myPanel.grp.groupFive.AddSecButton.size = [20, 20];

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


function Align() {
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
}

function AddFrame(){
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
}

function SubFrame(){
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
}

function Grid(){
    NbSL = app.project.activeItem.selectedLayers.length;
    s = Math.pow(Math.floor(Math.pow(NbSL,0.5)+0.9999),2)
    r = Math.pow(s,0.5);
    CW = app.project.activeItem.width;
    CH = app.project.activeItem.height;

    for(i=1;i<=NbSL;i++){

        app.project.activeItem.selectedLayers[i-1].position.setValueAtTime(app.project.activeItem.time,[
            (CW/r)*(i - r * (Math.floor((i-1)/r))) - CW/(2*r),
            (CH/r) * (Math.floor((i-1)/r)) + CH/(2*r)])
    }

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

function SplitScreen(){

        app.project.activeItem.selectedLayers[0].position.setValueAtTime(app.project.activeItem.time,[
        app.project.activeItem.width/2 , app.project.activeItem.height/4])

        app.project.activeItem.selectedLayers[1].position.setValueAtTime(app.project.activeItem.time,[
        app.project.activeItem.width/2 , app.project.activeItem.height*3/4])

}