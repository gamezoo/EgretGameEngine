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
var RpgBackground = /** @class */ (function (_super_1) {
    __extends(RpgBackground, _super_1);
    function RpgBackground() {
        return _super_1.call(this) || this;
    }
    RpgBackground.prototype.init = function (mapId) {
        this.mapId = mapId;
        var mapData = RES.getRes("map_" + mapId + "_data.json");
        this.mapWidth = mapData.width;
        this.mapHeight = mapData.height;
        this.miniBg = new egret.Bitmap();
        this.miniBg.texture = RES.getRes("map_" + mapId + "_mini.jpg");
        this.miniBg.width = this.mapWidth;
        this.miniBg.height = this.mapHeight;
        this.addChild(this.miniBg);
        this.tiles = new RpgTiles();
        this.tiles.init(mapId);
        this.addChild(this.tiles);
    };
    RpgBackground.prototype.updateCameraPos = function ($x, $y) {
        this.tiles.updateCameraPos($x, $y);
    };
    return RpgBackground;
}(egret.DisplayObjectContainer));
//# sourceMappingURL=RpgBackground.js.map