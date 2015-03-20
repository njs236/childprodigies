Text.prototype = object.create(Media.prototype);
Text.prototype.constructor = Text; 

var whynot.whynotModel.Text = function (newId, newFileName, theWhynotModel) {
    Media.call (this, newId, newFileName, theWhynotModel);
    var prot = {};
    prot.text = loadText(newFileName);
}

Text.prototype.loadText = function (fileName) {
    "use strict";
    var reader = new FileReader();
    reader.onload = loadedHandler;
    reader.readAsText(fileName);
}

Text.prototype.loadedHandler = function (event) {
	"use strict";
	var fileString, text;
	console.log("LOADEDHANDLER() : File has been loaded");
	fileString = event.target.result;
    text = fileString.split("\n");
    return text;
};