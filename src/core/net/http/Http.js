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
 * Http请求处理
 */
var Http = /** @class */ (function (_super_1) {
    __extends(Http, _super_1);
    /**
     * 构造函数
     */
    function Http() {
        var _this = _super_1.call(this) || this;
        _this._data = new DynamicChange();
        _this._cache = [];
        _this._request = new egret.URLRequest();
        _this._request.method = egret.URLRequestMethod.POST;
        _this._urlLoader = new egret.URLLoader();
        _this._urlLoader.addEventListener(egret.IOErrorEvent.IO_ERROR, _this.onError, _this);
        return _this;
    }
    /**
     * 初始化服务器地址
     * @param serverUrl服务器链接地址
     */
    Http.prototype.initServer = function (serverUrl) {
        this._serverUrl = serverUrl;
    };
    Object.defineProperty(Http.prototype, "Data", {
        /**
         * 数据缓存
         * @returns {DynamicChange}
         * @constructor
         */
        get: function () {
            return this._data;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Http错误处理函数
     * @param e
     */
    Http.prototype.onError = function (e) {
        this.nextPost();
    };
    /**
     * 请求数据
     * @param    type
     * @param    t_variables
     */
    Http.prototype.send = function (type, urlVariables) {
        this._cache.push([type, urlVariables]);
        this.post();
    };
    /**
     * 请求服务器
     */
    Http.prototype.post = function () {
        if (this._isRequesting) {
            return;
        }
        if (this._cache.length == 0) {
            return;
        }
        var arr = this._cache.shift();
        var type = arr[0];
        var urlVariables = arr[1];
        this._type = type;
        this._request.url = this._serverUrl;
        this._request.data = urlVariables;
        this._urlLoader.addEventListener(egret.Event.COMPLETE, this.onLoaderComplete, this);
        this._urlLoader.load(this._request);
        this._isRequesting = true;
    };
    /**
     * 数据返回
     * @param event
     */
    Http.prototype.onLoaderComplete = function (event) {
        this._urlLoader.removeEventListener(egret.Event.COMPLETE, this.onLoaderComplete, this);
        var t_obj = JSON.parse(this._urlLoader.data);
        if (!t_obj.hasOwnProperty("s") || t_obj["s"] == 0) {
            this._data.pUpdate.update(this._type, t_obj);
            App.MessageCenter.dispatch(this._type, t_obj);
        }
        else {
            Log.debug("Http错误:" + t_obj["s"]);
        }
        this.nextPost();
    };
    /**
     * 开始下一个请求
     */
    Http.prototype.nextPost = function () {
        this._isRequesting = false;
        this.post();
    };
    return Http;
}(SingtonClass));
//# sourceMappingURL=Http.js.map