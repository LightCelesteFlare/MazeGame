var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var objects;
(function (objects) {
    var Wall = /** @class */ (function (_super) {
        __extends(Wall, _super);
        // Constructor
        function Wall(assetManager) {
            var _this = _super.call(this, assetManager, "wall") || this;
            _this.Start();
            return _this;
        }
        // Method / Functions
        Wall.prototype.Start = function () {
            this.x = 250;
            this.y = 250;
            this.width = 32;
            this.height = 32;
        };
        Wall.prototype.Update = function () {
            this.Move();
        };
        Wall.prototype.Reset = function () { };
        Wall.prototype.Move = function () {
        };
        return Wall;
    }(objects.GameObject));
    objects.Wall = Wall;
})(objects || (objects = {}));
//# sourceMappingURL=wall.js.map