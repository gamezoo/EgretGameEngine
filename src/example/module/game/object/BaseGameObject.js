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
 * Created by egret on 15-1-16.
 */
var BaseGameObject = /** @class */ (function (_super_1) {
    __extends(BaseGameObject, _super_1);
    function BaseGameObject($controller) {
        var _this = _super_1.call(this) || this;
        _this.originX = 0;
        _this.originY = 0;
        _this.originZ = 0;
        _this.trueY = 0;
        _this.armature = new DragonBonesArmatureContainer();
        _this.addChild(_this.armature);
        _this.controller = $controller;
        return _this;
    }
    BaseGameObject.prototype.init = function () {
        this.hp = 300;
        this.isDie = false;
        App.TimerManager.doFrame(1, 0, this.onFrame, this);
    };
    BaseGameObject.prototype.destory = function () {
        this.armature.stop();
        App.TimerManager.remove(this.onFrame, this);
        App.DisplayUtils.removeFromParent(this);
        ObjectPool.push(this);
    };
    BaseGameObject.prototype.onFrame = function (time) {
        this.update(time);
        this.setPos();
    };
    BaseGameObject.prototype.setPos = function () {
        if (this.$getX() != this.originX) {
            this.$setX(this.originX);
        }
        if (this.$getY() != this.trueY) {
            this.$setY(this.trueY);
        }
    };
    BaseGameObject.prototype.update = function (time) {
    };
    BaseGameObject.prototype.registerArmature = function (actionName) {
    };
    Object.defineProperty(BaseGameObject.prototype, "x", {
        get: function () {
            return this.originX;
        },
        set: function (value) {
            this.originX = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseGameObject.prototype, "y", {
        get: function () {
            return this.originY;
        },
        set: function (value) {
            this.originY = value;
            this.trueY = this.originY + this.originZ;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseGameObject.prototype, "z", {
        get: function () {
            return this.originZ;
        },
        set: function (value) {
            this.originZ = value;
            this.trueY = this.originY + this.originZ;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseGameObject.prototype, "gameController", {
        get: function () {
            return this.controller;
        },
        enumerable: true,
        configurable: true
    });
    BaseGameObject.prototype.isMyFront = function (obj) {
        return this.scaleX == 1 ? this.x <= obj.x : this.x >= obj.x;
    };
    BaseGameObject.prototype.isMyBack = function (obj) {
        return this.scaleX == -1 ? this.x <= obj.x : this.x >= obj.x;
    };
    BaseGameObject.prototype.isMyLeft = function (obj) {
        return this.scaleX == -1 ? this.y <= obj.y : this.y >= obj.y;
    };
    BaseGameObject.prototype.isMyRight = function (obj) {
        return this.scaleX == 1 ? this.y <= obj.y : this.y >= obj.y;
    };
    BaseGameObject.prototype.isMyTop = function (obj) {
        return this.z >= obj.z;
    };
    BaseGameObject.prototype.isMyDown = function (obj) {
        return this.z <= obj.z;
    };
    BaseGameObject.ACTION_Idle = "daiji";
    BaseGameObject.ACTION_Move = "yidong";
    BaseGameObject.ACTION_Hart = "beiji";
    BaseGameObject.ACTION_Fly = "jifei";
    BaseGameObject.ACTION_Land = "daodi";
    BaseGameObject.ACTION_jump = "jump";
    return BaseGameObject;
}(egret.DisplayObjectContainer));
//# sourceMappingURL=BaseGameObject.js.map