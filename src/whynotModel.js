whynot.model = (function () {
    var Model, Myth, Theme, Media, Text, Link, Video, Sound, Image, initModule;
    /* Constructor Functions */
    Model = function () {
    this.allMyMyths = [];
    this.allMyThemes = [];
    this.allMyMedia = [];

    };
    Myth = function (newId, newDescription, newPersonName, theModel) {
    prot = {};
    prot.id = newId;
    prot.description = newDescription;
    prot._pageElements = [];
    this.getId = function () {
        return prot.id;
    }
    this.allMyThemes = [];
    prot._model = theModel;
    prot.personName = newPersonName;
    
    this.getNavigationInfo = function () {
        return [prot.personName, prot.description];
    }
    
    this.getScreenElements = function () {
        return [prot.id, prot.description, prot.personName];
    }
    
    
    return this;
    };
    
    Media = function (newId, newFileName, theModel) {
    var prot = {};
    prot.id = newId;
    prot.fileName = newFileName;
    prot._model = theModel;
    this.getId = function () {
        return prot.id;
    };
    this.getFileName = function () {
        return prot.fileName;
    };
    this.getModel = function () {
        return prot._model;
    };
    this.getChildren = function () {
        return prot.children;
    }
    return this;
    };
    
    Theme = function (newId, newType, theMyth, theModel) {
    var prot = {};
    prot.id = newId;
    prot.type = newType;
    prot._pageElements = [];
    prot._myth = theMyth;
    prot._model = theModel;
    this.getElements = function () {
        return prot._pageElements;
    }
    return this;
    };

    Theme.prototype.loadElements = function (array) {
    var count = 0;
    for (count; count < array.length; count++) {
        this.getElements().push(array[count]);
    };
    };
    
    Text = function (theModel,newId, newText) {
        Media.call (this, newId, '', theModel);
        var prot = {};
        prot.text = newText;
        this.getText = function () {
            return prot.text;
        };
        this.get = function () {
            return this.getId() + " " + prot.text;
        };
    return this;
    };
    
    Link = function (newId, newFileName, newTargetWindow, theModel) {
        Media.call(this, newId, newFileName, theModel);
        var prot = {};
        prot.targetWindow = newTargetWindow;
        this.getLink = function () {
            return this.getFileName();
        };
    return this;
    };
    
    Video = function (newId, newFileName, theModel, newWidth, newHeight) {
        Media.call(this, newId, newFileName, theModel);
        var prot = {};
        prot.width = newWidth;
        prot.height = newHeight;
        this.getVideo = function () {
            return [this.getFileName(), prot.width, prot.height];
        }
    return this;
    };
    
    Sound = function (newId, newFileName, theModel) {
        Media.call(this, newId, newFileName, theModel);
    };
    
    Image = function (newId, newFileName, theModel, newWidth, newHeight) {
        Media.call(this, newId, newFileName, theModel);
        prot = {};
        prot.width = newWidth;
        prot.height = newHeight;
        this.getImage = function () {
            return [this.getFileName(), prot.width, prot.height];
        }
        this.getDimensions = function () {
            return [prot.width, prot.height];
        };
    };

    Text.prototype = Object.create(Media.prototype);
    Text.prototype.constructor = Text; 
    
    Video.prototype = Object.create(Media.prototype);
    Video.prototype.constructor = Video;
    
    Sound.prototype = Object.create(Media.prototype);
    Sound.prototype.constructor = Sound;
    
    Image.prototype = Object.create(Media.prototype);
    Image.prototype.constructor = Image;
    
    Link.prototype = Object.create(Media.prototype);
    Link.prototype.constructor = Link;
    
    /* Controller functions*/

    Myth.prototype.addTheme = function (newId, newDescription, theMyth, theModel) {
    var theme = new Theme (newId, newDescription, theMyth, theModel);
    this.allMyThemes.push(theme);
    }

Model.prototype.addMyth = function (newId, newDescription, newPersonName) {
    var newMyth = new Myth (newId, newDescription, newPersonName, this);
    this.allMyMyths.push(newMyth);
};

Model.prototype.addTheme = function (newId, newType, myth) {
    var theme = myth.addTheme (newId, newType, myth, this);
    this.allMyThemes.push(theme);
    return theme;
};

Model.prototype.addVideo = function (newId, newFileName, newWidth, newHeight) {
    var video = new Video (newId, newFileName, this, newWidth, newHeight);
    this.allMyMedia.push(video);
};

Model.prototype.addImage = function (newId, newFileName, newWidth, newHeight) {
    var image = new Image (newId, newFileName, this, newWidth, newHeight);
    this.allMyMedia.push(image);
};

Model.prototype.addSound = function (newId, newFileName) {
    var sound = new Sound (newId, newFileName, this);
    this.allMyMedia.push(sound);
};

Model.prototype.addText = function (newId, newText) {
    var text = new Text( this, newId, newText);
    this.allMyMedia.push(text);
    return text;
};

Model.prototype.addLink = function (newId, newFileName, newTargetWindow) {
    var link = new Link (newId, newFileName, newTargetWindow, this);
    this.allMyMedia.push(link);
    return link;
};

Model.prototype.loadElements = function (array, page) {
    page.loadElements(array);
};

Model.prototype.displayNavigationMap = function () {
    var aMyth, result = [];
    for (aMyth of this.allMyMyths) {
        result.push(aMyth.getNavigationInfo().slice(0));
    }
    return result;
}

Model.prototype.findMythById = function (id) {
    var aMyth;
    console.log(this.allMyMyths);
    for (aMyth of this.allMyMyths) {
        console.log(aMyth.getId());
        if (aMyth.getId() == id) {
            return aMyth;
        }
    }
    return false;
}

initModule = function () {
    return new Model();
};
return {initModule: initModule};
}
());

