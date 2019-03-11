module objects{
    export class Wall extends objects.GameObject {
        // Constructor
        constructor(assetManager:createjs.LoadQueue) {
            super(assetManager, "wall");
            this.Start();
        }
        // Method / Functions
        public Start():void {
            this.x = 250;
            this.y = 250;
            this.width = 32;
            this.height = 32;
        }
        public Update():void {
            this.Move();
        }
        public Reset():void {}
        public Move():void {
        }

    }
}