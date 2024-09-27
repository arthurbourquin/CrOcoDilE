var logo = "\u0089PNG\r\n\x1A\n\x00\x00\x00\rIHDR\x00\x00\x00\x10\x00\x00\x00\x10\b\x06\x00\x00\x00\x1F\u00F3\u00FFa\x00\x00\x00\tpHYs\x00\x00\x0B\x13\x00\x00\x0B\x13\x01\x00\u009A\u009C\x18\x00\x00\x06\u0096iTXtXML:com.adobe.xmp\x00\x00\x00\x00\x00<?xpacket begin=\"\u00EF\u00BB\u00BF\" id=\"W5M0MpCehiHzreSzNTczkc9d\"?> <x:xmpmeta xmlns:x=\"adobe:ns:meta/\" x:xmptk=\"Adobe XMP Core 7.1-c000 79.9ccc4de, 2022/03/14-11:26:19        \"> <rdf:RDF xmlns:rdf=\"http://www.w3.org/1999/02/22-rdf-syntax-ns#\"> <rdf:Description rdf:about=\"\" xmlns:xmp=\"http://ns.adobe.com/xap/1.0/\" xmlns:dc=\"http://purl.org/dc/elements/1.1/\" xmlns:xmpMM=\"http://ns.adobe.com/xap/1.0/mm/\" xmlns:stEvt=\"http://ns.adobe.com/xap/1.0/sType/ResourceEvent#\" xmlns:photoshop=\"http://ns.adobe.com/photoshop/1.0/\" xmp:CreatorTool=\"Adobe Photoshop 23.3 (Windows)\" xmp:CreateDate=\"2022-08-24T08:39:46+02:00\" xmp:MetadataDate=\"2022-08-24T09:24:37+02:00\" xmp:ModifyDate=\"2022-08-24T09:24:37+02:00\" dc:format=\"image/png\" xmpMM:InstanceID=\"xmp.iid:da4fe056-e8f5-7e4e-8fea-cba5d16208ee\" xmpMM:DocumentID=\"adobe:docid:photoshop:ad940a40-5fb5-1c42-b3dc-47171709ed45\" xmpMM:OriginalDocumentID=\"xmp.did:1766c47f-2373-c846-876a-572cdd0381bb\" photoshop:ColorMode=\"3\"> <xmpMM:History> <rdf:Seq> <rdf:li stEvt:action=\"created\" stEvt:instanceID=\"xmp.iid:1766c47f-2373-c846-876a-572cdd0381bb\" stEvt:when=\"2022-08-24T08:39:46+02:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.3 (Windows)\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:bb3efee2-d967-2f4d-87d9-bd4d26fdbad1\" stEvt:when=\"2022-08-24T09:18:52+02:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.3 (Windows)\" stEvt:changed=\"/\"/> <rdf:li stEvt:action=\"saved\" stEvt:instanceID=\"xmp.iid:da4fe056-e8f5-7e4e-8fea-cba5d16208ee\" stEvt:when=\"2022-08-24T09:24:37+02:00\" stEvt:softwareAgent=\"Adobe Photoshop 23.3 (Windows)\" stEvt:changed=\"/\"/> </rdf:Seq> </xmpMM:History> </rdf:Description> </rdf:RDF> </x:xmpmeta> <?xpacket end=\"r\"?>])\u008A\u00D0\x00\x00\x00WIDAT8\u008D\u00CD\u0091\u00DB\n\u00C0 \fCs\u00C4\u00FF\u00FF\u00E5\u00ECA\x05\u00D9\x1C\u00F3\x06\u00F3\u00BC\u00B4\u00946\u0090\x06\u00DBZ!,]\x1F!\x10s\u00B5$\x01x\u00F0){-\u00CC$\x12\u00EF\u0083l\u00E3\u00B1\b4\x05\u00CAr\u00B9\u00A0\u00EA\u00BB8'\u00C6\x1A\u00DE\u00FC~\n\x00r\u00A2[\u00E0\u00FF\x1F43\x1F\u00E1\x02\u00B3\u00BA\x1D\x1C\u008E\u00DF\u008C\u0085\x00\x00\x00\x00IEND\u00AEB`\u0082";

var buttonSize = [25, 25];

var window = new Window("palette", "Window", undefined);
window.orientation = "row";

var buttonEight = window.add("iconbutton", undefined, logo);
buttonEight.size = buttonSize;
var buttonNine = window.add("button", undefined, "9");
buttonNine.size = buttonSize;
var buttonTen = window.add("button", undefined, "10");
buttonTen.size = buttonSize;
var buttonEleven = window.add("button", undefined, "11");
buttonEleven.size = buttonSize;
var buttonTwelve = window.add("button", undefined, "12");
buttonTwelve.size = buttonSize;
var buttonThirteen = window.add("button", undefined, "13");
buttonThirteen.size = buttonSize;
var buttonFourteen = window.add("button", undefined, "14");
buttonFourteen.size = buttonSize;
var buttonFifteen = window.add("button", undefined, "15");
buttonFifteen.size = buttonSize;

window.spacing = 1;

window.center();
window.show();