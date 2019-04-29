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
 * Created by yangsong on 15-1-12.
 * 通用工具类
 */
var CommonUtils = /** @class */ (function (_super_1) {
    __extends(CommonUtils, _super_1);
    function CommonUtils() {
        var _this = _super_1.call(this) || this;
        /**
         * 万字的显示
         * @param label
         * @param num
         */
        _this.labelIsOverLenght = function (label, num) {
            var str = null;
            if (num < 100000) {
                str = num;
            }
            else if (num < 1000000) {
                str = Math.floor(num / 1000 / 10).toString() + "万";
            }
            else {
                str = Math.floor(num / 10000).toString() + "万";
            }
            label.text = str;
        };
        return _this;
    }
    /**
     * 给字体添加描边
     * @param lable      文字
     * @param color      表示文本的描边颜色
     * @param width      描边宽度。
     */
    CommonUtils.prototype.addLableStrokeColor = function (lable, color, width) {
        lable.strokeColor = color;
        lable.stroke = width;
    };
    /**
     * 深度复制
     * @param _data
     */
    CommonUtils.prototype.copyDataHandler = function (obj) {
        var newObj;
        if (obj instanceof Array) {
            newObj = [];
        }
        else if (obj instanceof Object) {
            newObj = {};
        }
        else {
            return obj;
        }
        var keys = Object.keys(obj);
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            newObj[key] = this.copyDataHandler(obj[key]);
        }
        return newObj;
    };
    /**
     * 锁屏
     */
    CommonUtils.prototype.lock = function () {
        App.StageUtils.setTouchChildren(false);
    };
    /**
     * 解屏
     */
    CommonUtils.prototype.unlock = function () {
        App.StageUtils.setTouchChildren(true);
    };
    /**
     * int64转number
     * @param obj
     * @returns {number}
     */
    CommonUtils.prototype.int64ToNumber = function (obj) {
        return parseInt(obj.toString());
    };
    return CommonUtils;
}(SingtonClass));
//# sourceMappingURL=CommonUtils.js.map