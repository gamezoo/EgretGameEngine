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
 * Created by egret on 15-1-14.
 * DragonBones工厂类
 */
var DragonBonesFactory = /** @class */ (function (_super_1) {
    __extends(DragonBonesFactory, _super_1);
    /**
     * 构造函数
     */
    function DragonBonesFactory() {
        var _this = _super_1.call(this) || this;
        _this.averageUtils = new AverageUtils();
        _this.factory = new dragonBones.EgretFactory();
        _this.clocks = new Array();
        _this.clocksLen = 0;
        _this.files = [];
        //默认开启
        _this.start();
        return _this;
    }
    /**
     * 初始化一个动画文件
     * @param skeletonData 动画描述文件
     * @param texture 动画资源
     * @param textureData 动画资源描述文件
     */
    DragonBonesFactory.prototype.initArmatureFile = function (skeletonData, texture, textureData) {
        if (this.files.indexOf(skeletonData.name) != -1) {
            return;
        }
        this.addSkeletonData(skeletonData);
        this.addTextureAtlas(texture, textureData);
        this.files.push(skeletonData.name);
    };
    /**
     * 移除动画文件
     * @param name
     */
    DragonBonesFactory.prototype.removeArmatureFile = function (name) {
        var index = this.files.indexOf(name);
        if (index != -1) {
            this.removeSkeletonData(name);
            this.removeTextureAtlas(name);
            this.files.splice(index, 1);
        }
    };
    /**
     * 清空所有动画
     */
    DragonBonesFactory.prototype.clear = function () {
        while (this.files.length) {
            this.removeArmatureFile(this.files[0]);
        }
    };
    /**
     * 添加动画描述文件
     * @param skeletonData
     */
    DragonBonesFactory.prototype.addSkeletonData = function (skeletonData) {
        this.factory.parseDragonBonesData(skeletonData);
    };
    /**
     * 添加动画所需资源
     * @param texture 动画资源
     * @param textureData 动画资源描述文件
     */
    DragonBonesFactory.prototype.addTextureAtlas = function (texture, textureData) {
        this.factory.parseTextureAtlasData(textureData, texture);
    };
    /**
     * 移除动画描述文件
     * @param skeletonData
     */
    DragonBonesFactory.prototype.removeSkeletonData = function (name) {
        this.factory.removeDragonBonesData(name);
    };
    /**
     * 移除动画所需资源
     * @param texture 动画资源
     * @param textureData 动画资源描述文件
     */
    DragonBonesFactory.prototype.removeTextureAtlas = function (name) {
        this.factory.removeTextureAtlasData(name);
    };
    /**
     * 创建一个动画
     * @param name 动作名称
     * @param fromDragonBonesDataName 动画文件名称
     * @returns {Armature}
     */
    DragonBonesFactory.prototype.makeArmature = function (name, fromDragonBonesDataName, playSpeed) {
        if (playSpeed === void 0) { playSpeed = 1; }
        var armature = this.factory.buildArmature(name, fromDragonBonesDataName);
        if (armature == null) {
            Log.warn("不存在Armature： " + name);
            return null;
        }
        var clock = this.createWorldClock(playSpeed);
        var result = new DragonBonesArmature(armature, clock);
        return result;
    };
    /**
     * 创建一个动画（急速模式）
     * @param name 动作名称
     * @param fromDragonBonesDataName 动画文件名称
     * @returns {Armature}
     */
    DragonBonesFactory.prototype.makeFastArmature = function (name, fromDragonBonesDataName, playSpeed) {
        if (playSpeed === void 0) { playSpeed = 1; }
        var result = this.makeArmature(name, fromDragonBonesDataName, playSpeed);
        result.getArmature().cacheFrameRate = 24;
        return result;
    };
    /**
     * 创建WorldClock
     * @param playSpeed
     * @returns {dragonBones.WorldClock}
     */
    DragonBonesFactory.prototype.createWorldClock = function (playSpeed) {
        for (var i = 0; i < this.clocksLen; i++) {
            if (this.clocks[i].timeScale == playSpeed) {
                return this.clocks[i];
            }
        }
        var newClock = new dragonBones.WorldClock();
        newClock.timeScale = playSpeed;
        this.clocks.push(newClock);
        this.clocksLen = this.clocks.length;
        return newClock;
    };
    /**
     * dragonBones体系的每帧刷新
     * @param advancedTime
     */
    DragonBonesFactory.prototype.onEnterFrame = function (advancedTime) {
        this.averageUtils.push(advancedTime);
        var time = this.averageUtils.getValue() * 0.001;
        for (var i = 0; i < this.clocksLen; i++) {
            var clock = this.clocks[i];
            clock.advanceTime(time);
        }
    };
    /**
     * 停止
     */
    DragonBonesFactory.prototype.stop = function () {
        if (this.isPlay) {
            App.TimerManager.remove(this.onEnterFrame, this);
            this.isPlay = false;
        }
    };
    /**
     * 开启
     */
    DragonBonesFactory.prototype.start = function () {
        if (!this.isPlay) {
            this.isPlay = true;
            App.TimerManager.doFrame(1, 0, this.onEnterFrame, this);
        }
    };
    return DragonBonesFactory;
}(SingtonClass));
//# sourceMappingURL=DragonBonesFactory.js.map