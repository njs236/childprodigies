whynot.model = (function () {
    var Model, Myth, Theme, Media, Text, initModule;
    /* Constructor Functions */
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
    return this;
    };
    Myth = function (newId, newDescription, newPersonName, theModel) {
    prot = {};
    prot.id = newId;
    prot.description = newDescription;
    prot._elements = [];
    prot.allMyThemes = [];
    prot._model = theModel;
    prot.personName = newPersonName;
    
    this.getMyThemes = function () {
        return prot.allMyThemes;
    }
    
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
    prot._elements = [];
    prot._myth = theMyth;
    prot._model = theModel;
    this.getElements = function () {
        return prot._elements;
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
    this.get = function () {
        return this.getId() + " " + prot.text;
    };
    return this;
    };
    
    Video = function (newId, newFileName, theModel, newWidth, newHeight) {
        Media.call(this, newId, newFileName, theModel);
        var prot = {};
        prot.width = newWidth;
        prot.height = newHeight;
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
    
    /* Controller functions*/

    Myth.prototype.addTheme = function (newId, newDescription, theMyth, theModel) {
    var theme = new Theme (newId, newDescription, theMyth, theModel);
    this.getMyThemes().push(theme);
}

Model.prototype.addMyth = function (newId, newDescription, newPersonName) {
    var myth = new Myth (newId, newDescription, newPersonName, this);
    this.getMyMyths().push(myth);
    return myth;
};

Model.prototype.addTheme = function (newId, newType, myth) {
    var theme = myth.addTheme (newId, newType, myth, this);
    myth.getMyThemes().push(theme);
    return theme;
};

Model.prototype.addVideo = function (newId, newFileName, newWidth, newHeight) {
    var video = new Video (newId, newFileName, this, newWidth, newHeight);
    this.getMyMedia().push(video);
};

Model.prototype.addImage = function (newId, newFileName, newWidth, newHeight) {
    var image = new Image (newId, newFileName, this, newWidth, newHeight);
    this.getMyMedia().push(image);
};

Model.prototype.addSound = function (newId, newFileName) {
    var sound = new Sound (newId, newFileName, this);
    this.getMyMedia().push(sound);
};

Model.prototype.addText = function (newId, newText) {
    var text = new Text( this, newId, newText);
    this.getMyMedia().push(text);
    return text;
};

Model.prototype.loadElements = function (array, page) {
    page.loadElements(array);
}

Model.prototype.displayNavigationMap = function () {
    var aMyth, result = [];
    for (aMyth of this.getMyMths()) {
        result.push([aMyth.getNavigationInfo()]);
    }
    return result;
}

Model.prototype.findMythById = function (id) {
    var aMyth;
    for (aMyth of this.getMyMyths()) {
        if (aMyth.id === id) {
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

