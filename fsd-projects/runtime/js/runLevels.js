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
        marker.fadeOut()
        startLevel()
      }
      marker.onProjectileCollision = function () {
        game.changeIntegrity(100)
        game.increaseScore(10000)
        marker.fadeOut()
        startLevel()
      }
    }
    function startLevel() {
      // TODO 13 goes below here
      var level = levelData[currentLevel]
      var levelObjects = level.gameItems
      for (i = 0; i < levelObjects.length; i++) {
        var gameItem = levelObjects[i];
        var gameItemType = gameItem.type
        var itemX = gameItem.x
        var itemY = gameItem.y
        if (gameItem.type === "sawblade") {
          createSawBlade(itemX, itemY)
        }
        else if (gameItem.type === "enemy") {
          createEnemy(itemX, itemY)
        }
        else if (gameItem.type === "reward") {
          createReward(itemX, itemY)
        }
        else if (gameItem.type === "marker") {
          createMarker(itemX, itemY)
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
