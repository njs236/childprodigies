var whynot = {};
var model = model.initModule() ,
view = view.initModule(),
 controller = controller.initModule(view, model);
whynot.model = {};
whynot.controller = {};
whynot.view = {};

/*
whynot = (function () {
    var initModule = function (){
        console.log("initModule loaded");
        var model = model.initModule();
        var view = view.initModule({mainScreen: {Page: document.getElementById('mainScreen'),
                                                        Brain: document.getElementById('mainScreenBrain')},
                                           navigationMap: {Page: document.getElementById('navigationMapScreen'),
                                                           Table: document.getElementById('navigationMapTable')},
                                           mythScreen: {Page: document.getElementById('mythScreen'),
                                                        Content: document.getElementById('mythScreenRightArea')},
                                           themeScreen: {Page: document.getElementById('themeScreen'),
                                                         Content: document.getElementById('themeScreenElements')}
                                           });
        var controller = controller.initModule(view, model);


        

        
        view.setController(controller);
    }
return {initModule: initModule}
}
() ); */