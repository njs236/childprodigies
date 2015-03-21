whynot.model.Text.prototype = object.create(whynot.model.Media.prototype);
whynot.model.Text.prototype.constructor = Text; 

whynot.model.Text = function (newId, newFileName, theWhynotModel) {
    Media.call (this, newId, newFileName, theWhynotModel);
    var prot = {};
    prot.text = loadText(newFileName);
}

whynot.model.Text.prototype.loadText = function (fileName) {
    "use strict";
    var reader = new FileReader();
    reader.onload = loadedHandler;
    reader.readAsText(fileName);
}

whynot.model.Text.prototype.loadedHandler = function (event) {
	"use strict";
	var fileString, text;
	console.log("LOADEDHANDLER() : File has been loaded");
	fileString = event.target.result;
    text = fileString.split("\n");
    return text;
};