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
 * Created by yangsong on 2014/12/3.
 * 各种效果工具类
 */
var EffectUtils = /** @class */ (function (_super_1) {
    __extends(EffectUtils, _super_1);
    /**
     * 构造函数
     */
    function EffectUtils() {
        return _super_1.call(this) || this;
    }
    /**
     * 类似mac上图标上下抖动的效果
     * @param obj 要抖动的对象，使用
     * @param initY 要抖动的对象的初始Y值，原始位置
     */
    EffectUtils.prototype.macIconShake = function (obj, initY) {
        //抖动频率[时间，移动距离]，可修改
        var arr = [
            [20, 300],
            [15, 300],
            [10, 300],
            [5, 300]
        ];
        var tween = egret.Tween.get(obj);
        for (var i = 0, len = arr.length; i < len; i++) {
            tween.to({ y: initY - arr[i][0] }, arr[i][1]);
            tween.to({ y: initY }, arr[i][1]);
        }
    };
    /**
     * 开始放大缩小
     * @param obj
     */
    EffectUtils.prototype.startScale = function (obj, scaleTime) {
        obj.scaleX = 1;
        obj.scaleY = 1;
        egret.Tween.get(obj)
            .to({ scaleX: 1.1, scaleY: 1.1 }, scaleTime)
            .to({ scaleX: 1.0, scaleY: 1.0 }, scaleTime)
            .to({ scaleX: 0.9, scaleY: 0.9 }, scaleTime)
            .to({ scaleX: 1.0, scaleY: 1.0 }, scaleTime)
            .call(this.startScale, this, [obj, scaleTime]);
    };
    /**
     * 停止放大缩小
     * @param obj
     */
    EffectUtils.prototype.stopScale = function (obj) {
        egret.Tween.removeTweens(obj);
    };
    /**
     * 开始闪烁
     * @param obj
     */
    EffectUtils.prototype.startFlicker = function (obj, alphaTime, alpha_min) {
        if (alpha_min === void 0) { alpha_min = 0; }
        obj.alpha = 1;
        egret.Tween.get(obj).to({ "alpha": alpha_min }, alphaTime).to({ "alpha": 1 }, alphaTime).call(this.startFlicker, this, [obj, alphaTime]);
    };
    /**
     * 停止闪烁
     * @param obj
     */
    EffectUtils.prototype.stopFlicker = function (obj) {
        egret.Tween.removeTweens(obj);
    };
    /**
     * 开始上下抖动
     * @param obj
     */
    EffectUtils.prototype.startShake = function (obj, shakeTime, shakeHeight) {
        if (shakeHeight === void 0) { shakeHeight = 20; }
        if (!obj["shakeStartY"]) {
            obj["shakeStartY"] = obj.y;
            obj["shakeEndY"] = obj.y + shakeHeight;
        }
        var startY = obj["shakeStartY"];
        var endY = obj["shakeEndY"];
        egret.Tween.get(obj).to({ "y": endY }, shakeTime).to({ "y": startY }, shakeTime).call(this.startShake, this, [obj, shakeTime]);
    };
    /**
     * 停止上下抖动
     * @param obj
     */
    EffectUtils.prototype.stopShake = function (obj) {
        if (!obj["shakeStartY"]) {
            return;
        }
        obj.y = obj["shakeStartY"];
        egret.Tween.removeTweens(obj);
        delete obj["shakeStartY"];
        delete obj["shakeEndY"];
    };
    /**
     * 设置显示对象“黑化”效果
     */
    EffectUtils.prototype.setDisplayObjectBlack = function (obj) {
        //颜色矩阵数组
        var colorMatrix = [
            1, 0, 0, 0, -255,
            0, 1, 0, 0, -255,
            0, 0, 1, 0, -255,
            0, 0, 0, 1, 0
        ];
        var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
        obj.filters = [colorFlilter];
    };
    /**
     * 设置显示对象“灰化”效果
     */
    EffectUtils.prototype.setDisplayObjectGray = function (obj) {
        //颜色矩阵数组
        var colorMatrix = [
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0.3, 0.6, 0, 0, 0,
            0, 0, 0, 1, 0
        ];
        var colorFlilter = new egret.ColorMatrixFilter(colorMatrix);
        obj.filters = [colorFlilter];
    };
    /**
     * 开始左右摇动
     * @param obj
     */
    EffectUtils.prototype.startWobble = function (obj, wobbleTime, wobbleRotation) {
        if (wobbleTime === void 0) { wobbleTime = 100; }
        if (wobbleRotation === void 0) { wobbleRotation = 20; }
        egret.Tween.get(obj)
            .to({ rotation: wobbleRotation }, wobbleTime, egret.Ease.bounceInOut)
            .to({ rotation: -wobbleRotation }, wobbleTime, egret.Ease.bounceInOut)
            .to({ rotation: wobbleRotation }, wobbleTime, egret.Ease.bounceInOut)
            .call(this.startWobble, this, [obj, wobbleTime]);
    };
    /**
     * 停止左右摇动
     * @param obj
     */
    EffectUtils.prototype.stopWobble = function (obj) {
        obj.rotation = 0;
        egret.Tween.removeTweens(obj);
    };
    /**
     * 开始发光闪烁
     * @param obj
     */
    EffectUtils.prototype.startFlash = function (obj, flashColor, flashTime) {
        var glowFilter = obj["flashFilter"];
        if (!glowFilter) {
            var color = flashColor; /// 光晕的颜色，十六进制，不包含透明度
            var alpha = 1; /// 光晕的颜色透明度，是对 color 参数的透明度设定。有效值为 0.0 到 1.0。例如，0.8 设置透明度值为 80%。
            var blurX = 35; /// 水平模糊量。有效值为 0 到 255.0（浮点）
            var blurY = 35; /// 垂直模糊量。有效值为 0 到 255.0（浮点）
            var strength = 2; /// 压印的强度，值越大，压印的颜色越深，而且发光与背景之间的对比度也越强。有效值为 0 到 255。暂未实现
            var quality = 3 /* HIGH */; /// 应用滤镜的次数，建议用 BitmapFilterQuality 类的常量来体现
            glowFilter = new egret.GlowFilter(color, alpha, blurX, blurY, strength, quality);
            obj.filters = [glowFilter];
            obj["flashFilter"] = glowFilter;
        }
        egret.Tween.get(glowFilter).to({ "alpha": 0 }, flashTime).to({ "alpha": 1 }, flashTime).call(this.startFlash, this, [obj, flashColor, flashTime]);
    };
    /**
     * 停止发光闪烁
     * @param obj
     */
    EffectUtils.prototype.stopFlash = function (obj) {
        var glowFilter = obj["flashFilter"];
        if (glowFilter) {
            egret.Tween.removeTweens(glowFilter);
            obj.filters = null;
            delete obj["flashFilter"];
        }
    };
    return EffectUtils;
}(SingtonClass));
//# sourceMappingURL=EffectUtils.js.map