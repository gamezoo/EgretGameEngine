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
 * Created by Administrator on 2014/11/23.
 */
var LoginView = /** @class */ (function (_super_1) {
    __extends(LoginView, _super_1);
    function LoginView($controller, $parent) {
        return _super_1.call(this, $controller, $parent) || this;
    }
    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    LoginView.prototype.initUI = function () {
        _super_1.prototype.initUI.call(this);
        this.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onLogin, this);
    };
    /**
     *对面板数据的初始化，用于子类继承
     *
     */
    LoginView.prototype.initData = function () {
        _super_1.prototype.initData.call(this);
    };
    /**
     * 面板开启执行函数，用于子类继承
     * @param param 参数
     */
    LoginView.prototype.open = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        _super_1.prototype.open.call(this, param);
    };
    /**
     * 面板关闭执行函数，用于子类继承
     * @param param 参数
     */
    LoginView.prototype.close = function () {
        var param = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            param[_i] = arguments[_i];
        }
        _super_1.prototype.close.call(this, param);
    };
    /**
     * 请求登陆处理
     * @param userName
     * @param pwd
     */
    LoginView.prototype.onLogin = function () {
        var userName = "yangsong";
        var pwd = "123456";
        //进行基础检测
        if (userName == null || userName.length == 0) {
            return;
        }
        if (pwd == null || pwd.length == 0) {
            return;
        }
        this.applyFunc(LoginConst.LOGIN_C2S, userName, pwd);
    };
    /**
     * 登陆成功处理
     */
    LoginView.prototype.loginSuccess = function () {
        //TODO 登陆成功处理
    };
    return LoginView;
}(BaseEuiView));
//# sourceMappingURL=LoginView.js.map