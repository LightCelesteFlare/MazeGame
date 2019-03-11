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
    var Trigger = /** @class */ (function (_super) {
        __extends(Trigger, _super);
        // Variables
        // Constructor
        function Trigger(assetManager) {
            var _this = _super.call(this, assetManager, "trigger") || this;
            _this.Start();
            return _this;
        }
        // Method / Functions
        Trigger.prototype.Start = function () {
            this.x = 380;
            this.y = 500;
        };
        Trigger.prototype.Update = function () {
            // this.Move();
            // this.CheckBounds();
        };
        Trigger.prototype.Reset = function () { };
        Trigger.prototype.Move = function () {
            this.y += 5;
        };
        Trigger.prototype.CheckBounds = function () {
            // Check y bounds
            if (this.y >= 800 + this.height) {
                this.y = -50;
            }
        };
        return Trigger;
    }(objects.GameObject));
    objects.Trigger = Trigger;
})(objects || (objects = {}));
//# sourceMappingURL=trigger.js.map