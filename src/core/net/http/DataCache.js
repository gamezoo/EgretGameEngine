/**
 * Created by yangsong on 2014/11/22.
 * Http数据缓存类
 */
var DynamicChange = /** @class */ (function () {
    function DynamicChange() {
        this._dataCache = [];
        this._pUpdate = new ProxyUpdate(this._dataCache);
    }
    Object.defineProperty(DynamicChange.prototype, "pUpdate", {
        get: function () {
            return this._pUpdate;
        },
        enumerable: true,
        configurable: true
    });
    DynamicChange.prototype.getCacheData = function (key) {
        if (this._dataCache[key]) {
            return this._dataCache[key];
        }
        return null;
    };
    DynamicChange.prototype.clearCache = function () {
        var keys = Object.keys(this._dataCache);
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            this._dataCache[key] = null;
            delete this._dataCache[key];
        }
    };
    DynamicChange.prototype.getCacheKeyInfos = function () {
        var results = [];
        var keys = Object.keys(this._dataCache);
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            var k = this._dataCache[key];
            results.push(k);
        }
        return results;
    };
    DynamicChange.prototype.isCache = function (key) {
        return this._dataCache[key];
    };
    return DynamicChange;
}());
//# sourceMappingURL=DataCache.js.map