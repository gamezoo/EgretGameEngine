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
var GameUIView = /** @class */ (function (_super_1) {
    __extends(GameUIView, _super_1);
    function GameUIView($controller, $parent) {
        return _super_1.call(this, $controller, $parent) || this;
    }
    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    GameUIView.prototype.initUI = function () {
        _super_1.prototype.initUI.call(this);
        //攻击图标
        this.addChild(this.createImageButton("ui_btnAttack_png", "ui_btnAttack1_png", App.StageUtils.getWidth() - 55, App.StageUtils.getHeight() - 53, this.heroAttack));
        //技能1图标
        this.addChild(this.createImageButton("ui_btnSkill1_png", "ui_btnSkill1_1_png", App.StageUtils.getWidth() - 120, App.StageUtils.getHeight() - 140, this.heroSkill1));
        //技能2图标
        this.addChild(this.createImageButton("ui_btnSkill2_png", "ui_btnSkill2_1_png", App.StageUtils.getWidth() - 40, App.StageUtils.getHeight() - 160, this.heroSkill2));
        //技能3图标
        this.addChild(this.createImageButton("ui_btnSkill3_png", "ui_btnSkill3_1_png", App.StageUtils.getWidth() - 180, App.StageUtils.getHeight() - 40, this.heroSkill3));
        //技能4图标
        this.addChild(this.createImageButton("ui_btnSkill4_png", "ui_btnSkill4_1_png", App.StageUtils.getWidth() - 200, App.StageUtils.getHeight() - 120, this.heroSkill4));
        //摇杆
        var moveFlagX = 120;
        var moveFlagY = App.StageUtils.getHeight() - 120;
        var moveBg = App.DisplayUtils.createBitmap("ui_moveBg_png");
        App.AnchorUtils.setAnchor(moveBg, 0.5);
        moveBg.x = moveFlagX;
        moveBg.y = moveFlagY;
        this.addChild(moveBg);
        var moveFlag = App.DisplayUtils.createBitmap("ui_move_png");
        App.AnchorUtils.setAnchor(moveFlag, 0.5);
        moveFlag.x = moveFlagX;
        moveFlag.y = moveFlagY;
        this.addChild(moveFlag);
        //摇杆控制
        App.RockerUtils.init(moveBg, moveFlag, this.dealKey, this);
        //键盘控制
        App.KeyboardUtils.addKeyUp(this.onKeyUp, this);
    };
    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    GameUIView.prototype.initData = function () {
        _super_1.prototype.initData.call(this);
        this.hero = this.applyFunc(GameConst.Get_Hero);
    };
    GameUIView.prototype.dealKey = function (xFlag, yFlag) {
        if (this.hero.isAttack) {
            return false;
        }
        if (this.hero.isJump) {
            return false;
        }
        if (this.hero.isHurt) {
            return false;
        }
        if (this.hero.isLand) {
            return false;
        }
        if (xFlag || yFlag) {
            this.hero.walk(xFlag, yFlag, 7);
            return true;
        }
        else {
            if (this.hero.isMove) {
                this.hero.stopMove();
            }
        }
        return false;
    };
    GameUIView.prototype.onKeyUp = function (keyCode) {
        switch (keyCode) {
            case Keyboard.J:
                this.heroAttack();
                break;
            case Keyboard.K:
                break;
            case Keyboard.U:
                this.heroSkill1();
                break;
            case Keyboard.I:
                this.heroSkill2();
                break;
            case Keyboard.O:
                this.heroSkill3();
                break;
            case Keyboard.P:
                this.heroSkill4();
                break;
            default:
                break;
        }
    };
    GameUIView.prototype.heroAttack = function () {
        if (this.hero.isAttack) {
            this.hero.addMaxAttackIndex();
            return;
        }
        this.hero.attack();
    };
    GameUIView.prototype.heroSkill1 = function () {
        this.hero.skill(1);
    };
    GameUIView.prototype.heroSkill2 = function () {
        this.hero.skill(2);
    };
    GameUIView.prototype.heroSkill3 = function () {
        this.hero.skill(3);
    };
    GameUIView.prototype.heroSkill4 = function () {
        this.hero.skill(4);
    };
    GameUIView.prototype.createImageButton = function (imgName1, imgName2, $x, $y, callBack) {
        var bitmap = App.DisplayUtils.createBitmap(imgName1);
        bitmap.touchEnabled = true;
        App.AnchorUtils.setAnchor(bitmap, 0.5);
        bitmap.addEventListener(egret.TouchEvent.TOUCH_BEGIN, function () {
            bitmap.texture = RES.getRes(imgName2);
        }, this);
        bitmap.addEventListener(egret.TouchEvent.TOUCH_END, function () {
            bitmap.texture = RES.getRes(imgName1);
        }, this);
        bitmap.addEventListener(egret.TouchEvent.TOUCH_TAP, function () {
            callBack.call(this);
        }, this);
        bitmap.x = $x;
        bitmap.y = $y;
        return bitmap;
    };
    return GameUIView;
}(BaseSpriteView));
//# sourceMappingURL=GameUIView.js.map