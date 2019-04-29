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
var RpgPlayer = /** @class */ (function (_super_1) {
    __extends(RpgPlayer, _super_1);
    function RpgPlayer() {
        return _super_1.call(this) || this;
    }
    RpgPlayer.prototype.init = function (data) {
        _super_1.prototype.init.call(this, data);
        this.addComponent(ComponentType.Avatar);
        this.addComponent(ComponentType.AvatarSkill);
        this.addComponent(ComponentType.Head);
        this.addComponent(ComponentType.Move);
        this.addComponent(ComponentType.Camera);
        this.addComponent(ComponentType.Sort);
        this.addComponent(ComponentType.Control);
        this.addComponent(ComponentType.AutoBattle);
        this.addComponent(ComponentType.Battle);
    };
    RpgPlayer.prototype.destory = function () {
        _super_1.prototype.destory.call(this);
    };
    return RpgPlayer;
}(RpgGameObject));
//# sourceMappingURL=RpgPlayer.js.map