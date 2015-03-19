var cp = (function () {
    var initModule = function (){
        console.log("initModule loaded");
        var CPModel = CPModel.initModule();
        
    }
return {initModule: initModule}
}
() );