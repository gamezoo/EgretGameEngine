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
 * 音效类
 */
var SoundEffect = /** @class */ (function (_super_1) {
    __extends(SoundEffect, _super_1);
    /**
     * 构造函数
     */
    function SoundEffect() {
        var _this = _super_1.call(this) || this;
        _this._soundLoops = {};
        _this._soundChannels = {};
        return _this;
    }
    /**
     * 播放一个音效
     * @param effectName
     */
    SoundEffect.prototype.play = function (effectName, loops) {
        var sound = this.getSound(effectName);
        if (sound) {
            this.playSound(effectName, sound, loops);
        }
        else {
            this._soundLoops[effectName] = loops;
        }
    };
    /**
     * 播放
     * @param sound
     */
    SoundEffect.prototype.playSound = function (effectName, sound, loops) {
        var channel = sound.play(0, loops);
        channel.volume = this._volume;
        channel["name"] = effectName;
        channel.addEventListener(egret.Event.SOUND_COMPLETE, this.onPlayComplete, this);
        this._soundChannels[channel["name"]] = channel;
    };
    /**
     * 播放完成
     */
    SoundEffect.prototype.onPlayComplete = function (e) {
        var channel = e.currentTarget;
        this.destroyChannel(channel);
    };
    /**
     * 销毁channel
     */
    SoundEffect.prototype.destroyChannel = function (channel) {
        channel.stop();
        channel.removeEventListener(egret.Event.SOUND_COMPLETE, this.onPlayComplete, this);
        delete this._soundChannels[channel["name"]];
    };
    /**
     * 播放一个音效
     * @param effectName
     */
    SoundEffect.prototype.stop = function (effectName) {
        var channel = this._soundChannels[effectName];
        if (channel) {
            this.destroyChannel(channel);
        }
    };
    /**
     * 设置音量
     * @param volume
     */
    SoundEffect.prototype.setVolume = function (volume) {
        this._volume = volume;
    };
    /**
     * 资源加载完成后处理播放
     * @param key
     */
    SoundEffect.prototype.loadedPlay = function (key) {
        this.playSound(key, RES.getRes(key), this._soundLoops[key]);
        delete this._soundLoops[key];
    };
    return SoundEffect;
}(BaseSound));
//# sourceMappingURL=SoundEffect.js.map