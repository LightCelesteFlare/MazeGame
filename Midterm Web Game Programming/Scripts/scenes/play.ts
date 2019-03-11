module scenes {
    export class PlayScene extends objects.Scene {
        // Variables
        private background:objects.StartBackground;
        private player:objects.Player;
        private wallV:objects.Wall[];
        private wallV2:objects.Wall[];
        private wallV3:objects.Wall[];
        private wallH:objects.Wall[];
        private wallH2:objects.Wall[];
        private wallH3:objects.Wall[];
        private wallH4:objects.Wall[];
        private wallNum:number;
        private enemy:objects.Enemy;
        private trigger1:objects.Trigger;
        private trigger:objects.Trigger[];
        // private enemies:objects.Enemy[];
        // private enemyNum:number;

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
            this.background = new objects.StartBackground(this.assetManager);
            this.player = new objects.Player(this.assetManager);
            //this.wall = new objects.Wall(this.assetManager);
            this.enemy = new objects.Enemy(this.assetManager);      
            this.trigger1 = new objects.Trigger(this.assetManager);        

            this.wallH = new Array<objects.Wall>();
            this.wallH2 = new Array<objects.Wall>(); 
            this.wallH3 = new Array<objects.Wall>();
            this.wallH4 = new Array<objects.Wall>();
            this.wallV = new Array<objects.Wall>();
            this.wallV2 = new Array<objects.Wall>();
            this.wallV3 = new Array<objects.Wall>();
            this.wallNum = 20;
            for(let i = 0; i < this.wallNum - 10; i++) {
                this.wallH[i] = new objects.Wall(this.assetManager);
                this.wallH[i].x = 150;
                this.wallH[i].y = (i * 30);
                this.wallH2[i] = new objects.Wall(this.assetManager);
                this.wallH2[i].x = (i*30)+55;
                this.wallH2[i].y = 500;
                if (i < 9){
                this.wallH3[i] = new objects.Wall(this.assetManager);
                this.wallH3[i].x = +430;
                this.wallH3[i].y = (i*30) + 420;
                }
                this.wallV[i] = new objects.Wall(this.assetManager);
                this.wallV[i].x = (i * 30)+150;
                this.wallV[i].y = 275;
            }
            for (let i = 0; i < this.wallNum; i++){
                if (i < 17){
                this.wallV2[i] = new objects.Wall(this.assetManager);
                this.wallV2[i].x = (i*30)+50;
                this.wallV2[i].y = 750;
            }
                if(i >= 6 && i <= 16 && (i % 2==0 || i % 3 == 0)){
                this.wallH4[i] = new objects.Wall(this.assetManager);
                this.wallH4[i].x = 50;
                this.wallH4[i].y = (i*30)+260;
                }
                if(i != 5 && i != 6 && i < 14){
                this.wallV3[i] = new objects.Wall(this.assetManager);
                this.wallV3[i].x = (i * 32) +55;
                this.wallV3[i].y = 420;
            }
            }
            for(let i = 10; i < this.wallNum+14; i++){
                
                this.wallH[i] = new objects.Wall(this.assetManager);
                this.wallH[i].x = 550;
                this.wallH[i].y = (i * 30) - 250;
            if ( i < 29){
                this.wallV[i] = new objects.Wall(this.assetManager);
                this.wallV[i].x = (i * 30) - 300;
                this.wallV[i].y = 350;
                }

            }
            this.trigger = new Array<objects.Wall>();
            for (let i = 0; i < 15; i++){
                this.trigger[i] = new objects.Trigger(this.assetManager); 
                this.trigger[i].x = Math.floor(Math.random() * 270) + 230 ; // 230 - 500
                this.trigger[i].y = Math.floor(Math.random() * 130) + 65; // 60 - 200 
            }
            this.Main();
        }

        public Update(): void {
            this.background.Update();
            this.player.Update();
            this.enemy.Update();
            //this.wall.Update();
            
            //managers.Collision.RectCheck(this.player, this.wall);
            
            this.wallH.forEach(wall => {
                wall.Update()

                managers.Collision.RectCheckH(this.player, wall);
               
            });
            this.wallH2.forEach(wall => {
                wall.Update()

                managers.Collision.RectCheckV(this.player, wall);
               
            });
            this.wallH3.forEach(wall => {
                wall.Update()

                managers.Collision.RectCheckH(this.player, wall);
               
            });
            this.wallH4.forEach(wall => {
                wall.Update()

                managers.Collision.RectCheckH(this.player, wall);
               
            });
            this.wallV.forEach(wall => {
                wall.Update()
                managers.Collision.RectCheckV(this.player, wall);
            });
            this.wallV2.forEach(wall => {
                wall.Update()

                managers.Collision.RectCheckV(this.player, wall);
               
            });
            this.wallV3.forEach(wall => {
                wall.Update()

                managers.Collision.RectCheckV(this.player, wall);
               
            });
            this.player.win = managers.Collision.Check(this.player, this.enemy);

            if(this.player.win) {
                this.backgroundMusic.stop();
                objects.Game.currentScene = config.Scene.OVER;
            }   
            // // For-each loop
            // this.enemies.forEach(enemy => {
            //     enemy.Update();

            this.player.isDead = managers.Collision.Check(this.player, this.trigger1);

                if(this.player.isDead) {
                    
                    this.Reset();
                }
            this.trigger.forEach(trap => {
                    trap.Update()
    
                    this.player.isDead = managers.Collision.Check(this.player, trap);
                    
                    if(this.player.isDead) {
                    
                        this.Reset();
                    }
                });
             
        }

        public Reset():void{
            this.player.x = 0;
            this.player.y = 0;
        }
        public Main(): void {
            this.addChild(this.background);
            this.addChild(this.player);
            //this.addChild(this.wall);

            this.wallH.forEach(wall => {
                this.addChild(wall);
            });
            this.wallH2.forEach(wall => {
                this.addChild(wall);
            });
            this.wallH3.forEach(wall => {
                this.addChild(wall);
            });
            this.wallH4.forEach(wall => {
                this.addChild(wall);
            });
            this.wallV.forEach(wall => {
                this.addChild(wall);
            });
            this.wallV2.forEach(wall => {
                this.addChild(wall);
            });
            this.wallV3.forEach(wall => {
                this.addChild(wall);
            });
 
            this.addChild(this.enemy);
            this.addChild(this.trigger1);
            this.trigger.forEach(trap => {
                this.addChild(trap);
            });
            // this.enemies.forEach(enemy => {
            //     this.addChild(enemy);
            // });

        }
    }
}