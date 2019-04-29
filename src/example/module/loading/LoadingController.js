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
 * Created by yangsong on 15-1-6.
 */
var LoadingController = /** @class */ (function (_super_1) {
    __extends(LoadingController, _super_1);
    function LoadingController() {
        var _this = _super_1.call(this) || this;
        //初始化UI
        _this.loadingView = new LoadingView(_this, LayerManager.UI_Main);
        App.ViewManager.register(ViewConst.Loading, _this.loadingView);
        //注册事件监听
        _this.registerFunc(LoadingConst.SetProgress, _this.setProgress, _this);
        return _this;
    }
    LoadingController.prototype.setProgress = function (current, total) {
        this.loadingView.setProgress(current, total);
    };
    return LoadingController;
}(BaseController));
//# sourceMappingURL=LoadingController.js.map