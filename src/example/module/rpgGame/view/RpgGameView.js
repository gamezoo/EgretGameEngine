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
/**
 * Created by yangsong on 2017/10/11.
 */
var RpgGameView = /** @class */ (function (_super_1) {
    __extends(RpgGameView, _super_1);
    function RpgGameView($controller, $parent) {
        return _super_1.call(this, $controller, $parent) || this;
    }
    RpgGameView.prototype.initUI = function () {
        _super_1.prototype.initUI.call(this);
        this.background = new RpgBackground();
        this.addChild(this.background);
        this.gameObjcetLayer = new egret.DisplayObjectContainer();
        this.addChild(this.gameObjcetLayer);
        this.gameEffectLayer = new egret.DisplayObjectContainer();
        this.addChild(this.gameEffectLayer);
    };
    RpgGameView.prototype.initData = function () {
        _super_1.prototype.initData.call(this);
        this.monsters = [];
    };
    /**
     * 面板开启执行函数，用于子类继承
     * @param param 参数
     */
    RpgGameView.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        _super_1.prototype.open.call(this, param);
        var gameModel = param[0];
        this.initBackground(gameModel.mapId);
        this.initBlocks(gameModel.mapId);
        this.createPlayer(gameModel.playerData);
        this.createMonsters(gameModel.monsterNum);
    };
    RpgGameView.prototype.initBackground = function (mapId) {
        this.background.init(mapId);
    };
    RpgGameView.prototype.initBlocks = function (mapId) {
        var mapData = RES.getRes("map_" + mapId + "_data.json");
        this.blocksData = mapData.blocks;
    };
    RpgGameView.prototype.createPlayer = function (playData) {
        var col = App.RandomUtils.limitInteger(1, this.blocksData[0].length - 2);
        var row = App.RandomUtils.limitInteger(1, this.blocksData.length - 2);
        this.player = ObjectPool.pop("RpgPlayer");
        this.player.init({
            col: col,
            row: row,
            mcName: playData.mcName,
            mcPath: "resource/assets/rpgGame/player/",
            skillPath: "resource/assets/rpgGame/skill/",
            gameView: this,
            propertyData: playData.propertyData
        });
    };
    RpgGameView.prototype.createMonsters = function (monsterNum) {
        var monstersData = [];
        for (var i = 0; i < monsterNum; i++) {
            var col = App.RandomUtils.limitInteger(1, this.blocksData[0].length - 2);
            var row = App.RandomUtils.limitInteger(1, this.blocksData.length - 2);
            var mcName = "monster_" + App.RandomUtils.limitInteger(0, 9);
            var mcPath = "resource/assets/rpgGame/monster/";
            monstersData.push({
                col: col,
                row: row,
                mcName: mcName,
                mcPath: mcPath,
                gameView: this,
                dis: App.MathUtils.getDistance(col, row, this.player.col, this.player.row),
                propertyData: {
                    name: "monster_" + App.RandomUtils.limitInteger(1, 1000),
                    attackDis: 3,
                    attackInterval: 3000,
                    hp: 2000,
                }
            });
        }
        monstersData.sort(function (a, b) {
            if (a.dis < b.dis) {
                return -1;
            }
            else {
                return 1;
            }
        });
        var executor = new FrameExecutor(1);
        monstersData.forEach(function (data) {
            executor.regist(function () {
                var monster = ObjectPool.pop("RpgMonster");
                monster.init(data);
                this.monsters.push(monster);
            }, this);
        }.bind(this));
        executor.execute();
    };
    RpgGameView.prototype.showHpChange = function (gameObj, changeHp, txtColor) {
        if (txtColor === void 0) { txtColor = 0xFF0000; }
        var hpTxt = ObjectPool.pop("egret.TextField");
        hpTxt.size = 25;
        hpTxt.textColor = txtColor;
        hpTxt.width = 100;
        hpTxt.height = 20;
        hpTxt.textAlign = egret.HorizontalAlign.CENTER;
        hpTxt.strokeColor = 0x000000;
        hpTxt.stroke = 2;
        hpTxt.text = changeHp.toString();
        hpTxt.x = gameObj.x;
        hpTxt.y = gameObj.y - 150;
        hpTxt.alpha = 1;
        App.AnchorUtils.setAnchorX(hpTxt, 0.5);
        this.gameEffectLayer.addChild(hpTxt);
        egret.Tween.get(hpTxt).to({ "y": gameObj.y - 250, "alpha": 0 }, 1000).call(function () {
            App.DisplayUtils.removeFromParent(hpTxt);
            ObjectPool.push(hpTxt);
        });
    };
    RpgGameView.prototype.removeMonster = function (monster) {
        var index = this.monsters.indexOf(monster);
        if (index != -1) {
            this.monsters.splice(index, 1);
        }
        monster.destory();
        monster = null;
    };
    RpgGameView.prototype.resize = function () {
        if (!this.player) {
            return;
        }
        var cameraComponent = this.player.getComponent(ComponentType.Camera);
        cameraComponent.dealMoveObjs();
        cameraComponent.dealBgCamera();
    };
    RpgGameView.prototype.getBlocksData = function () {
        return this.blocksData;
    };
    RpgGameView.prototype.getGameObjcetLayer = function () {
        return this.gameObjcetLayer;
    };
    RpgGameView.prototype.getGameEffectLayer = function () {
        return this.gameEffectLayer;
    };
    RpgGameView.prototype.getBackground = function () {
        return this.background;
    };
    RpgGameView.prototype.getMonsters = function () {
        return this.monsters;
    };
    return RpgGameView;
}(BaseSpriteView));
//# sourceMappingURL=RpgGameView.js.map