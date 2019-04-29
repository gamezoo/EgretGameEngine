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
 * Created by egret on 15-1-19.
 */
var BaseAIGameObject = /** @class */ (function (_super_1) {
    __extends(BaseAIGameObject, _super_1);
    function BaseAIGameObject($controller) {
        var _this = _super_1.call(this, $controller) || this;
        _this.move_time = 3000;
        _this.attack_time = 3000;
        _this.ai_attack_dis = [100, 0, 30, 30, 0, 0];
        return _this;
    }
    BaseAIGameObject.prototype.init = function () {
        _super_1.prototype.init.call(this);
        this.move_time = App.RandomUtils.limitInteger(2000, 5000);
        this.attack_time = App.RandomUtils.limitInteger(2000, 4000);
        this.ai_attack_dis = [100, 0, 30, 30, 0, 0];
        this.ai_currTime = 0;
        this.isAi = true;
    };
    BaseAIGameObject.prototype.destory = function () {
        _super_1.prototype.destory.call(this);
    };
    BaseAIGameObject.prototype.isCanAttack = function () {
        this.attackObj = this.gameController.getMyAttackObjects(this, this.ai_attack_dis)[0];
        return this.attackObj != null;
    };
    BaseAIGameObject.prototype.update = function (time) {
        _super_1.prototype.update.call(this, time);
        if (!this.isAi)
            return;
        if (this.isCommand)
            return;
        var func = "state_" + this.currAiState;
        if (this.currAiState) {
            this.ai_currTime += time;
            this[func](time);
        }
    };
    BaseAIGameObject.prototype.state_ai_none = function (time) {
    };
    BaseAIGameObject.prototype.state_ai_idle = function (time) {
        if (this.isCanAttack()) {
            if (this.ai_currTime >= this.attack_time) {
                this.gotoAttack();
            }
        }
        else {
            if (this.ai_currTime >= this.move_time) {
                this.aiMove();
            }
        }
    };
    BaseAIGameObject.prototype.state_ai_move = function (time) {
        if (this.isCanAttack()) {
            this.stopMove();
            this.gotoAttack();
        }
    };
    BaseAIGameObject.prototype.state_ai_attack = function (time) {
    };
    BaseAIGameObject.prototype.gotoIdle = function () {
        _super_1.prototype.gotoIdle.call(this);
        if (!this.isAi)
            return;
        this.gotoAiIdle();
    };
    BaseAIGameObject.prototype.gotoMove = function () {
        _super_1.prototype.gotoMove.call(this);
        if (!this.isAi)
            return;
        this.gotoAiMove();
    };
    BaseAIGameObject.prototype.gotoAttack = function () {
        _super_1.prototype.gotoAttack.call(this);
        if (!this.isAi)
            return;
        this.gotoAiAttack();
        if (this.attackObj) {
            this.scaleX = this.attackObj.x >= this.x ? 1 : -1;
        }
    };
    BaseAIGameObject.prototype.gotoHurt = function () {
        _super_1.prototype.gotoHurt.call(this);
        if (!this.isAi)
            return;
        this.stopAi();
    };
    BaseAIGameObject.prototype.gotoJump = function () {
        _super_1.prototype.gotoJump.call(this);
        if (!this.isAi)
            return;
        this.stopAi();
    };
    BaseAIGameObject.prototype.gotoLand = function () {
        _super_1.prototype.gotoLand.call(this);
        if (!this.isAi)
            return;
        this.stopAi();
    };
    BaseAIGameObject.prototype.leave = function () {
        _super_1.prototype.leave.call(this);
        if (!this.isAi)
            return;
        this.moveRandom();
    };
    BaseAIGameObject.prototype.stopMove = function () {
        _super_1.prototype.stopMove.call(this);
        this.ai_currTime = this.attack_time;
    };
    BaseAIGameObject.prototype.gotoAiIdle = function () {
        this.ai_currTime = 0;
        this.currAiState = BaseAIGameObject.STATE_AI_IDLE;
    };
    BaseAIGameObject.prototype.gotoAiMove = function () {
        this.ai_currTime = 0;
        this.currAiState = BaseAIGameObject.STATE_AI_MOVE;
    };
    BaseAIGameObject.prototype.gotoAiAttack = function () {
        this.ai_currTime = 0;
        this.currAiState = BaseAIGameObject.STATE_AI_ATTACK;
    };
    BaseAIGameObject.prototype.stopAi = function () {
        this.ai_currTime = 0;
        this.currAiState = BaseAIGameObject.STATE_AI_NONE;
    };
    BaseAIGameObject.prototype.aiMove = function () {
        if (Math.random() > 0.7) {
            this.moveRandom();
        }
        else {
            this.moveToTarget();
        }
    };
    BaseAIGameObject.prototype.moveToTarget = function () {
        var target = this.gameController.getMyNearAttackObjects(this);
        var gotoX;
        var gotoY;
        if (target.isMyFront(this)) {
            gotoX = target.x + this.scaleX * App.RandomUtils.limit(0, this.ai_attack_dis[0]);
        }
        else if (target.isMyBack(this)) {
            gotoX = target.x - this.scaleX * App.RandomUtils.limit(0, this.ai_attack_dis[1]);
        }
        if (target.isMyLeft(this)) {
            gotoY = target.y - this.scaleX * App.RandomUtils.limit(0, this.ai_attack_dis[2]);
        }
        else if (target.isMyRight(this)) {
            gotoY = target.y + this.scaleX * App.RandomUtils.limit(0, this.ai_attack_dis[3]);
        }
        this.walkTo(3, gotoX, gotoY);
    };
    BaseAIGameObject.prototype.moveRandom = function () {
        var gotoX = App.RandomUtils.limit(GameData.MIN_X, GameData.MAX_X);
        var gotoY = App.RandomUtils.limit(GameData.MIN_Y, GameData.MAX_Y);
        this.walkTo(3, gotoX, gotoY);
    };
    BaseAIGameObject.STATE_AI_NONE = "ai_none";
    BaseAIGameObject.STATE_AI_IDLE = "ai_idle";
    BaseAIGameObject.STATE_AI_MOVE = "ai_move";
    BaseAIGameObject.STATE_AI_ATTACK = "ai_attack";
    return BaseAIGameObject;
}(BaseMoveGameObject));
//# sourceMappingURL=BaseAIGameObject.js.map