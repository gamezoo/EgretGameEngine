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
 * Created by Saco on 2015/9/16.
 */
var AnchorUtils = /** @class */ (function (_super_1) {
    __extends(AnchorUtils, _super_1);
    function AnchorUtils() {
        var _this = _super_1.call(this) || this;
        _this.init();
        return _this;
    }
    AnchorUtils.prototype.init = function () {
        this._propertyChange = Object.create(null);
        this._anchorChange = Object.create(null);
        this.injectAnchor();
    };
    AnchorUtils.prototype.clear = function (target) {
        delete this._propertyChange[target.hashCode];
        delete this._anchorChange[target.hashCode];
    };
    AnchorUtils.prototype.setAnchorX = function (target, value) {
        target["anchorX"] = value;
    };
    AnchorUtils.prototype.setAnchorY = function (target, value) {
        target["anchorY"] = value;
    };
    AnchorUtils.prototype.setAnchor = function (target, value) {
        target["anchorX"] = target["anchorY"] = value;
    };
    AnchorUtils.prototype.getAnchor = function (target) {
        if (target["anchorX"] != target["anchorY"]) {
            console.log("target's anchorX != anchorY");
        }
        return target["anchorX"] || 0;
    };
    AnchorUtils.prototype.getAnchorY = function (target) {
        return target["anchorY"] || 0;
    };
    AnchorUtils.prototype.getAnchorX = function (target) {
        return target["anchorX"] || 0;
    };
    AnchorUtils.prototype.injectAnchor = function () {
        var self = this;
        Object.defineProperty(egret.DisplayObject.prototype, "width", {
            get: function () {
                return this.$getWidth();
            },
            set: function (value) {
                var _this = this;
                this.$setWidth(value);
                self._propertyChange[this.hashCode] = true;
                egret.callLater(function () {
                    self.changeAnchor(_this);
                }, this);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(egret.DisplayObject.prototype, "height", {
            get: function () {
                return this.$getHeight();
            },
            set: function (value) {
                var _this = this;
                this.$setHeight(value);
                self._propertyChange[this.hashCode] = true;
                egret.callLater(function () {
                    self.changeAnchor(_this);
                }, this);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(egret.DisplayObject.prototype, "anchorX", {
            get: function () {
                return this._anchorX;
            },
            set: function (value) {
                var _this = this;
                this._anchorX = value;
                self._propertyChange[this.hashCode] = true;
                self._anchorChange[this.hashCode] = true;
                egret.callLater(function () {
                    self.changeAnchor(_this);
                }, this);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(egret.DisplayObject.prototype, "anchorY", {
            get: function () {
                return this._anchorY;
            },
            set: function (value) {
                var _this = this;
                this._anchorY = value;
                self._propertyChange[this.hashCode] = true;
                self._anchorChange[this.hashCode] = true;
                egret.callLater(function () {
                    self.changeAnchor(_this);
                }, this);
            },
            enumerable: true,
            configurable: true
        });
    };
    AnchorUtils.prototype.changeAnchor = function (tar) {
        if (this._propertyChange[tar.hashCode] && this._anchorChange[tar.hashCode]) {
            if (tar._anchorX) {
                tar.anchorOffsetX = tar._anchorX * tar.width;
            }
            if (tar._anchorY) {
                tar.anchorOffsetY = tar._anchorY * tar.height;
            }
            delete this._propertyChange[tar.hashCode];
        }
    };
    return AnchorUtils;
}(SingtonClass));
//# sourceMappingURL=AnchorUtils.js.map