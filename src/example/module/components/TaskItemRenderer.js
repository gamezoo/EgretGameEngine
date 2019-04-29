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
 * 任务的渲染器
 */
var TaskItemRenderer = /** @class */ (function (_super_1) {
    __extends(TaskItemRenderer, _super_1);
    function TaskItemRenderer() {
        return _super_1.call(this) || this;
    }
    TaskItemRenderer.prototype.dataChanged = function () {
        _super_1.prototype.dataChanged.call(this);
        if (this.iconDisplay) {
            this.iconDisplay.source = this.data.icon;
        }
        if (this.goldDisplay) {
            this.goldDisplay.text = this.data.gold;
        }
        if (this.seedDisplay) {
            this.seedDisplay.text = this.data.seed;
        }
        if (this.progressDisplay) {
            this.progressDisplay.text = this.data.progress;
        }
        if (this.labelDisplay) {
            this.labelDisplay.text = this.data.label;
        }
    };
    TaskItemRenderer.prototype.partAdded = function (partName, instance) {
        _super_1.prototype.partAdded.call(this, partName, instance);
        if (!this.data)
            return;
        if (instance == this.iconDisplay) {
            this.iconDisplay.source = this.data.icon;
        }
        if (instance == this.goldDisplay) {
            this.goldDisplay.text = this.data.gold;
        }
        if (instance == this.seedDisplay) {
            this.seedDisplay.text = this.data.seed;
        }
        if (instance == this.progressDisplay) {
            this.progressDisplay.text = this.data.progress;
        }
        if (instance == this.labelDisplay) {
            this.labelDisplay.text = this.data.label;
        }
    };
    return TaskItemRenderer;
}(eui.ItemRenderer));
//# sourceMappingURL=TaskItemRenderer.js.map