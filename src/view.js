whynot.view = (function () {
    var View, initModule;
    View = function () {
    };
    
    var hideAllPages = function () {
		"use strict";
		console.groupCollapsed("viewModule : hideAll()");
		var screens = [],
			count;
		screens = document.getElementsByClassName("navScreen");
		for ( count = 0; count < screens.length; count = count + 1 ) {
			console.log("hideAll() : Hiding " + screens[count].id);
			screens[count].hidden = true;
		};
		console.groupEnd();
	};

    var showScreen = function (id) {
        var screen = document.getElementById(id);
        this.hideAllPages()
        screen.hidden = false;
    };
    
    initModule = function () {
        return new View();
    };
    return {initModule: initModule};
}
());