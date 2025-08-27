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
  //  toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(1200, 500, 20, 290);
createPlatform(650, 650, 50, 50, "blue");
createPlatform(1270, 300, 2000, 0.5);
createPlatform(800, 600, 50, 50, "green");
createPlatform(100, 0, 20, 290);
createPlatform(900, 500, 300, 50, "pink");
createPlatform(100, 150, 20, 290);
createPlatform(100, 400, 650, 50, "lightblue");
createPlatform(500, 0, 20, 290);
createPlatform(1000, 350, 50, 50, "red");
    // TODO 3 - Create Collectables
createCollectable("steve", 300, 200);
createCollectable("diamond", 1000, 170, 0.5, 0.7);
createCollectable("grace", 800, 500);
createCollectable("max", 1300, 200, 0.5, 0.7);

    
    // TODO 4 - Create Cannons
createCannon("top", 1200, 1000);
createCannon("right", 700, 2000);
createCannon("bottom", 200, 700);
    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
