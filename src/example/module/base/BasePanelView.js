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
var BasePanelView = /** @class */ (function (_super_1) {
    __extends(BasePanelView, _super_1);
    function BasePanelView(controller, parent) {
        var _this = _super_1.call(this, controller, parent) || this;
        _this.skinName = "resource/skins/PanelSkin.exml";
        return _this;
    }
    Object.defineProperty(BasePanelView.prototype, "icon", {
        get: function () {
            return this._icon;
        },
        set: function (value) {
            this._icon = value;
            if (this.iconDisplay) {
                this.iconDisplay.source = this._icon;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BasePanelView.prototype, "btn", {
        get: function () {
            return this._btn;
        },
        set: function (value) {
            this._btn = value;
            if (this.button) {
                this.button.source = this._btn;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    BasePanelView.prototype.initUI = function () {
        _super_1.prototype.initUI.call(this);
        this.closeBtn.addEventListener(egret.TouchEvent.TOUCH_END, this.closeBtnClickHandler, this);
    };
    /**
     *对面板数据的初始化，用于子类继承
     *
     */
    BasePanelView.prototype.initData = function () {
        _super_1.prototype.initData.call(this);
        this.iconDisplay.source = this._icon;
        this.button.source = this._btn;
    };
    BasePanelView.prototype.closeBtnClickHandler = function (e) {
        App.ViewManager.closeView(this);
    };
    return BasePanelView;
}(BaseEuiView));
//# sourceMappingURL=BasePanelView.js.map