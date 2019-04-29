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
var WarehouseController = /** @class */ (function (_super_1) {
    __extends(WarehouseController, _super_1);
    function WarehouseController() {
        var _this = _super_1.call(this) || this;
        _this.warehouseView = new WarehouseView(_this, LayerManager.UI_Popup);
        App.ViewManager.register(ViewConst.Warehouse, _this.warehouseView);
        return _this;
    }
    return WarehouseController;
}(BaseController));
//# sourceMappingURL=WarehouseController.js.map