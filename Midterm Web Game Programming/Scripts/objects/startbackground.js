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
    var StartBackground = /** @class */ (function (_super) {
        __extends(StartBackground, _super);
        // Constructor
        function StartBackground(assetManager) {
            var _this = _super.call(this, assetManager.getResult("stbackground")) || this;
            _this.Start();
            return _this;
        }
        // Methods / Function
        StartBackground.prototype.Start = function () {
            // this.speedY = 1;
            // this.Reset()
        };
        StartBackground.prototype.Update = function () {
            // // Move our background
            // this.Move();
            // // Check bounds
            // this.CheckBounds();
        };
        StartBackground.prototype.Reset = function () {
            this.y = -1120;
        };
        StartBackground.prototype.Move = function () {
            this.y += this.speedY;
        };
        StartBackground.prototype.CheckBounds = function () {
            if (this.y >= 0) {
                this.Reset();
            }
        };
        return StartBackground;
    }(createjs.Bitmap));
    objects.StartBackground = StartBackground;
})(objects || (objects = {}));
//# sourceMappingURL=startbackground.js.map