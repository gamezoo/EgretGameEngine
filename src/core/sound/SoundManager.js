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
 * Created by yangsong on 15-1-14.
 * Sound管理类
 */
var SoundManager = /** @class */ (function (_super_1) {
    __extends(SoundManager, _super_1);
    /**
     * 构造函数
     */
    function SoundManager() {
        var _this = _super_1.call(this) || this;
        //LocalStorage使用的key值
        _this.LocalStorageKey_Bg = "bgMusicFlag";
        _this.LocalStorageKey_Effect = "effectMusicFlag";
        _this.bgVolume = 0.5;
        _this.effectVolume = 0.5;
        if (App.DeviceUtils.IsWxGame) {
            _this.bg = new SoundBgWx();
            _this.effect = new SoundEffectWx();
        }
        else {
            _this.bg = new SoundBg();
            _this.effect = new SoundEffect();
        }
        _this.bg.setVolume(_this.bgVolume);
        _this.effect.setVolume(_this.effectVolume);
        _this.setDefaultSwitchState();
        return _this;
    }
    /**
     * 设置背景音乐和音效的默认开关状态
     */
    SoundManager.prototype.setDefaultSwitchState = function () {
        var bgMusicFlag = egret.localStorage.getItem(this.LocalStorageKey_Bg);
        if (!bgMusicFlag) {
            this.bgOn = true;
        }
        else {
            this.bgOn = bgMusicFlag == "1";
        }
        var effectMusicFlag = egret.localStorage.getItem(this.LocalStorageKey_Effect);
        if (!effectMusicFlag) {
            this.effectOn = true;
        }
        else {
            this.effectOn = effectMusicFlag == "1";
        }
        Log.info("背景音乐：", this.bgOn);
        Log.info("音效：", this.effectOn);
    };
    /**
     * 播放音效
     * @param effectName
     */
    SoundManager.prototype.playEffect = function (effectName, loops) {
        if (loops === void 0) { loops = 1; }
        if (!this.effectOn)
            return;
        this.effect.play(effectName, loops);
    };
    /**
     * 停止音效播放
     * @param effectName
     */
    SoundManager.prototype.stopEffect = function (effectName) {
        this.effect.stop(effectName);
    };
    /**
     * 播放背景音乐
     * @param key
     */
    SoundManager.prototype.playBg = function (bgName) {
        this.currBg = bgName;
        if (!this.bgOn)
            return;
        this.bg.play(bgName);
    };
    /**
     * 停止背景音乐
     */
    SoundManager.prototype.stopBg = function () {
        this.bg.stop();
    };
    /**
     * 暂停背景音乐
     */
    SoundManager.prototype.pauseBg = function () {
        if (!this.bgOn)
            return;
        this.bg.pause();
    };
    /**
     * 恢复背景音乐
     */
    SoundManager.prototype.resumeBg = function () {
        if (!this.bgOn)
            return;
        this.bg.resume();
    };
    /**
     * 设置音效是否开启
     * @param $isOn
     */
    SoundManager.prototype.setEffectOn = function ($isOn) {
        this.effectOn = $isOn;
        egret.localStorage.setItem(this.LocalStorageKey_Effect, $isOn ? "1" : "0");
    };
    /**
     * 设置背景音乐是否开启
     * @param $isOn
     */
    SoundManager.prototype.setBgOn = function ($isOn) {
        this.bgOn = $isOn;
        egret.localStorage.setItem(this.LocalStorageKey_Bg, $isOn ? "1" : "0");
        if (!this.bgOn) {
            this.stopBg();
        }
        else {
            if (this.currBg) {
                this.playBg(this.currBg);
            }
        }
    };
    /**
     * 设置背景音乐音量
     * @param volume
     */
    SoundManager.prototype.setBgVolume = function (volume) {
        volume = Math.min(volume, 1);
        volume = Math.max(volume, 0);
        this.bgVolume = volume;
        this.bg.setVolume(this.bgVolume);
    };
    /**
     * 获取背景音乐音量
     * @returns {number}
     */
    SoundManager.prototype.getBgVolume = function () {
        return this.bgVolume;
    };
    /**
     * 设置音效音量
     * @param volume
     */
    SoundManager.prototype.setEffectVolume = function (volume) {
        volume = Math.min(volume, 1);
        volume = Math.max(volume, 0);
        this.effectVolume = volume;
        this.effect.setVolume(this.effectVolume);
    };
    /**
     * 获取音效音量
     * @returns {number}
     */
    SoundManager.prototype.getEffectVolume = function () {
        return this.effectVolume;
    };
    Object.defineProperty(SoundManager.prototype, "bgIsOn", {
        /**
         * 背景音乐是否已开启
         * @returns {boolean}
         */
        get: function () {
            return this.bgOn;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(SoundManager.prototype, "effectIsOn", {
        /**
         * 音效是否已开启
         * @returns {boolean}
         */
        get: function () {
            return this.effectOn;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * 音乐文件清理时间
     * @type {number}
     */
    SoundManager.CLEAR_TIME = 3 * 60 * 1000;
    return SoundManager;
}(SingtonClass));
//# sourceMappingURL=SoundManager.js.map