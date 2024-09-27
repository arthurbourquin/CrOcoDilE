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
               AddSecButton: Button{text:'+s'},\
               },\
               groupFive: Group{orientation:'row',\
               SubSecButton: Button{text:'-s'},\
               },\
               }";

         myPanel.grp = myPanel.add(res);

         //Defaults
         myPanel.grp.groupOne.AlignButton.size = [25, 25];    
         myPanel.grp.groupTwo.AddFrameButton.size = [25, 25];
         myPanel.grp.groupThree.SubFrameButton.size = [25, 25];
         myPanel.grp.groupFour.AddSecButton.size = [25, 25];
         myPanel.grp.groupFive.SubSecButton.size = [25, 25];
         
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
             AddSec();
             }
         
         myPanel.grp.groupFive.SubSecButton.onClick = function() {
             SubSec();
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

    for(i=1;i<=NbL;i++){
        if(app.project.activeItem.layer(i).selected == 1) {
        app.project.activeItem.layer(i).startTime =
        app.project.activeItem.time - (app.project.activeItem.layer(i).inPoint - app.project.activeItem.layer(i).startTime) ;}
    }
}

function AddFrame(){
    NbSL = app.project.activeItem.selectedLayers.length.toFixed(0);

    for(i=1;i<=NbSL;i++){
        app.project.activeItem.selectedLayers[i-1].startTime =
        app.project.activeItem.selectedLayers[i-1].startTime + (i-1)*app.project.activeItem.frameDuration;
    }
    }

function SubFrame(){
    NbSL = app.project.activeItem.selectedLayers.length.toFixed(0);

    for(i=1;i<=NbSL;i++){
        app.project.activeItem.selectedLayers[i-1].startTime =
        app.project.activeItem.selectedLayers[i-1].startTime - (i-1)*app.project.activeItem.frameDuration;
    }
    }


function AddSec(){
    NbSL = app.project.activeItem.selectedLayers.length.toFixed(0);

    for(i=1;i<=NbSL;i++){
        app.project.activeItem.selectedLayers[i-1].startTime =
        app.project.activeItem.selectedLayers[i-1].startTime + (i-1);
    }
    }

function SubSec(){
    NbSL = app.project.activeItem.selectedLayers.length.toFixed(0);

    for(i=1;i<=NbSL;i++){
        app.project.activeItem.selectedLayers[i-1].startTime =
        app.project.activeItem.selectedLayers[i-1].startTime - (i-1);
    }
    }