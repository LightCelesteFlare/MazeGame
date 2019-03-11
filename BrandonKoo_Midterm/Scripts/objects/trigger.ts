module objects {
    export class Trigger extends objects.GameObject {
        // Variables
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, "trigger");
            this.Start();
        }
        // Method / Functions
        public Start():void {
            this.x = 380;
            this.y = 500;
        }
        public Update():void {
            // this.Move();
            // this.CheckBounds();
        }
        public Reset():void {}
        public Move():void {
            this.y += 5;
        }
        public CheckBounds():void {
            // Check y bounds
            if(this.y >= 800 + this.height) {
                this.y = -50;
            }
        }
    }
}