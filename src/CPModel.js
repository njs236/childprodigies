(var CPModel = function () {
    this.allMyBrains = [];
    this.allMyThemes = [];
    this.allMyVideos = [];
    this.allMyImages = [];
    this.allMySounds = [];
    this.allMyText = [];
}

CPModel.prototype.addBrain = function () {
    var brain = new Brain ();
    this.allMyBrains.push(brain);
};

CPModel.prototype.addTheme = function () {
    var theme = new Theme ();
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

CPModel.prototype.initModel = function () {
    var cpModel = new CPModel();
};
return (initModel :initModel);
)()