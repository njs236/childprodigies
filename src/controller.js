whynot.controller = (function () {
/*
the controller class knows the view and the model
and can modify the model and the view 

It also handles all the onclick events,

and adds all the instantiated objects;


*/
    var initModule;
    
    var Controller = function (view, model) {
        this._view = view;
        this._model = model;
    };
    
    Controller.prototype.allObjectsData = function () {
        var _this = this,
        aMyth =0,
        myth = {},
        text = {},
        video = {},
        audio = {},
        image = {},
        theme = {};
        text = _this.addText('textThemeScreenEmilyBear', ['I happened upon a young girl that plays the piano while researching for this project.','Emily Bear has composed more than 350 songs, all for the piano. She has played at the White House, produced 6 albums, and she is 12 years old.','When she was 1 yr old, she would sing note for note in tune according to her mum. She started playing the piano when she was 4 years old, and does not want to be referred as a prodigy, as it sounds like someone who would be driven to excel.','According to an interview,  it was never the intention of her parents to drive her in anyway, as it is kept in balance with the life of the family, and motivating and empowering her to be all that she can be. She can compose a song on the spot for someone that gives them a description. She would rather be called a composer and not a prodigy.','At such a young age, this makes what is inside of her very remarkable, since the main reason she plays piano is the enjoyment of it, and the ability to showcase that talent to others. For that reason, she does not need to be driven to excel, since she has already the motivation she needs to excel. It comes from within her.']);
        _this.addText('textThemeScreenSantiagoGonzalez', ['Santiago Gonzales is fluent in 10 programming languages, he has developed apps for iOS. He will have his masters degree in programming when he’s 17.','He is currently studying at Colorado school of minds, majoring in Computer Science. He’s a Junior.','He compares His programming to poetry. He is mature in many ways, but in others is still just a child, unconcerned with what is normal, like having a girlfriend, or going to parties.','He is currently a research assistant for a professor at MINDS, building energy efficiency and Santiago is developing the sensor network that will be used.','He loves being in college and learning.','His parents discovered a difference in him at a young age, when he started preschool. But it wasn’t until He started primary school that they discovered he was bored and not enjoying school much. That made them realise that he was very different.','Where as some might try to motivate and make their kids strive to excel, His parents discovered he needed no motivation, since the buzz was in completing a program and letting it be made available to others. That was that He had put something that was important to Him, for others to see too.']);
        _this.addText('textThemeScreenCameronThompson', ['Cameron Thompson is a young boy who has excelled above his age in the area of maths. His story has tugged on my heart, and I think his story will be that to yours too.','He struggles with Aspergers, which makes it hard for him to handle social situations.','He said \"I have the social ability of a talking potato\" in response to the reasons that he sticks to himself and finds it difficult to make friends.','At the age of 11, Cameron sat a school entrance maths test. \"One hundred and forty one out of 140, I broke the system, I think I did well,\" he says.','At the same age, he sailed through two GCSEs in maths and additional maths, and in the same year passed his maths A-level with flying colours. But being brilliant at maths has become Cameron\'s entire identity, and trying to fit in at school and develop his social skills has somehow become left behind in a desire to escape mediocrity.','His grades for his degree course have been dropping, and he is panicking. In the first year, his marks were up in the 80s, putting him in the top 0.5%. But on a recent assignment, he scored 72%, a healthy grade by most people\'s standards, but not enough to secure the distinction that he wants.']);
        _this.addText('textThemeScreenTanishQ', ['Tanishq Mathew Abraham is a 7-year old amateur astronomer attending some classes at Stanford who also writes astronomy articles. At the age of 11 he graduated highschool, and also has a sister. The two are the youngest two children to ever join Mensa, scoring in the 99.9 and 99 percentile respectively. As it goes, they were showing signs of High-IQ at an early age, something that the parents did not know about and how to respond to it.','At the age of six he took courses in high school.  Apart from being the top student in most of his college classes, he has maintained a perfect 4.0 grade point average. At 8 years old Tanishq became the youngest student ever to be enrolled to be a member of the honor society Phi Theta Kappa. And in December that year he became a member. At 10 years old, He served the role of Vice-President of Communications from 2013 to 2014 at American River College.','Having studied mainly geography and astronomy, he also has many other interests, such as playing instruments, and singing, swimming, dancing and soccer. Because of his vast interests His parents have become responsible for his studies.']);
        _this.addLink('audioThemeScreenEmilyBear', 'https://www.youtube.com/watch?v=qrmzcK09-8E#t=05m37s')
        _this.addLink('metronomeKinestheticThemeScreenSantiagoGonzalez', 'https://itunes.apple.com/us/app/digital-metronome/id422025540?mt=8');
        _this.addLink('puzzleKinestheticThemeScreenSantiagoGonzalez', 'https://itunes.apple.com/us/app/super-slide-puzzle/id436842485?mt=8');
        _this.addLink('checkersKinestheticThemeScreenSantiagoGonzalez', 'https://itunes.apple.com/us/app/checkers-board-game/id405250363?mt=12');
        _this.addLink('snippetsKinestheticThemeScreenSantiagoGonzalez', 'https://itunes.apple.com/us/app/snippet-saver/id413605721?mt=12');
        _this.addLink('lifeKinestheticThemeScreenSantiagoGonzalez','https://itunes.apple.com/us/app/conways-game-of-life/id423536172?mt=12');
        _this.addLink('rollabilityKinestheticThemeScreenSantiagoGonzalez','https://itunes.apple.com/us/app/rollability/id668396013?mt=12');
        _this.addLink('twitterKinestheticThemeScreenCameronThompson', 'https://twitter.com/aspergergenius');
        _this.addLink('facebookKinestheticThemeScreenCameronThompson', 'https://www.facebook.com/Teenagegenius');
        _this.addLink('youcaringKinestheticThemeScreenCameronThompson', 'http://www.youcaring.com/tuition-fundraiser/help-cameron-thompson-complete-his-open-university-degree-/302325');
        _this.addLink('twitterKinestheticThemeScreenTanishQ', 'https://twitter.com/iscienceluvr');
        _this.addLink('nasa1KinestheticThemeScreenTanishQ', 'http://sservi.nasa.gov/tanishq-abraham/');
        _this.addLink('nasa2KinestheticThemeScreenTanishQ', 'http://sservi.nasa.gov/')
        _this.addVideo('video1ThemeScreenSantiagoGonzalez', 'https://www.youtube.com/embed/DBXZWB_dNsw', 560, 315);
        _this.addVideo('video1ThemeScreenCameronThompson', 'https://www.youtube.com/embed/rOwtUe8EyzY', 560, 315);
        _this.addVideo('video1ThemeScreenTanishQ', 'https://www.youtube.com/embed/FSYCwxt78jY', 560, 315);
        _this.addVideo('video2ThemeScreenTanishQ', 'https://www.youtube.com/embed/pA4fgh4Z9-Q', 560, 315);
        _this.addImage('image1KinestheticThemeScreenSantiagoGonzalez','media/images/AppMetronome.png', 100, 100);
        _this.addImage('image2KinestheticThemeScreenSantiagoGonzalez','media/images/AppSlidePuzzle.png', 100, 100);
        _this.addImage('image3KinestheticThemeScreenSantiagoGonzalez','media/images/AppCheckers.png', 100, 100);
        _this.addImage('image4KinestheticThemeScreenSantiagoGonzalez','media/images/AppSnippets.png', 100, 100);
        _this.addImage('image5KinestheticThemeScreenSantiagoGonzalez','media/images/AppConway.png', 100, 100);
        _this.addImage('image6KinestheticThemeScreenSantiagoGonzalez','media/images/AppRollability.png', 100, 100);
        _this.addImage('imageGreenMyth','media/images/green.png', 50, 50);
        _this.addImage('imageBlueMyth','media/images/blue.png', 50, 50);
        _this.addImage('imagePinkMyth','media/images/pink.png', 50, 50);
        _this.addImage('imageYellowMyth','media/images/yellow.png', 50, 50);
        _this.addImage('imageTwitter', 'media/images/Twitter_logo_blue.png', 100, 100);
        _this.addImage('imageFacebook', 'media/images/facebook-icon.png', 100, 100);
        _this.addImage('imageYouCaring', 'media/images/globe.png', 100, 100);
        _this.addImage('imageLogo', 'media/images/logo.svg', 100, 100);
        _this.addImage('imageLeft', 'media/images/left.svg', 50, 50);
        _this.addImage('imageRight', 'media/images/right.svg', 50, 50);
        _this.addMyth('10brainMythScreen', 'So You only use 10% of your brain do you?', 'Santiago Gonsalez');
        _this.addMyth('artsMythScreen', 'Prodigies are only found in the arts.', 'Cameron Thompson');
        _this.addMyth('excelMythScreen', 'What would you say about the competitiveness to excel?','Emily Bear');
        console.log(this._model.allMyMyths.length);
        for (aMyth; aMyth < this._model.allMyMyths.length; aMyth = aMyth +1) {
            console.log(this._model.allMyMyths[aMyth].getId());
        }
        _this.addMyth('computerMythScreen', 'Brains are like computers?','TanishQ');
        
        theme = _this.addTheme('EmilyBearThemeScreenText', 'text', myth);
    };
    
    Controller.prototype.addText = function (newId, newText) {
        var theModel = this._model,
        text;
        text = theModel.addText(newId, newText);
        return text;
    };
    
    Controller.prototype.addLink = function (newId, newFileName, targetWindow) {
        var theModel = this._model,
        link;
        link = theModel.addLink(newId, newFileName, targetWindow);
        return link;
    };
    
    Controller.prototype.addVideo = function (newId, newFileName, newWidth, newHeight) {
        var theModel = this._model,
        video;
        video = theModel.addVideo(newId, newFileName, newWidth, newHeight);
        return video;
    };
    
    Controller.prototype.addSound = function (newId, newFileName) {
        var theModel = this._model,
        sound;
        sound = theModel.addSound(newId, newFileName);
        return sound;
    };
    
    Controller.prototype.addImage = function (newId, newFileName, newWidth, newHeight) {
        var theModel = this._model,
        image;
        image = theModel.addImage (newId, newFileName, newWidth, newHeight);
        return image;
    };
    
    Controller.prototype.onClickSantiago = function () {
        var _this = this;
        _this._view.onClickSantiago(function () {
            _this.setUp10brainScreen();
        })
    };
    Controller.prototype.onClickCameron = function () {
        var _this = this;
        _this._view.onClickCameron(function () {
            _this.setUpArtsScreen();
        })
    }
    Controller.prototype.onClickEmily = function () {
        var _this = this;
        _this._view.onClickEmily(function () {
            _this.setUpExcelScreen();
        })
    }
    Controller.prototype.onClickTanish = function () {
        var _this = this;
        _this._view.onClickTanish(function () {
            _this.setUpComputerScreen();
        })
    };
    
    Controller.prototype.setUpExcelScreen = function () {
        console.log("excelScreenLoaded");
        var theView = this._view,
            theModel = this._model;
            result = theModel.findMythById('excelMythScreen');
            if (result !== false) {
                theView.displayExcelElements(result);
            } else {
                console.log("invalid input");
            }
        theView.showMythScreen();
    };
    
    
    Controller.prototype.setUpComputerScreen = function () {
        theView.showMythScreen;
    };
    
    Controller.prototype.setUp10brainScreen = function () {
        theView.showMythScreen;
    };
    
    Controller.prototype.setUpArtsScreen = function () {
        theView.showMythScreen;
    };
    
    Controller.prototype.addMyth = function (newId, newDescription, newPersonName) {
        var theModel = this._model,
        myth;
        myth = theModel.addMyth(newId, newDescription, newPersonName);
        return myth;
    };
    
    Controller.prototype.addTheme = function (newId, newType, myth) {
        var theModel = this._model,
        theme;
        theme = theModel.addTheme(newId, newType, myth);
        return theme;
    };
    
    Controller.prototype.loadElements = function (array, page) {
        var theModel = this._model;
        theModel.loadElements(array, page);
    }
    
    Controller.prototype.displayPage = function (object) {
    var toString = Object.prototype.toString,
        type = toString.call(object);
    
    if (type = Myth) {
       console.log("selected Myth Object");
    } else if (type = Theme) {
       console.log("selected Theme Object") ;   
    } else if (type = Model) {
       console.log("selected Model Object");    
    } else {
       console.log("selected No Object") ;   
    };
       
    };
    
    Controller.prototype.onClickAddBtn = function () {
        var _this = this;
        _this._view.onClickAddBtn(function () {
            _this.setUpNavigationMap;
        })
    };
    
    Controller.prototype.displayAllObjects = function () {
        var theModel = this._model,
        theView = this._view;
        theView.displayAllObjects(theModel.allMyMedia);
    };
    
    Controller.prototype.setUpNavigationMap = function () {
        var theModel = this._model,
            theView = this._view;
        theView.displayNavigationMap(theModel.displayNavigationMap());
        theView.showNavigationMap();
    }
    
    initModule = function (view, model) {
        return new Controller(view,model);
    };
    return {initModule: initModule};
}
());