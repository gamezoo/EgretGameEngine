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
 * UI场景层
 */
var UIScene = /** @class */ (function (_super_1) {
    __extends(UIScene, _super_1);
    /**
     * 构造函数
     */
    function UIScene() {
        return _super_1.call(this) || this;
    }
    /**
     * 进入Scene调用
     */
    UIScene.prototype.onEnter = function () {
        _super_1.prototype.onEnter.call(this);
        //添加该Scene使用的层级
        this.addLayer(LayerManager.UI_Main);
        this.addLayer(LayerManager.UI_Popup);
        this.addLayer(LayerManager.UI_Message);
        this.addLayer(LayerManager.UI_Tips);
        //添加一个纯色背景
        var rect = new eui.Rect();
        rect.fillColor = 0x78b93f;
        rect.percentHeight = 100;
        rect.percentWidth = 100;
        LayerManager.UI_Main.addChild(rect);
        //初始打开Home页面
        App.ViewManager.open(ViewConst.Home);
        //播放背景音乐
        App.SoundManager.playBg("sound_bg");
    };
    /**
     * 退出Scene调用
     */
    UIScene.prototype.onExit = function () {
        _super_1.prototype.onExit.call(this);
    };
    return UIScene;
}(BaseScene));
//# sourceMappingURL=UIScene.js.map