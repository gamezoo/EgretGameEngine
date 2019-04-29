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
var LoadingView = /** @class */ (function (_super_1) {
    __extends(LoadingView, _super_1);
    function LoadingView($controller, $parent) {
        var _this = _super_1.call(this, $controller, $parent) || this;
        _this.skinName = "resource/skins/LoadingUISkin.exml";
        return _this;
    }
    LoadingView.prototype.setProgress = function (current, total) {
        this.txtMsg.text = "资源加载中..." + current + "/" + total;
    };
    return LoadingView;
}(BaseEuiView));
//# sourceMappingURL=LoadingView.js.map