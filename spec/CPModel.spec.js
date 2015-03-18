describe("CPModel", function () {
    it("should have arrays of Myths", function() {
        expect(ExcellentKids.CPModel.getMyMyths()).not.toBeNull();
    })
    it("should have arrays of Themes", function() {
        expect(ExcellentKids.CPModel.getMyThemes()).not.toBeNull();
    })
    it("should have arrays of Media", function() {
        expect(ExcellentKids.CPModel.getMyMedia()).not.toBeNull();
    })
    
    it("should be able to make Myths", function () {
        myth = ExcellentKids.CPModel.addMyth(1, "that you only use 10% of your brain");
        expect(myth).not.toBeNull();
    })
})