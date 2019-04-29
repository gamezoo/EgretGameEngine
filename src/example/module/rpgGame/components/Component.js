/**
 * Created by yangsong on 2017/10/11.
 */
var Component = /** @class */ (function () {
    function Component() {
    }
    Component.prototype.start = function () {
        this.dealTime = 0;
        this.dealInterval = 0;
        this.isRuning = true;
    };
    Component.prototype.stop = function () {
        this.dealTime = null;
        this.dealInterval = null;
        this.entity = null;
        this.isRuning = false;
        this.type = null;
    };
    Component.prototype.update = function (advancedTime) {
    };
    return Component;
}());
//# sourceMappingURL=Component.js.map