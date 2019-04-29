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
var SortComponent = /** @class */ (function (_super_1) {
    __extends(SortComponent, _super_1);
    function SortComponent() {
        return _super_1.call(this) || this;
    }
    SortComponent.prototype.start = function () {
        _super_1.prototype.start.call(this);
        this.dealInterval = 500;
    };
    SortComponent.prototype.stop = function () {
        _super_1.prototype.stop.call(this);
    };
    SortComponent.prototype.update = function (advancedTime) {
        _super_1.prototype.update.call(this, advancedTime);
        this.sortGameObjs();
    };
    SortComponent.prototype.sortGameObjs = function () {
        this.entity.gameView.getGameObjcetLayer().$children.sort(this.sortF);
    };
    SortComponent.prototype.sortF = function (d1, d2) {
        if (d1.y > d2.y) {
            return 1;
        }
        else if (d1.y < d2.y) {
            return -1;
        }
        else {
            return 0;
        }
    };
    return SortComponent;
}(Component));
//# sourceMappingURL=SortComponent.js.map