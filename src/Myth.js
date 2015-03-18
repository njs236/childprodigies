var cp.CPModel.Myth = function (newId, newDescription, theModel) {
    prot = {};
    prot.id = newId;
    prot.description = newDescription;
    prot.allMyThemes = [];
    prot._model = theModel;
    
    this.getMyThemes = function () {
        return prot.allMyThemes;
    }
}

Myth.prototype.addTheme = function (newId, newDescription, theMyth, theModel) {
    var theme = new Theme (newId, newDescription, theMyth, theModel);
    this.getMyThemes().push(theme);
}
