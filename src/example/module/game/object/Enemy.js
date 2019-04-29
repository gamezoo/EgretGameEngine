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
 * Created by yangsong on 15-1-16.
 */
var Enemy = /** @class */ (function (_super_1) {
    __extends(Enemy, _super_1);
    function Enemy($controller) {
        var _this = _super_1.call(this, $controller) || this;
        _this.createArmature();
        return _this;
    }
    Enemy.prototype.createArmature = function () {
        this.armature.register(App.DragonBonesFactory.makeArmature("guaiwu001", "guaiwu001", 1.2), [
            BaseGameObject.ACTION_Idle,
            BaseGameObject.ACTION_Move,
            BaseGameObject.ACTION_Hart,
            BaseGameObject.ACTION_Fly,
            BaseGameObject.ACTION_Land,
            BaseGameObject.ACTION_jump,
            Enemy.ACTION_Attack
        ]);
        this.armature.addCompleteCallFunc(this.armaturePlayEnd, this);
        this.initFrameData("guaiwu001");
    };
    Enemy.prototype.init = function () {
        _super_1.prototype.init.call(this);
        this.gotoIdle();
    };
    /**
     * 死亡消失
     */
    Enemy.prototype.disappear = function () {
        _super_1.prototype.disappear.call(this);
        this.controller.applyFunc(GameConst.Remove_Enemy, this);
    };
    Enemy.prototype.armaturePlayEnd = function (e, animationName) {
        if (animationName == Enemy.ACTION_Attack) {
            this.gotoIdle();
        }
        else if (animationName == Enemy.ACTION_Hart) {
            this.gotoIdle();
        }
        else if (animationName == Enemy.ACTION_Fly) {
            this.armature.stop();
        }
        else if (animationName == Enemy.ACTION_Land) {
            this.armature.stop();
        }
    };
    Enemy.prototype.gotoAttack = function () {
        _super_1.prototype.gotoAttack.call(this);
        this.playAttackArmature();
    };
    Enemy.prototype.playAttackArmature = function () {
        this.armature.play(Enemy.ACTION_Attack, 1);
        App.SoundManager.playEffect("sound_enemyAttack");
    };
    Enemy.prototype.gotoLand = function () {
        _super_1.prototype.gotoLand.call(this);
        if (this.isDie)
            return;
        App.SoundManager.playEffect("sound_enenyLand");
        this.gameController.shock();
    };
    Enemy.prototype.fly = function (attackObj, speedZ, speedX) {
        _super_1.prototype.fly.call(this, attackObj, speedZ, speedX);
        App.SoundManager.playEffect("sound_beiji");
    };
    Enemy.prototype.hart = function (attackObj, speed, xMoveDis) {
        _super_1.prototype.hart.call(this, attackObj, speed, xMoveDis);
        App.SoundManager.playEffect("sound_beiji");
    };
    Enemy.prototype.hartFly = function (attackObj, speedZ, attract) {
        _super_1.prototype.hartFly.call(this, attackObj, speedZ, attract);
        App.SoundManager.playEffect("sound_beiji");
    };
    Enemy.ACTION_Attack = "gongji";
    Enemy.ACTION_Skill1 = "jineng";
    Enemy.ACTION_Skill2 = "jineng2";
    return Enemy;
}(BaseFrameGameObject));
//# sourceMappingURL=Enemy.js.map