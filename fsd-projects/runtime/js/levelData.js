var makeLevelData = function (window) {
  window.opspark = window.opspark || {};

  window.opspark.makeDataInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game

    // TODO 12: change the below data
    var levelData = [
      {
        name: "Robot Romp",
        number: 1,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY },
          { type: "sawblade", x: 600, y: groundY },
          { type: "sawblade", x: 900, y: groundY },
          { type: "sawblade", x: 1300, y: groundY },
          { type: "sawblade", x: 2000, y: groundY },
          { type: "sawblade", x: 2200, y: groundY },
          { type: "enemy", x: 700, y: groundY - 50 },
          { type: "enemy", x: 1800, y: groundY - 30 },
          { type: "enemy", x: 2600, y: groundY - 50 },
          { type: "reward", x: 1500, y: 250 },
          { type: "marker", x: 3000, y: 230 },
        ],
      },
      {
        name: "Robot Rampage",
        number: 2,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY },
          { type: "sawblade", x: 600, y: groundY - 110 },
          { type: "sawblade", x: 750, y: groundY },
          { type: "sawblade", x: 1150, y: groundY },
          { type: "sawblade", x: 1300, y: groundY - 110 },
          { type: "enemy", x: 1000, y: groundY - 50 },
          { type: "enemy", x: 2100, y: groundY - 30 },
          { type: "enemy", x: 2200, y: groundY - 50 },
          { type: "enemy", x: 2300, y: groundY - 30 },
          { type: "enemy", x: 2400, y: groundY - 50 },
          { type: "enemy", x: 2500, y: groundY - 30 },
          { type: "reward", x: 2750, y: 250 },
          { type: "marker", x: 3000, y: 230 },
        ],
      },
      {
        name: "Robocalypse Rising",
        number: 3,
        speed: -3,
        gameItems: [
          { type: "sawblade", x: 400, y: groundY },
          { type: "sawblade", x: 550, y: groundY },
          { type: "sawblade", x: 700, y: groundY },
          { type: "sawblade", x: 850, y: groundY - 110 },
          { type: "sawblade", x: 1000, y: groundY },
          { type: "sawblade", x: 1750, y: groundY },
          { type: "sawblade", x: 2000, y: groundY - 110 },
          { type: "enemy", x: 800, y: groundY - 50 },
          { type: "enemy", x: 1200, y: groundY - 30 },
          { type: "enemy", x: 1300, y: groundY - 50 },
          { type: "enemy", x: 1400, y: groundY - 30 },
          { type: "enemy", x: 1500, y: groundY - 50 },
          { type: "enemy", x: 1600, y: groundY - 30 },
          { type: "marker", x: 3000, y: 230 },
        ]
      }
    ];
    window.opspark.levelData = levelData;
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = makeLevelData;
}
