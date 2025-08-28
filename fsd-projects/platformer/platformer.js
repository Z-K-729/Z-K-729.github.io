$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    //toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(200,625,200,115,"purple");
    createPlatform(100,0,50,600,"darkblue");
    createPlatform(450,575,200,165,"purple");
    createPlatform(700,605,400,50,"purple");
    createPlatform(1100,100,50,640,"darkblue");
    createPlatform(1000,500,100,25,"purple");
    createPlatform(1000,370,100,25,"purple");
    createPlatform(150,300,750,50,"purple");
    createPlatform(350,100,750,50,"purple");
    createPlatform(150,190,100,25,"purple");
    createPlatform(1150,100,100,25,"darkblue")
    // TODO 3 - Create Collectables
    createCollectable("database",1030,675);
    createCollectable("database",180,235);
    createCollectable("database",1200,35);
    // TODO 4 - Create Cannons
    createCannon("top",1000,1000);
    createCannon("top",480,750);
    createCannon("right",320,2000);
    createCannon("top",1400,1);
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
