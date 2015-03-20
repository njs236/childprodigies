"use strict";

var LoadGameData = function () {
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
	}

var showScreen = function (id) {
    var screen = document.getElementById(id);
    hideAllPages()
   screen.hidden = false;
}

