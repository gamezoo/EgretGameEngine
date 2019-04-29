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
var LoginProxy = /** @class */ (function (_super_1) {
    __extends(LoginProxy, _super_1);
    function LoginProxy($controller) {
        var _this = _super_1.call(this, $controller) || this;
        //注册从服务器返回消息的监听
        _this.receiveServerMsg(HttpConst.USER_LOGIN, _this.loginSuccess, _this);
        return _this;
    }
    /**
     * 用户登陆
     * @param userName
     * @param pwd
     */
    LoginProxy.prototype.login = function (userName, pwd) {
        var paramObj = {
            "uName": userName,
            "uPass": pwd
        };
        this.sendHttpMsg(HttpConst.USER_LOGIN, paramObj);
    };
    /**
     * 用户登陆成功返回
     */
    LoginProxy.prototype.loginSuccess = function (obj) {
        this.applyFunc(LoginConst.LOGIN_S2C, obj);
    };
    return LoginProxy;
}(BaseProxy));
//# sourceMappingURL=LoginProxy.js.map