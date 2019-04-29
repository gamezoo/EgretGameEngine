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
 * tabbar附加一个容器
 */
var TabBarContainer = /** @class */ (function (_super_1) {
    __extends(TabBarContainer, _super_1);
    function TabBarContainer(skinName) {
        if (skinName === void 0) { skinName = null; }
        var _this = _super_1.call(this) || this;
        //默认皮肤
        if (!skinName) {
            skinName = "resource/skins/TabBarSkin.exml";
        }
        _this._tabBarItemRendererSkinName = "resource/skins/TabBarButtonSkin.exml";
        _this._tabBarItemRenderer = TabBarButton;
        _this._dp = new eui.ArrayCollection();
        _this._views = [];
        _this.skinName = skinName;
        return _this;
    }
    TabBarContainer.prototype.onTabBarIndexChanged = function (e) {
        this.viewStack.selectedIndex = this.tabBar.selectedIndex;
    };
    TabBarContainer.prototype.partAdded = function (partName, instance) {
        _super_1.prototype.partAdded.call(this, partName, instance);
        if (instance == this.tabBar) {
            this.tabBar.itemRendererSkinName = this._tabBarItemRendererSkinName;
            this.tabBar.itemRenderer = this._tabBarItemRenderer;
            this.tabBar.dataProvider = this._dp;
            this.tabBar.addEventListener(egret.Event.CHANGE, this.onTabBarIndexChanged, this);
        }
        else if (instance == this.viewStack) {
            for (var i = 0; i < this._views.length; i++) {
                this.viewStack.addChild(this._views[i]);
            }
            this._views.length = 0;
            this.tabBar.selectedIndex = 0;
            this.viewStack.selectedIndex = 0;
        }
    };
    Object.defineProperty(TabBarContainer.prototype, "tabBarItemRendererSkinName", {
        set: function (value) {
            this._tabBarItemRendererSkinName = value;
            if (this.tabBar) {
                this.tabBar.itemRendererSkinName = this._tabBarItemRendererSkinName;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabBarContainer.prototype, "tabBarItemRenderer", {
        set: function (value) {
            this._tabBarItemRenderer = value;
            if (this.tabBar) {
                this.tabBar.itemRenderer = this._tabBarItemRenderer;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     *  添加一项到ViewStack
     * @param title
     * @param titleSelected
     * @param content
     */
    TabBarContainer.prototype.addViewStackElement = function (title, titleSelected, content) {
        this._dp.addItem({ "title": title, "titleSelected": titleSelected });
        if (this.viewStack) {
            this.viewStack.addChild(content);
        }
        else {
            this._views.push(content);
        }
    };
    return TabBarContainer;
}(eui.Component));
//# sourceMappingURL=TabBarContainer.js.map