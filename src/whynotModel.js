whynot.model = (function () {
    var Model, Myth, Theme, Media, initModule;
    
    Model = function () {
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

Model.prototype.addMyth = function (newId, newDescription) {
    var myth = new Myth (newId, newDescription, this);
    this.getMyMyths().push(myth);
};

Model.prototype.addTheme = function (newId, newType, myth) {
    var theme = myth.addTheme (newId, newType, myth, this);
    this.allMyThemes.push(theme);
};

Model.prototype.addVideo = function () {
    var video = new Video ();
    this.allMyVideos.push(video);
};

Model.prototype.addImage = function () {
    var image = new Image ();
    this.allMyImages.push(image);
};

Model.prototype.addSound = function () {
    var sound = new Sound ();
    this.allMySounds.push(sound);
};

Model.prototype.addText = function (newId, newFileName, theModel) {
    var text = new Text(newId, newFileName, theModel)
    this.allMyMedia.push(text);
};

Model.prototype.loadElements = function (array, page) {
    page.loadElements(array);
}

initModule = function () {
    return new Model();
};
return {initModule: initModule};
}
());

