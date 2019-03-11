module objects {
    export class Player extends objects.GameObject {
        // Variables
        public isDead:boolean;
        public win:boolean

        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, "player");
            this.Start();
        }
        // Methods / functions
        public Start():void {
            this.isDead = false;
            this.win = false;
            // this.x = 300;
            // this.y = 700;
        }

        public Update():void {
            this.Move();
            this.CheckBounds();
        }

        public Reset():void {}

        public Move():void {
            // this.x = objects.Game.stage.mouseX; // objects.Game.stage is a global variable
            // Keyboard controls

            if(objects.Game.keyboardManager.moveLeft) {
                this.x -= 2.5;
            }
            if(objects.Game.keyboardManager.moveRight) {
                this.x += 2.5;
            }
            if(objects.Game.keyboardManager.moveUp){
                this.y -= 2.5;
            }
            if(objects.Game.keyboardManager.moveDown){
                this.y += 2.5;
            }
        }

        public CheckBounds():void {
            // Check right boundary
            if(this.x >= 600 - this.halfW) {
                this.x = 600 - this.halfW;
            }

            // Check left boundary
            if(this.x <= this.halfW) {
                this.x = this.halfW;
            }

            if(this.y <= this.halfH){
                this.y = this.halfH;
            }

            if(this.y >= 800 - this.halfH){
                this.y = 800 - this.halfH;
            }
            
            // makes the player teleport back down to the bottom
            // if(this.y <= this.halfH){
            //     this.y = 800 - this.halfH;
            // }

            // if(this.y <= this.halfH) {
            //     this.y = 800 + this.halfH;
            // }

        }
    }
}