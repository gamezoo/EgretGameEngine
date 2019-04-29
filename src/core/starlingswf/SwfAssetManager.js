/**
 * Created by zmliu on 14-5-11.
 */
var starlingswf;
(function (starlingswf) {
    /**
     * swf资源管理器
     * */
    var SwfAssetManager = /** @class */ (function () {
        function SwfAssetManager() {
            this._sheets = {};
            this._textures = {};
        }
        SwfAssetManager.prototype.addSpriteSheet = function (name, spriteSheep) {
            this._sheets[name] = spriteSheep;
        };
        SwfAssetManager.prototype.addTexture = function (name, texture) {
            this._textures[name] = texture;
        };
        SwfAssetManager.prototype.createBitmap = function (name) {
            var texture = this.getTexture(name);
            if (texture == null)
                return null;
            var bitmap = new egret.Bitmap();
            bitmap.texture = texture;
            return bitmap;
        };
        SwfAssetManager.prototype.getTexture = function (name) {
            var texture;
            var sheet;
            var key;
            for (key in this._sheets) {
                sheet = this._sheets[key];
                texture = sheet.getTexture(name);
                if (texture != null)
                    break;
            }
            if (texture == null)
                texture = this._textures[name];
            return texture;
        };
        return SwfAssetManager;
    }());
    starlingswf.SwfAssetManager = SwfAssetManager;
})(starlingswf || (starlingswf = {}));
//# sourceMappingURL=SwfAssetManager.js.map