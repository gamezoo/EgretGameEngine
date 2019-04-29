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
 * Created by egret on 15-1-6.
 */
var HomeView = /** @class */ (function (_super_1) {
    __extends(HomeView, _super_1);
    function HomeView($controller, $parent) {
        var _this = _super_1.call(this, $controller, $parent) || this;
        _this.skinName = "resource/skins/GuiScreenSkin.exml";
        return _this;
    }
    /**
     *对面板进行显示初始化，用于子类继承
     *
     */
    HomeView.prototype.initUI = function () {
        _super_1.prototype.initUI.call(this);
        this.menu.addEventListener(egret.TouchEvent.TOUCH_TAP, this.menuClickHandler, this);
        this.menuBtn.addEventListener(egret.Event.CHANGE, this.menuBtnChangeHandler, this);
        this.friendBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.friendClickHandler, this);
        this.shopBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.shopClickHandler, this);
        this.warehouseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.warehouseClickHandler, this);
        this.factoryBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.factoryClickHandler, this);
        this.moreBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.moreClickHandler, this);
    };
    HomeView.prototype.playSound = function () {
        App.SoundManager.playEffect("sound_dianji");
    };
    HomeView.prototype.friendClickHandler = function (e) {
        this.playSound();
        App.ViewManager.open(ViewConst.Friend);
    };
    HomeView.prototype.shopClickHandler = function (e) {
        this.playSound();
        App.ViewManager.open(ViewConst.Shop);
    };
    HomeView.prototype.warehouseClickHandler = function (e) {
        this.playSound();
        App.ViewManager.open(ViewConst.Warehouse);
    };
    HomeView.prototype.factoryClickHandler = function (e) {
        this.playSound();
        App.ViewManager.open(ViewConst.Factory);
    };
    HomeView.prototype.moreClickHandler = function (e) {
        this.playSound();
    };
    HomeView.prototype.menuBtnChangeHandler = function (e) {
        this.playSound();
        if (this.menu) {
            this.menu.visible = this.menuBtn.selected;
        }
    };
    HomeView.prototype.menuClickHandler = function (e) {
        console.log(e.target);
        if (e.target == this.menu.taskBtn) {
            this.playSound();
            App.ViewManager.open(ViewConst.Task);
            this.menuBtn.selected = false;
            this.menu.visible = false;
        }
        else if (e.target == this.menu.dailyBtn) {
            this.playSound();
            App.ViewManager.open(ViewConst.Daily);
            this.menuBtn.selected = false;
            this.menu.visible = false;
        }
        else if (e.target == this.menu.mailBtn) {
            this.playSound();
            App.ViewManager.open(ViewConst.Mail);
            this.menuBtn.selected = false;
            this.menu.visible = false;
        }
    };
    return HomeView;
}(BaseEuiView));
//# sourceMappingURL=HomeView.js.map