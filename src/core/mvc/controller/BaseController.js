/**
 * Created by yangsong on 2014/11/22.
 * Controller基类
 */
var BaseController = /** @class */ (function () {
    /**
     * 构造函数
     */
    function BaseController() {
        this._messages = {};
    }
    /**
     * 注册本模块消息
     * @param key 唯一标识
     * @param callbackFunc 侦听函数
     * @param callbackObj 侦听函数所属对象
     */
    BaseController.prototype.registerFunc = function (key, callbackFunc, callbackObj) {
        this._messages[key] = [callbackFunc, callbackObj];
    };
    /**
     * 触发本模块消息
     * @param key 唯一标识
     * @param param 所需参数
     *
     */
    BaseController.prototype.applyFunc = function (key) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        var listen = this._messages[key];
        if (listen) {
            return listen[0].apply(listen[1], param);
        }
        else {
            Log.warn("消息" + key + "不存在侦听");
            return null;
        }
    };
    /**
     * 触发其他模块消息
     * @param controllerKey 模块标识
     * @param key 唯一标识
     * @param param 所需参数
     *
     */
    BaseController.prototype.applyControllerFunc = function (controllerKey, key) {
        var param = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            param[_i - 2] = arguments[_i];
        }
        return App.ControllerManager.applyFunc.apply(App.ControllerManager, arguments);
    };
    /**
     * 设置该模块使用的Model对象
     * @param model
     */
    BaseController.prototype.setModel = function (model) {
        this._model = model;
    };
    /**
     * 获取该模块的Model对象
     * @returns {BaseModel}
     */
    BaseController.prototype.getModel = function () {
        return this._model;
    };
    /**
     * 获取指定Controller的Model对象
     * @param controllerD Controller唯一标识
     * @returns {BaseModel}
     */
    BaseController.prototype.getControllerModel = function (controllerD) {
        return App.ControllerManager.getControllerModel(controllerD);
    };
    /**
     * View注册
     * @param viewClassZ View的类
     * @param viewId View的ID
     * @param viewParent View的父级
     * @returns {IBaseView}
     */
    BaseController.prototype.registerView = function (viewClass, viewId, viewParent) {
        var view = new viewClass(this, viewParent);
        App.ViewManager.register(viewId, view);
        return view;
    };
    /**
     * View打开
     * @param viewId View的ID
     * @param param 参数
     */
    BaseController.prototype.openView = function (viewId) {
        var _a;
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        (_a = App.ViewManager).open.apply(_a, [viewId].concat(param));
    };
    /**
     * View关闭
     * @param viewId View的ID
     * @param param 参数
     */
    BaseController.prototype.closeView = function (viewId) {
        var _a;
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        (_a = App.ViewManager).close.apply(_a, [viewId].concat(param));
    };
    return BaseController;
}());
//# sourceMappingURL=BaseController.js.map