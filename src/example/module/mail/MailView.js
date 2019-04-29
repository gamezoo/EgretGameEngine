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
var MailView = /** @class */ (function (_super_1) {
    __extends(MailView, _super_1);
    function MailView(controller, parent) {
        var _this = _super_1.call(this, controller, parent) || this;
        _this.icon = "table_mail";
        return _this;
    }
    return MailView;
}(BasePanelView));
//# sourceMappingURL=MailView.js.map