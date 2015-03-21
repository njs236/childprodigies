var whynot = {};
whynot.model = {};
whynot.controller = {};
whynot.view = {};


whynot = (function () {
    var initModule = function (){
        console.log("initModule loaded");
        var model = whynot.model.initModule();
        var view = whynot.view.initModule();
        var controller = whynot.controller.initModule(view, model);
        
        controller.allObjectsData();
    }
return {initModule: initModule}
}
() );