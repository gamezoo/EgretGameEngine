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
var AutoBattleComponent = /** @class */ (function (_super_1) {
    __extends(AutoBattleComponent, _super_1);
    function AutoBattleComponent() {
        return _super_1.call(this) || this;
    }
    AutoBattleComponent.prototype.start = function () {
        _super_1.prototype.start.call(this);
        this.dealInterval = 500;
    };
    AutoBattleComponent.prototype.stop = function () {
        _super_1.prototype.stop.call(this);
    };
    AutoBattleComponent.prototype.update = function (advancedTime) {
        _super_1.prototype.update.call(this, advancedTime);
        if (this.entity.action == Action.Stand) {
            if (!this.entity.battleObj) {
                this.searchBattleObj();
                this.moveToBattleObj();
            }
        }
    };
    AutoBattleComponent.prototype.searchBattleObj = function () {
        var list = this.entity.gameView.getMonsters();
        list.forEach(function (monster) {
            monster["dis"] = App.MathUtils.getDistance(monster.col, monster.row, this.entity.col, this.entity.row);
        }.bind(this));
        list.sort(function (a, b) {
            if (a["dis"] < b["dis"]) {
                return -1;
            }
            else {
                return 1;
            }
        });
        for (var i = 0; i < list.length; i++) {
            var obj = list[i];
            if (obj.propertyData.hp) {
                this.entity.battleObj = obj;
                break;
            }
        }
    };
    AutoBattleComponent.prototype.moveToBattleObj = function () {
        if (!this.entity.battleObj) {
            return;
        }
        var offsetFlagX = 0;
        if (this.entity.x > this.entity.battleObj.x) {
            offsetFlagX = 1;
        }
        else if (this.entity.x < this.entity.battleObj.x) {
            offsetFlagX = -1;
        }
        var offsetFlagY = 0;
        if (this.entity.y > this.entity.battleObj.y) {
            offsetFlagY = 1;
        }
        else if (this.entity.y < this.entity.battleObj.y) {
            offsetFlagY = -1;
        }
        var endX = this.entity.battleObj.x + offsetFlagX * RpgGameData.GameCellWidth;
        var endY = this.entity.battleObj.y + offsetFlagY * RpgGameData.GameCellHeight;
        var controlComponent = this.entity.getComponent(ComponentType.Control);
        controlComponent.moveTo(endX, endY);
    };
    return AutoBattleComponent;
}(Component));
//# sourceMappingURL=AutoBattleComponent.js.map