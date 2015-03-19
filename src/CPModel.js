var CPModel = (function () {
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

CPModel.prototype.addMyth = function (newId, newDescription) {
    var myth = new Myth (newId, newDescription, this);
    this.getMyMyths().push(myth);
};

CPModel.prototype.addTheme = function (newId, newType, myth) {
    var theme = myth.addTheme (newId, newType, myth, this);
    this.allMyThemes.push(theme);
};

CPModel.prototype.addVideo = function () {
    var video = new Video ();
    this.allMyVideos.push(video);
};

CPModel.prototype.addImage = function () {
    var image = new Image ();
    this.allMyImages.push(image);
};

CPModel.prototype.addSound = function () {
    var sound = new Sound ();
    this.allMySounds.push(sound);
};

CPModel.prototype.addText = function () {
    var text = new Text ();
    this.allMyText.push(text);
};

initModule = function () {
    return new CPModel();
};
return {initModule: initModule};
}
());

