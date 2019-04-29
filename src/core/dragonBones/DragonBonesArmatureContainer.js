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
 * Created by yangsong on 15-1-16.
 * DragonBonesArmature容器类，用于一个动画使用多个DragonBonesArmature的情况
 */
var DragonBonesArmatureContainer = /** @class */ (function (_super_1) {
    __extends(DragonBonesArmatureContainer, _super_1);
    /**
     * 构造函数
     */
    function DragonBonesArmatureContainer() {
        var _this = _super_1.call(this) || this;
        _this.armatures = new Array();
        _this.actions = {};
        _this.cacheBones = {};
        return _this;
    }
    /**
     * 注册缩需要的DragonBonesArmature
     * @param $armature DragonBonesArmature
     * @param $actions 当前DragonBonesArmature所有的动作
     */
    DragonBonesArmatureContainer.prototype.register = function ($armature, $actions) {
        this.armatures.push($armature);
        for (var i = 0, len = $actions.length; i < len; i++) {
            this.actions[$actions[i]] = this.armatures.length - 1;
        }
    };
    Object.defineProperty(DragonBonesArmatureContainer.prototype, "armature", {
        /**
         * 当前正在使用的armature
         * @returns {DragonBonesArmature}
         */
        get: function () {
            return this.armatures[this.currArmatureIndex];
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 获取Bone
     * @param boneName
     * @returns {any}
     */
    DragonBonesArmatureContainer.prototype.getCacheBone = function (boneName) {
        if (!this.cacheBones[boneName]) {
            this.cacheBones[boneName] = [];
            for (var i = 0, len = this.armatures.length; i < len; i++) {
                var arm = this.armatures[i];
                this.cacheBones[boneName].push(arm.getBone(boneName));
            }
        }
        return this.cacheBones[boneName][this.currArmatureIndex];
    };
    /**
     * 播放动作
     * @param action
     * @param playNum
     */
    DragonBonesArmatureContainer.prototype.play = function (action, playNum) {
        if (playNum === void 0) { playNum = undefined; }
        if (this.actions[action] == null) {
            Log.debug("DragonBonesArmatureContainer不存在动作：", action);
            return;
        }
        var armatureIndex = this.actions[action];
        if (armatureIndex != this.currArmatureIndex) {
            this.remove();
        }
        var newArm = this.armatures[armatureIndex];
        if (newArm) {
            this.addChild(newArm);
            this.currArmatureIndex = armatureIndex;
            return newArm.play(action, playNum);
        }
        return null;
    };
    /**
     * 停止当前DragonBonesArmature
     */
    DragonBonesArmatureContainer.prototype.stop = function () {
        var currArm = this.armatures[this.currArmatureIndex];
        if (currArm) {
            currArm.stop();
        }
    };
    /**
     * 播放
     */
    DragonBonesArmatureContainer.prototype.start = function () {
        var currArm = this.armatures[this.currArmatureIndex];
        if (currArm) {
            currArm.start();
        }
    };
    /**
     * 移除上一个DragonBonesArmature
     */
    DragonBonesArmatureContainer.prototype.remove = function () {
        var oldArm = this.armatures[this.currArmatureIndex];
        if (oldArm) {
            oldArm.stop();
            App.DisplayUtils.removeFromParent(oldArm);
            this.currArmatureIndex = null;
        }
    };
    /**
     * 添加播放完成处理函数
     * @param callFunc
     * @param target
     */
    DragonBonesArmatureContainer.prototype.addCompleteCallFunc = function (callFunc, target) {
        for (var i = 0, len = this.armatures.length; i < len; i++) {
            var arm = this.armatures[i];
            arm.addCompleteCallFunc(callFunc, target);
        }
    };
    /**
     * 移除播放完成处理函数
     * @param callFunc
     * @param target
     */
    DragonBonesArmatureContainer.prototype.removeCompleteCallFunc = function (callFunc, target) {
        for (var i = 0, len = this.armatures.length; i < len; i++) {
            var arm = this.armatures[i];
            arm.removeCompleteCallFunc(callFunc, target);
        }
    };
    /**
     * 添加帧事件处理函数
     * @param callFunc
     * @param target
     */
    DragonBonesArmatureContainer.prototype.addFrameCallFunc = function (callFunc, target) {
        for (var i = 0, len = this.armatures.length; i < len; i++) {
            var arm = this.armatures[i];
            arm.addFrameCallFunc(callFunc, target);
        }
    };
    /**
     * 移除帧事件处理函数
     * @param key
     * @param callFunc
     * @param target
     */
    DragonBonesArmatureContainer.prototype.removeFrameCallFunc = function (callFunc, target) {
        for (var i = 0, len = this.armatures.length; i < len; i++) {
            var arm = this.armatures[i];
            arm.removeFrameCallFunc(callFunc, target);
        }
    };
    /**
     * 清空
     */
    DragonBonesArmatureContainer.prototype.clear = function () {
        while (this.armatures.length) {
            var arm = this.armatures.pop();
            App.DisplayUtils.removeFromParent(arm);
            arm.destroy();
        }
        this.cacheBones = {};
        this.actions = {};
    };
    /**
     * 销毁
     */
    DragonBonesArmatureContainer.prototype.destroy = function () {
        this.clear();
        this.armatures = null;
        this.cacheBones = null;
        this.actions = null;
    };
    return DragonBonesArmatureContainer;
}(egret.DisplayObjectContainer));
//# sourceMappingURL=DragonBonesArmatureContainer.js.map