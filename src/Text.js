whynot.model.Text = function (theModel,newId) {
    Media.call (this, newId, '', theModel);
    var prot = {};
    var i = 2;
    for (i; i < arguments.length; i++) {
     prot.text.push(arguments[i]);  
    }; 
}

whynot.model.Text.prototype = Object.create(whynot.model.Media.prototype);
whynot.model.Text.prototype.constructor = Text; 