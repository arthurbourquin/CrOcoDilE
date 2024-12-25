~~~js

IF ELSE
Logical connectors
<
>
<=
>=
==  equal
||  or
&&  and
if(rotation < 180) 100
if(rotation < 180) {100} else {50}
if(rotation<90 || rotation>270) 100 else 50
if(rotation<90 || rotation>180 && rotation<270) 100 else 50



NOMBRE DE CHIFFRES AVANT LA VIRGULE
Math.floor(12354.23423).toString().length



Colors in expressions
When expression on a color parameter :
[a,b,c,d]
a = red
b = green
c = blue
d = alpha
hslToRgb([a,b,c,d])
a = hue
b = saturation
c = luminance
d = alpha




SPLIT
Composition name : "Full Name – Title"
thisComp.name.split(" - ")[0] // results in "Full Name"
thisComp.name.split(" - ")[1] // results in "Title"



thisComp.layer("cheval").sourceRectAtTime().width



PATH
expression sur la position d'un calque :
thisComp.layer("Calque de forme 1").toComp(thisComp.layer("Calque de forme 1").content("Forme 1").content("Tracé 1").path.pointOnPath(time))



RANDOM
random()                   // number between 0 and 1
random(6)                  // number between 0 and 6
random(-2,4)               // number between -2 and 4
random([3,4,5])            // vector between [0,0,0] and [3,4,5]
random([3,4,5],[6,7,8])    // vector between [3,4,5] and [6,7,8]
random([0,0],[1910,1080])  // random position in FullHD
seedRandom(3);
random()
permet uniquement de choisir la "valeur random n°3", mais elle sera quand même à chaque fois différentes ( si elle est appliquée sur plusieurs paramètres différents)
Donc pas possible d'appliquer une séquence random identique à deux paramètres ( à moins de passer par un curseur source, évidemment)



MARKER
thisLayer.
thisLayer.marker.key(1)
thisLayer.marker.key("Cheval")
thisLayer.marker.nearestKey(time).time   //time value of the nearest marker
thisLayer.marker.numKeys                 //number of keyframes
thisLayer.marker.nearestKey(time)
.time
.duration
.index
.comment
.chapte
.url
.frameTarget
.cuePointName
.eventCuePoint
.parameters
.parameters[param]



NEARESTKEY
key index : première key = 1 (pas 0)
thisLayer.transform.position = position
1 calque avec 1 slider :
slider:
position.key(1).index                  // ne fais aucun sens
position.key(1).value[0]               // valeur x de la première clé de position
position.key(1).time                   // position temporelle de la première clé de position
position.nearestKey(time).index        // numéro de clé de position la plus proche
position.nearestKey(time).value[0]     // valeur x de la clé de position la plus proche
position.nearestKey(time).time         // position temporelle de la clé de position la plus proche



MAXIMUM/MINIMUM
Math.max( "Val" , "ValMin" )
Math.min( "Val" , "ValMax" )
Math.min(Math.max("Val","ValMin"),"ValMax")
Empeche de sortir de la comp de 500 x 500 :
expression dans la position:
x=Math.max(Math.min(position[0], 500),0);
y=Math.max(Math.min(position[1], 500),0);
[x,y]




INTERPOLATION
exemple :
linear ( time , 200 , 600 )
0sec > 200
1sec > 600
expression dans la position :
linear(
effect("DebutFin")("Curseur"), 
thisComp.layer("Source").transform.position.valueAtTime(effect("ValeurDebut")("Curseur")), 
thisComp.layer("Source").transform.position.valueAtTime(effect("ValeurFin")("Curseur"))
)
Curseurs:
DebutFin keyframe 0 à 1 dans la timeline pour
position 1
position 2
thisComp.layer(index+1).transform.position.nearestKey(time).value

INTERPOLATION TRICK
procédure :
-entrer les valeurs de début et de fin d'une propriété sur les deux premières images de la composition
-ajouter un curseur/slider nommé "t"
(-animer le curseur de 0 à 1 dans la timeline)
ajouter l'expression sur la (les) propriétés à animer :
1:
linear(effect("t")("Curseur"),valueAtTime(0),valueAtTime(thisComp.frameDuration))
2:
if(time<thisComp.frameDuration*2) value else
linear(effect("t")("Curseur"),valueAtTime(0),valueAtTime(thisComp.frameDuration))
les deux premières images de la timeline servent à ajuster le début à la fin de l'animation.
1, pour "voir ce qui se passe", décocher le "="
2, masque le calque sur les deux premières images


FIT COMP WITH CONSTANT PROPORTION / RESPONSIVE FOOTAGE
put expression below in scale property
function IF(a,b,c,d){
if(a>b) return c else return d}
val=IF(thisComp.width/thisComp.height,16/9,(thisComp.width/width)*100,(thisComp.height/height)*100);
[val,val]



SAMPLEIMAGE
expression in color slider of a comp:
sampleImage([width,height]/2,[width,height])
expression in colour of fill effect of null (100x100px) :
thisComp.layer("LAYER").sampleImage(transform.position,transform.scale)


sourceRectAtTime()
thisComp.layer(1).sourceRectAtTime().width


loopOut() sur un tracé on path mask masque

foireux marche même pas :
valueAtTime(time % key(numKeys).time )

foireux impossible d'éditer le path par la suite :
// loop path keyframes. Behaves like loopOut('cycle')
if (numKeys >1 && time > key(numKeys).time) {
 t1 = key(1).time;
 t2 = key(numKeys).time;
 span = t2 - t1;
 delta = time - t2;
 t = delta%span;
 valueAtTime(t1 + t)
} else {
	value
}
