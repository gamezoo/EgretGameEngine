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
 * Created by zmliu on 14-5-11.
 */
var starlingswf;
(function (starlingswf) {
    /**Sprite*/
    var SwfSprite = /** @class */ (function (_super_1) {
        __extends(SwfSprite, _super_1);
        function SwfSprite() {
            return _super_1 !== null && _super_1.apply(this, arguments) || this;
        }
        SwfSprite.prototype.getTextField = function (name) {
            return this.getChildByName(name);
        };
        SwfSprite.prototype.getMovie = function (name) {
            return this.getChildByName(name);
        };
        SwfSprite.prototype.getSprite = function (name) {
            return this.getChildByName(name);
        };
        SwfSprite.prototype.getImage = function (name) {
            return this.getChildByName(name);
        };
        return SwfSprite;
    }(egret.DisplayObjectContainer));
    starlingswf.SwfSprite = SwfSprite;
})(starlingswf || (starlingswf = {}));
//# sourceMappingURL=SwfSprite.js.map