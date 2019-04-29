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
var TaskController = /** @class */ (function (_super_1) {
    __extends(TaskController, _super_1);
    function TaskController() {
        var _this = _super_1.call(this) || this;
        _this.taskView = new TaskView(_this, LayerManager.UI_Popup);
        App.ViewManager.register(ViewConst.Task, _this.taskView);
        _this.dailyView = new DailyView(_this, LayerManager.UI_Popup);
        App.ViewManager.register(ViewConst.Daily, _this.dailyView);
        return _this;
    }
    return TaskController;
}(BaseController));
//# sourceMappingURL=TaskController.js.map