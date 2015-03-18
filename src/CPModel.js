var ExcellentKids.CPModel = (function () {
    var Myth, Theme, Media, initModule;
    
    function CPModel () {
    var prot = {};
    prot.allMyMyths = [];
    prot.allMyThemes = [];
    prot.allMyMedia = [];
    this.getMyMyths = function () {
        return prot.allMyMyths;
    };
    
    this.getMyThemes = function () {
        return prot.allMyThemes;
    };
    this.getMyMedia = function () {
        return prot.allMyMedia;
    };
};

this.prototype.addMyth = function (newId, newDescription) {
    var myth = new Myth (newId, newDescription, this);
    this.getMyMyths().push(myth);
};

this.prototype.addTheme = function (newId, newType, myth) {
    var theme = myth.addTheme (newId, newType, myth, this);
    this.allMyThemes.push(theme);
};

this.prototype.addVideo = function () {
    var video = new Video ();
    this.allMyVideos.push(video);
};

this.prototype.addImage = function () {
    var image = new Image ();
    this.allMyImages.push(image);
};

this.prototype.addSound = function () {
    var sound = new Sound ();
    this.allMySounds.push(sound);
};

this.prototype.addText = function () {
    var text = new Text ();
    this.allMyText.push(text);
};

initModule = function () {
    return new CPModel();
};
return {initModule :initModule};
}
() )