module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background:objects.Background;
        private player:objects.Player;
        // private enemy:objects.Enemy;
        private enemies:objects.Enemy[];
        private enemyNum:number;

        private scoreBoard: managers.ScoreBoard;

        private backgroundMusic:createjs.AbstractSoundInstance;

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager);
            this.backgroundMusic = createjs.Sound.play("play_music");
            this.backgroundMusic.loop = -1; // Looping forever
            this.backgroundMusic.volume = 0.3;

            this.Start();
        }
        // Methods
        public Start(): void {
            this.background = new objects.Background(this.assetManager);
            this.player = new objects.Player(this.assetManager);
            // this.enemy = new objects.Enemy(this.assetManager);

            this.enemies = new Array<objects.Enemy>();
            this.enemyNum = 10;
            for(let i = 0; i < this.enemyNum; i++) {
                this.enemies[i] = new objects.Enemy(this.assetManager);
            }

            // Initializing the scoreboard objects
            this.scoreBoard = new managers.ScoreBoard();
            // Make scoreboard globally accessible
            objects.Game.scoreBoard = this.scoreBoard; 

            this.Main();
        }

        public Update(): void {
            this.background.Update();
            this.player.Update();
            // this.enemy.Update();
            // For-each loop
            this.enemies.forEach(enemy => {
                enemy.Update();

                this.player.isDead = managers.Collision.Check(this.player, enemy);

                if(this.player.isDead) {
                    this.backgroundMusic.stop();
                    objects.Game.currentScene = config.Scene.OVER;
                }
            });   
        }

        public Main(): void {
            this.addChild(this.background);
            this.addChild(this.player);
            // this.addChild(this.enemy);

            this.enemies.forEach(enemy => {
                this.addChild(enemy);
            });

            this.addChild(this.scoreBoard.scoreLabel);
        }
    }
}