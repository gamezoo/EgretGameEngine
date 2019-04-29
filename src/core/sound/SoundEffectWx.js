/**
 * Created by yangsong on 18-11-21.
 * 音效类(微信小游戏专用)
 */
var SoundEffectWx = /** @class */ (function () {
    /**
     * 构造函数
     */
    function SoundEffectWx() {
        this._wx = window["wx"];
        this._cache = {};
        App.TimerManager.doTimer(1 * 60 * 1000, 0, this.dealSoundTimer, this);
    }
    /**
     * 处理音乐文件的清理
     */
    SoundEffectWx.prototype.dealSoundTimer = function () {
        var currTime = egret.getTimer();
        var keys = Object.keys(this._cache);
        for (var i = 0, len = keys.length; i < len; i++) {
            var key = keys[i];
            if (!this.checkCanClear(key)) {
                continue;
            }
            var audio = this._cache[key];
            if (currTime - audio.useTime >= SoundManager.CLEAR_TIME) {
                // console.log(key + "已clear");
                audio.destroy();
                delete this._cache[key];
            }
        }
    };
    /**
     * 检测一个文件是否要清除
     * @param key
     * @returns {boolean}
     */
    SoundEffectWx.prototype.checkCanClear = function (key) {
        return true;
    };
    /**
     * 获取Sound
     * @param effectName
     * @returns {InnerAudioContext}
     */
    SoundEffectWx.prototype.getAudio = function (effectName) {
        var audio = this._cache[effectName];
        if (!audio) {
            audio = this._wx.createInnerAudioContext();
            audio.src = App.ResourceUtils.getFileRealPath(effectName);
            this._cache[effectName] = audio;
        }
        audio.useTime = egret.getTimer();
        return audio;
    };
    /**
     * 播放一个音效
     * @param effectName
     */
    SoundEffectWx.prototype.play = function (effectName, loops) {
        var audio = this.getAudio(effectName);
        audio.loop = loops == 0 ? true : false;
        audio.volume = this._volume;
        audio.startTime = 0;
        audio.play();
    };
    /**
     * 播放一个音效
     * @param effectName
     */
    SoundEffectWx.prototype.stop = function (effectName) {
        var audio = this._cache[effectName];
        if (audio) {
            audio.stop();
        }
    };
    /**
     * 设置音量
     * @param volume
     */
    SoundEffectWx.prototype.setVolume = function (volume) {
        this._volume = volume;
    };
    return SoundEffectWx;
}());
//# sourceMappingURL=SoundEffectWx.js.map