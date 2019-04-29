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
 * Created by egret on 15-1-7.
 */
var DailyView = /** @class */ (function (_super_1) {
    __extends(DailyView, _super_1);
    function DailyView(controller, parent) {
        var _this = _super_1.call(this, controller, parent) || this;
        _this.icon = "table_activity";
        return _this;
    }
    /**
     *对面板数据的初始化，用于子类继承
     *
     */
    DailyView.prototype.initData = function () {
        _super_1.prototype.initData.call(this);
        this.dataProvider.addItem({ icon: "icon_experience", gold: "+50", seed: "+200", label: "帮助好友5次", progress: "0/5" });
        this.dataProvider.addItem({ icon: "icon_fertilization", gold: "+120", seed: "+100", label: "帮助好友10次", progress: "0/10" });
        this.dataProvider.addItem({ icon: "icon_diamond", gold: "+520", seed: "+500", label: "帮助好友100次", progress: "0/100" });
        this.dataProvider.addItem({ icon: "icon_experience", gold: "+50", seed: "+200", label: "帮助好友5次", progress: "0/5" });
        this.dataProvider.addItem({ icon: "icon_fertilization", gold: "+120", seed: "+100", label: "帮助好友10次", progress: "0/10" });
        this.dataProvider.addItem({ icon: "icon_diamond", gold: "+520", seed: "+500", label: "帮助好友100次", progress: "0/100" });
        this.dataProvider.addItem({ icon: "icon_experience", gold: "+50", seed: "+200", label: "帮助好友5次", progress: "0/5" });
        this.dataProvider.addItem({ icon: "icon_fertilization", gold: "+120", seed: "+100", label: "帮助好友10次", progress: "0/10" });
        this.dataProvider.addItem({ icon: "icon_diamond", gold: "+520", seed: "+500", label: "帮助好友100次", progress: "0/100" });
        this.dataProvider.addItem({ icon: "icon_experience", gold: "+50", seed: "+200", label: "帮助好友5次", progress: "0/5" });
        this.dataProvider.addItem({ icon: "icon_fertilization", gold: "+120", seed: "+100", label: "帮助好友10次", progress: "0/10" });
        this.dataProvider.addItem({ icon: "icon_diamond", gold: "+520", seed: "+500", label: "帮助好友100次", progress: "0/100" });
        this.dataProvider.addItem({ icon: "icon_experience", gold: "+50", seed: "+200", label: "帮助好友5次", progress: "0/5" });
        this.dataProvider.addItem({ icon: "icon_fertilization", gold: "+120", seed: "+100", label: "帮助好友10次", progress: "0/10" });
        this.dataProvider.addItem({ icon: "icon_diamond", gold: "+520", seed: "+500", label: "帮助好友100次", progress: "0/100" });
    };
    return DailyView;
}(BaseTaskView));
//# sourceMappingURL=DailyView.js.map