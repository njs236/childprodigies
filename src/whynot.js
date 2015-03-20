var whynot = {};
whynot.whynotModel = {};


whynot = (function () {
    var initModule = function (){
        console.log("initModule loaded");
        var whynotModel = whynot.whynotModel.initModule();
        
    }
return {initModule: initModule}
}
() );