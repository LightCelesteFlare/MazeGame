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
var scenes;
(function (scenes) {
    var GameOverScene = /** @class */ (function (_super) {
        __extends(GameOverScene, _super);
        // Constructor
        function GameOverScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.soundwave = createjs.Sound.play("winner");
            _this.soundwave.volume = 0.5;
            _this.Start();
            return _this;
        }
        // Methods
        // Button Event Handlers
        GameOverScene.prototype.backButtonClick = function () {
            objects.Game.currentScene = config.Scene.START;
        };
        GameOverScene.prototype.Start = function () {
            this.background = new objects.Background(this.assetManager);
            this.background.x = 250;
            this.background.y = 500;
            this.gameOverLabel = new objects.Label("Winner", "40px", "Consolas", "#990087", 320, 240, true);
            this.backButton = new objects.Button(this.assetManager, "backButton", 320, 340);
            this.Main();
        };
        GameOverScene.prototype.Update = function () {
            this.background.Update();
        };
        GameOverScene.prototype.Main = function () {
            this.addChild(this.background);
            this.addChild(this.gameOverLabel);
            this.addChild(this.backButton);
            this.backButton.on("click", this.backButtonClick);
        };
        return GameOverScene;
    }(objects.Scene));
    scenes.GameOverScene = GameOverScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=gameover.js.map