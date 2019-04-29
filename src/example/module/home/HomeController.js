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
var HomeController = /** @class */ (function (_super_1) {
    __extends(HomeController, _super_1);
    function HomeController() {
        var _this = _super_1.call(this) || this;
        _this.proxy = new HomeProxy(_this);
        _this.homeView = new HomeView(_this, LayerManager.UI_Main);
        App.ViewManager.register(ViewConst.Home, _this.homeView);
        return _this;
    }
    return HomeController;
}(BaseController));
//# sourceMappingURL=HomeController.js.map