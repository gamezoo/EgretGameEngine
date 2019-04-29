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
 * Created by yangsong on 2014/6/16.
 * StarlingSwf工厂类
 */
var StarlingSwfFactory = /** @class */ (function (_super_1) {
    __extends(StarlingSwfFactory, _super_1);
    /**
     * 构造函数
     */
    function StarlingSwfFactory() {
        var _this = _super_1.call(this) || this;
        _this.swfAssetsManager = new starlingswf.SwfAssetManager();
        _this.swfAssetsNames = new Array();
        _this.swfAssets = new Array();
        _this.swfData = {};
        return _this;
    }
    /**
     * 添加一个swf
     * @param name 唯一标识
     * @param swfData swf配置数据
     * @param spriteSheep 资源配置数据
     */
    StarlingSwfFactory.prototype.addSwf = function (name, swfData, spriteSheep) {
        if (this.swfAssetsNames.indexOf(name) != -1)
            return;
        if (swfData == null || spriteSheep == null) {
            console.log("SWF加载失败:" + name);
            return;
        }
        this.swfAssetsManager.addSpriteSheet(name, spriteSheep);
        var swf = new starlingswf.Swf(swfData, this.swfAssetsManager, 24);
        swf.name = name;
        StarlingSwfUtils.addSwf(swf);
        this.swfAssetsNames.push(name);
        this.swfAssets.push(swf);
    };
    /**
     * 停止列表中的swf
     * @param arr
     */
    StarlingSwfFactory.prototype.stopSwfs = function (arr) {
        for (var i = 0, len = arr.length; i < len; i++) {
            var swf = StarlingSwfUtils.getSwf(arr[i]);
            if (swf) {
                swf.swfUpdateManager.stop();
            }
        }
    };
    /**
     * 播放列表中的swf
     * @param arr
     */
    StarlingSwfFactory.prototype.playSwfs = function (arr) {
        for (var i = 0, len = arr.length; i < len; i++) {
            var swf = StarlingSwfUtils.getSwf(arr[i]);
            if (swf) {
                swf.swfUpdateManager.play();
            }
        }
    };
    /**
     * 清空所有swf
     */
    StarlingSwfFactory.prototype.clearSwfs = function () {
        while (this.swfAssets.length) {
            StarlingSwfUtils.removeSwf(this.swfAssets.pop());
        }
        while (this.swfAssetsNames.length) {
            this.swfAssetsNames.pop();
        }
        this.swfAssetsManager = new starlingswf.SwfAssetManager();
    };
    /**
     * 清空
     */
    StarlingSwfFactory.prototype.clear = function () {
        this.clearSwfs();
    };
    /**
     * 创建一个StarlingSwfMovieClip
     * @param name mc的名字
     * @returns {StarlingSwfMovieClip}
     */
    StarlingSwfFactory.prototype.makeMc = function (name) {
        var mc = StarlingSwfUtils.createMovie("mc_" + name, null, StarlingSwfMovieClip);
        if (mc == null) {
            console.log("SWF创建失败: " + name);
        }
        return mc;
    };
    /**
     * 创建一个Bitmap
     * @param name 图片的名称
     * @returns {egret.Bitmap}
     */
    StarlingSwfFactory.prototype.makeImage = function (name) {
        return StarlingSwfUtils.createImage("img_" + name);
    };
    /**
     * 获取材质
     * @param name 材质名称
     * @returns {egret.Texture}
     */
    StarlingSwfFactory.prototype.getTexture = function (name) {
        return StarlingSwfUtils.getTexture("img_" + name);
    };
    return StarlingSwfFactory;
}(SingtonClass));
//# sourceMappingURL=StarlingSwfFactory.js.map