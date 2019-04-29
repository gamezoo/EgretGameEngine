/**
 * Created by yangsong on 2014/11/23.
 * 帧延迟处理
 */
var FrameDelay = /** @class */ (function () {
    /**
     * 构造函数
     */
    function FrameDelay() {
    }
    /**
     * 延迟处理
     * @param delayFrame 延迟帧数
     * @param func 延迟执行的函数
     * @param thisObj 延迟执行的函数的所属对象
     */
    FrameDelay.prototype.delayCall = function (delayFrame, func, thisObj) {
        this.func = func;
        this.thisObj = thisObj;
        egret.callLater(function () {
            App.TimerManager.doFrame(delayFrame, 1, this.listener_enterFrame, this);
        }, this);
    };
    FrameDelay.prototype.listener_enterFrame = function () {
        this.func.call(this.thisObj);
    };
    return FrameDelay;
}());
//# sourceMappingURL=FrameDelay.js.map