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
var ControlComponent = /** @class */ (function (_super_1) {
    __extends(ControlComponent, _super_1);
    function ControlComponent() {
        return _super_1.call(this) || this;
    }
    ControlComponent.prototype.start = function () {
        _super_1.prototype.start.call(this);
        this.entity.gameView.touchEnabled = true;
        this.entity.gameView.addEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.astar = new SilzAstar(this.entity.gameView.getBlocksData());
    };
    ControlComponent.prototype.stop = function () {
        _super_1.prototype.stop.call(this);
        this.entity.gameView.touchEnabled = false;
        this.entity.gameView.removeEventListener(egret.TouchEvent.TOUCH_TAP, this.onClick, this);
        this.astar = null;
    };
    ControlComponent.prototype.update = function (advancedTime) {
        _super_1.prototype.update.call(this, advancedTime);
    };
    ControlComponent.prototype.onClick = function (evt) {
        var gotoX = evt.stageX + (-this.entity.gameView.getGameObjcetLayer().x);
        var gotoY = evt.stageY + (-this.entity.gameView.getGameObjcetLayer().y);
        this.moveTo(gotoX, gotoY);
        this.entity.battleObj = null;
    };
    ControlComponent.prototype.moveTo = function (gotoX, gotoY) {
        var currX = this.entity.x;
        var currY = this.entity.y;
        var path = this.astar.find(currX, currY, gotoX, gotoY);
        if (path && path.length > 1) {
            path.shift();
            this.entity.path = path;
        }
        else {
            this.entity.path = null;
        }
    };
    return ControlComponent;
}(Component));
//# sourceMappingURL=ControlComponent.js.map