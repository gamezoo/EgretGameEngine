/**
 * Created by yangsong on 2014/11/23.
 * 分帧处理
 */
var FrameExecutor = /** @class */ (function () {
    /**
     * 构造函数
     */
    function FrameExecutor($delayFrame) {
        this.delayFrame = $delayFrame;
        this.frameDelay = new FrameDelay();
        this.functions = new Array();
    }
    /**
     * 注册要分帧处理的函数
     * @param $func 函数
     * @param $thisObj 函数所属对象
     */
    FrameExecutor.prototype.regist = function ($func, $thisObj) {
        this.functions.push([$func, $thisObj]);
    };
    /**
     * 执行
     */
    FrameExecutor.prototype.execute = function () {
        if (this.functions.length) {
            var arr = this.functions.shift();
            arr[0].call(arr[1]);
            this.frameDelay.delayCall(this.delayFrame, this.execute, this);
        }
    };
    return FrameExecutor;
}());
//# sourceMappingURL=FrameExecutor.js.map