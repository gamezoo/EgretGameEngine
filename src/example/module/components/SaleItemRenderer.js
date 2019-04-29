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
 * 商品的渲染器
 */
var SaleItemRenderer = /** @class */ (function (_super_1) {
    __extends(SaleItemRenderer, _super_1);
    function SaleItemRenderer() {
        return _super_1.call(this) || this;
    }
    SaleItemRenderer.prototype.dataChanged = function () {
        _super_1.prototype.dataChanged.call(this);
        if (this.titleDisplay) {
            this.titleDisplay.text = this.data.title;
        }
        if (this.priceDisplay) {
            this.priceDisplay.text = this.data.price;
        }
        if (this.timeDisplay) {
            this.timeDisplay.text = this.data.time;
        }
        if (this.iconDisplay) {
            this.iconDisplay.source = this.data.icon;
        }
    };
    SaleItemRenderer.prototype.partAdded = function (partName, instance) {
        _super_1.prototype.partAdded.call(this, partName, instance);
        if (!this.data)
            return;
        if (instance == this.titleDisplay) {
            this.titleDisplay.text = this.data.title;
        }
        if (instance == this.priceDisplay) {
            this.priceDisplay.text = this.data.price;
        }
        if (instance == this.timeDisplay) {
            this.timeDisplay.text = this.data.time;
        }
        if (instance == this.iconDisplay) {
            this.iconDisplay.source = this.data.icon;
        }
    };
    return SaleItemRenderer;
}(eui.ItemRenderer));
//# sourceMappingURL=SaleItemRenderer.js.map