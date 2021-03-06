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
var CameraComponent = /** @class */ (function (_super_1) {
    __extends(CameraComponent, _super_1);
    function CameraComponent() {
        return _super_1.call(this) || this;
    }
    CameraComponent.prototype.start = function () {
        _super_1.prototype.start.call(this);
        this.moveObjs = [];
        this.moveObjs.push(this.entity.gameView.getGameEffectLayer());
        this.moveObjs.push(this.entity.gameView.getGameObjcetLayer());
        this.moveObjs.push(this.entity.gameView.getBackground());
        this.background = this.entity.gameView.getBackground();
    };
    CameraComponent.prototype.stop = function () {
        _super_1.prototype.stop.call(this);
        this.moveObjs = null;
        this.background = null;
        this.playerX = null;
        this.playerY = null;
        this.playerCol = null;
        this.playerRow = null;
    };
    CameraComponent.prototype.update = function (advancedTime) {
        _super_1.prototype.update.call(this, advancedTime);
        if (this.playerPosChange()) {
            this.playerX = this.entity.x;
            this.playerY = this.entity.y;
            this.dealMoveObjs();
        }
        if (this.playerCellChange()) {
            this.playerCol = this.entity.col;
            this.playerRow = this.entity.row;
            this.dealBgCamera();
        }
    };
    CameraComponent.prototype.playerPosChange = function () {
        return this.playerX != this.entity.x || this.playerY != this.entity.y;
    };
    CameraComponent.prototype.playerCellChange = function () {
        return this.playerCol != this.entity.col || this.playerRow != this.entity.row;
    };
    CameraComponent.prototype.dealMoveObjs = function () {
        var left = Math.max(this.playerX - App.StageUtils.getWidth() * 0.5, 0);
        var top = Math.max(this.playerY - App.StageUtils.getHeight() * 0.5, 0);
        left = Math.min(this.background.mapWidth - App.StageUtils.getWidth(), left);
        top = Math.min(this.background.mapHeight - App.StageUtils.getHeight(), top);
        this.moveObjs.forEach(function (obj) {
            obj.x = -left;
            obj.y = -top;
        });
    };
    CameraComponent.prototype.dealBgCamera = function () {
        this.background.updateCameraPos(this.playerX, this.playerY);
    };
    return CameraComponent;
}(Component));
//# sourceMappingURL=CameraComponent.js.map