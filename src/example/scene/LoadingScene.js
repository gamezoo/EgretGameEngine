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
 * Created by egret on 15-1-7.
 */
var LoadingScene = /** @class */ (function (_super_1) {
    __extends(LoadingScene, _super_1);
    /**
     * 构造函数
     */
    function LoadingScene() {
        return _super_1.call(this) || this;
    }
    /**
     * 进入Scene调用
     */
    LoadingScene.prototype.onEnter = function () {
        _super_1.prototype.onEnter.call(this);
        //添加该Scene使用的层级
        this.addLayer(LayerManager.UI_Main);
        //初始打开Loading页面
        App.ViewManager.open(ViewConst.Loading);
    };
    /**
     * 退出Scene调用
     */
    LoadingScene.prototype.onExit = function () {
        _super_1.prototype.onExit.call(this);
    };
    return LoadingScene;
}(BaseScene));
//# sourceMappingURL=LoadingScene.js.map