var whynot = {};
whynot.model = {};
whynot.controller = {};
whynot.view = {};


whynot = (function () {
    var initModule = function (){
        console.log("initModule loaded");
        var model = whynot.model.initModule();
        var view = whynot.view.initModule({mainScreen: {Page: document.getElementById('mainScreen'),
                                                        Brain: document.getElementById('mainScreenBrain')},
                                           navigationMap: {Page: document.getElementById('navigationMapScreen'),
                                                           Table: document.getElementById('navigationMapTable')},
                                           mythScreen: {Page: document.getElementById('mythScreen'),
                                                        Content: document.getElementById('mythScreenRightArea')},
                                           themeScreen: {Page: document.getElementById('themeScreen'),
                                                         Content: document.getElementById('themeScreenElements')}
                                           });
        var controller = whynot.controller.initModule(view, model);
        
        view.setController(controller);
        
        controller.allObjectsData();
        
        /*
        controller.onClickAddBtn();
        */

        /*
        controller.displayAllObjects();
       */
        controller.setUpNavigationMap();
        
    }
return {initModule: initModule}
}
() );