whynot.view = (function () {
    var View, initModule, selectionObject;
    View = function (viewElements) {
        this._viewElements = viewElements;
        //console.log(this._elements);
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
			
			screens[count].hidden = true;
		};
	};
    
    View.prototype.showNavigationMap = function () {
        console.log("navclickLoaded");
        var _this = this;
        this.showScreen(this._viewElements.navigationMap.Page);
    };
    
    View.prototype.showMythScreen = function () {
        console.log("mythScreenLoaded");
        var _this = this;
        console.log(this._elements);
        this.showScreen(this._viewElements.mythScreen.Page);
    }
    
    View.prototype.displayExcelElements = function (object) {
        console.log("excelScreenLoaded");
        var DIV;
        if (object._pageElements !== []) {
            console.log("No elements")
        } else {
            DIV = document.createElement("DIV");
            DIV.id = object.getScreenElements()[0];
            DIV.textContent = "placeholder text";
            this._viewElements.mythScreen.Content.appendChild(DIV);
        }
    }
    
    View.prototype.displayObject = function (object) {
        console.log(object);
        /* displayObject: Version 1.0;
        displays an object based on it's constructor type.
        currently has 4 element types.
        Text : returns the array of text in the object;
        Image : returns the file name of the Image with width and height;
        Video : returns the youtube video with width and height;
        Link : returns an image with link to a new page, opens a new window on click.
        */
        var TAG,
        text;
        if (object.constructor.name == "Text") {
            text = object.getText();
               for (numberOfParagraphs; 
                    numberOfParagraphs < text.length; 
                    numberOfParagraphs = numberOfParagraphs +1) {
                        TAG = document.createElement("P");
                        TAG.innerHTML = text[numberOfParagraphs];
                        console.log(TAG.innerHTML);
                        //this._elements.themeScreen.Content.appendChild(TAG);
                    };
        } else if (object.constructor.name == "Image") {
            image = object.getImage();
            TAG = document.createElement("IMG");
            TAG.src = image[0];
            TAG.width = image[1];
            TAG.height = image[2];
            //this._elements.themeScreen.Content.appendChild(TAG);
            
        } else if (object.constructor.name == "Video") {
            video = object.getVideo();
            TAG = document.createElement("IFRAME");
            TAG.src = video[0];
            TAG.width = video[1];
            TAG.height = video[2];
            TAG.frameborder = 0;
            TAG.allowfullscreen = true;
            //this._elements.themeScreen.Content.appendChild(TAG);
           
        } else if (object.constructor.name == "Link") {
            link = object.getLink();
            TAG = document.createElement("A");
            TAG.href = link[0];
            TAG.target = "_blank";
            //this._elements.themeScreen.Content.appendChild(TAG);
        }   
            document.getElementById('test').appendChild(TAG);
    };
    
    View.prototype.displayAllObjects = function (objects) {
        console.log("displayAllObjects: loaded");
        console.log(objects.length);
        var aMedia = 0;
        for (aMedia; aMedia < objects.length; aMedia = aMedia + 1) {
            console.log(objects[aMedia]);
            this.displayObject(objects[aMedia]);
        };
    }
    
    
    View.prototype.display10brainElements = function (object) {
        var DIV;
        if (object._pageElements !== []) {
            console.log("No elements")
        } else {
            DIV = document.createElement("DIV");
            DIV.id = object.getScreenElements()[0];
            DIV.textContent = "placeholder text";
            this._viewElements.mythScreen.Content.appendChild(DIV);
        }
    }
    
    View.prototype.displayArtsElements = function (object) {
        var DIV;
        if (object._pageElements !== []) {
            console.log("No elements")
        } else {
            DIV = document.createElement("DIV");
            DIV.id = object.getScreenElements()[0];
            DIV.textContent = "placeholder text";
            this._viewElements.mythScreen.Content.appendChild(DIV);
        }
    }
    
    View.prototype.displayComputerElements = function (object) {
        var DIV;
        if (object._pageElements !== []) {
            console.log("No elements")
        } else {
            DIV = document.createElement("DIV");
            DIV.id = object.getScreenElements()[0];
            DIV.textContent = "placeholder text";
            this._viewElements.mythScreen.Content.appendChild(DIV);
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
        console.log(mythTable);
        var DIV, count;
        for (count = 0; count <mythTable.length; count = count+1) {
        // including rows.
        if (count %2 ===0) {
        DIV = document.createElement("DIV");
        DIV.className = "navigationMapRow";
        this._viewElements.navigationMap.Table.appendChild(DIV);
        };
        
        DIV = document.createElement("DIV");
        DIV.className = "navigationMapMyth";
        DIV.id = "navigationMapMyth" + (count + 1);
        console.log(DIV.id);
        DIV.innerHTML = mythTable[count][1];
        this._viewElements.navigationMap.Table.lastChild.appendChild(DIV);
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
        var myth = document.getElementById('navigationMapMyth1');
        myth.addEventListener("click", callback);
    };
    
    View.prototype.onClickCameron = function (callback) {
        var myth = document.getElementById('navigationMapMyth2');
        myth.addEventListener("click", callback);
    }
    
    View.prototype.onClickEmily = function (callback) {
        var myth = document.getElementById('navigationMapMyth3');
        myth.addEventListener("click", callback);
    }
    
    View.prototype.onClickTanish = function (callback) {
        var myth = document.getElementById('navigationMapMyth4');
        myth.addEventListener("click", callback);
    }
    
    
    
  View.prototype.showScreen = function (page) {
        this.hideAllPages();
        page.hidden = false;
    };
 
  View.prototype.onClickAddBtn = function (callback) {
      console.log("onClickLoaded");
        /* Main Screen */
        this._viewElements.mainScreen.Brain.addEventListener("click", callback);
        console.log(this._viewElements.mainScreen.Brain);
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
    
    initModule = function (viewElements) {
        return new View(viewElements);
    };
    
    return {initModule: initModule,
            selectionObject: selectionObject};
}
());