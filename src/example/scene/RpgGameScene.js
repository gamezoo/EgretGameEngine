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
var RpgGameScene = /** @class */ (function (_super_1) {
    __extends(RpgGameScene, _super_1);
    /**
     * 构造函数
     */
    function RpgGameScene() {
        return _super_1.call(this) || this;
    }
    /**
     * 进入Scene调用
     */
    RpgGameScene.prototype.onEnter = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        _super_1.prototype.onEnter.call(this);
        //参数
        var mapId = param[0];
        //开启ComponentSystem
        ComponentSystem.start();
        //添加该Scene使用的Layer
        this.addLayer(LayerManager.Game_Main);
        this.addLayer(LayerManager.UI_Main);
        this.addLayer(LayerManager.UI_Popup);
        this.addLayer(LayerManager.UI_Message);
        this.addLayer(LayerManager.UI_Tips);
        //运行RpgGame
        App.ControllerManager.applyFunc(ControllerConst.RpgGame, RpgGameConst.GameInit, mapId);
        //开启UI部分
        App.ViewManager.open(ViewConst.Home);
        //播放背景音乐
        App.SoundManager.playBg("sound_bg");
    };
    /**
     * 退出Scene调用
     */
    RpgGameScene.prototype.onExit = function () {
        _super_1.prototype.onExit.call(this);
        //关闭ComponentSystem
        ComponentSystem.stop();
    };
    return RpgGameScene;
}(BaseScene));
//# sourceMappingURL=RpgGameScene.js.map