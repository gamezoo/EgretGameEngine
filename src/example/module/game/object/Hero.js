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
 * Created by yangsong on 15-1-15.
 */
var Hero = /** @class */ (function (_super_1) {
    __extends(Hero, _super_1);
    function Hero($controller) {
        var _this = _super_1.call(this, $controller) || this;
        _this.attackMaxIndex = 0;
        _this.attackIndex = 0;
        _this.armature.register(App.DragonBonesFactory.makeArmature("zhujue1", "zhujue1", 1.4), [
            BaseGameObject.ACTION_Idle,
            BaseGameObject.ACTION_Move,
            BaseGameObject.ACTION_Hart,
            BaseGameObject.ACTION_Fly,
            BaseGameObject.ACTION_Land,
            BaseGameObject.ACTION_jump,
            Hero.ACTION_Attack0,
            Hero.ACTION_Attack1,
            Hero.ACTION_Attack2,
            Hero.ACTION_Attack3,
            Hero.ACTION_Skill1
        ]);
        _this.armature.register(App.DragonBonesFactory.makeArmature("zhujue2", "zhujue2", 1.4), [
            Hero.ACTION_Skill2,
            Hero.ACTION_Skill3,
            Hero.ACTION_Skill4
        ]);
        _this.armature.addCompleteCallFunc(_this.armaturePlayEnd, _this);
        _this.initFrameData("zhujue1");
        _this.effectArmature = new DragonBonesArmatureContainer();
        _this.effectArmature.register(App.DragonBonesFactory.makeArmature("jineng1", "jineng1", 1.4), [
            Hero.ACTION_Attack0,
            Hero.ACTION_Attack1,
            Hero.ACTION_Attack2,
            Hero.ACTION_Attack3,
            Hero.ACTION_Skill1
        ]);
        _this.effectArmature.register(App.DragonBonesFactory.makeArmature("jineng2", "jineng2", 1.4), [
            Hero.ACTION_Skill2,
            Hero.ACTION_Skill3,
            Hero.ACTION_Skill4
        ]);
        return _this;
    }
    Hero.prototype.init = function () {
        _super_1.prototype.init.call(this);
        this.isAi = false;
        this.gotoIdle();
    };
    Hero.prototype.destory = function () {
        _super_1.prototype.destory.call(this);
        this.removeEffect();
    };
    Hero.prototype.armaturePlayEnd = function (e, animationName) {
        if (animationName == Hero.ACTION_Attack0
            || animationName == Hero.ACTION_Attack1
            || animationName == Hero.ACTION_Attack2) {
            if (this.attackMaxIndex > this.attackIndex) {
                this.nextAttack();
            }
            else {
                this.overAttack();
            }
        }
        else if (animationName == Hero.ACTION_Attack3) {
            this.overAttack();
        }
        else if (animationName == Hero.ACTION_Skill1
            || animationName == Hero.ACTION_Skill2
            || animationName == Hero.ACTION_Skill3
            || animationName == Hero.ACTION_Skill4) {
            this.overSkill();
        }
        else if (animationName == Hero.ACTION_Hart) {
            this.gotoIdle();
        }
    };
    Hero.prototype.addMaxAttackIndex = function () {
        this.attackMaxIndex++;
        if (this.attackMaxIndex > 3) {
            this.attackMaxIndex = 3;
        }
    };
    Hero.prototype.attack = function () {
        if (this.isJump)
            return;
        if (this.isHurt)
            return;
        if (this.isLand)
            return;
        if (this.isMove) {
            this.stopMove();
        }
        this.gotoAttack();
        this.armature.play(Hero["ACTION_Attack" + this.attackIndex], 1);
        this.playEffect(Hero["ACTION_Attack" + this.attackIndex]);
        App.SoundManager.playEffect("sound_heroAttack");
    };
    Hero.prototype.nextAttack = function () {
        this.attackIndex++;
        this.attack();
    };
    Hero.prototype.overAttack = function () {
        this.attackMaxIndex = 0;
        this.attackIndex = 0;
        this.gotoIdle();
    };
    Hero.prototype.skill = function (id) {
        if (this.isAttack)
            return;
        if (this.isJump)
            return;
        if (this.isHurt)
            return;
        if (this.isLand)
            return;
        if (this.isMove) {
            this.stopMove();
        }
        this.gotoAttack();
        this.armature.play(Hero["ACTION_Skill" + id], 1);
        this.playEffect(Hero["ACTION_Skill" + id]);
        App.SoundManager.playEffect("sound_heroSkill");
    };
    Hero.prototype.overSkill = function () {
        this.gotoIdle();
    };
    Hero.prototype.gotoIdle = function () {
        _super_1.prototype.gotoIdle.call(this);
        this.removeEffect();
    };
    Hero.prototype.removeEffect = function () {
        this.effectArmature.stop();
        App.DisplayUtils.removeFromParent(this.effectArmature);
    };
    Hero.prototype.playEffect = function (actionName) {
        if (this.effectArmature.play(actionName, 1)) {
            this.addChild(this.effectArmature);
        }
        else {
            this.removeEffect();
        }
    };
    Hero.prototype.die = function () {
    };
    Hero.prototype.fly = function (attackObj, speedZ, speedX) {
        _super_1.prototype.fly.call(this, attackObj, speedZ, speedX);
        App.SoundManager.playEffect("sound_heroBeiji");
    };
    Hero.prototype.hart = function (attackObj, speed, xMoveDis) {
        _super_1.prototype.hart.call(this, attackObj, speed, xMoveDis);
        App.SoundManager.playEffect("sound_heroBeiji");
    };
    Hero.prototype.hartFly = function (attackObj, speedZ, attract) {
        _super_1.prototype.hartFly.call(this, attackObj, speedZ, attract);
        App.SoundManager.playEffect("sound_heroBeiji");
    };
    Hero.ACTION_Attack0 = "gongji1";
    Hero.ACTION_Attack1 = "gongji2";
    Hero.ACTION_Attack2 = "gongji3";
    Hero.ACTION_Attack3 = "gongji4";
    Hero.ACTION_Skill1 = "jineng1";
    Hero.ACTION_Skill2 = "jineng2";
    Hero.ACTION_Skill3 = "jineng3";
    Hero.ACTION_Skill4 = "jineng4";
    return Hero;
}(BaseFrameGameObject));
//# sourceMappingURL=Hero.js.map