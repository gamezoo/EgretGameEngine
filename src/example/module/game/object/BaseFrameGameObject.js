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
 * Created by egret on 15-1-27.
 */
var BaseFrameGameObject = /** @class */ (function (_super_1) {
    __extends(BaseFrameGameObject, _super_1);
    function BaseFrameGameObject($controller) {
        return _super_1.call(this, $controller) || this;
    }
    BaseFrameGameObject.prototype.initFrameData = function ($dragonBonesDataName) {
        this.attackConfig = RES.getRes("attack_json")[$dragonBonesDataName];
        if (this.attackConfig) {
            this.armature.addFrameCallFunc(this.armatureEventHandle, this);
        }
    };
    BaseFrameGameObject.prototype.armatureEventHandle = function (e) {
        var frameLabel = e.eventObject.name;
        var actionStr = this.attackConfig[frameLabel].action || "";
        var actions = actionStr.split(",");
        for (var i = 0, len = actions.length; i < len; i++) {
            var arr = actions[i].split("_");
            var funcName = arr[0];
            arr[0] = frameLabel;
            this[funcName].apply(this, arr);
        }
    };
    BaseFrameGameObject.prototype.frameEnemyHart = function (frameLabel, speed, xMoveDis, shock) {
        if (shock === void 0) { shock = "0"; }
        var attDis = this.attackConfig[frameLabel].dis;
        var attackObjs = this.gameController.getMyAttackObjects(this, attDis);
        if (attackObjs.length && shock == "1") {
            this.frameShock();
        }
        for (var i = 0, len = attackObjs.length; i < len; i++) {
            attackObjs[i].hart(this, parseInt(speed), parseInt(xMoveDis));
        }
    };
    BaseFrameGameObject.prototype.frameEnemyFly = function (frameLabel, speedZ, speedX, shock) {
        if (shock === void 0) { shock = "0"; }
        var attDis = this.attackConfig[frameLabel].dis;
        var attackObjs = this.gameController.getMyAttackObjects(this, attDis);
        if (attackObjs.length && shock == "1") {
            this.frameShock();
        }
        for (var i = 0, len = attackObjs.length; i < len; i++) {
            attackObjs[i].fly(this, parseInt(speedZ), parseInt(speedX));
        }
    };
    BaseFrameGameObject.prototype.frameEnemyHartMoveToZ = function (frameLabel, speedZ, attract) {
        if (attract === void 0) { attract = "0"; }
        var attDis = this.attackConfig[frameLabel].dis;
        var attackObjs = this.gameController.getMyAttackObjects(this, attDis);
        for (var i = 0, len = attackObjs.length; i < len; i++) {
            attackObjs[i].hartFly(this, parseInt(speedZ), parseInt(attract) == 1);
        }
    };
    BaseFrameGameObject.prototype.frameThisMoveTo = function (frameLabel, speed, xMoveDis) {
        this.moveTo(parseInt(speed), this.x + (this.scaleX * parseInt(xMoveDis)), this.y);
    };
    BaseFrameGameObject.prototype.frameThisMoveToZ = function (frameLabel, $speedZ) {
        this.moveToZ(parseInt($speedZ));
    };
    BaseFrameGameObject.prototype.frameThisStandLand = function (frameLabel) {
        this.standLand();
    };
    BaseFrameGameObject.prototype.frameShock = function (frameLabel) {
        if (frameLabel === void 0) { frameLabel = null; }
        this.gameController.shock();
    };
    return BaseFrameGameObject;
}(BaseHitGameObject));
//# sourceMappingURL=BaseFrameGameObject.js.map