module math {
    export class Vec2 extends createjs.Point {
        constructor(x: number = 0, y: number = 0) {
            super(x, y);
        }
        // added width: number = 0, height:number = 0
        // Methods
        public static Distance(P1:Vec2, P2:Vec2): number {
            return Math.floor(Math.sqrt(Math.pow(P2.x - P1.x, 2) + Math.pow(P2.y - P1.y, 2)));
        }
        // working processes
        // public static Rectarea(P1:Vec2, P2:Vec2): number {
        //     return (P1.x < P2.x + P2.y)
        // }
    }
}