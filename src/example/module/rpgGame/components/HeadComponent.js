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
 * Created by yangsong on 2017/10/11.
 */
var HeadComponent = /** @class */ (function (_super_1) {
    __extends(HeadComponent, _super_1);
    function HeadComponent() {
        return _super_1.call(this) || this;
    }
    HeadComponent.prototype.start = function () {
        _super_1.prototype.start.call(this);
        var avatarComponent = this.entity.getComponent(ComponentType.Avatar);
        this.createNameTxt(avatarComponent.body);
        this.createTitleTxt(avatarComponent.body);
    };
    HeadComponent.prototype.createNameTxt = function (parent) {
        this.nameTxt = new egret.TextField();
        this.nameTxt.size = 18;
        this.nameTxt.textColor = 0xFFFFFF;
        this.nameTxt.width = 100;
        this.nameTxt.height = 20;
        this.nameTxt.textAlign = egret.HorizontalAlign.CENTER;
        this.nameTxt.strokeColor = 0x000000;
        this.nameTxt.stroke = 2;
        this.nameTxt.text = this.entity.propertyData.name;
        this.nameTxt.y = -160;
        App.AnchorUtils.setAnchorX(this.nameTxt, 0.5);
        parent.addChild(this.nameTxt);
    };
    HeadComponent.prototype.createTitleTxt = function (parent) {
        this.titleTxt = new egret.TextField();
        this.titleTxt.size = 18;
        this.titleTxt.textColor = 0x87CEEB;
        this.titleTxt.width = 100;
        this.titleTxt.height = 20;
        this.titleTxt.textAlign = egret.HorizontalAlign.CENTER;
        this.titleTxt.strokeColor = 0x000000;
        this.titleTxt.stroke = 2;
        this.titleTxt.text = this.entity.propertyData.title;
        this.titleTxt.y = -180;
        App.AnchorUtils.setAnchorX(this.titleTxt, 0.5);
        parent.addChild(this.titleTxt);
    };
    HeadComponent.prototype.stop = function () {
        _super_1.prototype.stop.call(this);
        App.DisplayUtils.removeFromParent(this.nameTxt);
        this.nameTxt = null;
        App.DisplayUtils.removeFromParent(this.titleTxt);
        this.titleTxt = null;
    };
    HeadComponent.prototype.update = function (advancedTime) {
        _super_1.prototype.update.call(this, advancedTime);
    };
    return HeadComponent;
}(Component));
//# sourceMappingURL=HeadComponent.js.map