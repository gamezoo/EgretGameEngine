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
 * Tween工具类
 */
var TweenUtils = /** @class */ (function (_super_1) {
    __extends(TweenUtils, _super_1);
    function TweenUtils() {
        return _super_1.call(this) || this;
    }
    /**
     * 暂停所有的Tween
     */
    TweenUtils.prototype.pause = function () {
        var tweens = egret.Tween["_tweens"];
        for (var i = 0, l = tweens.length; i < l; i++) {
            var tween_2 = tweens[i];
            tween_2.paused = true;
        }
    };
    /**
     * 从暂停中恢复
     */
    TweenUtils.prototype.resume = function () {
        var tweens = egret.Tween["_tweens"];
        for (var i = 0, l = tweens.length; i < l; i++) {
            var tween_2 = tweens[i];
            tween_2.paused = false;
        }
    };
    return TweenUtils;
}(SingtonClass));
//# sourceMappingURL=TweenUtils.js.map