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
 * Created by Saco on 2014/12/1.
 */
var LocationPropertyUtils = /** @class */ (function (_super_1) {
    __extends(LocationPropertyUtils, _super_1);
    function LocationPropertyUtils() {
        return _super_1.call(this) || this;
    }
    /*
     * 获取url参数值，没有返回null
     * 不传递paraUrl参数默认获取当前url
     * */
    LocationPropertyUtils.prototype.getPara = function (paraName, paraUrl) {
        if (egret.Capabilities.runtimeType != egret.RuntimeType.WEB) {
            return null;
        }
        var url = paraUrl || location.href;
        if (url.indexOf("?") != -1) {
            var urlPara = "&" + url.split("?")[1];
            var reg = new RegExp("\&" + paraName + "\=.*?(?:\&|$)");
            var result = reg.exec(urlPara);
            if (result) {
                var value = result[0];
                return value.split("&")[1].split("=")[1];
            }
        }
        return null;
    };
    /*
     * 给Url参数赋值
     * 不传递paraUrl参数默认获取当前url
     * */
    LocationPropertyUtils.prototype.setProperty = function (paraName, paraValue, paraUrl) {
        var url = paraUrl || location.href;
        var urlPara = "&" + url.split("?")[1];
        if (url.indexOf("?") == -1) {
            return url += "?" + paraName + "=" + paraValue;
        }
        else {
            var urlPara = url.split("?")[1];
            if (urlPara == "")
                return url += paraName + "=" + paraValue;
            var regParaKV = new RegExp("(?:^|\&)" + paraName + "\=.*?(?:\&|$)");
            var result = regParaKV.exec(urlPara);
            if (!result || result[0] == "") {
                return url += "&" + paraName + "=" + paraValue;
            }
            else {
                var oldValue = result[0];
                var regParaKey = new RegExp("\=.*$");
                var newValue = oldValue.replace(regParaKey, "=" + paraValue);
                return url.replace(oldValue, newValue);
            }
        }
    };
    /*
     * 检查url中是否包含某参数
     * 这代码有一个例外就是paraName = "undefined", paraUrl中不含"?"会返回true
     * 相信你不会这么用的 =.=
     * */
    LocationPropertyUtils.prototype.hasProperty = function (paraName, paraUrl) {
        var url = paraUrl || location.href;
        var para = "&" + url.split("?")[1]; //加&是为了把&作为参数名开始=作为参数名结束，防止uid=1&id=2此类误判
        return para.indexOf("&" + paraName + "=") != -1;
    };
    return LocationPropertyUtils;
}(SingtonClass));
//# sourceMappingURL=LocationPropertyUtils.js.map