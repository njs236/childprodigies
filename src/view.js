whynot.view = (function () {
    var View, initModule, selectionObject;
    View = function (elements) {
        this._elements = elements;
    };
    
    View.prototype.setController = function (controller) {
        this._controller = controller;
    }
    
    selectionObject = {};
    
    View.prototype.hideAllPages = function () {
		"use strict";
		var screens = [],
			count;
		screens = document.getElementsByClassName("navScreen");
		for ( count = 0; count < screens.length; count = count + 1 ) {
			console.log("hideAll() : Hiding " + screens[count].id);
			screens[count].hidden = true;
		};
	};
    
    View.prototype.showNavigationMap = function () {
        console.log("navclickLoaded");
        var _this = this;
        _this.showScreen(this._elements.navigationMap.Page);
    };
    
    View.prototype.showMythScreen = function () {
        console.log("mythScreenLoaded");
        var _this = this;
        _this.showScreen(this._elements.mythScreen.page);
    }
    
    View.prototype.displayExcelElements = function (object) {
        var DIV;
        if (object._elements !== []) {
            console.log("No elements")
        } else {
            DIV = document.createElement("DIV");
            DIV.id = object.getScreenElements()[0];
            DIV.textContent = "placeholder text";
            this._elements.mythScreen.Content.appendChild(DIV);
        }
    }
    
    View.prototype.display10brainElements = function (object) {
        var DIV;
        if (object._elements !== []) {
            console.log("No elements")
        } else {
            DIV = document.createElement("DIV");
            DIV.id = object.getScreenElements()[0];
            DIV.textContent = "placeholder text";
            this._elements.mythScreen.Content.appendChild(DIV);
        }
    }
    
    View.prototype.displayArtsElements = function (object) {
        var DIV;
        if (object._elements !== []) {
            console.log("No elements")
        } else {
            DIV = document.createElement("DIV");
            DIV.id = object.getScreenElements()[0];
            DIV.textContent = "placeholder text";
            this._elements.mythScreen.Content.appendChild(DIV);
        }
    }
    
    View.prototype.displayComputerElements = function (object) {
        var DIV;
        if (object._elements !== []) {
            console.log("No elements")
        } else {
            DIV = document.createElement("DIV");
            DIV.id = object.getScreenElements()[0];
            DIV.textContent = "placeholder text";
            this._elements.mythScreen.Content.appendChild(DIV);
        }
    }
    
    View.prototype.displayNavigationMap = function (mythTable) {
        /*
        The format of mythTable is as follows:
        [personName, description]
        For example: 
        personName, the name of the person that is being found out.
        description, the description of the myth.
        */
        var DIV, count;
        for (count = 0; count <mythTable.length; count = count+1) {
        // including rows.
        if (count %2 ===0) {
        DIV = document.createElement("DIV");
        DIV.className = "navigationMapRow";
        this._elements.navigationMap.Table.appendChild(DIV);
        };
        
        DIV = document.createElement("DIV");
        DIV.className = "navigationMapMyth";
        DIV.id = "navigationMapMyth" + (count + 1);
        DIV.textContent = mythTable[count][1];
        this._elements.navigationMap.Table.lastChild.appendChild(DIV);
        }
        
        this._controller.onClickSantiago();
        this._controller.onClickCameron();
        this._controller.onClickEmily();
        this._controller.onClickTanish();
    }
    
        /*
        The format for the following functions is as follows. 
        the unique information related to each page. they will have a different listener for 
        every page.
        e.g Emily Bear, Santiago Gonsalez, TanishQ, Cameron Thompson
        it will contain 
        [personName, id]
        e.g [Santiago Gonsalez, 10brainMythScreen]
            [Cameron Thompson, artsMythScreen]
            [Emily Bear, excelMythScreen]
            [TanishQ, computerMythScreen]
        */
    
    View.prototype.onClickSantiago = function (callback) {
        var myth = document.getElementsById('navigationMapMyth1');
        myth.addEventListener("click", callback);
        myth.addEventListener("click", this.showMythScreen);
    };
    
    View.prototype.onClickCameron = function (callback) {
        var myth = document.getElementsById('navigationMapMyth2');
        myth.addEventListener("click", callback);
        myth.addEventListener("click", this.showMythScreen);
    }
    
    View.prototype.onClickEmily = function (callback) {
        var myth = document.getElementsById('navigationMapMyth3');
        myth.addEventListener("click", callback);
        myth.addEventListener("click", this.showMythScreen);
    }
    
    View.prototype.onClickTanish = function (callback) {
        var myth = document.getElementsById('navigationMapMyth4');
        myth.addEventListener("click", callback);
        myth.addEventListener("click", this.showMythScreen);
    }
    
    
    
  View.prototype.showScreen = function (page) {
        this.hideAllPages();
        page.hidden = false;
    };
 
  View.prototype.onClickAddBtn = function (callback) {
      console.log("onClickLoaded");
        /* Main Screen */
        var element = document.getElementById('mainScreenBrain');
        element.onclick = callback;
        // this._elements.mainScreen.Brain.onclick = callback;
        console.log(this._elements.mainScreen.Brain);
        /* myth screen buttons
        document.getElementById('mythScreenText').onclick = showScreen('themeScreen');
        document.getElementById('mythScreenSound').onclick = showScreen('themeScreen');
        document.getElementById('mythScreenVideo').onclick = showScreen('themeScreen');
        document.getElementById('mythScreenQuiz').onclick = showScreen('themeScreen');
        /* theme screen buttons
        document.getElementById('themeScreenText').onclick = showScreen('themeScreen');
        document.getElementById('themeScreenSound').onclick = showScreen('themeScreen');
        document.getElementById('themeScreenVideo').onclick = showScreen('themeScreen');
        document.getElementById('themeScreenQuiz').onclick = showScreen('themeScreen');*/
    };
    
    initModule = function (elements) {
        return new View(elements);
    };
    
    return {initModule: initModule,
            selectionObject: selectionObject};
}
());