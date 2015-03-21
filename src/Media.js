whynot.model.Media = function (newId, newFileName, theWhynotModel) {
    var prot = {};
    prot.id = newId;
    prot.fileName = newFileName;
    prot._WhynotModel = theWhynotModel;
    this.getId = function () {
        return prot.id;
    };
    this.getFileName = function () {
        return prot.fileName;
    };
    this.getModel = function () {
        return prot._WhynotModel;
    };
    this.getChildren = function () {
        return prot.children;
    }
}