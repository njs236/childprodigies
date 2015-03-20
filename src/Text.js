var whynot.whynotModel.Text = function (newId, newFileName, newText, theWhynotModel) {
    Media.call (this,newId);
    Media.call (this, newFileName);
    var prot = {};
    prot.text = newText;
    prot._WhynotModel = theWhynotModel;
}