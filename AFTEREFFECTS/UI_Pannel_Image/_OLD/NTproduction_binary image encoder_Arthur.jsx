var path = '/z/ARTHUR/TTT/Ae_Scripts/_Images/';
var f = File(path+"Stairs.png");
f.encoding = 'BINARY'
f.open('e');

var binary;
binary = f.read().toSource();

var myFile = new File("/c/test/binary.txt");
        myFile.open("w");
        myFile.encoding = "UTF-8";
        myFile.write(binary);
        myFile.close();

$.writeln(binary);

f.close();