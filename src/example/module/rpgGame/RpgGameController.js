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
var RpgGameController = /** @class */ (function (_super_1) {
    __extends(RpgGameController, _super_1);
    function RpgGameController() {
        var _this = _super_1.call(this) || this;
        //View初始化
        _this.gameView = new RpgGameView(_this, LayerManager.Game_Main);
        App.ViewManager.register(ViewConst.RpgGame, _this.gameView);
        //Model初始化
        _this.gameModel = new RpgGameModel(_this);
        //注册模块消息
        _this.registerFunc(RpgGameConst.GameInit, _this.gameInit, _this);
        _this.registerFunc(RpgGameConst.GameResize, _this.gameResize, _this);
        return _this;
    }
    RpgGameController.prototype.gameInit = function (mapId) {
        this.gameModel.mapId = mapId;
        this.gameModel.playerData = {
            mcName: "scenePlayer_0",
            propertyData: {
                name: "yangsong",
                title: "[开发者]",
                vip: 8,
                attackDis: 3,
                attackInterval: 1500,
                hp: 9999999
            }
        };
        this.gameModel.monsterNum = 200;
        App.ViewManager.open(ViewConst.RpgGame, this.gameModel);
    };
    RpgGameController.prototype.gameResize = function () {
        this.gameView.resize();
    };
    return RpgGameController;
}(BaseController));
//# sourceMappingURL=RpgGameController.js.map