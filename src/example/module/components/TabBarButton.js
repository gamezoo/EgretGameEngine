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
 * tabbar的按钮
 */
var TabBarButton = /** @class */ (function (_super_1) {
    __extends(TabBarButton, _super_1);
    function TabBarButton() {
        return _super_1.call(this) || this;
    }
    Object.defineProperty(TabBarButton.prototype, "data", {
        get: function () {
            return this.mydata;
        },
        set: function (value) {
            this.mydata = value;
            if (this.iconDisplay) {
                this.iconDisplay.source = this.data.title;
            }
            if (this.iconDisplaySelected) {
                this.iconDisplaySelected.source = this.data.titleSelected;
            }
        },
        enumerable: true,
        configurable: true
    });
    TabBarButton.prototype.partAdded = function (partName, instance) {
        _super_1.prototype.partAdded.call(this, partName, instance);
        if (!this.data)
            return;
        if (instance == this.iconDisplay) {
            this.iconDisplay.source = this.data.title;
        }
        if (instance == this.iconDisplaySelected) {
            this.iconDisplaySelected.source = this.data.titleSelected;
        }
    };
    return TabBarButton;
}(eui.ItemRenderer));
//# sourceMappingURL=TabBarButton.js.map