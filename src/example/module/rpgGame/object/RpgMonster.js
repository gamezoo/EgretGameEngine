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
var RpgMonster = /** @class */ (function (_super_1) {
    __extends(RpgMonster, _super_1);
    function RpgMonster() {
        return _super_1.call(this) || this;
    }
    RpgMonster.prototype.init = function (data) {
        _super_1.prototype.init.call(this, data);
        this.addComponent(ComponentType.Aoi);
        this.addComponent(ComponentType.Ai);
        this.addComponent(ComponentType.Move);
    };
    RpgMonster.prototype.setInCamera = function (value) {
        _super_1.prototype.setInCamera.call(this, value);
        if (value) {
            this.addComponent(ComponentType.Avatar);
            this.addComponent(ComponentType.Battle);
        }
        else {
            this.removeComponent(ComponentType.Avatar);
            this.removeComponent(ComponentType.Battle);
        }
    };
    RpgMonster.prototype.destory = function () {
        _super_1.prototype.destory.call(this);
    };
    return RpgMonster;
}(RpgGameObject));
//# sourceMappingURL=RpgMonster.js.map