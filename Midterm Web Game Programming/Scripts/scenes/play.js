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
    var PlayScene = /** @class */ (function (_super) {
        __extends(PlayScene, _super);
        // Constructor
        function PlayScene(assetManager) {
            var _this = _super.call(this, assetManager) || this;
            _this.backgroundMusic = createjs.Sound.play("play_music");
            _this.backgroundMusic.loop = -1; // Looping forever
            _this.backgroundMusic.volume = 0.3;
            _this.Start();
            return _this;
        }
        // Methods
        PlayScene.prototype.Start = function () {
            this.background = new objects.StartBackground(this.assetManager);
            this.player = new objects.Player(this.assetManager);
            //this.wall = new objects.Wall(this.assetManager);
            this.enemy = new objects.Enemy(this.assetManager);
            this.trigger1 = new objects.Trigger(this.assetManager);
            this.wallH = new Array();
            this.wallH2 = new Array();
            this.wallH3 = new Array();
            this.wallH4 = new Array();
            this.wallV = new Array();
            this.wallV2 = new Array();
            this.wallV3 = new Array();
            this.wallNum = 20;
            for (var i = 0; i < this.wallNum - 10; i++) {
                this.wallH[i] = new objects.Wall(this.assetManager);
                this.wallH[i].x = 150;
                this.wallH[i].y = (i * 30);
                this.wallH2[i] = new objects.Wall(this.assetManager);
                this.wallH2[i].x = (i * 30) + 55;
                this.wallH2[i].y = 500;
                if (i < 9) {
                    this.wallH3[i] = new objects.Wall(this.assetManager);
                    this.wallH3[i].x = +430;
                    this.wallH3[i].y = (i * 30) + 420;
                }
                this.wallV[i] = new objects.Wall(this.assetManager);
                this.wallV[i].x = (i * 30) + 150;
                this.wallV[i].y = 275;
            }
            for (var i = 0; i < this.wallNum; i++) {
                if (i < 17) {
                    this.wallV2[i] = new objects.Wall(this.assetManager);
                    this.wallV2[i].x = (i * 30) + 50;
                    this.wallV2[i].y = 750;
                }
                if (i >= 6 && i <= 16 && (i % 2 == 0 || i % 3 == 0)) {
                    this.wallH4[i] = new objects.Wall(this.assetManager);
                    this.wallH4[i].x = 50;
                    this.wallH4[i].y = (i * 30) + 260;
                }
                if (i != 5 && i != 6 && i < 14) {
                    this.wallV3[i] = new objects.Wall(this.assetManager);
                    this.wallV3[i].x = (i * 32) + 55;
                    this.wallV3[i].y = 420;
                }
            }
            for (var i = 10; i < this.wallNum + 14; i++) {
                this.wallH[i] = new objects.Wall(this.assetManager);
                this.wallH[i].x = 550;
                this.wallH[i].y = (i * 30) - 250;
                if (i < 29) {
                    this.wallV[i] = new objects.Wall(this.assetManager);
                    this.wallV[i].x = (i * 30) - 300;
                    this.wallV[i].y = 350;
                }
            }
            this.trigger = new Array();
            for (var i = 0; i < 15; i++) {
                this.trigger[i] = new objects.Trigger(this.assetManager);
                this.trigger[i].x = Math.floor(Math.random() * 270) + 230; // 230 - 500
                this.trigger[i].y = Math.floor(Math.random() * 130) + 65; // 60 - 200 
            }
            this.Main();
        };
        PlayScene.prototype.Update = function () {
            var _this = this;
            this.background.Update();
            this.player.Update();
            this.enemy.Update();
            //this.wall.Update();
            //managers.Collision.RectCheck(this.player, this.wall);
            this.wallH.forEach(function (wall) {
                wall.Update();
                managers.Collision.RectCheckH(_this.player, wall);
            });
            this.wallH2.forEach(function (wall) {
                wall.Update();
                managers.Collision.RectCheckV(_this.player, wall);
            });
            this.wallH3.forEach(function (wall) {
                wall.Update();
                managers.Collision.RectCheckH(_this.player, wall);
            });
            this.wallH4.forEach(function (wall) {
                wall.Update();
                managers.Collision.RectCheckH(_this.player, wall);
            });
            this.wallV.forEach(function (wall) {
                wall.Update();
                managers.Collision.RectCheckV(_this.player, wall);
            });
            this.wallV2.forEach(function (wall) {
                wall.Update();
                managers.Collision.RectCheckV(_this.player, wall);
            });
            this.wallV3.forEach(function (wall) {
                wall.Update();
                managers.Collision.RectCheckV(_this.player, wall);
            });
            this.player.win = managers.Collision.Check(this.player, this.enemy);
            if (this.player.win) {
                this.backgroundMusic.stop();
                objects.Game.currentScene = config.Scene.OVER;
            }
            // // For-each loop
            // this.enemies.forEach(enemy => {
            //     enemy.Update();
            this.player.isDead = managers.Collision.Check(this.player, this.trigger1);
            if (this.player.isDead) {
                this.Reset();
            }
            this.trigger.forEach(function (trap) {
                trap.Update();
                _this.player.isDead = managers.Collision.Check(_this.player, trap);
                if (_this.player.isDead) {
                    _this.Reset();
                }
            });
        };
        PlayScene.prototype.Reset = function () {
            this.player.x = 0;
            this.player.y = 0;
        };
        PlayScene.prototype.Main = function () {
            var _this = this;
            this.addChild(this.background);
            this.addChild(this.player);
            //this.addChild(this.wall);
            this.wallH.forEach(function (wall) {
                _this.addChild(wall);
            });
            this.wallH2.forEach(function (wall) {
                _this.addChild(wall);
            });
            this.wallH3.forEach(function (wall) {
                _this.addChild(wall);
            });
            this.wallH4.forEach(function (wall) {
                _this.addChild(wall);
            });
            this.wallV.forEach(function (wall) {
                _this.addChild(wall);
            });
            this.wallV2.forEach(function (wall) {
                _this.addChild(wall);
            });
            this.wallV3.forEach(function (wall) {
                _this.addChild(wall);
            });
            this.addChild(this.enemy);
            this.addChild(this.trigger1);
            this.trigger.forEach(function (trap) {
                _this.addChild(trap);
            });
            // this.enemies.forEach(enemy => {
            //     this.addChild(enemy);
            // });
        };
        return PlayScene;
    }(objects.Scene));
    scenes.PlayScene = PlayScene;
})(scenes || (scenes = {}));
//# sourceMappingURL=play.js.map