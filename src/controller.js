var whynot.controller = (function () {
/*
the controller class knows the view and the model
and can modify the model and the view 




*/
    var initModule;
    
    var Controller = function (view, model) {
        this._view = view;
        this._model = model;
    }
    Controller.prototype.displayPage = function () {
       _view.showScreen() 
    }
    
    initModule = function () {
        return new Controller;
    }
}

());