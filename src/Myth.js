whynot.whynotModel.Myth = function (newId, newDescription, newPersonName, theModel) {
    prot = {};
    prot.id = newId;
    prot.description = newDescription;
    prot.allMyThemes = [];
    prot._model = theModel;
    prot.personName = newPersonName;
    
    this.getMyThemes = function () {
        return prot.allMyThemes;
    }
}

whynot.whynotModel.Myth.prototype.addTheme = function (newId, newDescription, theMyth, theModel) {
    var theme = new Theme (newId, newDescription, theMyth, theModel);
    this.getMyThemes().push(theme);
}
