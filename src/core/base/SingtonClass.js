/**
 * Created by yangsong on 14/12/18.
 * 基类
 */
var SingtonClass = /** @class */ (function () {
    function SingtonClass() {
    }
    /**
     * 获取一个单例
     * @returns {any}
     */
    SingtonClass.getSingtonInstance = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        var Class = this;
        if (!Class._instance) {
            Class._instance = new (Class.bind.apply(Class, [void 0].concat(param)))();
        }
        return Class._instance;
    };
    return SingtonClass;
}());
//# sourceMappingURL=SingtonClass.js.map