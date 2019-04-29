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
 * Created by yangsong on 15-1-7.
 */
var BaseSpriteLayer = /** @class */ (function (_super_1) {
    __extends(BaseSpriteLayer, _super_1);
    function BaseSpriteLayer() {
        var _this = _super_1.call(this) || this;
        _this.touchEnabled = false;
        return _this;
    }
    return BaseSpriteLayer;
}(egret.DisplayObjectContainer));
//# sourceMappingURL=BaseSpriteLayer.js.map