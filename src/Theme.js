whynot.model.Theme = function (newId, newType, theMyth, theModel) {
    var prot = {};
    prot.id = newId;
    prot.type = newType;
    prot._elements = [];
    prot._myth = theMyth;
    prot._model = theModel;
    this.getElements = function () {
        return prot._elements;
    }
}

whynot.model.Theme.prototype.loadElements = function (array) {
    var count = 0;
    for (count; count < array.length; count++) {
        this.getElements().push(array[count]);
    };
}