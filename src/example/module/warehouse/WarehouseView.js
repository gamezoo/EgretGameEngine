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
var WarehouseView = /** @class */ (function (_super_1) {
    __extends(WarehouseView, _super_1);
    function WarehouseView(controller, parent) {
        var _this = _super_1.call(this, controller, parent) || this;
        _this.icon = "table_warehouse";
        _this.btn = "icon_sale";
        return _this;
    }
    /**
     *对面板数据的初始化，用于子类继承
     *
     */
    WarehouseView.prototype.initData = function () {
        _super_1.prototype.initData.call(this);
        var dp1 = new eui.ArrayCollection();
        dp1.addItem({ title: "普通化肥", price: "3", time: "-5分钟", icon: "icon_fertilizer02" });
        dp1.addItem({ title: "高速化肥", price: "5", time: "-10分钟", icon: "icon_fertilizer03" });
        dp1.addItem({ title: "飞速化肥", price: "15", time: "-30分钟", icon: "icon_fertilizer04" });
        dp1.addItem({ title: "神速化肥", price: "25", time: "-60分钟", icon: "icon_fertilizer05" });
        dp1.addItem({ title: "普通化肥", price: "3", time: "-5分钟", icon: "icon_fertilizer02" });
        dp1.addItem({ title: "高速化肥", price: "5", time: "-10分钟", icon: "icon_fertilizer03" });
        dp1.addItem({ title: "飞速化肥", price: "15", time: "-30分钟", icon: "icon_fertilizer04" });
        dp1.addItem({ title: "神速化肥", price: "25", time: "-60分钟", icon: "icon_fertilizer05" });
        dp1.addItem({ title: "普通化肥", price: "3", time: "-5分钟", icon: "icon_fertilizer02" });
        dp1.addItem({ title: "高速化肥", price: "5", time: "-10分钟", icon: "icon_fertilizer03" });
        dp1.addItem({ title: "飞速化肥", price: "15", time: "-30分钟", icon: "icon_fertilizer04" });
        dp1.addItem({ title: "神速化肥", price: "25", time: "-60分钟", icon: "icon_fertilizer05" });
        var dp2 = new eui.ArrayCollection();
        dp2.addItem({ title: "神速化肥", price: "25", time: "-60分钟", icon: "icon_fertilizer05" });
        dp2.addItem({ title: "普通化肥", price: "3", time: "-5分钟", icon: "icon_fertilizer02" });
        dp2.addItem({ title: "高速化肥", price: "5", time: "-10分钟", icon: "icon_fertilizer03" });
        dp2.addItem({ title: "飞速化肥", price: "15", time: "-30分钟", icon: "icon_fertilizer04" });
        dp2.addItem({ title: "神速化肥", price: "25", time: "-60分钟", icon: "icon_fertilizer05" });
        dp2.addItem({ title: "普通化肥", price: "3", time: "-5分钟", icon: "icon_fertilizer02" });
        dp2.addItem({ title: "高速化肥", price: "5", time: "-10分钟", icon: "icon_fertilizer03" });
        dp2.addItem({ title: "飞速化肥", price: "15", time: "-30分钟", icon: "icon_fertilizer04" });
        dp2.addItem({ title: "神速化肥", price: "25", time: "-60分钟", icon: "icon_fertilizer05" });
        dp2.addItem({ title: "普通化肥", price: "3", time: "-5分钟", icon: "icon_fertilizer02" });
        dp2.addItem({ title: "高速化肥", price: "5", time: "-10分钟", icon: "icon_fertilizer03" });
        dp2.addItem({ title: "飞速化肥", price: "15", time: "-30分钟", icon: "icon_fertilizer04" });
        var tabbar = new TabBarContainer();
        tabbar.addViewStackElement("text_seed01", "text_seed02", this.createList(dp1));
        tabbar.addViewStackElement("text_fruit_01", "text_fruit_02", this.createList(dp2));
        tabbar.addViewStackElement("text_fruit_juice_01", "text_fruit_juice_02", this.createList(dp1));
        tabbar.horizontalCenter = 0;
        this.contentGroup.addChild(tabbar);
    };
    WarehouseView.prototype.createList = function (dp) {
        var layout = new eui.TileLayout();
        layout.requestedColumnCount = 2;
        var taskList = new eui.List();
        taskList.layout = layout;
        taskList.itemRenderer = SaleItemRenderer;
        taskList.itemRendererSkinName = "resource/skins/SaleItemSkin.exml";
        taskList.dataProvider = dp;
        var scroller = new eui.Scroller();
        scroller.percentWidth = scroller.percentHeight = 100;
        scroller.viewport = taskList;
        return scroller;
    };
    return WarehouseView;
}(BasePanelView));
//# sourceMappingURL=WarehouseView.js.map