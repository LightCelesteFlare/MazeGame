module scenes {
    export class GameOverScene extends objects.Scene {
        // Variables
        private gameOverLabel: objects.Label;
        private backButton: objects.Button;
        private background: objects.Background;
        private soundwave: createjs.AbstractSoundInstance
        // Constructor
        constructor(assetManager: createjs.LoadQueue) {
            super(assetManager);
            this.soundwave = createjs.Sound.play("winner");
            this.soundwave.volume = 0.5;
            this.Start();
        }
        // Methods
        // Button Event Handlers
        private backButtonClick():void {
            objects.Game.currentScene = config.Scene.START;
        }


        public Start():void {
            this.background = new objects.Background(this.assetManager);
            this.background.x = 250;
            this.background.y = 500;
            this.gameOverLabel = new objects.Label("Winner", "40px", "Consolas", "#990087", 320, 240, true);
            this.backButton = new objects.Button(this.assetManager, "backButton", 320, 340);
            this.Main();
        }

        public Update(): void {
            this.background.Update();
        }

        public Main(): void {
            this.addChild(this.background);
            this.addChild(this.gameOverLabel);
            this.addChild(this.backButton);
            this.backButton.on("click", this.backButtonClick);
        }
    }
}