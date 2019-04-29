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
 * Created by yangsong on 2017/10/12.
 */
var MoveComponent = /** @class */ (function (_super_1) {
    __extends(MoveComponent, _super_1);
    function MoveComponent() {
        return _super_1.call(this) || this;
    }
    MoveComponent.prototype.start = function () {
        _super_1.prototype.start.call(this);
    };
    MoveComponent.prototype.stop = function () {
        _super_1.prototype.stop.call(this);
        this.endX = null;
        this.endY = null;
        this.radian = null;
        this.distance = null;
        this.node = null;
    };
    MoveComponent.prototype.update = function (advancedTime) {
        _super_1.prototype.update.call(this, advancedTime);
        if (this.entity.pathChange) {
            this.entity.pathChange = false;
            if (this.node) {
                this.entity.col = this.node.x;
                this.entity.row = this.node.y;
            }
            this.node = null;
        }
        if (!this.node) {
            if (!this.entity.path) {
                return;
            }
            if (!this.entity.path.length) {
                this.entity.path = null;
                return;
            }
            this.nextNode();
            if (this.node) {
                this.move(advancedTime);
            }
        }
        else {
            this.move(advancedTime);
        }
    };
    MoveComponent.prototype.move = function (advancedTime) {
        var useSpeed = this.entity.speed / (1000 / 60) * advancedTime;
        // if (this.distance > useSpeed) {
        //     var speedX: number = Math.cos(this.radian) * useSpeed;
        //     var speedY: number = Math.sin(this.radian) * useSpeed;
        //     this.entity.x += speedX;
        //     this.entity.y += speedY;
        //     this.distance -= useSpeed;
        // }
        // else {
        //     this.entity.x = this.endX;
        //     this.entity.y = this.endY;
        //     this.entity.col = this.node.x;
        //     this.entity.row = this.node.y;
        //     this.node = null;
        // }
        var speedX = Math.cos(this.radian) * useSpeed;
        var speedY = Math.sin(this.radian) * useSpeed;
        this.entity.x += speedX;
        this.entity.y += speedY;
        this.distance -= useSpeed;
        if (this.distance <= 0) {
            this.entity.col = this.node.x;
            this.entity.row = this.node.y;
            if (!this.entity.path || !this.entity.path.length) {
                this.entity.x = this.endX;
                this.entity.y = this.endY;
            }
            this.node = null;
        }
    };
    MoveComponent.prototype.nextNode = function () {
        this.node = this.entity.path.shift();
        var p = RpgGameUtils.convertCellToXY(this.node.x, this.node.y);
        this.endX = p.x;
        this.endY = p.y;
        this.radian = App.MathUtils.getRadian2(this.entity.x, this.entity.y, this.endX, this.endY);
        this.distance = App.MathUtils.getDistance(this.entity.x, this.entity.y, this.endX, this.endY);
        this.entity.dir = RpgGameUtils.computeGameObjDir(this.entity.col, this.entity.row, this.node.x, this.node.y);
    };
    return MoveComponent;
}(Component));
//# sourceMappingURL=MoveComponent.js.map