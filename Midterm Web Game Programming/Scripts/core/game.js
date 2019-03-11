/// <reference path="_references.ts"/>
// IIFE - Immediate Invoked Fucntion Expression
/*
    Closure
    Calls an anonympous self-executing function
    Anything in braces is in a closure. Won't go to global namespace.
*/
(function () {
    // Global Game Variables
    var canvas = document.getElementById("canvas");
    var stage;
    var assetManager;
    var assetManifest; // Basically a "struct". Placeholder for now.\
    var currentScene;
    var currentState;
    var keyboardManager;
    assetManifest = [
        { id: "startButton", src: "./Assets/Images/startButton.png" },
        { id: "nextButton", src: "./Assets/Images/nextButton.png" },
        { id: "backButton", src: "./Assets/Images/backButton.png" },
        { id: "stbackground", src: "./Assets/Images/SpaceBG.png" },
        { id: "background", src: "./Assets/Images/WinnerBG.gif" },
        { id: "player", src: "./Assets/Images/player.png" },
        { id: "enemy", src: "./Assets/Images/end.png" },
        { id: "trigger", src: "./Assets/Images/trigger.png" },
        { id: "winner", src: "./Assets/Audio/winner.wav" },
        { id: "warp", src: "./Assets/Audio/warp.wav" },
        { id: "play_music", src: "./Assets/Audio/play_music.mp3" },
        { id: "wall", src: "./Assets/Images/wall.png" }
    ];
    function Init() {
        console.log("Initialization start");
        assetManager = new createjs.LoadQueue(); // Creates the container used for the queue.
        assetManager.installPlugin(createjs.Sound); // Necessary to use sounds in our game. 
        assetManager.loadManifest(assetManifest); // Loads the manifest defined above
        assetManager.on("complete", Start, this); // Calls the start function when the assetManager is loaded
        // Start();
    }
    function Start() {
        console.log("Starting Application...");
        // Initialize CreateJS
        stage = new createjs.Stage(canvas);
        stage.enableMouseOver(20); // Frequency of checks. Computationally expensive function. Checks every frame for every image. In menu, turn on. In game, turn off.
        createjs.Ticker.framerate = 60; // 60 FPS
        createjs.Ticker.on("tick", Update);
        objects.Game.stage = stage;
        objects.Game.currentScene = config.Scene.START;
        currentState = config.Scene.START;
        keyboardManager = new managers.Keyboard();
        objects.Game.keyboardManager = keyboardManager;
        Main();
    }
    function Update() {
        if (currentState != objects.Game.currentScene) {
            console.log(objects.Game.currentScene);
            Main();
        }
        currentScene.Update();
        stage.update();
    }
    function Main() {
        switch (objects.Game.currentScene) {
            case config.Scene.START:
                stage.removeAllChildren();
                currentScene = new scenes.StartScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.GAME:
                stage.removeAllChildren();
                currentScene = new scenes.PlayScene(assetManager);
                stage.addChild(currentScene);
                break;
            case config.Scene.OVER:
                stage.removeAllChildren();
                currentScene = new scenes.GameOverScene(assetManager);
                stage.addChild(currentScene);
                break;
        }
        currentState = objects.Game.currentScene;
        stage.addChild(currentScene);
    }
    window.onload = Init;
})();
//# sourceMappingURL=game.js.map