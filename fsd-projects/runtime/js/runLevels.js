var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
    function createSawBlade(x, y) {
    var hitZoneSize = 25;
    var damageFromObstacle = 40;
    var sawBladeHitZone =
    game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = x;
    sawBladeHitZone.y = y;
    game.addGameItem(sawBladeHitZone);
    var obstacleImage =
    draw.bitmap("img/sawblade.png");
    sawBladeHitZone.addChild(obstacleImage);
    obstacleImage.x = -25
    obstacleImage.y = -25
    }
    createSawBlade(400, groundY)
    createSawBlade(900, groundY)
    createSawBlade(750, 170)
    createSawBlade(1400, groundY)
    createSawBlade(1450, groundY)
    createSawBlade(1500, groundY)
    createSawBlade(1800, groundY - 10)
    createSawBlade(2000, groundY - 10)
    createSawBlade(2200, groundY - 10)
    createSawBlade(2600, groundY - 110)
    createSawBlade(2700, groundY - 110)
    createSawBlade(2800, groundY - 110)
    createSawBlade(3300, groundY)
    createSawBlade(3500, groundY)
    function createEnemy(x, y) {
      var enemy = game.createGameItem("enemy", 25);
    var redSquare = draw.rect(50, 50, "red");
    redSquare.x = -25;
    redSquare.y = -25;
    enemy.addChild(redSquare);
    enemy.x = x;
    enemy.y = y;
    game.addGameItem(enemy);
    var whiteSquare = draw.rect(20,20,"white")
    whiteSquare.x = -10
    whiteSquare.y = -10
    enemy.addChild(whiteSquare);
    enemy.velocityX = -2
    enemy.rotationalVelocity = -2
    enemy.onPlayerCollision = function () {
      game.changeIntegrity(-70)
    };
    enemy.onProjectileCollision =  function () {
      game.increaseScore(100);
      enemy.fadeOut();
    }
    }
    createEnemy(600, 250)
    createEnemy(1400, 230)
    createEnemy(2000, 250)
    createEnemy(3200, 230)
    function createReward(x, y) {
      var reward = game.createGameItem("reward", 25)
    var yellowSquare = draw.rect(30, 30,"yellow")
    yellowSquare.x = -15
    yellowSquare.y = -15
    reward.addChild(yellowSquare);
    reward.x = x
    reward.y = y
    reward.velocityX = -2
    reward.rotationalVelocity = -0.9
    game.addGameItem(reward)
    reward.onPlayerCollision = function () {
      game.changeIntegrity(50)
      game.increaseScore(1000)
      reward.fadeOut()
    }
    reward.onProjectileCollision = function() {
      game.changeIntegrity(50)
      game.increaseScore(1000)
      reward.fadeOut()
    }
    }
    createReward(2500, 230)
    function createMarker(x, y) {
      var marker = game.createGameItem("marker", 50)
      var blueSquare = draw.rect(100, 100, "cyan")
      blueSquare.x = -50
      blueSquare.y = -50
      marker.addChild(blueSquare)
      marker.x = x
      marker.y = y
      marker.velocityX = -2
      marker.rotationalVelocity = -10
      game.addGameItem(marker)
      marker.onPlayerCollision = function () {
        game.changeIntegrity(100)
        game.increaseScore(10000)
        startLevel()
      }
      marker.onProjectileCollision = function () {
        game.changeIntegrity(100)
        game.increaseScore(10000)
        startLevel()
      }
    }
    createMarker(5000, 230)
    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel]
      var levelObjects = gameItems
      for (i = 0; i < levelObjects.length; i++) {
        var eachElement = levelObjects[i]
        if (eachElement.type === "sawblade") {
          createSawBlade(x, y)
        }
        else if (eachElement.type === "enemy") {
          createEnemy(x, y)
        }
        else if (eachElement.type === "reward") {
          createReward(x, y)
        }
        else if (eachElement.type === "marker") {
          createMarker(x, y)
        }
      }
      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}
