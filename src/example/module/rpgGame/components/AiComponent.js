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
var AiComponent = /** @class */ (function (_super_1) {
    __extends(AiComponent, _super_1);
    function AiComponent() {
        return _super_1.call(this) || this;
    }
    AiComponent.prototype.start = function () {
        _super_1.prototype.start.call(this);
        this.resetDealInterval();
    };
    AiComponent.prototype.stop = function () {
        _super_1.prototype.stop.call(this);
    };
    AiComponent.prototype.update = function (advancedTime) {
        _super_1.prototype.update.call(this, advancedTime);
        if (this.entity.battleObj) {
            return;
        }
        this.doMove();
        this.resetDealInterval();
    };
    AiComponent.prototype.resetDealInterval = function () {
        this.dealInterval = App.RandomUtils.limitInteger(5 * 1000, 50 * 1000);
    };
    AiComponent.prototype.doMove = function () {
        var currCol = this.entity.col;
        var currRow = this.entity.row;
        var gotoDir = App.RandomUtils.limitInteger(0, 7);
        var gotoDis = App.RandomUtils.limitInteger(3, 8);
        var dirCol = 0;
        var dirRow = 0;
        if (gotoDir == Dir.Top) {
            dirRow = -1;
        }
        else if (gotoDir == Dir.TopRight) {
            dirCol = 1;
            dirRow = -1;
        }
        else if (gotoDir == Dir.Right) {
            dirCol = 1;
        }
        else if (gotoDir == Dir.BottomRight) {
            dirCol = 1;
            dirRow = 1;
        }
        else if (gotoDir == Dir.Bottom) {
            dirRow = 1;
        }
        else if (gotoDir == Dir.BottomLeft) {
            dirCol = -1;
            dirRow = 1;
        }
        else if (gotoDir == Dir.Left) {
            dirCol = -1;
        }
        else if (gotoDir == Dir.TopLeft) {
            dirCol = -1;
            dirRow = -1;
        }
        var mapBlocks = this.entity.gameView.getBlocksData();
        var paths = [];
        for (var i = 1; i <= gotoDis; i++) {
            var tmpCol = currCol + dirCol * i;
            var tmpRow = currRow + dirRow * i;
            if (!mapBlocks[tmpRow]) {
                break;
            }
            if (!mapBlocks[tmpRow][tmpCol]) {
                break;
            }
            paths.push(new PathNode(tmpCol, tmpRow));
        }
        if (paths.length > 1) {
            this.entity.path = paths;
        }
        else {
            this.entity.path = null;
        }
    };
    return AiComponent;
}(Component));
//# sourceMappingURL=AiComponent.js.map