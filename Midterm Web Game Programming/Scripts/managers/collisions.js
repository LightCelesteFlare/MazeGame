var managers;
(function (managers) {
    var Collision = /** @class */ (function () {
        function Collision() {
        }
        Collision.Check = function (obj1, obj2) {
            var p1 = new math.Vec2(obj1.x, obj1.y);
            var p2 = new math.Vec2(obj2.x, obj2.y);
            if (math.Vec2.Distance(p1, p2) < (obj1.halfH + obj2.halfH)) {
                if (!obj2.isColliding) {
                    console.log("isColliding with object");
                    switch (obj2.name) {
                        case "enemy":
                            this.explodeSFX = createjs.Sound.play("winner");
                            this.explodeSFX.volume = 0.1;
                            break;
                        case "trigger":
                            this.explodeSFX = createjs.Sound.play("warp");
                            this.explodeSFX.volume = 0.8;
                    }
                    return obj2.isColliding = true;
                }
                return true;
            }
            else {
                obj2.isColliding = false;
                return false;
            }
        };
        Collision.RectCheckH = function (obj1, obj2) {
            var p1 = new math.Vec2(obj1.x, obj1.y);
            var p2 = new math.Vec2(obj2.x, obj2.y);
            if (math.Vec2.Distance(p1, p2) < (obj1.halfH + obj2.halfH)) {
                // if (obj1.x > obj2.x - obj2.width && obj1.x < obj2.width + obj2.x
                //     && obj1.y > obj2.y - obj2.height && obj1.y < obj2.height + obj2.y ){
                if (obj1.x > obj2.x - obj2.width) {
                    // left
                    if (obj1.x < obj2.x) {
                        obj1.x = (obj2.x) - obj1.width;
                    }
                }
                if (obj1.x < obj2.width + obj2.x) {
                    if (obj1.x > obj2.x) {
                        obj1.x = obj2.x + obj2.width;
                    }
                }
            }
        };
        Collision.RectCheckV = function (obj1, obj2) {
            var p1 = new math.Vec2(obj1.x, obj1.y);
            var p2 = new math.Vec2(obj2.x, obj2.y);
            if (math.Vec2.Distance(p1, p2) < (obj1.halfH + obj2.halfH)) {
                // if (obj1.x > obj2.x - obj2.width && obj1.x < obj2.width + obj2.x
                //     && obj1.y > obj2.y - obj2.height && obj1.y < obj2.height + obj2.y ){
                if (obj1.y > obj2.y - obj2.height && obj1.y < obj2.height + obj2.y) {
                    if (obj1.y > obj2.y) {
                        obj1.y = obj2.y + obj1.height;
                    }
                    else {
                        if (obj1.height < obj2.y) {
                            obj1.y = (obj2.y) - obj2.height;
                        }
                    }
                }
            }
        };
        return Collision;
    }());
    managers.Collision = Collision;
})(managers || (managers = {}));
//     private static explodeSFX:createjs.AbstractSoundInstance
//     public static Check(obj1: objects.GameObject, obj2: objects.GameObject):boolean {
//         // Create 2 temporary Vec2 objects used for collision detections
//         let p1: math.Vec2 = new math.Vec2(obj1.x, obj1.y);
//         let p2: math.Vec2 = new math.Vec2(obj2.x, obj2.y);
//         if(math.Vec2.Distance(p1, p2) < (obj1.halfH + obj2.halfH)) {
//             if(!obj2.isColliding) {
//                 // console.log("Colliding with " + obj2.name);
//                 switch(obj2.name) {
//                     case "enemy":
//                         this.explodeSFX = createjs.Sound.play("explode");
//                         this.explodeSFX.volume = 0.1;
//                         objects.Game.scoreBoard.Score += 50;
//                     break;
//                 }
//                 obj2.isColliding = true;
//             }
//             return true;
//         }
//         else {
//             obj2.isColliding = false;
//             return false;
//         }
//     }
//     }
// }
//# sourceMappingURL=collisions.js.map