whynot.controller = (function () {
/*
the controller class knows the view and the model
and can modify the model and the view 

It also handles all the onclick events,

and adds all the instantiated objects;


*/
    var initModule;
    
    var Controller = function (view, model) {
        this._view = view;
        this._model = model;
    };
    
    Controller.prototype.allObjectsData = function () {
        var _this = this,
        myth,
        text,
        theme;
        text = _this.addText('textThemeScreenEmilyBear', 'media/text/emilybear.txt');
        console.log("allObjectsData: emilyBearText added")
        _this.addMyth('10brainMythScreen', 'So You only use 10% of your brain do you?');
        _this.addMyth('artsMythScreen', 'Prodigies are only found in the arts.');
        myth = _this.addMyth('excelMythScreen', 'What would you say about the competitiveness to excel?');
        _this.addMyth('computerMythScreen', 'Brains are like computers?');
        
        theme = _this.addTheme('EmilyBearThemeScreenText', 'text', myth);
        _this.loadElements(text, theme);
    };
    
    Controller.prototype.addText = function (newId, newFileName) {
        var theModel = this._model;
        theModel.addText(newId, newFileName, theModel);
    };
    
    Controller.prototype.addMyth = function (newId, newDescription, newPersonName) {
        var theModel = this._model;
        theModel.addMyth(newId, newDescription, newPersonName, theModel);
    };
    
    Controller.prototype.addTheme = function (newId, newType, myth) {
        var theModel = this._model;
        theModel.addTheme(newId, newType, myth, theModel);
    };
    
    Controller.prototype.loadElements = function (array, page) {
        var theModel = this._model;
        theModel.loadElements(array, page);
    }
    
    Controller.prototype.displayPage = function () {
       _view.showScreen() 
    };
    
    initModule = function (view, model) {
        return new Controller(view,model);
    };
    return {initModule: initModule};
}
());