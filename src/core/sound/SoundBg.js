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
 * 背景音乐类
 */
var SoundBg = /** @class */ (function (_super_1) {
    __extends(SoundBg, _super_1);
    /**
     * 构造函数
     */
    function SoundBg() {
        var _this = _super_1.call(this) || this;
        _this._currBg = "";
        return _this;
    }
    /**
     * 停止当前音乐
     */
    SoundBg.prototype.stop = function () {
        if (this._currSoundChannel) {
            this._currSoundChannel.stop();
        }
        this._currSoundChannel = null;
        this._currSound = null;
        this._currBg = "";
        this._pausePosition = null;
    };
    /**
     * 播放某个音乐
     * @param effectName
     */
    SoundBg.prototype.play = function (effectName) {
        if (this._currBg == effectName)
            return;
        this.stop();
        this._currBg = effectName;
        var sound = this.getSound(effectName);
        if (sound) {
            this.playSound(sound);
        }
    };
    /**
     * 暂停
     */
    SoundBg.prototype.pause = function () {
        if (!this._currSoundChannel) {
            return;
        }
        this._pausePosition = this._currSoundChannel.position;
        this._currSoundChannel.stop();
    };
    /**
     * 恢复
     */
    SoundBg.prototype.resume = function () {
        if (!this._currSoundChannel) {
            return;
        }
        if (!this._pausePosition) {
            return;
        }
        this._currSound.play(this._pausePosition);
        this._pausePosition = null;
    };
    /**
     * 播放
     * @param sound
     */
    SoundBg.prototype.playSound = function (sound) {
        this._currSound = sound;
        this._currSoundChannel = this._currSound.play();
        this._currSoundChannel.volume = this._volume;
    };
    /**
     * 设置音量
     * @param volume
     */
    SoundBg.prototype.setVolume = function (volume) {
        this._volume = volume;
        if (this._currSoundChannel) {
            this._currSoundChannel.volume = this._volume;
        }
    };
    /**
     * 资源加载完成后处理播放
     * @param key
     */
    SoundBg.prototype.loadedPlay = function (key) {
        if (this._currBg == key) {
            this.playSound(RES.getRes(key));
        }
    };
    /**
     * 检测一个文件是否要清除
     * @param key
     * @returns {boolean}
     */
    SoundBg.prototype.checkCanClear = function (key) {
        return this._currBg != key;
    };
    return SoundBg;
}(BaseSound));
//# sourceMappingURL=SoundBg.js.map