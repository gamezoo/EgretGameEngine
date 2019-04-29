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
 * Created by yangsong on 2014/11/28.
 * 游戏场景
 */
var GameScene = /** @class */ (function (_super_1) {
    __extends(GameScene, _super_1);
    /**
     * 构造函数
     */
    function GameScene() {
        return _super_1.call(this) || this;
    }
    /**
     * 进入Scene调用
     */
    GameScene.prototype.onEnter = function () {
        _super_1.prototype.onEnter.call(this);
        this.addLayerAt(LayerManager.Game_Main, 0);
        App.ViewManager.open(ViewConst.Game);
        App.ViewManager.open(ViewConst.GameUI);
        //播放背景音乐
        App.SoundManager.playBg("sound_bg");
    };
    /**
     * 退出Scene调用
     */
    GameScene.prototype.onExit = function () {
        _super_1.prototype.onExit.call(this);
    };
    return GameScene;
}(BaseScene));
//# sourceMappingURL=GameScene.js.map