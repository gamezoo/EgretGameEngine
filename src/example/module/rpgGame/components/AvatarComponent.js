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
var AvatarComponent = /** @class */ (function (_super_1) {
    __extends(AvatarComponent, _super_1);
    function AvatarComponent() {
        return _super_1.call(this) || this;
    }
    AvatarComponent.prototype.start = function () {
        _super_1.prototype.start.call(this);
        this.mc = ObjectPool.pop("RpgMovieClip");
        this.mc.setDefault("avatarDefault_png");
        this.mc.setComplateAction(this.complateAction, this);
        this.body = ObjectPool.pop("egret.DisplayObjectContainer");
        this.body.addChild(this.mc);
        this.entity.gameView.getGameObjcetLayer().addChild(this.body);
        this.startLoad();
    };
    AvatarComponent.prototype.stop = function () {
        _super_1.prototype.stop.call(this);
        this.mc.destroy();
        this.mc = null;
        App.DisplayUtils.removeFromParent(this.body);
        ObjectPool.push(this.body);
        this.body.removeChildren();
        this.body = null;
    };
    AvatarComponent.prototype.update = function (advancedTime) {
        _super_1.prototype.update.call(this, advancedTime);
        this.setPos();
        if (this.entity.action != this.mc.getCurrAction()
            || this.entity.dir != this.mc.getCurrDir()) {
            this.mc.gotoAction(this.entity.action, this.entity.dir);
        }
        this.mc.runAction(advancedTime);
    };
    AvatarComponent.prototype.complateAction = function () {
        if (this.mc.getCurrAction() == Action.Die) {
            this.entity.gameView.removeMonster(this.entity);
        }
        else {
            this.entity.action = Action.Stand;
            this.mc.gotoAction(this.entity.action, this.entity.dir);
        }
    };
    AvatarComponent.prototype.setPos = function () {
        if (this.body.x != this.entity.x) {
            this.body.x = this.entity.x;
        }
        if (this.body.y != this.entity.y) {
            this.body.y = this.entity.y;
        }
    };
    AvatarComponent.prototype.startLoad = function () {
        RpgGameRes.loadAvatar(this.entity.mcPath, this.entity.mcName, this.onLoadComplate, this);
    };
    AvatarComponent.prototype.onLoadComplate = function () {
        if (!this.isRuning) {
            return;
        }
        var avatarResName = this.entity.mcName;
        var data = RES.getRes("avatar_" + avatarResName + ".json");
        var texture = RES.getRes("avatar_" + avatarResName + ".png");
        var mcFactory = new egret.MovieClipDataFactory(data, texture);
        this.mc.setMcData(mcFactory.generateMovieClipData(avatarResName));
    };
    return AvatarComponent;
}(Component));
//# sourceMappingURL=AvatarComponent.js.map