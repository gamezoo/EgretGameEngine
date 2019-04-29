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
var BattleComponent = /** @class */ (function (_super_1) {
    __extends(BattleComponent, _super_1);
    function BattleComponent() {
        return _super_1.call(this) || this;
    }
    BattleComponent.prototype.start = function () {
        _super_1.prototype.start.call(this);
        // this.dealInterval = 100;
    };
    BattleComponent.prototype.stop = function () {
        _super_1.prototype.stop.call(this);
        this.isAttacking = false;
        this.attackTime = null;
    };
    BattleComponent.prototype.update = function (advancedTime) {
        _super_1.prototype.update.call(this, advancedTime);
        if (!this.entity.battleObj) {
            return;
        }
        if (this.entity.action != Action.Stand) {
            return;
        }
        if (!this.isAttacking) {
            if (this.canAttack()) {
                this.startAttack();
            }
        }
        else {
            if (!this.canAttack()) {
                this.stopAttack();
            }
            else {
                this.continueAttack();
            }
        }
    };
    BattleComponent.prototype.canAttack = function () {
        var attackDis = this.entity.propertyData.attackDis;
        return Math.abs(this.entity.battleObj.col - this.entity.col) <= attackDis
            && Math.abs(this.entity.battleObj.row - this.entity.row) <= attackDis;
    };
    BattleComponent.prototype.stopAttack = function () {
        this.isAttacking = false;
        this.attackTime = null;
        this.entity.battleObj = null;
    };
    BattleComponent.prototype.startAttack = function () {
        this.isAttacking = true;
        this.attackTime = egret.getTimer();
        this.entity.dir = RpgGameUtils.computeGameObjDir(this.entity.x, this.entity.y, this.entity.battleObj.x, this.entity.battleObj.y);
        this.entity.action = Action.Attack;
        var defenceObj = this.entity.battleObj;
        if (!defenceObj.battleObj) {
            defenceObj.battleObj = this.entity;
            defenceObj.path = null;
        }
        egret.setTimeout(this.dealHarm, this, 500);
    };
    BattleComponent.prototype.dealHarm = function () {
        if (!this.entity) {
            return;
        }
        var defenceObj = this.entity.battleObj;
        if (!defenceObj) {
            return;
        }
        //计算伤害
        var harm = App.RandomUtils.limitInteger(200, 800);
        defenceObj.propertyData.hp = Math.max(0, defenceObj.propertyData.hp - harm);
        //掉血数字显示
        if (defenceObj instanceof RpgMonster) {
            this.entity.gameView.showHpChange(defenceObj, -harm);
        }
        else {
            this.entity.gameView.showHpChange(defenceObj, -harm, 0x00FF00);
        }
        //死亡处理
        if (defenceObj.propertyData.hp == 0) {
            if (defenceObj instanceof RpgMonster) {
                this.entity.battleObj = null;
                this.entity.gameView.removeMonster(defenceObj);
            }
        }
        else {
            if (defenceObj.action == Action.Stand) {
                defenceObj.action = Action.Attacked;
            }
        }
    };
    BattleComponent.prototype.continueAttack = function () {
        var attackInterval = this.entity.propertyData.attackInterval;
        var nowTime = egret.getTimer();
        if (nowTime - this.attackTime >= attackInterval) {
            this.startAttack();
        }
    };
    return BattleComponent;
}(Component));
//# sourceMappingURL=BattleComponent.js.map