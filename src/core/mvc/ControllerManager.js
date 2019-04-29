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
 * Created by yangsong on 2014/11/22.
 * Controller管理类
 */
var ControllerManager = /** @class */ (function (_super_1) {
    __extends(ControllerManager, _super_1);
    /**
     * 构造函数
     */
    function ControllerManager() {
        var _this = _super_1.call(this) || this;
        _this._modules = {};
        return _this;
    }
    /**
     * 清空处理
     */
    ControllerManager.prototype.clear = function () {
        this._modules = {};
    };
    /**
     * 动态添加的Controller
     * @param key 唯一标识
     * @param manager Manager
     *
     */
    ControllerManager.prototype.register = function (key, control) {
        if (this.isExists(key))
            return;
        this._modules[key] = control;
    };
    /**
     * 动态移除Controller
     * @param key 唯一标识
     *
     */
    ControllerManager.prototype.unregister = function (key) {
        if (!this.isExists(key))
            return;
        this._modules[key] = null;
        delete this._modules[key];
    };
    /**
     * 是否已经存在Controller
     * @param key 唯一标识
     * @return Boolean
     *
     */
    ControllerManager.prototype.isExists = function (key) {
        return this._modules[key] != null;
    };
    /**
     * 跨模块消息传递
     * @param controllerD Controller唯一标识
     * @param key 消息唯一标识
     *
     */
    ControllerManager.prototype.applyFunc = function (controllerD, key) {
        var param = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            param[_i - 2] = arguments[_i];
        }
        var manager = this._modules[controllerD];
        if (manager) {
            var params = [];
            for (var i = 1; i < arguments.length; i++) {
                params[i - 1] = arguments[i];
            }
            return manager.applyFunc.apply(manager, params);
        }
        else {
            Log.warn("模块" + controllerD + "不存在");
            return null;
        }
    };
    /**
     * 获取指定Controller的Model对象
     * @param controllerD Controller唯一标识
     * @returns {BaseModel}
     */
    ControllerManager.prototype.getControllerModel = function (controllerD) {
        var manager = this._modules[controllerD];
        if (manager) {
            return manager.getModel();
        }
        return null;
    };
    return ControllerManager;
}(SingtonClass));
//# sourceMappingURL=ControllerManager.js.map