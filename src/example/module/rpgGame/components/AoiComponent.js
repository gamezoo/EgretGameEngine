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
 * Created by yangsong on 2017/10/13.
 */
var AoiComponent = /** @class */ (function (_super_1) {
    __extends(AoiComponent, _super_1);
    function AoiComponent() {
        return _super_1.call(this) || this;
    }
    AoiComponent.prototype.start = function () {
        _super_1.prototype.start.call(this);
        this.dealInterval = 1000;
        this.dealTime = this.dealInterval;
    };
    AoiComponent.prototype.stop = function () {
        _super_1.prototype.stop.call(this);
    };
    AoiComponent.prototype.update = function (advancedTime) {
        _super_1.prototype.update.call(this, advancedTime);
        this.setEntityAoi();
    };
    AoiComponent.prototype.setEntityAoi = function () {
        var gameObjectLayer = this.entity.gameView.getGameObjcetLayer();
        var minX = -gameObjectLayer.x;
        var minY = -gameObjectLayer.y;
        var maxX = minX + App.StageUtils.getWidth();
        var maxY = minY + App.StageUtils.getHeight();
        var minAoiPoint = RpgGameUtils.convertXYToAoi(minX, minY).clone();
        var maxAoiPoint = RpgGameUtils.convertXYToAoi(maxX, maxY).clone();
        var entityAoiPoint = RpgGameUtils.convertXYToAoi(this.entity.x, this.entity.y);
        var inCamera = (entityAoiPoint.x >= minAoiPoint.x && entityAoiPoint.x <= maxAoiPoint.x)
            && (entityAoiPoint.y >= minAoiPoint.y && entityAoiPoint.y <= maxAoiPoint.y);
        if (inCamera) {
            if (!this.entity.getInCamera()) {
                this.entity.setInCamera(true);
            }
        }
        else {
            if (this.entity.getInCamera()) {
                this.entity.setInCamera(false);
            }
        }
    };
    return AoiComponent;
}(Component));
//# sourceMappingURL=AoiComponent.js.map