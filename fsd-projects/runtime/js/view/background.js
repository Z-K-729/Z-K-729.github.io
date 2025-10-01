var background = function (window) {
    'use strict';
    
    window.opspark = window.opspark || {};
    var draw = window.opspark.draw;
    var createjs = window.createjs;
    
    /*
     * Create a background view for our game application
     */
    window.opspark.makeBackground = function(app,ground) {
        /* Error Checking - DO NOT DELETE */
        if(!app) {
            throw new Error("Invalid app argument");
        }
        if(!ground || typeof(ground.y) == 'undefined') {
            throw new Error("Invalid ground argument");
        }
        
        // useful variables
        var canvasWidth = app.canvas.width;
        var canvasHeight = app.canvas.height;
        var groundY = ground.y;

        // container which will be returned
        var background;
        
        //////////////////////////////////////////////////////////////////
        // ANIMATION VARIABLES HERE //////////////////////////////////////
        //////////////////////////////////////////////////////////////////
        // TODO (several):
        var tree;
        var buildings = [];
        // called at the start of game and whenever the page is resized
        // add objects for display in background. draws each image added to the background once
        function render() {
            background.removeAllChildren();
            // TODO 1:
            // this currently fills the background with an obnoxious yellow;
            // you should modify both the height and color to suit your game
            var backgroundFill = draw.rect(canvasWidth,groundY,"Black");
            background.addChild(backgroundFill);
            // TODO 2: - Add a moon and starfield
            var moon = draw.bitmap("img/moon.png");
            moon.x = 800;
            moon.y = 10;
            moon.scaleX = 1.0;
            moon.scaleY = 1.0;
            for (var i = 0; i < 200; i++) {
                var circle = draw.circle(10, "white", "white", 2);
                circle.x = canvasWidth * Math.random();
                circle.y = groundY * Math.random();
                circle.scaleX = 0.2
                circle.scaleY = 0.2
                background.addChild(circle)
            }
            // TODO 4: Part 1 - Add buildings!     Q: This is before TODO 4 for a reason! Why?
            for (var i = 0; i < 7; i++) {
                var buildingHeight = Math.random() * 300;
                var building = draw.rect(75, buildingHeight, "DarkBlue", "Black, 1");
                building.x = 200 * i;
                building.y = groundY - buildingHeight;
                background.addChild(building);
                buildings.push(building);
            }
            var bigBuilding = draw.rect(10, 10, "darkBlue", "black", 0.1);
            bigBuilding.x = 1000;
            bigBuilding.y = 127;
            bigBuilding.scaleX = 20.0;
            bigBuilding.scaleY = 16.0;
            background.addChild(bigBuilding);
            var smokestack = draw.rect(10, 10, "darkBlue", "black", 0.2);
            smokestack.x = 1020;
            smokestack.y = 26;
            smokestack.scaleX = 4.0;
            smokestack.scaleY = 10.0;
            background.addChild(smokestack);
            // TODO 3: Part 1 - Add a tree
            tree = draw.bitmap("img/tree.png");
            tree.x = 200;
            tree.y = groundY - 220;
            background.addChild(tree);
        } // end of render function - DO NOT DELETE
        
        
        // Perform background animation
        // called on each timer "tick" - 60 times per second
        function update() {
            // useful variables
            var canvasWidth = app.canvas.width;
            var canvasHeight = app.canvas.height;
            var groundY = ground.y;
            
            // TODO 3: Part 2 - Move the tree!
            tree.x -= 1;
            if (tree.x < -200) {
                tree.x = canvasWidth;
            }
            // TODO 4: Part 2 - Parallax
            for (var i = 0; i < buildings.length; i++) {
                var elements = buildings[i]
                elements.x -= 0.1
                if (elements.x < -200) {
                    elements.x = canvasWidth;
                }
            }
        } // end of update function - DO NOT DELETE
        
        
        
        /* Make a createjs Container for the background and let it know about the render and upate functions*/
        background = new createjs.Container();
        background.resize = render;
        background.update = update;
        
        /* make the background able to respond to resizing and timer updates*/
        app.addResizeable(background);
        app.addUpdateable(background);
        
        /* render and return the background */
        render();
        return background;
    };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = background;
}
