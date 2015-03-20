whynot.whynotModel = (function () {
    var Myth, Theme, Media, initModule;
    
    function WhynotModel () {
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

WhynotModel.prototype.addMyth = function (newId, newDescription) {
    var myth = new Myth (newId, newDescription, this);
    this.getMyMyths().push(myth);
};

WhynotModel.prototype.addTheme = function (newId, newType, myth) {
    var theme = myth.addTheme (newId, newType, myth, this);
    this.allMyThemes.push(theme);
};

WhynotModel.prototype.addVideo = function () {
    var video = new Video ();
    this.allMyVideos.push(video);
};

WhynotModel.prototype.addImage = function () {
    var image = new Image ();
    this.allMyImages.push(image);
};

WhynotModel.prototype.addSound = function () {
    var sound = new Sound ();
    this.allMySounds.push(sound);
};

WhynotModel.prototype.addText = function () {
    var text = new Text ();
    this.allMyText.push(text);
};

initModule = function () {
    return new WhynotModel();
};
return {initModule: initModule};
}
());

