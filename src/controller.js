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
        text = _this.addText('textThemeScreenEmilyBear', 'Emily Bear has composed more than 350 songs, all for the piano. She has played at the White House, produced 6 albums, and she is 12 years old.','When she was 1 yr old, she would sing note for note in tune according to her mum. She started playing the piano when she was 4 years old, and does not want to be referred as a prodigy, as it sounds like someone who would be driven to excel.','According to an interview,  it was never the intention of her parents to drive her in anyway, as it is kept in balance with the life of the family, and motivating and empowering her to be all that she can be. She can compose a song on the spot for someone that gives them a description. She would rather be called a composer and not a prodigy.','At such a young age, this makes what is inside of her very remarkable, since the main reason she plays piano is the enjoyment of it, and the ability to showcase that talent to others. For that reason, she does not need to be driven to excel, since she has already the motivation she needs to excel. It comes from within her.');
        console.log("allObjectsData: emilyBearText added")
        _this.addMyth('10brainMythScreen', 'So You only use 10% of your brain do you?', 'Santiago Gonsalez');
        _this.addMyth('artsMythScreen', 'Prodigies are only found in the arts.', 'Cameron Thompson');
        myth = _this.addMyth('excelMythScreen', 'What would you say about the competitiveness to excel?','Emily Bear');
        _this.addMyth('computerMythScreen', 'Brains are like computers?','TanishQ');
        
        theme = _this.addTheme('EmilyBearThemeScreenText', 'text', myth);
        _this.loadElements(text, theme);
    };
    
    Controller.prototype.addText = function () {
        var args = arguments;
        var theModel = this._model;
        theModel.addText(args);
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
    
    Controller.prototype.displayPage = function (object) {
    if (object typeof Myth) {
       console.log("selected Myth Object");
    } else if (object typeof Theme) {
       console.log("selected Theme Object") ;   
    } else if (object typeof Model) {
       console.log("selected Model Object");    
    } else {
       console.log("selected No Object") ;   
    };
       
    };
    
    Controller.prototype.onClickAddBtn = function () {
        /* Main Screen */
        document.getElementById('mainScreenBrain').addEventListener("onclick", _view.showScreen('navigationMapScreen'));
        /*Navigation Map */
        document.getElementById('navigationMapMyth1').addEventListener("onclick", _view.showScreen('mythScreen'));
        document.getElementById('navigationMapMyth2').addEventListener("onclick", _view.showScreen('mythScreen'));
        document.getElementById('navigationMapMyth3').addEventListener("onclick", _view.showScreen('mythScreen'));
        document.getElementById('navigationMapMyth4').addEventListener("onclick", _view.showScreen('mythScreen'));
        /* myth screen buttons */
        document.getElementById('mythScreenText').addEventListener("onclick", _view.showScreen('themeScreen'))
        document.getElementById('mythScreenSound').addEventListener("onclick", _view.showScreen('themeScreen'))
        document.getElementById('mythScreenVideo').addEventListener("onclick", _view.showScreen('themeScreen'))
        document.getElementById('mythScreenQuiz').addEventListener("onclick", _view.showScreen('themeScreen'))
        /* theme screen buttons */
        document.getElementById('mythScreenText').addEventListener("onclick", _view.showScreen('themeScreen'))
        document.getElementById('mythScreenSound').addEventListener("onclick", _view.showScreen('themeScreen'))
        document.getElementById('mythScreenVideo').addEventListener("onclick", _view.showScreen('themeScreen'))
        document.getElementById('mythScreenQuiz').addEventListener("onclick", _view.showScreen('themeScreen'))
    }
    
    initModule = function (view, model) {
        return new Controller(view,model);
    };
    return {initModule: initModule};
}
());