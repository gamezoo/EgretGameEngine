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
 * Created by yangsong on 2017/10/11.
 */
var RpgTile = /** @class */ (function (_super_1) {
    __extends(RpgTile, _super_1);
    function RpgTile() {
        return _super_1.call(this) || this;
    }
    RpgTile.prototype.init = function (mapId, col, row) {
        this.col = col;
        this.row = row;
        this.x = this.col * RpgGameData.GameTileWidth;
        this.y = this.row * RpgGameData.GameTileHeight;
        var tileResName = row + "_" + col + ".jpg";
        var tileResPath = "resource/assets/rpgGame/map/" + mapId + "/" + tileResName;
        this.tileResKey = "map_" + mapId + "_" + tileResName;
        //异步加载
        App.ResourceUtils.createResource(this.tileResKey, "image", tileResPath);
        RES.getResAsync(this.tileResKey, function (img) {
            this.texture = img;
        }, this);
    };
    RpgTile.prototype.destory = function () {
        App.DisplayUtils.removeFromParent(this);
        RES.destroyRes(this.tileResKey);
        this.texture = null;
    };
    return RpgTile;
}(egret.Bitmap));
//# sourceMappingURL=RpgTile.js.map