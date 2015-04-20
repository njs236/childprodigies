"use strict";

//onclick Events

var gotoNavigationMap = function () {
    window.location = 'NavigationMap.html';
}
var goto10BrainMyth = function () {
    window.location = 'Myth10percentBrain.html';
}
var gotoArtsMyth = function () {
    window.location = 'MythOnlyFoundInArts.html';
}
var gotoExcelMyth = function () {
    window.location = 'MythDrivenToExcel.html';
}
var gotoComputerMyth = function () {
    window.location = 'MythBrainsAreComputers.html';
}
var gotoHome = function () {
    window.location = 'index.html';
}
var gotoAboutUs = function () {
    window.location = 'AboutUs.html';
}
var gotoContact = function () {
    location.hash = 'contactModal';
}

var gotoEmilyBearSound = function () {
    var url = 'https://www.youtube.com/watch?v=qrmzcK09-8E#t=05m37s',
    win = window.open(url, '_blank');
    win.focus();
}

var gotoEmilyBearVideo = function () {
    window.location = 'EmilyBearThemeVideo.html';
}

var gotoEmilyBearText = function () {
    window.location = 'EmilyBearThemeText.html';
}

var gotoCameronThompsonText = function () {
    window.location = 'CameronThompsonThemeText.html';
}

var gotoCameronThompsonVideo = function () {
    window.location = 'CameronThompsonThemeVideo.html';
}

var gotoCameronThompsonKinesthetic = function () {
    window.location = 'CameronThompsonThemeKinesthetic.html';
}

var gotoCameronFacebook = function () {
    var url = 'https://www.facebook.com/Teenagegenius',
    win = window.open(url, '_blank');
    win.focus();
}

var gotoCameronTwitter = function () {
    var url = 'https://twitter.com/aspergergenius',
    win = window.open(url, '_blank');
    win.focus();
}

var gotoCameronYouCaring = function () {
    var url = 'http://www.youcaring.com/tuition-fundraiser/help-cameron-thompson-complete-his-open-university-degree-/302325',
    win = window.open(url, '_blank');
    win.focus();
}

var gotoTanishQText = function () {
    window.location = 'TanishQThemeText.html';
}

var gotoTanishQVideo = function () {
    window.location = 'TanishQThemeVideo.html';
}

var gotoTanishqSservi = function () {
    var url = 'http://sservi.nasa.gov/tanishq-abraham/',
    win = window.open(url, '_blank');
    win.focus();
}

var gotoSservi = function () {
    var url = 'http://sservi.nasa.gov/',
    win = window.open(url, '_blank');
    win.focus();
}

var gotoTanishQKinesthetic = function () {
    window.location = 'TanishQThemeKinesthetic.html';
};

var gotoSantiagoGonzalezText = function () {
    window.location = 'SantiagoGonzalezThemeText.html';
}

var gotoSantiagoGonzalezVideo = function () {
    window.location = 'SantiagoGonzalezThemeVideo.html';
}

var gotoSantiagoGonzalezKinesthetic = function () {
    window.location = 'SantiagoGonzalezThemeKinesthetic.html';
}

var gotoSantiagoCheckers = function () {
    var url = 'https://itunes.apple.com/us/app/checkers-board-game/id405250363?mt=12',
    win = window.open(url, '_blank');
    win.focus();
}

var gotoSantiagoConway = function () {
    var url = 'https://itunes.apple.com/us/app/conways-game-of-life/id423536172?mt=12',
    win = window.open(url, '_blank');
    win.focus();
}

var gotoSantiagoMetronome = function () {
    var url = 'https://itunes.apple.com/us/app/digital-metronome/id422025540?mt=8',
    win = window.open(url, '_blank');
    win.focus();
}

var gotoSantiagoRollability = function () {
    var url = 'https://itunes.apple.com/us/app/rollability/id668396013?mt=12',
    win = window.open(url, '_blank');
    win.focus();
}

var gotoSantiagoSlidePuzzle = function () {
    var url = 'https://itunes.apple.com/us/app/super-slide-puzzle/id436842485?mt=8',
    win = window.open(url, '_blank');
    win.focus();
}

var gotoSantiagoSnippets = function () {
    var url = 'https://itunes.apple.com/us/app/snippet-saver/id413605721?mt=12',
    win = window.open(url, '_blank');
    win.focus();
}


// functions

var closeModal = function () {
    location.hash = "#";
}

var hideAllPages = function () {
		"use strict";
		var panels = [],
			count;
		panels = document.getElementsByClassName("panel");
		for ( count = 0; count < panels.length; count = count + 1 ) {
			
			panels[count].hidden = true;
		};
	};
    
var showPageNext = function () {
    var panels = document.getElementsByClassName("panel"),
    count,
    numerator = 0;
    for (count = 0; count < panels.length; count = count +1) {
        if (panels[count].hidden == false) {
            numerator = count;
        };
    };
    console.log(numerator);
    hideAllPages()
    console.log(panels.length);
    if (numerator == panels.length - 1) {
        numerator = 0;
    } else {
        numerator = numerator + 1;
    };
    console.log(numerator);
    panels[numerator].hidden = false;
}

var showPagePrevious = function () {
    var panels = document.getElementsByClassName("panel"),
    count,
    numerator ;
    for (count = 0; count < panels.length; count = count +1) {
        if (panels[count].hidden == false) {
            numerator = count;
        };
    };
    hideAllPages()
    if (numerator == 0) {
        numerator = panels.length - 1;
    } else {
        numerator = numerator - 1;
    };
    panels[numerator].hidden = false;
};
    
var displayButtonsIfMoreThanOnePanel = function () {
    var panels = document.getElementsByClassName("panel"),
    leftButton = document.getElementById('leftButton'),
    rightButton = document.getElementById('rightButton');
    if (panels.length > 1) {
        leftButton.hidden = false;
        rightButton.hidden = false;
        leftButton.addEventListener("click", showPagePrevious);
        rightButton.addEventListener("click", showPageNext);
    }    
};

var skipNavMap = function () {
    var videoElement = document.getElementById('navVideo'),
        skipElement = document.getElementById('navScreenElements1'),
        nextElement = document.getElementById('navigationMapTable');
    videoElement.pause();
    skipElement.hidden = true;
    nextElement.hidden = false;
}

var mouseover = function () {
    document.getElementById('brain').className = 'mouseOver';
};