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
var AvatarSkillComponent = /** @class */ (function (_super_1) {
    __extends(AvatarSkillComponent, _super_1);
    function AvatarSkillComponent() {
        return _super_1.call(this) || this;
    }
    AvatarSkillComponent.prototype.start = function () {
        _super_1.prototype.start.call(this);
        var avatarComponent = this.entity.getComponent(ComponentType.Avatar);
        this.mcParent = avatarComponent.body;
        this.mc = ObjectPool.pop("RpgMovieClip");
        this.mc.setComplateAction(this.complateAction, this);
        this.startLoad();
    };
    AvatarSkillComponent.prototype.stop = function () {
        _super_1.prototype.stop.call(this);
        this.mc.destroy();
        this.mc = null;
        this.mcParent = null;
    };
    AvatarSkillComponent.prototype.update = function (advancedTime) {
        _super_1.prototype.update.call(this, advancedTime);
        if (this.entity.action == Action.Attack && !this.mc.parent) {
            this.startMc();
        }
        else if (this.entity.action != Action.Attack && this.mc.parent) {
            this.stopMc();
        }
        if (this.mc.parent) {
            this.mc.runAction(advancedTime);
        }
    };
    AvatarSkillComponent.prototype.startMc = function () {
        this.mc.gotoAction(this.entity.action, this.entity.dir, true);
        if (this.entity.dir == Dir.Top
            || this.entity.dir == Dir.TopLeft
            || this.entity.dir == Dir.TopRight) {
            this.mcParent.addChildAt(this.mc, 0);
        }
        else {
            this.mcParent.addChild(this.mc);
        }
    };
    AvatarSkillComponent.prototype.stopMc = function () {
        App.DisplayUtils.removeFromParent(this.mc);
    };
    AvatarSkillComponent.prototype.complateAction = function () {
        this.stopMc();
    };
    AvatarSkillComponent.prototype.startLoad = function () {
        RpgGameRes.loadAvatar(this.entity.skillPath, this.entity.mcName + "_attack", this.onLoadComplate, this);
    };
    AvatarSkillComponent.prototype.onLoadComplate = function () {
        if (!this.isRuning) {
            return;
        }
        var avatarResName = this.entity.mcName + "_attack";
        var data = RES.getRes("avatar_" + avatarResName + ".json");
        var texture = RES.getRes("avatar_" + avatarResName + ".png");
        var mcFactory = new egret.MovieClipDataFactory(data, texture);
        this.mc.setMcData(mcFactory.generateMovieClipData(avatarResName));
    };
    return AvatarSkillComponent;
}(Component));
//# sourceMappingURL=AvatarSkillComponent.js.map